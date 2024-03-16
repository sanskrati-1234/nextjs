import { Metadata } from "next";

type Props =  { params:{productsid: string}};

export const generateMetadata = ({params}:Props):Metadata=>{
    return {

        title : `Product-${params.productsid}`
    }
}

export default function Home ({params}:Props){
    return <>
        <h1>product1 - {params.productsid}</h1>
        <h1>product2</h1>
        <h1>product3</h1>
    </>
} 