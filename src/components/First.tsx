import React, {FC, FunctionComponent, useState} from 'react';
interface IFirstProps {
    title: string
    num: number
}
const First: FC<IFirstProps>  = ({title, num}) => {

    const [value, setValue] = useState<string>('')

    return (
        <div>
            <h1>{title}</h1>
            <p>{value}</p>
            <button onClick={() => setValue('frontend developer')}
            >add</button>
            <h2>{num}</h2>
        </div>
    );
};

export default First;