"use client"
import Link from "next/link";

let route = [
  { name: "Login", href: "/login" },
  { name: "Register", href: "/register" },
  { name: "Forget password", href: "/forget-password" },
];
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <>
        <h2>Header </h2>
        {route.map((item,i) => (
          <Link href={item.href} key={i}>
            {item.name}
          </Link>
        ))}
        {children}
        <h2>Footer</h2>
     </>
  );
}
