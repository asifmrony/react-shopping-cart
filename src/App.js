import { useState } from "react";
import AllProducts from "./components/AllProducts";
import Cart from './components/Cart';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

function App() {
  const [productInCart, setproductInCart] = useState([]);
  const [cartShow, setcartShow] = useState(false);

  const addToCart = (pd) => {
    if(productInCart.some(product => product.id === pd.id)) return;
    setproductInCart([...productInCart, {...pd, quantity: 1}]);
  }

  console.log(productInCart);

  const handleQuantity = (item, increment) => {
    // console.log(item, increment);
    const ind = productInCart.indexOf(item);
    const arr = productInCart;
    arr[ind].quantity += increment;
    if(arr[ind].quantity === 0) arr[ind].quantity = 1;
    console.log(...arr);
    setproductInCart([...arr]);
    // arr[ind].price = priceCalc(arr[ind].quantity, );
  }

  const priceCalc = (quantity, price) => {
    const calculatedPrice = Number(price.substring(price.indexOf('$') + 1)) * quantity;
    return '$' + calculatedPrice.toString();
  }

  const deleteFromCart = (id) => {
    setproductInCart(productInCart.filter(product => product.id !== id));
  }

  const productData = [
    {
      id: 1,
      name: 'Robot Toy',
      image: 'https://images.unsplash.com/photo-1603356033288-acfcb54801e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      price: '$14.99'
    },
    {
      id: 2,
      name: 'Smart Watch',
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
      price: '$49.99'
    },
    {
      id: 3,
      name: 'Sneakers Shoe',
      image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      price: '$189.99'
    },
    {
      id: 4,
      name: 'Simple Watch',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80',
      price: '$189.99'
    },
    {
      id: 5,
      name: 'T-Shirt',
      image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      price: '$40.79'
    }
  ]

  return (
    <div className="App">
      <header className="py-2 bg-slate-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
          <h1 className='italic border border-green-700 p-1 cursor-pointer' onClick={() => setcartShow(false)}>Shopping Cart</h1>
          <div className="relative cursor-pointer" onClick={() => setcartShow(true)}>
            <ShoppingCartIcon className="h-8 w-8 text-blue-500" />
            <div className="absolute -top-1 -right-1 text-sm font-semibold bg-red-500 px-1 rounded-md">{productInCart.length}</div>
          </div>
        </div>
      </header>
      {cartShow ? <Cart cart={productInCart} deleteFromCart={deleteFromCart} handleQuantity={handleQuantity} /> : <AllProducts products={productData} addToCart={addToCart}/> }
    </div>
  );
}

export default App;
