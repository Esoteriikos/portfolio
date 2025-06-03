import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; 
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shubham Chaudhari | Portfolio',
  description: 'AI/ML Engineer Portfolio for Shubham Chaudhari.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-900 text-gray-100`}>
        <Navbar />
        {children}
        <footer className="bg-gray-950 text-center text-gray-400 py-10 border-t border-gray-700">
          <p>© {new Date().getFullYear()} Shubham Chaudhari. All rights reserved.</p>
          <p className="text-sm mt-1">
            Built with <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">Next.js</a> & <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">Tailwind CSS</a>.
          </p>
        </footer>
      </body>
    </html>
  );
}
