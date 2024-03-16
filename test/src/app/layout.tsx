import { Metadata } from "next"
export const metadata:Metadata = {
  title: {
    default :"Default title",
    template:"%s |  Template title",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body>
        <h2>Header </h2>
         {children}
        <h2>Footer</h2>
      </body>
     
    </html>
  )
}
