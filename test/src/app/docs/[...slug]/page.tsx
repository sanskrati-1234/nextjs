export default function Review ({params}:{
    params:{slug: string[]}
}){
    if(params.slug.length===2){
        return <>
        <h1>Catch all {params.slug[0]} - second {params.slug[1]} </h1>
    </>
    }else if(params.slug.length ===1){
        return <>
            <div>Catch all {params.slug[0]}</div>
        </>
    }else{
        return <>
            <h1>catch all</h1>
        </>
    }
    
} 