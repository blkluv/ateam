import { User } from '@prisma/client';

import { Icons } from '@/components/icons';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type RadixIconProps = React.SVGProps<SVGSVGElement>;

export type NavItem = {
  id: string;
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavLink[];
    }
);

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export type DocsConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type MarketingConfig = {
  mainNav: MainNavItem[];
};

export type DashboardConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type SubscriptionPlan = {
  name: string;
  description: string;
  stripePriceId: string;
};

export type UserSubscriptionPlan = SubscriptionPlan &
  Pick<User, 'stripeCustomerId' | 'stripeSubscriptionId'> & {
    stripeCurrentPeriodEnd: number;
    isPro: boolean;
  };

export type MarketingBenefitsProps = {
  id: string;
  title: string;
  description: string;
  emoji: string;
};
