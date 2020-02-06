<template>
    <div>
      <div class="step">
        <el-steps :active="0" align-center>
          <el-step title="选择分析模型" icon="el-icon-upload"></el-step>
          <el-step title="输入企业信息" icon="el-icon-edit"></el-step>
          <el-step title="查看数据报表" icon="el-icon-picture"></el-step>
        </el-steps>
      </div>
      <div class="cardgroup" @click="hide">
          <router-link to="/mulinput/default">
            <el-card class="box-card" v-for="o in 3" :key="o">

          <div  class="text item">

            {{'模型 ' + o }}

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
            $(".cardgroup").fadeOut();
          }
    }
    }
</script>

<style scoped>
.cardgroup{
width: 1200px;
margin: 100px auto;
  margin-left: 250px;
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
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
</style>
