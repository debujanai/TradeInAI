import './css/style.css'
import Header from '@/components/ui/header'
import Banner from '@/components/banner'

export const metadata = {
  title: 'TradeIn AI',
  description: 'Intelligent Crypto Trading Solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-space-grotesk antialiased bg-gray-900 text-gray-200 tracking-tight">
        <div className="flex flex-col min-h-screen overflow-hidden">
          
          {children}
          
        </div>
      </body>
    </html>
  )
}
