import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Juneteenth Celebration - Portal Writing Group',
  description: 'Join us for a special Juneteenth celebration with Portal Writing Group',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
