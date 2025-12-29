import { ItemCounter } from "../shopping-cart/ItemCounter";

interface ItemsInCart {
    productName: string,
    quantity: number,
}

const itemsInCart: ItemsInCart[] = [
 {productName: 'Nintendo Switch 2', quantity:2 },
 {productName: 'Pokemon Espada', quantity:4 },
 {productName: 'Pokemon Hoja', quantity:10 },
 {productName: 'Super Smash', quantity:10 },
];

export function FirstStepsApp(){

    return (
    <>
    <h1>Carrito de compra</h1>
        {
            itemsInCart.map( (item) => (
                <ItemCounter 
                    name= {item.productName} 
                    quantity={item.quantity}
                    key = {item.productName} // Para que react identifique cada elemento
                    />
            ))
        }
      {/* <ItemCounter name="Nintendo Switch 2" quantity={2}/>
      <ItemCounter name="Pokemon Espada" quantity={3}/>
      <ItemCounter name="Pokemon Hoja" quantity={23}/> */}
    </>
    );
}

