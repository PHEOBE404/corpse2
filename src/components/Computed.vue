<template>
    <div class="body">
<div class="footer">
  <span >探僵局查询系统</span>

  <div class="userfooter">
<!--    <span>2020年4月1日</span>-->
    <span>{{currentTime}}</span>
    <span>用户5988741</span>
  </div>
  <div class="rightmenu">
<span><a href="#">企业信息查询</a></span>
<span class="active"><a href="#">僵尸企业测评</a></span>
<span><a href="#">大数据分析</a></span>
<span><a href="#">个人中心</a></span>
  </div>
</div>
      <h3 style="color: #FFFFFF;text-align: center;margin-top: 170px">请选择计算模型:</h3>
<!--      <div class="step">-->
<!--        <el-steps :active="0" align-center>-->
<!--          <el-step title="1.选择分析模型" icon="el-icon-upload"></el-step>-->
<!--          <el-step title="2.输入企业信息" icon="el-icon-edit"></el-step>-->
<!--          <el-step title="3.查看数据报表" icon="el-icon-picture"></el-step>-->
<!--        </el-steps>-->
<!--      </div>-->
      <div class="cardgroup" @click="hide">
          <router-link to="/mulinput/default">
            <el-card class="box-card" >
          <div  class="text item">
<!--            {{'模型 1 ' }}-->
            <center>

            <img src="../assets/111.png" width="140px" class="imgg" >
            <h3>1号模型</h3>
            <p>侧重大量数据处理</p>
              <p>具有高并发计算能力</p>
            </center>
          </div>
            </el-card>
        <el-card class="box-card" >
          <div  class="text item">
            <center>
            <img src="../assets/222.png" width="160px">
            <h3>2号模型</h3>
            <p>侧重数据准确率</p>
              <p>实时生成新数据</p>
            </center>
          </div>
            </el-card>
        <el-card class="box-card" >
          <div  class="text item">
<!--            {{'模型 2'  }}--> <center>
            <img src="../assets/333.png" height="140px" class="imgg" >

            <h3>3号模型</h3>

            <p>侧重计算速度</p>
              <p>实现数据快速计算</p>
            </center>
          </div>
            </el-card>

          </router-link>
      </div>
    </div>
</template>

<script>
  import $ from 'jquery'

  export default {
        name: "Computed",
    data(){
          return{
            timer: "",//定义一个定时器的变量
            currentTime: "--------------------------", // 获取当前时间
          }
    },
    methods:{
          hide(){
            // $(".cardgroup").fadeOut();
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
          new Date().getMinutes() +
          ":" +
          new Date().getSeconds();
      }, 1000);
    },
    beforeDestroy() {
      if (this.timer) {
        clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
      }
    },
    mounted() {
    $(".box-card").mouseenter(function () {
      $(this).find("img").animate({
        width:'+=20px',
        height:'+=20px'

      },"fast");
      $(this).parent().animate({
        fontSize:'+=1px'
      },"fast")
    });
    $(".box-card").mouseleave(function () {
      $(this).find("img").animate({
        width:'-=20px',
        height:'-=20px'
      },"fast");
      $(this).parent().animate({
        fontSize:'-=1px'
      },"fast")
    });
        }
  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }

  .body{
    background-image: url("../assets/粒子92.png");
    background-repeat: no-repeat;
    /*width: 1816px;*/
    background-position: center top;
    height: 916px;
  }
.cardgroup{
/*width: 1400px;*/
margin: 20px auto;
  margin-left: 250px;
  /*background-color: #5daf34;*/
}
.text {
  font-size: 16px;
}

.item {
  padding: 10px 0;
}

.box-card {
  width: 270px;
  height: 320px;
  display: inline-block;
  margin: 20px;
  background-color: #FFFFFF;
  background-color:transparent ;
  background-image: url("../assets/粒子92.png");
  border-width: 0;
  color: #FFFFFF;
}
  .step{
    width: 800px;
    margin: 10px auto;
  }
.footer{
  margin-left: 50px;
  color: #FFFFFF;
  font-family: 微软雅黑;
}
  .rightmenu{
    display: inline-block;
    float: right;
    border-width: 8px;
    /*border-color: #5ACDFF;*/
    background-color: #041A29;

    font-size: 16px;
  }
  .rightmenu span{
    width: 200px;
    /*background-image: url("../assets/34118972.jpg.png");*/
    border-width: 8px;
    border-color: #5ACDFF;
    border-radius: 2px;
    padding: 6px;
    line-height: 38px;

  }
  .rightmenu span a{
    color: #FFFFFF;
    text-decoration:none;
    /*line-height: 28px;*/
  }
  .userfooter{
    display: inline-block;
    float: right;
    border-width: 8px;
    /*border-color: #5ACDFF;*/
    background-color: #041A29;
padding-left: 40px;
    font-size: 14px;
  }
  .userfooter span{
    width: 200px;
    border-width: 8px;
    border-color: #5ACDFF;
    border-radius: 2px;
    padding: 6px;
    line-height: 38px;

  }
  .active{
    background-image: url("../assets/34118972.jpg.png");

  }
</style>
