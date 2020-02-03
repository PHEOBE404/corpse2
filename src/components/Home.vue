<template>
    <div class="body">
<!--      <img src="../assets/5945057_0_0.jpg" width="1430px"style="float:left;">-->
      <div class="footer" >
        <img src="../assets/logo.png" width="40px">  <span style="font-family: '微软雅黑';font-size: 20px">探·僵局查询系统</span>
      <div style="float: right;margin-right: 50px">
        <span style="color:#186EC5 ;font-size: 14px;margin-right: 20px">2020年2月2日</span>

        <el-button type="text" icon="el-icon-delete">退出</el-button>
      </div>
      </div>
      <div class="list">
        <div class="user">
<!--          <h3>用户您好！</h3>-->
          <img src="../assets/user.png" width="60px">

        </div>
        <div class="menu">
      <template style="float: left;" >
        <el-carousel :interval="4000" type="card" height="400px">
          <el-carousel-item  class="choiceItem" >
            <img src="../assets/模块分类一.png" @click="alt1" width="100%">
<!--                        <h3>企业信息 </h3>-->

          </el-carousel-item>
          <el-carousel-item  class="choiceItem" >
<!--            <h3>僵尸测评 </h3>-->
            <img src="../assets/模块分类二.png" @click="al"width="100%">
          </el-carousel-item>
          <el-carousel-item  class="choiceItem" >
<!--            <h3> 大数据分析</h3>-->
            <img src="../assets/模块分类三.png" @click="al"width="100%">
          </el-carousel-item>
          <el-carousel-item  class="choiceItem" >
<!--            <h3>个人中心 </h3>-->
            <img src="../assets/模块分类四.png" @click="al"width="100%">
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
            this.$router.push({path:'/corpse/companysearch'})

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
    width: 100%;
    /*background-color: #5daf34;*/
    height: 900px;
    margin: 0px auto;
    background-image: url("../assets/5945057_0_0.jpg");
    background-repeat:no-repeat;
    background-position:top center;
  }
  .footer{
    /*width: 900px;*/
    margin-left: 50px;
    /*float: right;*/
  }
  .menu{
width: 700px;
    margin: 0 auto;
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
