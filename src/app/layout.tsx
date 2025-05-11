import { Metadata } from 'next';
import '@/lib/global';

export const metadata: Metadata = {
  title: 'Next App',
  description: ''
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
