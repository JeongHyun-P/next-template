import { Metadata } from 'next';
import '@/lib/global';
import { UIProvider } from '@/components/providers/UIProvider';

export const metadata: Metadata = {
  title: 'Next App',
  description: ''
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <UIProvider>{children}</UIProvider>
      </body>
    </html>
  );
}
