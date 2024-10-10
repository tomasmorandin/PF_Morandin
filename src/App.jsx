import './App.css'
import NavBar from './assets/components/navbar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './assets/components/footer/footer'
import ItemListContainer from './assets/components/item_list_container/ItemListContainer'
import ItemDetailsContainer from './assets/components/item_details_container/ItemDetailsContainer'
import Cart from './assets/components/cart/cart'

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>

    <Routes>
    <Route exact path='/cart' element={<Cart/>}/>
    <Route exact path='/' element={<ItemListContainer greeting='¡Bienvenidos a Punto Pila Store!!!'>
      <img className='img' src="src\assets\img\web_SLIDE 3.jpg"  alt="Bienvenido"/></ItemListContainer>}/>
    <Route exact path='/category/:categoryId' element={<ItemListContainer greeting='¡Bienvenidos a Punto Pila Store!!!'></ItemListContainer>}/>
    <Route exact path='/item/:id' element={<ItemDetailsContainer/>}/>
    </Routes>
    <Footer/>
    
    </BrowserRouter>
    </>
  )
}

export default App
