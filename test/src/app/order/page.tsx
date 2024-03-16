
"use client";
import { useRouter } from "next/navigation";

export default function Order (){
    const route = useRouter();
    
    const handleClick = ()=>{
        console.log("handleClick");
        route.push("/")
        
    }
    return <>
        <h1>Order</h1>
        <button onClick={handleClick}> Place order</button>
    </>
} 