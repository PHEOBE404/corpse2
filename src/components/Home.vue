<template>
    <div class="body">
<!--      <img src="../assets/粒子.jpg" width="1580px"style="float:left;position: fixed;">-->
      <div class="footer">
<!--        <img src="../assets/logo.png" width="20px" @click="toHome">  -->
        <span style="font-family: '微软雅黑';font-size: 20px;color: #fff">探·僵局查询系统</span>
        <span style="color:#186EC5 ;font-size: 14px;margin-left: 1020px"></span>
        <i class="el-icon-s-custom"></i>
        <span style="color: #fff;" >墨鱼</span>           <span style="color:#186EC5 ;font-size: 14px;margin-left: 10px"></span>

        <el-button type="text" icon="el-icon-message" size="medium" style="width: 20px"></el-button>
        <el-button type="text" icon="el-icon-switch-button" size="large"></el-button>
      </div>
      <div class="list">
<!--        <div class="user">-->
<!--&lt;!&ndash;          <h3>用户您好！</h3>&ndash;&gt;-->
<!--          <img src="../assets/user.png" width="60px">-->

<!--        </div>-->
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
            <img src="../assets/模块分类四.png" @click="al"width="105%">
          </el-carousel-item>
        </el-carousel>
      </template>
        </div>
      </div>
    </div>
</template>

<script>
  import $ from 'jquery'

    export default {
        name: "Home",
      methods:{
          alt1:function () {
            // alert("进入企业信息模块");
            this.moveMenu();
            this.$router.push({path:'/corpse/companysearch'});

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
        al:function(){

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
      }
    }
</script>

<style scoped>

  .body{
    padding: 0;
    /*width: 100%;*/
    /*background-color: #5daf34;*/
    /*height: 900px;*/
    /*margin: 0px auto;*/
    background-image: url("../assets/粒子92.png");

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
    padding: 260px 380px;
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
</style>
