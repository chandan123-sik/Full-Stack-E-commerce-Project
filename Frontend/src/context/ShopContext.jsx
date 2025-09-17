   import { createContext,useState} from "react";
  //  import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useEffect } from "react";

   export const ShopContext = createContext();

   const ShopContextProvider = (props)=>{

     const currency = '$';
     const delivery_fee = 10;
     const backendURL = import.meta.env.VITE_BACKEND_URL;

     const [search,setSearch] = useState(''); // user ka search input
     const [showsearch, setShowsearch] = useState(false); // search bar show/hide karne ke liye
     const [cardItems,setCartItems] = useState({}); // cart me item or uski quantity store karne ke liye
     const [products,setProducts] = useState([]); // product list fetch karke store karta h
     const [token,setToken] = useState(''); // user token store karne ke liye
     const navigate = useNavigate(); //

     const addToCart = async (itemId, size) =>{

    if(!size){
      toast.error('select product size');
      return;
    }


      let cartData = structuredClone(cardItems);

      if(cartData[itemId]){
        if(cartData[itemId][size]){
              cartData[itemId][size] += 1;
        }else{
             cartData[itemId][size] = 1;
        }
      }

      else{
        cartData[itemId] = {};
        cartData[itemId][size] = 1;
      }
      setCartItems(cartData);

      if(token){
        try{

          await axios.post(backendURL + "/api/cart/add", {itemId,size},{headers:{token}});

        }catch(error){
          console.log(error);
          toast.error(error.message);
        }
      }
     }

     // Cart me total items ka count nikalta hai.
    const getCartCount = () =>{
      let totalCount = 0;
      for(const items in cardItems){  // iterate the items
        for(const item in cardItems[items]){ // iterate the product size
            try{
              if(cardItems[items][item] > 0){
                 totalCount += cardItems[items][item];
              }
            }catch(error){
                 
            }
        } 
      }
      return totalCount;
    }

    // Quantity update karta hai aur backend ko bhi sync karta hai.
   const updateQuantity = async(itemId,size,quantity)=>{
    let cartData = structuredClone(cardItems);

    cartData[itemId][size] = quantity;

    setCartItems(cartData);

    if(token){
      try{
        await axios.post(backendURL + "/api/cart/update",{itemId,size,quantity},{headers:{token}})
      }catch(error){
          console.log(error);
          toast.error(error.message);
      }
      
    }
   }
   // Cart ka total price calculate karta hai.
   const getCartAmount = ()=> {
        let totalAmount = 0;
        for(const items in cardItems){
          let itemInfo = products.find((product)=>product._id === items);
          for(const item in cardItems[items]){
            try{
              if(cardItems[items][item] > 0){
                totalAmount += itemInfo.price * cardItems[items][item];
              }
            }catch(error){

            }
          }
        }
        return totalAmount;
   }
    




    // useEffect(()=>{
    //   console.log(cardItems);
    // },[cardItems])

    // API call karke product list fetch karta hai.
    const getProductsData = async ()=>{
      try {
        const response = await axios.get(backendURL + "/api/product/list");
        // console.log(response.data);
        if(response.data.success){
          setProducts(response.data.products);
        }
        else{
          toast.error(response.data.message);
        }

      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }

    // Backend se user ka cart data fetch karta hai.
    const getUserCart = async (token)=>{
      try{
      const response = await axios.post(backendURL + "/api/cart/get",{},{headers:{token}});
      if(response.data.success){
           setCartItems(response.data.cartData);
      }
      }catch(error){
        console.log(error);
        toast.error(error.message);
      }
    }



   // Application start hone par products fetch karta hai.
    useEffect(()=>{
        getProductsData();
    },[])
    
     // Agar page reload hone par token localStorage me hai, to token set karta hai aur user ka cart fetch karta hai.
    useEffect(()=>{
      if(!token && localStorage.getItem('token')){
        setToken(localStorage.getItem('token'));
        getUserCart(localStorage.getItem('token'));
      }
    },[])



     // Sabhi states aur functions ko encapsulate karke context me provide karta hai.
     const value = {
       products, currency, delivery_fee,
       search,setSearch,showsearch, setShowsearch,
       cardItems, addToCart,setCartItems,
       getCartCount,updateQuantity,
       getCartAmount,navigate,
       backendURL,setToken,token
     }
     // App ke andar jahan jahan ShopContextProvider wrap hai, wahan ye values accessible hain.
      return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
     )

   }

export default ShopContextProvider