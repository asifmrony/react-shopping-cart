import AllProducts from "./components/AllProducts";
import Cart from './components/Cart';

function App() {
  const productData = [
    {
      name: 'Robot Toy',
      image: 'https://images.unsplash.com/photo-1603356033288-acfcb54801e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      price: '$14.99'
    },
    {
      name: 'Smart Watch',
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
      price: '$49.99'
    },
    {
      name: 'Sneakers Shoe',
      image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      price: '$189.99'
    },
    {
      name: 'Simple Watch',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80',
      price: '$189.99'
    },
    {
      name: 'T-Shirt',
      image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      price: '$40.79'
    }
  ]

  return (
    <div className="App">
      <header className="py-2 bg-slate-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
          <h1 className='italic border border-green-700 p-1'>Shopping Cart</h1>
          <h1 className='font-medium text-lg flex'>
            <span>Cart Items:</span>
            <span className="text-red-500 ml-2">5</span>
          </h1>
        </div>
      </header>
      <AllProducts products={productData} />
      <Cart products={productData} />
    </div>
  );
}

export default App;
