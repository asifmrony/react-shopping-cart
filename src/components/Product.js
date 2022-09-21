import React from 'react'


function Product({product}) {
  return (
    // <Swiper
    //   spaceBetween={50}
    //   slidesPerView={3}
    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}
    // >
    //   <SwiperSlide>Slide 1</SwiperSlide>
    //   <SwiperSlide>Slide 2</SwiperSlide>
    //   <SwiperSlide>Slide 3</SwiperSlide>
    //   <SwiperSlide>Slide 4</SwiperSlide>
    //   ...
    // </Swiper>
    
            
                <a
                    href="/product/build-your-own-drone"
                    class="relative block border border-gray-100"
                >
                    <button
                    type="button"
                    name="wishlist"
                    class="absolute p-2 text-white bg-black rounded-full right-4 top-4"
                    >
                    <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        ></path>
                    </svg>
                    </button>
    
                    <img
                    alt="Toy"
                    src={product.image}
                    class="object-contain w-full h-56 lg:h-72"
                    />
    
                    <div class="p-6">
                    <span
                        class="inline-block px-3 py-1 text-xs font-medium bg-yellow-400"
                    >
                        New
                    </span>
    
                    <h5 class="mt-4 text-lg font-bold">{product.name}</h5>
    
                    <p class="mt-2 text-sm font-medium text-gray-600">{product.price}</p>
    
                    <button
                        name="add"
                        type="button"
                        class="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
                    >
                        <span class="text-sm font-medium"> Add to Cart </span>
    
                        <svg
                        class="w-5 h-5 ml-1.5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                        </svg>
                    </button>
                    </div>
                </a>
    
                // {/* <SwiperSlide className="swiper-slide">
                // <a
                //     href="/product/build-your-own-drone"
                //     class="relative block border border-gray-100"
                // >
                //     <button
                //     type="button"
                //     name="wishlist"
                //     class="absolute p-2 text-white bg-black rounded-full right-4 top-4"
                //     >
                //     <svg
                //         class="w-4 h-4"
                //         fill="none"
                //         stroke="currentColor"
                //         viewBox="0 0 24 24"
                //         xmlns="http://www.w3.org/2000/svg"
                //     >
                //         <path
                //         stroke-linecap="round"
                //         stroke-linejoin="round"
                //         stroke-width="2"
                //         d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                //         ></path>
                //     </svg>
                //     </button>
    
                //     <img
                //     alt="Toy"
                //     src="https://images.unsplash.com/photo-1603356033288-acfcb54801e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                //     class="object-contain w-full h-56 lg:h-72"
                //     />
    
                //     <div class="p-6">
                //     <span
                //         class="inline-block px-3 py-1 text-xs font-medium bg-yellow-400"
                //     >
                //         New
                //     </span>
    
                //     <h5 class="mt-4 text-lg font-bold">Robot Toy</h5>
    
                //     <p class="mt-2 text-sm font-medium text-gray-600">$14.99</p>
    
                //     <button
                //         name="add"
                //         type="button"
                //         class="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
                //     >
                //         <span class="text-sm font-medium"> Add to Cart </span>
    
                //         <svg
                //         class="w-5 h-5 ml-1.5"
                //         xmlns="http://www.w3.org/2000/svg"
                //         fill="none"
                //         viewBox="0 0 24 24"
                //         stroke="currentColor"
                //         >
                //         <path
                //             stroke-linecap="round"
                //             stroke-linejoin="round"
                //             stroke-width="2"
                //             d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                //         />
                //         </svg>
                //     </button>
                //     </div>
                // </a>
                // </SwiperSlide>
    
                // <SwiperSlide className="swiper-slide">
                // <a
                //     href="/product/build-your-own-drone"
                //     class="relative block border border-gray-100"
                // >
                //     <button
                //     type="button"
                //     name="wishlist"
                //     class="absolute p-2 text-white bg-black rounded-full right-4 top-4"
                //     >
                //     <svg
                //         class="w-4 h-4"
                //         fill="none"
                //         stroke="currentColor"
                //         viewBox="0 0 24 24"
                //         xmlns="http://www.w3.org/2000/svg"
                //     >
                //         <path
                //         stroke-linecap="round"
                //         stroke-linejoin="round"
                //         stroke-width="2"
                //         d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                //         ></path>
                //     </svg>
                //     </button>
    
                //     <img
                //     alt="Toy"
                //     src="https://images.unsplash.com/photo-1603356033288-acfcb54801e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                //     class="object-contain w-full h-56 lg:h-72"
                //     />
    
                //     <div class="p-6">
                //     <span
                //         class="inline-block px-3 py-1 text-xs font-medium bg-yellow-400"
                //     >
                //         New
                //     </span>
    
                //     <h5 class="mt-4 text-lg font-bold">Robot Toy</h5>
    
                //     <p class="mt-2 text-sm font-medium text-gray-600">$14.99</p>
    
                //     <button
                //         name="add"
                //         type="button"
                //         class="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
                //     >
                //         <span class="text-sm font-medium"> Add to Cart </span>
    
                //         <svg
                //         class="w-5 h-5 ml-1.5"
                //         xmlns="http://www.w3.org/2000/svg"
                //         fill="none"
                //         viewBox="0 0 24 24"
                //         stroke="currentColor"
                //         >
                //         <path
                //             stroke-linecap="round"
                //             stroke-linejoin="round"
                //             stroke-width="2"
                //             d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                //         />
                //         </svg>
                //     </button>
                //     </div>
                // </a>
                // </SwiperSlide>
    
                // <SwiperSlide class="swiper-slide">
                // <a
                //     href="/product/build-your-own-drone"
                //     class="relative block border border-gray-100"
                // >
                //     <button
                //     type="button"
                //     name="wishlist"
                //     class="absolute p-2 text-white bg-black rounded-full right-4 top-4"
                //     >
                //     <svg
                //         class="w-4 h-4"
                //         fill="none"
                //         stroke="currentColor"
                //         viewBox="0 0 24 24"
                //         xmlns="http://www.w3.org/2000/svg"
                //     >
                //         <path
                //         stroke-linecap="round"
                //         stroke-linejoin="round"
                //         stroke-width="2"
                //         d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                //         ></path>
                //     </svg>
                //     </button>
    
                //     <img
                //     alt="Toy"
                //     src="https://images.unsplash.com/photo-1603356033288-acfcb54801e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                //     class="object-contain w-full h-56 lg:h-72"
                //     />
    
                //     <div class="p-6">
                //     <span
                //         class="inline-block px-3 py-1 text-xs font-medium bg-yellow-400"
                //     >
                //         New
                //     </span>
    
                //     <h5 class="mt-4 text-lg font-bold">Robot Toy</h5>
    
                //     <p class="mt-2 text-sm font-medium text-gray-600">$14.99</p>
    
                //     <button
                //         name="add"
                //         type="button"
                //         class="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
                //     >
                //         <span class="text-sm font-medium"> Add to Cart </span>
    
                //         <svg
                //         class="w-5 h-5 ml-1.5"
                //         xmlns="http://www.w3.org/2000/svg"
                //         fill="none"
                //         viewBox="0 0 24 24"
                //         stroke="currentColor"
                //         >
                //         <path
                //             stroke-linecap="round"
                //             stroke-linejoin="round"
                //             stroke-width="2"
                //             d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                //         />
                //         </svg>
                //     </button>
                //     </div>
                // </a>
                // </SwiperSlide>
    
                // <SwiperSlide class="swiper-slide">
                // <a
                //     href="/product/build-your-own-drone"
                //     class="relative block border border-gray-100"
                // >
                //     <button
                //     type="button"
                //     name="wishlist"
                //     class="absolute p-2 text-white bg-black rounded-full right-4 top-4"
                //     >
                //     <svg
                //         class="w-4 h-4"
                //         fill="none"
                //         stroke="currentColor"
                //         viewBox="0 0 24 24"
                //         xmlns="http://www.w3.org/2000/svg"
                //     >
                //         <path
                //         stroke-linecap="round"
                //         stroke-linejoin="round"
                //         stroke-width="2"
                //         d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                //         ></path>
                //     </svg>
                //     </button>
    
                //     <img
                //     alt="Toy"
                //     src="https://images.unsplash.com/photo-1603356033288-acfcb54801e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                //     class="object-contain w-full h-56 lg:h-72"
                //     />
    
                //     <div class="p-6">
                //     <span
                //         class="inline-block px-3 py-1 text-xs font-medium bg-yellow-400"
                //     >
                //         New
                //     </span>
    
                //     <h5 class="mt-4 text-lg font-bold">Robot Toy</h5>
    
                //     <p class="mt-2 text-sm font-medium text-gray-600">$14.99</p>
    
                //     <button
                //         name="add"
                //         type="button"
                //         class="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
                //     >
                //         <span class="text-sm font-medium"> Add to Cart </span>
    
                //         <svg
                //         class="w-5 h-5 ml-1.5"
                //         xmlns="http://www.w3.org/2000/svg"
                //         fill="none"
                //         viewBox="0 0 24 24"
                //         stroke="currentColor"
                //         >
                //         <path
                //             stroke-linecap="round"
                //             stroke-linejoin="round"
                //             stroke-width="2"
                //             d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                //         />
                //         </svg>
                //     </button>
                //     </div>
                // </a>
                // </SwiperSlide> */}
        
  )
}

export default Product