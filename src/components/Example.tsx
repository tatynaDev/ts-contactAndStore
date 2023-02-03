import {IProduct} from "../interfaces/ProductInterface";

interface IExampleProps {
    product: IProduct
}
export function Example ({product} : IExampleProps) {
    return (
        <div>
        </div>
    )
}