import axios from 'axios';
import React, {useState} from 'react';
import {IProduct} from "../interfaces/ProductInterface";
import Loader from "../Loader/loader";

interface IFormContentProps{
    addProduct: (product: IProduct) => void
}
const FormContent = ({addProduct}: IFormContentProps) => {
    const [value, setValue] = useState<string>('')
    const [loader, setLoader] = useState<boolean>(false)
    const newProduct: IProduct = {
        title: '',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
        rating: {
            rate: 15,
            count: 3,
        },
    }
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        if (value.trim().length !== 0){
            newProduct.title = value
            setValue('')
            setLoader(true)
            await axios.post<IProduct>('https://fakestoreapi.com/products', newProduct)
            addProduct(newProduct)
            setLoader(false)
        }
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
    return (
        <form onSubmit={handleSubmit}
              className='fixed left-10 top-10 border w-[25%] bg-amber-400 rounded py-6 px-4'>
            <input onChange={handleChange} value={value}
                   type="text" className='border px-4 py-2 w-full mb-2'/>
            <button className='border px-4 py-1 bg-white rounded hover:text-amber-400'>{
                loader ? <Loader/> : 'Add'
            }</button>
        </form>
    );
};

export default FormContent;