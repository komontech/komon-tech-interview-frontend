import "./globals.css";

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
        <div>Header</div>
        {children}
      </body>
    </html>
  );
}
