import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Task 3 | Data Fetching (SSR, SSG, ISR) & useEffect Difference",
  description:
    "Learning Next.js Data Fetching (SSR, SSG, ISR) & useEffect Difference",
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
