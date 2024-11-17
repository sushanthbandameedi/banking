// app/(root)/layout.tsx
import React from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          <aside>SIDE BAR</aside>
          {children}
        </main>
      </body>
    </html>
  );
}
