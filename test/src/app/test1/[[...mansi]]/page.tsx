const Mansi = ({params}:{
    params:{mansi:string[]}
})=>{
    if(params.mansi?.length===2){
        return <>
            <h1>TEST- {params.mansi[0]} ----- Y - {params.mansi[1]}</h1>
        </>
    }else if (params.mansi?.length ===1){
        return <>
            <h1> TEST--- {params.mansi[0]}</h1>
        </>
    }else{
       return <>
            <h1>TEST --------</h1>
        </>
    }
}

export default Mansi;