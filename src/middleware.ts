import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["uz", "en", "ru"],
  defaultLocale: "uz",
});

export const config = {
  matcher: ["/", "/:path*/(en|uz|ru)"],
};
