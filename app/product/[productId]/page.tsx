interface IPrams {
    // optional
    productId?: string;
}
                 // Accept param props
const Product = ({params}: { params: IPrams }) => {
    console.log("params", params)
    return ( 
        <div>
            Product Page
        </div>
     );
}
 
export default Product;