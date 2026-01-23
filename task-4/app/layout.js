import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Task 4 | Forms, Server Actions & API Routes',
  description: 'Learning Next.js Forms, Server Actions & API Routes',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='bg-zinc-500 text-zinc-100'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
