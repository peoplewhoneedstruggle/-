<template>
  <swiper :options="swiperOption" ref="mySwiper" >
    <!-- slides -->
    <swiper-slide v-for="(item,index) in items" :key=index @mouseenter.native="stopPlay" @mouseleave.native="rePlay">
      <div class="item " ><img :data-src="item.img" alt="icon" class="swiper-lazy">
      <div class="swiper-pagination"></div>
      <div class="swiper-lazy-preloader"></div>
      </div>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" @click="prevPic" slot="button-prev"></div>
    <div class="swiper-button-next" @click="nextPic" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
// require styles
export default{
  name:"test",
  components:{
    swiper,
    swiperSlide
  },
  data (){
    return {
items:[
{img:"http://pic.qiantucdn.com/images/banner/5b67174c260ff.jpg"},
{img:"http://pic.qiantucdn.com/images/banner/5b5ede8ded24c.png"},
{img:"http://pic.qiantucdn.com/images/banner/5b6718c2a49ab.jpg"},
{img:"http://pic.qiantucdn.com/images/banner/5b67cde699176.jpg"},
{img:"http://pic.qiantucdn.com/images/banner/5b68f89ea076a.jpg"},
{img:"http://pic.qiantucdn.com/images/banner/5b671863f1b05.jpg"}
],
swiperOption: {
          // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          autoplay: {
            delay: 3000,//3s
            stopOnLastSlide: false,
            disableOnInteraction: false, //无限轮播
          },
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            dynamicMainBullets: 2
  },
          grabCursor : true,
          autoHeight: true,
          loop:true,
          pagination : '.swiper-pagination',
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
          scrollbar:'.swiper-scrollbar',
          mousewheel: true,
          effect:'coverflow',
          slidesPerView: 2,
          centeredSlides: true,
          coverflowEffect: {
            rotate: 30,
            stretch: 10,
            depth: 60,
            modifier: 2,
            slideShadows : true
  },
          observeParents:true,
          lazy: {
    loadPrevNext: true,
  },
  }
  }      
},
computed:{
  swiper(){//获取swiper实例对象
    return this.$refs.mySwiper.swiper
  }
},
  methods:{	//这边就可以使用swiper这个对象去使用swiper官网中的那些方法
    prevPic (){
      this.swiper.slidePrev()
    },
    nextPic (){
      this.swiper.slideNext()
    },
    stopPlay (){//鼠标悬停停止轮播 可关闭
      this.swiper.autoplay.stop()
    },
    rePlay (){
      this.swiper.autoplay.start()
    }
  }

}
</script>
<style scoped>
.item{
  text-align: center;
  margin: 0 auto;
}
</style>
