export default function Home ({params}:{
    params:{productsid: string}
}){
    return <>
        <h1>product1 - {params.productsid}</h1>
        <h1>product2</h1>
        <h1>product3</h1>
    </>
} 