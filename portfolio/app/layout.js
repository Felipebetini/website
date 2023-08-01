import './globals.css';
import { Sora } from 'next/font/google';
import Nav from './components/Navbar';
import { Suspense } from 'react';
import Footer from './components/Footer';
import 'animate.css';

export const metadata = {
  title: 'Felipe Betini Front-end Developer',
  description: 'Front-End Brilliance meets Cyber Security Prowess',
};

const sora = Sora({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={sora.className}
      style={{ scrollBehavior: 'smooth' }}
    >
      <body>
        <Suspense>
          <Nav />
        </Suspense>
        <div className='mx-auto w-full'>{children}</div>
        <Suspense>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
