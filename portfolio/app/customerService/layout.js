import { Sora } from 'next/font/google';

const sora = Sora({ subsets: ['latin'] });

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return <section className={sora.className}>{children}</section>;
}
