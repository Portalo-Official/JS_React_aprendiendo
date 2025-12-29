import  { useState, type CSSProperties } from 'react';

const estilo: CSSProperties = {
     display: 'flex',
     alignContent: 'center',
     gap: 10,
     marginTop: 10,
}

export interface ItemCounterProps {
    name: string,
    quantity?: number;
}

export const ItemCounter = (props: ItemCounterProps) => {
    
    const [count, setCount] = useState(props.quantity || 1);

    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleSubstract = () => {
        if(count === 1) return;

        setCount(count -1);
    }
 

    return (
    <section style={estilo}>
        <span>{props.name}</span>

        <button 
        onClick={handleAdd}
        >+1</button>
        <span>{count}</span>
        <button
        onClick={handleSubstract}
        >-1</button>
    </section>
    )
}


