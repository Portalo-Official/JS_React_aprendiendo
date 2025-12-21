import  { type CSSProperties } from 'react';

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
    
    console.log(props);
    
    return (
    <section style={estilo}>
        <span>{props.name}</span>
        <button>+1</button>
        <span>{props.quantity}</span>
        <button>-1</button>
    </section>
    )
}


