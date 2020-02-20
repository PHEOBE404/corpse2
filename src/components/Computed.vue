<template>
    <div>

      <div class="step">
        <el-steps :active="0" align-center>
          <el-step title="1.选择分析模型" icon="el-icon-upload"></el-step>
          <el-step title="2.输入企业信息" icon="el-icon-edit"></el-step>
          <el-step title="3.查看数据报表" icon="el-icon-picture"></el-step>
        </el-steps>
      </div>
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
<!--        <el-card class="box-card" >-->
<!--          <div  class="text item">-->
<!--            {{'模型 2'}}-->
<!--            <img src="../assets/222.png" width="220px">-->
<!--            <p>侧重数据准确率，实时生成新数据</p>-->

<!--          </div>-->
<!--            </el-card>-->
        <el-card class="box-card" >
          <div  class="text item">
<!--            {{'模型 2'  }}--> <center>
            <img src="../assets/333.png" height="140px" class="imgg" >

            <h3>2号模型</h3>

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
    methods:{
          hide(){
            // $(".cardgroup").fadeOut();
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
.cardgroup{
width: 1200px;
margin: 100px auto;
  margin-left: 420px;
}
.text {
  font-size: 16px;
}

.item {
  padding: 10px 0;
}

.box-card {
  width: 300px;
  height: 380px;
  display: inline-block;
  margin: 20px;
}
  .step{
    width: 800px;
    margin: 10px auto;
  }
.footer{
  /*width: 900px;*/
  margin-left: 50px;
  /*float: right;*/
}
</style>
