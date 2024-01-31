import { product } from "@/utils/product";
import ProductDetails from "./ProductDetails";
import Container from "@/app/components/container"


interface IPrams {
    // optional
    productId?: string;
}
                 // Accept param props
const Product = ({params}: { params: IPrams }) => {

    return ( 
        <div className="p-8">
            <Container>
                <ProductDetails  product={product}/>
                <div>
                    
                </div>
            </Container>
        </div>
     );
}
 
export default Product;