import "./globals.css";
import Header from "@/components/main-header/Header";

export const metadata = {
  title: "Jovan's food",
  description: "Browse the delicious meals shared by our vibrant community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
