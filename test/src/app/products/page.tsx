import Link from "next/link"

export default function Home (){
    let productid=10;
    return <>
        <h1><Link href={`products/${productid}`}>Product 10</Link></h1>
        <h1><Link href="products/5" replace>Product 5</Link></h1>
        <h1><Link href="products/8">Product 8</Link></h1>
    </>
} 
