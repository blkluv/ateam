import { auth } from '@clerk/nextjs';

import { db } from './db';
import { isTeacher } from './teacher';

const DAY_IN_MS = 86_400_000;

export const checkSubscription = async (): Promise<boolean> => {
  const { userId } = auth();

  if (isTeacher(userId)) {
    return true;
  }

  if (!userId) {
    return false;
  }

  const userSubscription = await db.userSubscription.findUnique({
    where: {
      userId: userId,
    },
    select: {
      stripeSubscriptionId: true,
      stripeCurrentPeriodEnd: true,
      stripeCustomerId: true,
      stripePriceId: true,
    },
  });

  if (!userSubscription) {
    return false;
  }

  const isValid =
    userSubscription.stripePriceId &&
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS >
      Date.now();

  return !!isValid;
};
