import React, {useEffect, useState} from 'react';
import {IProduct} from "../interfaces/ProductInterface";
import axios from "axios";
import FormContent from "./FormContent";
import ProductCard from "./ProductCard";

const Shop = () => {

    const [products, setProducts] = useState<IProduct[]>([])
    const [loader, setLoader] = useState<boolean>(false)

    const fetchingProducts = async () => {
        try {
            setLoader(true)
            const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
            await setProducts(response.data)
            setLoader(false)
        } catch (e) {
            setLoader(false)
            console.log(e)
        }
    }

    useEffect(() => {
        fetchingProducts()
    }, [])

    const addProduct = (product: IProduct) => {
        setProducts(state => [...state, product])
    }
    console.log(products)

    return (
        <div className="App">
            <FormContent addProduct={addProduct}/>
            <div className="container py-10">
                {loader && <p className='text-center'>loading...</p>}
                {products.map(el => <ProductCard product={el}/>)}
            </div>
        </div>
    );
};

export default Shop;