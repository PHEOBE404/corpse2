<template>
    <div class="body">
      <div class="footer">
       <span class="title"><router-link to="/home">
          <img src="../assets/logo-teng-full.png" width="240px">
         </router-link></span>

        <div class="userfooter">
          <span class="current_time">{{currentTime}}</span>
          <span class="user_a">用户5988741</span>
        </div>
        <div class="rightmenu">
          <span><router-link to="/companysearch">企业信息查询</router-link></span>
          <span ><router-link to="/computed">僵尸企业测评</router-link></span>
          <span ><router-link  to="/bigdata">大数据分析</router-link ></span>
          <span class="active"><router-link to="/me">个人中心</router-link></span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Me",
      data(){
        return{
          timer: "",//定义一个定时器的变量
          currentTime: "----------------------", // 获取当前时间
        }
      },
      created(){
        var _this = this; //声明一个变量指向Vue实例this，保证作用域一致
        this.timer = setInterval(function() {
          _this.currentTime = //修改数据date
            new Date().getFullYear() +
            "年" +
            (new Date().getMonth() + 1) +
            "月" +
            new Date().getDate() +
            "日      " +
            new Date().getHours() +
            ":" +
            new Date().getMinutes()
        }, 1000);
      },
      beforeDestroy() {
        if (this.timer) {
          clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
        }
      },
    }
</script>

<style scoped>
  @import "../assets/basci.css";
  .body{
    /*background-image: url("../assets/粒子92.png");*/
    background-color: #19313D;
    background-repeat: no-repeat;
    background-position: center top;
    height: 740px;
  }
</style>
