<template>
    <div class="body">
      <div class="footer">
          <span class="title"><a href="">
                   <img src="../assets/103.png" width="310px">

         </a></span>

        <div class="userfooter">
          <!--    <span>2020年4月1日</span>-->
          <span class="current_time">{{currentTime}}</span>
          <span class="user_a">用户5988741</span>
        </div>

      </div>

      <div class="list">

        <div class="menu">
      <template style="" >
        <el-carousel :interval="4000" type="card" height="255px">
          <el-carousel-item  class="choiceItem" >
            <img src="../assets/模块分类一.png" @click="alt1" width="105%">
          </el-carousel-item>
          <el-carousel-item  class="choiceItem" >
            <img src="../assets/模块分类二.png" @click="al2"width="105%">
          </el-carousel-item>
          <el-carousel-item  class="choiceItem" >
            <img src="../assets/模块分类三.png" @click="al3"width="105%">
          </el-carousel-item>
          <el-carousel-item  class="choiceItem" >
            <img src="../assets/模块分类四.png" @click="al4"width="105%">
          </el-carousel-item>
        </el-carousel>
      </template>
        </div>
        <div style="color: white">
          {{back}}
        </div>
      </div>
    </div>
</template>

<script>
  import $ from 'jquery'

    export default {
        name: "Home",
      data(){
        return{
          back:'12223',
          timer: "",//定义一个定时器的变量
          currentTime: "----------------------", // 获取当前时间
        }
      },
      mounted() {
        this.axios.get('http://47.106.74.144/zombie_dig/get_area_analysis_nums').then((response)=>{
          this.back=response.data.data;
          // console.log(response);

        }).catch((response)=>{

        })
      },
      methods:{
          alt1:function () {
            // alert("进入企业信息模块");
            this.moveMenu();
            this.$router.push({path:'/companysearch'});

          },
        al2:function(){
          // alert("进入僵尸企业测评模块");
          this.moveMenu();
          this.$router.push({path:'/computed'});

        },
        al3:function(){

          this.moveMenu();
          this.$router.push({path:'/bigdata'});
        },
        al4:function(){
          this.moveMenu();
          this.$router.push({path:'/me'});
        },
          moveMenu:function () {
            $(".menu").animate({//功能按钮进入侧边导航栏
              // opacity:'0.5',
              // width:'20px',
              // height:'20px'
            },function () {
              console.log("111");

            })

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
    padding: 0;
    /*width: 100%;*/
    background-color: #000000;
    height: 740px;

    /*margin: 0px auto;*/
    /*background-image: url("../assets/粒子92.png");*/

    background-repeat:no-repeat;
    background-position:center top;
  }
  .footer{
    /*width: 900px;*/
    margin-left: 50px;
    /*float: right;*/
    position: fixed;
  }
  .menu{
width: 550px;
    padding: 0px 380px;
    padding-top: 260px;
  }
  .list{
    margin: 0px auto;
    width: 1300px;
    /*background-color: #8c939d;*/
  }
  .user{
    width: 60px;
    height: 200px;
    margin: 0 auto;
    /*background-color: #8c939d;*/
  }
  .userfooter{
    position: absolute;
    left: 1070px
     }
</style>
