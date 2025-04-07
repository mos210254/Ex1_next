import "styles/tailwind.css"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "SupportNinja - Outsourcing Worth Talking About",
  description: "Quickly and seamlessly scale your team with agile, highly customizable outsourcing solutions that power your growth.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-ninja-beige">
        {children}
      </body>
    </html>
  )
}
