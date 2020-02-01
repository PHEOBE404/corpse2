<template>
    <div class="body">
      <div class="list">
        <div class="user">
<!--          <h3>用户您好！</h3>-->
          <img src="../assets/user.png" width="60px">

        </div>
        <div class="menu">
      <template style="float: left;" >
        <el-carousel :interval="4000" type="card" height="400px">
          <el-carousel-item  class="choiceItem" >
            <h3>企业信息 </h3>
            <img src="../assets/logo.png" @click="alt1">
          </el-carousel-item>
          <el-carousel-item  class="choiceItem" >
            <h3>僵尸测评 </h3>
            <img src="../assets/logo.png" @click="al">
          </el-carousel-item>
          <el-carousel-item  class="choiceItem" >
            <h3> 大数据分析</h3>
            <img src="../assets/logo.png" @click="al">
          </el-carousel-item>
          <el-carousel-item  class="choiceItem" >
            <h3>个人中心 </h3>
            <img src="../assets/logo.png" @click="al">
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
            alert("进入企业信息模块");
            this.moveMenu();
            this.$router.push({path:'/companysearch'})

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
    width: 1100px;
    /*background-color: #5daf34;*/
    /*height: 500px;*/
    margin: 0px auto;
    background-image: url("../assets/back.png");
    background-repeat:no-repeat;
    background-position:center;
  }

  .choiceItem{

  }
  .list{
    margin: 100px auto;
    width: 1000px;
  }
  .user{
    width: 60px;
    height: 100px;
    margin: 0 auto;
    /*background-color: #8c939d;*/
  }
</style>
