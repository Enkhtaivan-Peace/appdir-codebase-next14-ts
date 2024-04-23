import React from 'react'
import { useSwiper, useSwiperSlide } from 'swiper/react'

export function SlidePrevBtn() {
    const swiper = useSwiper()
    return <button onClick={() => swiper.slidePrev()}>prev</button>
}

export function SlideNextBtn() {
    const swiper = useSwiper()
    return <button onClick={() => swiper.slideNext()}>next</button>
}

export function SlideTitle() {
    const swiperSlide = useSwiperSlide()
    return <p>Current slide is {swiperSlide.isActive ? 'active' : 'not active'}</p>
}
