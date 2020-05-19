<template>
    <div class="body">
      <div class="footer">
        <span class="title"><router-link to="/home">
                   <img src="../assets/103.png" width="310px">

         </router-link></span>

        <div class="userfooter">
          <span class="current_time">{{currentTime}}</span>
          <span class="user_a">用户5988741</span>
        </div>
        <div class="rightmenu">
          <span><router-link to="/companysearch">企业信息查询</router-link></span>
          <span class="active"><router-link to="/computed">僵尸企业测评</router-link></span>
          <span><router-link  to="/bigdata">大数据分析</router-link ></span>
          <span><router-link to="/me">个人中心</router-link></span>
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
          <router-link to="/mulinput/XGBoost">
            <el-card class="box-card" >
          <div  class="text item">
<!--            {{'模型 1 ' }}-->
            <center>

            <img src="../assets/111.png" width="140px" class="imgg" >
              <h3>XGBoost模型</h3>

              <p>基于Boosting的集成学习模型</p>
              <p>综合性能仅次于随机森林的模型</p>
              <p>建议作为随机森林的后备模型使用</p>

            </center>
          </div>
            </el-card>
          </router-link>

        <router-link to="/mulinput/随机森林">

        <el-card class="box-card" >
          <div  class="text item">
            <center>
            <img src="../assets/222.png" width="160px"><el-tag type="success" style="position: absolute;float: right;width: 40px;">推荐</el-tag>
              <h3>随机森林模型</h3>
              <p>综合性能最佳的模型</p>
              <p>拥有最高的预测准确率和较快的预测速度</p>
              <p>基于Bagging的集成学习模型</p>

            </center>
          </div>
            </el-card>
        </router-link>
        <router-link to="/mulinput/逻辑回归">

        <el-card class="box-card" >
          <div  class="text item">
<!--            {{'模型 2'  }}--> <center>
            <img src="../assets/333.png" height="140px" class="imgg" >


            <h3>逻辑回归模型</h3>
            <p>简单有效的机器学习模型</p>
            <p>拥有最快的预测速度</p>
            <p>同时在预测准确率上有较高保障</p>
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
            currentTime: "----------------------", // 获取当前时间
          }
    },
    methods:{
          hide(){

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
@import "../assets/basci.css";
  *{
    margin: 0;
    padding: 0;
  }

  .body{
    background-image: url("../assets/粒子92.png");
    background-repeat: no-repeat;
    background-position: center top;
    height: 740px;
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
.text h3{
  line-height: 36px;
}
.text p{
  font-size: 12px;
  line-height: 24px;
  color: #99a9bf;
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
  background-position: left center;
  border-width: 0;
  color: #FFFFFF;
}
  .step{
    width: 800px;
    margin: 10px auto;
  }
.footer,.title{
  box-sizing: content-box;
}
.footer{
  height: 38px;
  margin-left: 0px;
  padding-left: 50px;
}
</style>
