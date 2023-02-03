import React, {useState} from 'react';
import {IProduct} from "../interfaces/ProductInterface";
interface IProductCardProps {
    product: IProduct
}
const ProductCard = ({product} : IProductCardProps) => {
    const [showDetail, setShowDetail] = useState<boolean>(false)
    return (
                <div className="border-2 rounded flex flex-col items-center py-4 px-2 mx-auto w-[500px] mb-2 text-center">
                    <h3 className='font-bold text-xl'>{product.title}</h3>
                    <img src={product.image} width={100} alt=""/>
                    <button onClick={() => setShowDetail(!showDetail)}
                        className='border px-4 py-1 my-3  bg-amber-400'>View more</button>
                    {
                        // showDetail ? <p>{product.description}</p> : ''
                        showDetail && <p>{product.description}</p>
                    }
                </div>
    );
};

export default ProductCard;