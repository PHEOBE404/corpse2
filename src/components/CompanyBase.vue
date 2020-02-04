<template>
    <div style="width: 100%">
      <div class="menubar">
        <el-menu default-active="/corpse/companysearch" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse"router>
          <el-menu-item index="/corpse/companysearch">
            <i class="el-icon-location"></i>
            <span slot="title">企业信息查询</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">僵尸企业测评</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">大数据分析</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-message"></i>
            <span slot="title">个人中心</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="id">
      <h3>企业{{$route.params.id}}号</h3>
      </div>
      <div class="photo">

      </div>
      <div class="baseInfo" >
        <el-row :gutter="20">
          <el-col :span="4"><div class="grid-content bg-purple">
            <span class="bord">1</span>企业名称</div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple">未命名</div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple"><span class="bord">1</span>所属地区</div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple">上海市</div></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="4"><div class="grid-content bg-purple"><span class="bord">1</span>注册时间</div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple">2005年</div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple"><span class="bord">1</span>企业类型</div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple">农民专业合作社</div></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="4"><div class="grid-content bg-purple"><span class="bord">1</span>注册资本</div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple">2050 万</div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple"><span class="bord">1</span>控制人类型</div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple">企业法人</div></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8"><div class="grid-content bg-purple"><span class="bord">1</span>知识产权</div></el-col>
          <el-col :span="16">
            <div class="grid-content bg-purple">

              <el-tag type="success">享有专利</el-tag>
              <el-tag type="success">享有商标</el-tag>
              <el-tag type="info">未享有著作权</el-tag>
          </div></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8"><div class="grid-content bg-purple"><span class="bord">1</span>僵尸企业测评结果</div></el-col>
          <el-col :span="16">
            <div class="grid-content bg-purple warn">僵尸企业</div></el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="8"><div class="grid-content bg-purple"><span class="bord">1</span>企业安全测评结果</div></el-col>
          <el-col :span="16"><div class="grid-content bg-purple ">不安全</div></el-col>
        </el-row>
      </div>
      <div class="tab">
        <template>
          <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
            <el-tab-pane label="数据分析" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="企业特征" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="企业预警" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="3D企业" name="fourth">定时任务补偿</el-tab-pane>
          </el-tabs>
        </template>
      </div>


<!--{{li}}-->
    </div>
</template>

<script>
  import $ from 'jquery'

  export default {
        name: "CompanyBase",
      data(){
          return{
            activeName2: 'first',
            li:this.$route.params.id,//可以返回当前企业id
            isCollapse: !false,

          }
      },
    mounted(){
      // alert($(".warn").text());

      if ($(".warn").text()=="僵尸企业") {
            $(".warn").addClass("isred");
          }
      ;

    },
      computed:{
      },

    methods:{
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }

    }
    }
</script>

<style scoped>
  .menubar{
    /*float: left;*/
    margin-top: 100px;
    /*margin-left: 20px;*/
    position:fixed;
    top:20px;
    left:15px;
  }
  .photo{
    width: 350px;
    height: 420px;
    background-color: #8c939d;
    margin-top: 0px;
    background-image: url("../assets/主题.png");
    margin-left: 200px;
    display: inline-block;
  }
  .id{
    width: 200px;
    height: 50px;
    /*margin-left: 420px;*/
    margin: 50px auto;
  }
  .baseInfo{
    width: 720px;
    height: 370px;
    /*background-color: #5daf34;*/
    /*margin-left: 500px;*/
    display: inline-block;
    margin-left: 10px;
    /*background-image: url("../assets/边框.png");*/
    /*background-position: center center;*/

  }
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    /*background: #d3dce6;*/
    font-size: 18px;
    /*background-image: url("../assets/边框.png");*/
    /*background-position: center right;*/
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    border-color: black;
    /*border*/
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .isred{
    color: red;
  }
  .tab{
    width: 800px;
    height: 500px;
    background-color: #99a9bf;
    margin-left: 200px;
  }
  .bord{
    width: 8px;
    height: 22px;
    background-color: #1A6FC9;
    color: #1A6FC9;
    margin-right: 5px;
    display: inline-block;
  }
</style>
