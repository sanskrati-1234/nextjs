import { Metadata } from "next";
export const metadata: Metadata ={
    title:{
        absolute : "absolute title"
    }
}

export default function ProfileLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
         <h2>Profile layout start </h2>
           {children}
          <h2>Profile layout End</h2>
    
      </>
       
    )
  }
  