<template>
  <div class="fine">
    <h1>{{msg}}</h1>
    <!-- <ul id="app">
      <li v-for="(item,index) in items" :key=index>姓名：{{item.name}}</li>
      <li v-for="(item,index) in items" :key=index>年龄：{{item.age}}</li>
      <li v-for="(item,index) in items" :key=index>编号：{{index}}</li>
    </ul> -->
  </div>
</template>
<script>
  export default{
  name:"fine",
  data () {
  return {
    msg:"fine",
    test:111,
    message:"你好",
    items:[
      {
        name:"jack",
        age:22
      },
    ]
  }


} , 
    mounted() {
          let that=this;
    setTimeout(()=>{
      that.$router.push({path:'/'})
    },3000);
  },

}
</script>