
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
  