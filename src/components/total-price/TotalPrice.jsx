const TotalPrice=({price})=>{
    return <h2>el iva de {price} = {price +(price*21/100) } </h2>
}
export default TotalPrice