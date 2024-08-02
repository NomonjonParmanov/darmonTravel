import { createSharedPathnamesNavigation } from "next-intl/navigation";

const locales = ["uz", "ru", "en"] as const;

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });
