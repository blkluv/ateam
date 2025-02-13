'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@ui/components/ui/button';
import axios from 'axios';
import toast from 'react-hot-toast';

import { useConfettiStore } from '@/hooks/use-confetti-store';
import { Icons } from '@/components/icons';

interface CourseProgressButtonProps {
  chapterId: string;
  courseId: string;
  isCompleted?: boolean;
  nextChapterId?: string;
}

export const CourseProgressButton = ({
  chapterId,
  courseId,
  isCompleted,
  nextChapterId,
}: CourseProgressButtonProps) => {
  const router = useRouter();
  const confetti = useConfettiStore();
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);

      await axios.put(
        `/api/courses/${courseId}/chapters/${chapterId}/progress`,
        {
          isCompleted: !isCompleted,
        },
      );

      if (!isCompleted && !nextChapterId) {
        confetti.onOpen();
      }

      if (!isCompleted && nextChapterId) {
        router.push(`/courses/${courseId}/chapters/${nextChapterId}`);
      }

      toast.success('Progress updated');
      router.refresh();
    } catch {
      toast.error('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  const Icon: React.ElementType = isCompleted
    ? Icons.crossCircled
    : Icons.circleChecked;

  return (
    <Button
      onClick={onClick}
      disabled={isLoading}
      type="button"
      variant={isCompleted ? 'outline' : 'custom'}
      className="w-full flex-shrink-0 md:w-auto"
    >
      {isCompleted ? 'Mark as incomplete' : 'Mark as complete'}
      <Icon className="ml-2 h-4 w-4" />
    </Button>
  );
};
