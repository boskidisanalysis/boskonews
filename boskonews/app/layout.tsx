import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import Providers from '@/components/Providers'


export const metadata: Metadata = {
  title: 'BoskoNews',
  description: 'News provided by Bosko',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className='bg-gray-100 dark:bg-zinc-900 transition-all duration-700'>
        <Providers>
          <Header /> 
          <div className='max-w-6xl mx-auto'>
            {children}
          </div>
         </Providers>
        </body>      
    </html>
  )
}
