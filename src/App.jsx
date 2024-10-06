import './App.css'
import NavBar from './assets/components/navbar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './assets/components/footer/footer'
import { ItemsProvider } from './assets/components/context/ItemsContext'
import ItemListContainer from './assets/components/item_list_container/ItemListContainer'
import ItemDetailsContainer from './assets/components/item_details_container/ItemDetailsContainer'



function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
  <ItemsProvider>
    <Routes >
    <Route exact path='/' element={<ItemListContainer greeting='¡Bienvenidos a Punto Pila Store!!!'>
      <img className='img' src="src\assets\img\web_SLIDE 3.jpg"  alt="Bienvenido"/></ItemListContainer>}/>
    <Route exact path='/category/:categoryId' element={<ItemListContainer greeting='¡Bienvenidos a Punto Pila Store!!!'></ItemListContainer>}/>
    <Route exact path='/item/:id' element={<ItemDetailsContainer/>}/>
    </Routes>
    <Footer/>
    </ItemsProvider>
    </BrowserRouter>
    </>
  )
}

export default App
