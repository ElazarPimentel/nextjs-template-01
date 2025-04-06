import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./styles.scss";

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "NextJS Template",
  description: "NextJS Template",
  authors: [{ name: "Elazar.Pimentel@gmail.com" }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'var(--color-background-primary)' },
    { media: '(prefers-color-scheme: dark)', color: 'var(--color-background-primary)' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head />
      <body className={roboto.className} suppressHydrationWarning>
        {/* Theme script - minimal version that runs before React hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const getStoredTheme = () => localStorage.getItem('theme');
                  const getSystemTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  
                  const theme = getStoredTheme() || getSystemTheme();
                  
                  if (theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.removeAttribute('data-theme');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
