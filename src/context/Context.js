import { createContext, useContext, useReducer } from "react"
import { faker } from '@faker-js/faker';
import { cartReducer, productReducer   } from "./Reducers";



const Cart = createContext()

faker.seed(99);

const Context = ({children}) => {
  const products =[...Array(20)].map (() => ({
        
   id:faker.string.uuid(),
   name: faker.commerce.productName(),
   price: faker.commerce.price(),
   image: faker.image.urlLoremFlickr({ category: 'abstract' }),
   inStock: faker.number.hex({ min: 0, max: 7 }),
   fastDelivery: faker.datatype.boolean(),
   ratings: faker.number.hex({ min: 1, max: 5 })

  }))


const [state,dispatch] =useReducer(cartReducer,{
  products: products,
  cart:[]
})


const [productState, productDispatch] = useReducer(productReducer, {
  byStock: false,
  byFastDelivery: false,
  byRating: 0,
  searchQuery: "",
});



  return (
   <Cart.Provider value={{state, dispatch, productState, productDispatch  }}>
     {children}
   </Cart.Provider>
  )
}

export default Context

export const CartState = () =>{
      return useContext(Cart)

}

