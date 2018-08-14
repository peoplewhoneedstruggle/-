<template>
  <div id="app">
    <!-- <p>{{msg}}</p> -->
    <swiper></swiper>
    <!-- <router-link to="/fine">fine</router-link> -->
    <router-view></router-view>
  </div>
</template>
<script>
import load from './components/Fine.vue'
import swiper from './components/Swiper.vue'
export default {
  name: 'App',
  data (){
    return {
      msg:"APP"
    }
  },
  components:{
    fine:load,
    swiper,
    }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
li,a {
  list-style: none;
  text-align: left;
  text-decoration:none;
  color:#333
}

</style>
