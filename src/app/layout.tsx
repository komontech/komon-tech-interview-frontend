import Header from "@/components/Header";
import "./globals.css";
import { ProfileContextProvider } from "@/context/profile.context";

export const metadata = {
  title: "Dashboard - social media connections",
  description: "Content creator's dashboard social media connections",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="m-3 p-5">
        <main className="flex flex-col items-center ">
          <ProfileContextProvider>
            <Header />
            {children}
          </ProfileContextProvider>
        </main>
      </body>
    </html>
  );
}
