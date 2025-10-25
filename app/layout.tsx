import '@/app/ui/global.css';
import { inter, raleway } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body  className={`${raleway.className}antialiased `}>{children}</body>
    </html>
  );
}
