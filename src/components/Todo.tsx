import React, {useState} from 'react';
import {IContact} from "../interfaces/ProductInterface";
import Contact from "./Contact";

const TodoContent = () => {

    const [contacts, setContacts] = useState<IContact[]>([])
    const [value, setValue] = useState('')
    const [fileUrl, setFileUrl] = useState<ArrayBuffer | any | string>('')
    const fileReader = new FileReader()

    fileReader.onloadend = () => {
        setFileUrl(fileReader.result)
    }
    const handleChangeUrl = (e: React.ChangeEvent<any>) => {
        fileReader.readAsDataURL(e.target.files[0])
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const addContacts = () => {
        const newContact: IContact = {
            id: contacts.length ? contacts[contacts.length -1].id + 1 : 1,
            name: value,
            image: fileUrl,
            isChanged: false
        }

        setContacts([...contacts, newContact])
    }
    const deleteContact = (idx: number) => {
        setContacts(contacts.filter(el => el.id !== idx))
    }
    const updateContact = (idx: number, contact: IContact) => {
        setContacts(contacts.map(el => el.id === idx ? {...el, ...contact} : el))
    }

    return (
        <div className='container'>
            <div className='mx-auto w-[30%] flex flex-col items-center my-10 px-4 py-6 bg-cyan-700 rounded'>
                <input onChange={handleChange} className='border w-full py-2 px-2 text-cyan-500' type="text"/>

                <input onChange={handleChangeUrl} className='border w-full py-2 px-2 text-cyan-500 my-4 bg-white' type="file"/>

                <button onClick={addContacts} className='border flex rounded bg-cyan-500 px-4 py-2'>Add</button>
            </div>

            {
                contacts.map(el => <Contact
                    el={el}
                    deleteContact={deleteContact}
                    key={el.id}
                    updateContact={updateContact}
                    />)
            }
        </div>
    );
};

export default TodoContent;