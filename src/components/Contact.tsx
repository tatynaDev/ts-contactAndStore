import React from 'react';
import {MdDeleteForever} from "react-icons/md";
import {IContact} from "../interfaces/ProductInterface";
import Modal from "./Modal";

interface IComponentProps {
    el: IContact
    deleteContact: (id: number) => void
    updateContact: (id : number, contact : IContact) => void
}
const Contact = ({el, deleteContact, updateContact} : IComponentProps) => {
    return (
        <div className='mx-auto w-[45%] px-4 py-4 bg-cyan-700 rounded'>
            <div className='flex items-center justify-between w-full px-4 py-3 rounded bg-cyan-600 my-1'>
                <img width={50} src={el.image} alt=""/>
                <h1>{el.name}</h1>
                <div className='flex items-center justify-center'>
                    <Modal el={el} key={el.id} updateContact={updateContact}/>
                    <button onClick={() => deleteContact(el.id)} className='rounded border text-xl text-cyan-50 mx-1'> <MdDeleteForever/> </button>
                </div>
            </div>
        </div>
    );
};

export default Contact;