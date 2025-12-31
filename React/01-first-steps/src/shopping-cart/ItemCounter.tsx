import  {  type CSSProperties } from 'react';
import  { useState } from 'react';

// import './itemCounter.css'
import style from'./itemCounter.module.css'




export interface ItemCounterProps {
    name: string,
    quantity?: number;
}

export const ItemCounter = (props: ItemCounterProps) => {
    
    const [count, setCount] = useState(props.quantity || 1);

    const textoRojo: CSSProperties = {
        color: count === 1 ? 'red': 'white',
   }

    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleSubstract = () => {
        if(count === 1) return;

        setCount(count -1);
    }
 

    return (
    <section 
     className= {style['item-row']}
    // style={estilo}
    >
        <span
        className={style['item-text']}
        style={textoRojo}
        >{props.name}</span>

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


