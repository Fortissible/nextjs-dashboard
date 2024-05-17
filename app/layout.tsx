import '@/app/ui/global.css';
import { interLatin } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${interLatin.className} antialiased`}>{children}</body>
    </html>
  );
}
