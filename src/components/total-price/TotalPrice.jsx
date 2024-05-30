const TotalPrice=({precio})=>{
    return <h2>el iva de {precio} = {precio +(precio*21/100) } </h2>
}
export default TotalPrice