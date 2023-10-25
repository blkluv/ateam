import Image from 'next/image';
import { redirect } from 'next/navigation';
import { getChapter } from '@/actions/get-chapter';
import { auth } from '@clerk/nextjs';
import { Separator } from '@ui/components/ui/separator';
import { FileIcon } from '@ui/index';

import { Banner } from '@/components/banner';
import { Container } from '@/components/container';
import { Preview } from '@/components/preview';

import { CourseEnrollButton } from './_components/course-enroll-button';
import { CourseProgressButton } from './_components/course-progress-button';
import { VideoPlayer } from './_components/video-player';

const ChapterIdPage = async ({
  params,
}: {
  params: { courseId: string; chapterId: string };
}) => {
  const { userId } = auth();

  if (!userId) {
    return redirect('/');
  }

  const {
    chapter,
    course,
    muxData,
    attachments,
    nextChapter,
    userProgress,
    purchase,
  } = await getChapter({
    userId,
    chapterId: params.chapterId,
    courseId: params.courseId,
  });

  if (!chapter || !course) {
    return redirect('/');
  }

  const isLocked = !(course.price === 0) && !purchase;

  const completeOnEnd = !!purchase && !userProgress?.isCompleted;

  return (
    <div>
      <Container>
        <div className="mx-auto flex flex-col pb-20">
          {userProgress?.isCompleted && (
            <Banner
              variant="success"
              label="You already completed this chapter."
            />
          )}
          {isLocked && (
            <>
              <Banner
                variant="warning"
                label="You need to purchase this course to watch this chapter."
              />
              <Image
                className="w-full py-4 shadow-md"
                src={course.imageUrl}
                alt={`A featured image of an anthropomorphic cat representing ${course.title}`}
                width={630}
                height={1200}
                role="img"
                aria-label={`A featured image of an anthropomorphic cat representing ${course.title}`}
              />
              <div className="rounded-xl bg-white p-6 dark:bg-background lg:p-8">
                <div className="flex flex-col items-center justify-between p-4 md:flex-row">
                  <h2 className="mb-2 flex-grow font-display text-lg">
                    {chapter.title}
                  </h2>
                  <div className="flex flex-row gap-x-4 items-center">
                    <CourseEnrollButton
                      courseId={params.courseId}
                      price={course.price!}
                    />
                  </div>
                </div>
                <Separator />
                <div>
                  <Preview value={course.description!} />
                </div>
              </div>
            </>
          )}
          {!isLocked && (
            <>
              <div className="py-4">
                <VideoPlayer
                  chapterId={params.chapterId}
                  title={chapter.title}
                  courseId={params.courseId}
                  nextChapterId={nextChapter?.id}
                  // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                  playbackId={muxData?.playbackId!}
                  completeOnEnd={completeOnEnd}
                />
              </div>
              <div className="rounded-xl bg-white p-6 dark:bg-background lg:p-8">
                <div className="flex flex-col items-center justify-between p-4 md:flex-row">
                  <h2 className="mb-2 flex-grow font-display text-lg">
                    {chapter.title}
                  </h2>
                  <CourseProgressButton
                    chapterId={params.chapterId}
                    courseId={params.courseId}
                    nextChapterId={nextChapter?.id}
                    isCompleted={!!userProgress?.isCompleted}
                  />
                </div>
                <Separator />
                <div>
                  <Preview value={chapter.description!} />
                </div>
                {!!attachments.length && (
                  <>
                    <Separator />
                    <div className="p-4">
                      {attachments.length > 0 && (
                        <div className="mt-16 flex items-center gap-x-2">
                          <h2 className="font-display text-lg">
                            Resources & Attachments
                          </h2>
                        </div>
                      )}
                      {attachments.map((attachment) => (
                        <a
                          href={attachment.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          key={attachment.id}
                          className="mt-8 flex w-full items-center rounded-md border p-3 text-foreground hover:underline"
                        >
                          <FileIcon />
                          <p className="ml-2 line-clamp-1">{attachment.name}</p>
                        </a>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default ChapterIdPage;
