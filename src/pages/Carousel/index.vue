<template>
  <div class="swiper-container" id="mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for='(carousel,index) in bannerList' :key='carousel.id'>
              <img :src="carousel.imgUrl" />
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>

          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
</template>

<script>
import Swiper from 'swiper'
export default {
    name:'Carsousel',
    props:['list'],
}
</script>

<style>

</style>