import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["uz", "eng", "ru"],
  defaultLocale: "uz",
});

export const config = {
  matcher: ["/", "/:path*/(eng|uz|ru)"],
};
