import React from 'react'
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Product from './Product';

function AllProducts({products, addToCart}) {
  return (
    <>
    <section>
        <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold">Featured Products</h2>
    
        <div class="mt-4">
            <Swiper 
                loop={true}
                modules={[Pagination, Navigation]}
                navigation
                className="swiper"
                pagination={{ clickable: true }}
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <ul className="swiper-wrapper">
                {products.map((product) => (
                    <SwiperSlide className="swiper-slide">
                        <Product product={product} addToCart={addToCart} />
                    </SwiperSlide>
                ))}
                </ul>
    
            <div
                className="max-w-3xl mx-auto mt-8 swiper-pagination !bottom-0 !relative"
            ></div>
            </Swiper>
        </div>
        </div>
    </section>
    </>
  )
}

export default AllProducts