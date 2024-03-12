export default function Review ({params}:{
    params:{reviewid: string}
}){
    return <>
        <h1>Review1 - {params.reviewid}</h1>
        <h1>Review2</h1>
        <h1>Review3</h1>
    </>
} 