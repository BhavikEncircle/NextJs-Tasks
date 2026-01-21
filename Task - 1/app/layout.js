import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Task 1 | Next.Js Basics",
  description: "Learning Next.js App Router basics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-zinc-100">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
