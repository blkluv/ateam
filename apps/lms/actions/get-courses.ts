import { getProgress } from '@/actions/get-progress';
import { Category, Course } from '@prisma/client';

import { db } from '@/lib/db';
import { checkSubscription } from '@/lib/subscription';

type CourseWithProgressWithCategory = Course & {
  category: Category | null;
  chapters: { id: string }[];
  progress: number | null;
  price: number;
  isPaidMember: boolean;
  purchased: boolean;
};

type GetCourses = {
  userId: string;
  title?: string;
  categoryId?: string;
  isPaidMember: boolean;
};

export const getCourses = async ({
  userId,
  title,
  categoryId,
}: GetCourses): Promise<CourseWithProgressWithCategory[]> => {
  try {
    const courses = await db.course.findMany({
      where: {
        isPublished: true,
        title: {
          contains: title,
        },
        categoryId,
      },
      include: {
        category: true,
        chapters: {
          where: {
            isPublished: true,
          },
          select: {
            id: true,
          },
        },
        purchases: {
          where: {
            userId,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
      cacheStrategy: {
        ttl: 3,
        swr: 6,
      },
    });

    const isPaidMember = await checkSubscription();

    const coursesWithProgress: CourseWithProgressWithCategory[] =
      await Promise.all(
        courses.map(async (course) => {
          const purchased = course.purchases.length > 0;
          if (isPaidMember || course.price === 0 || purchased) {
            const progressPercentage = await getProgress(userId, course.id);

            return {
              ...course,
              progress: progressPercentage,
              isPaidMember,
              purchased,
            };
          }

          return {
            ...course,
            progress: null,
            isPaidMember,
            purchased,
          };
        }),
      );

    return coursesWithProgress;
  } catch (error) {
    return [];
  }
};
