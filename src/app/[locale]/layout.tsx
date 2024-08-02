import Navbar from "@/components/navbar/Navbar";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <ToastContainer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
