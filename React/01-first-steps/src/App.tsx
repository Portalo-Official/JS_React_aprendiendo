import './App.css'
// import { FirstStepsApp } from './components/FirstStepsApp'
import { ItemCounter } from './shopping-cart/ItemCounter'

function App() {
  

  return (
    <>
    <h1>Carrito de compra</h1>
      {/*<FirstStepsApp />*/}
      <ItemCounter name="Nintendo Switch 2" quantity={2}/>
      <ItemCounter name="Pokemon Espada" quantity={3}/>
      <ItemCounter name="Pokemon Hoja" quantity={23}/>
    </>
  )
}

export default App
