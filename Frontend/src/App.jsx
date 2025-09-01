import React from 'react'
import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Cart from "./pages/Cart"
import Collection from "./pages/Collection"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Order from "./pages/Order"
import PlaceOrder from "./pages/PlaceOrder"
import Product from "./pages/Product"
import Navbar from "./components/Navbar"
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { ToastContainer} from 'react-toastify';
import Check from "./pages/Check";
import ChatbotButton from "./components/Chatbot/ChatbotButton";
import ChatWindow from "./components/Chatbot/ChatWindow";
import { useState } from 'react';
const App = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      <Navbar/>
      <SearchBar></SearchBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/collection' element={<Collection></Collection>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/order' element={<Order></Order>}></Route>
        <Route path='/place-order' element={<PlaceOrder></PlaceOrder>}></Route>
        <Route path='/product/:productId' element={<Product></Product>}></Route>
        <Route path='/verify' element={<Check></Check>}></Route>
      </Routes>
      <Footer></Footer>

        <ChatbotButton toggleChat={toggleChat} />
      {isOpen && <ChatWindow toggleChat={toggleChat} />}
    </div>
  )
}

export default App;