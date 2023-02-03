import React, {useState} from 'react';
import {TfiPencilAlt} from "react-icons/tfi";
import {IContact} from "../interfaces/ProductInterface";
import {MdDoneOutline} from 'react-icons/md'

interface IModalProps {
    el: IContact
    updateContact: (id: number, contact: IContact) => void
}
const Modal = ({el, updateContact}: IModalProps) => {

    const [newFileUrl, setNewFileUrl] = useState<any>(el.image)

    const [updatedContact, setUpdatedContact] = useState({
        ...el,
        name: el.name,
        image: newFileUrl,
    })

    const fileReader = new FileReader()
    fileReader.onloadend = () => {
        setNewFileUrl(fileReader.result)
    }

    const handleChange = (e: React.ChangeEvent<any>) => {
        setUpdatedContact({...updatedContact,
            [e.target.name]: e.target.name !== "image" ? e.target.value : fileReader.readAsDataURL(e.target.files[0])
        })
    }

    // const handleChangeUrl = (e: React.ChangeEvent<any>) => {
    //     fileReader.readAsDataURL(e.target.files[0])
    // }
    const [modal, setModal] = useState(false)

    return (
        <>
            <button
                onClick={() => setModal(true)}
                className='rounded border text-xl text-cyan-50 mx-1'><TfiPencilAlt/></button>


            <div hidden={!modal}
                 onClick={() => setModal(false)}
                 className='fixed top-0 left-0 right-0 bottom-0 bg-black/50'/>

            <div hidden={!modal}
                 className="rounded fixed left-[27%] top-[30%] p-6 bg-white">

                <div className='flex items-center justify-around'>
                    <img width={80} src={newFileUrl} alt=""/>

                    <input onChange={handleChange}
                           name="image"
                           type="file"
                           className='border w-[50%] py-2 px-2 text-cyan-500 my-4 bg-white'/>
                </div>

                <input onChange={handleChange}
                       defaultValue={el.name}
                       type="text"
                       name="name"
                       className='border my-2 w-full py-2 px-2 text-cyan-500'/>

                <button type='button'
                    onClick={() => {
                    updateContact(el.id , {...updatedContact, image: newFileUrl})
                    setModal(false)
                }}
                        className='border flex rounded bg-cyan-500 px-4 py-2'><MdDoneOutline/></button>
            </div>
        </>
    );
};

export default Modal;