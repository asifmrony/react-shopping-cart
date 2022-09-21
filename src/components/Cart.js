import React from 'react'

function Cart({ products }) {
    return (
        <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8 mt-6">
            <h2 class="text-2xl font-bold border-b-2 w-12 mb-4 italic">Cart</h2>
            {products.map((product) => (
                <div className="cart-product flex justify-between items-center py-3 border-b border-slate-200">
                    <div className="flex space-y-2 flex-col">
                        <img src={product.image} alt="" className='h-24 w-full object-contain' />
                        <h2>{product.name}</h2>
                    </div>
                    <div className="flex space-x-2">
                        <button className='p-2 rounded-md text-blue-500 font-medium shadow-md focus:ring-2 focus:ring-inset focus:outline-none'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                            </svg>
                        </button>
                        <div className='py-1 px-4 flex items-center border-2 border-blue-500 rounded-md text-blue-500 font-medium'>3</div>
                        <button className='p-2 rounded-md text-blue-500 font-medium shadow-md focus:ring-2 focus:ring-inset focus:outline-none'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </button>
                    </div>
                    <div>
                        <button className='p-2 rounded-md text-red-500 font-medium shadow-md focus:ring-2 focus:ring-inset focus:outline-none'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cart