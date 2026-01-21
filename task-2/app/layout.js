import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Task 2 | Routing, Dynamic Routing & Navigation",
  description: "Learning Next.js dynamic routing & navigation",
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
