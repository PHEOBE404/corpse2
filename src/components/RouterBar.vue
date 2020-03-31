<template>
  <div class="body">
<!--    <img src="../assets/粒子.jpg" width="100%"style="position: fixed;">-->
<!--    <img src="../assets/粒子90.png" height="100%"style="float:left;position: fixed;">-->
    <div class="menubar">
    <el-menu :default-active=activebar class="el-menu-vertical-demo" @click="handleOpen" @close="handleClose" :collapse="isCollapse"router>
      <el-menu-item index="/corpse/companysearch">
        <i class="el-icon-location"></i>
        <span slot="title">企业信息查询</span>
      </el-menu-item>
      <el-menu-item index="/corpse">
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
    <div class="footer">
        <img src="../assets/logo.png" width="20px" @click="toHome">
      <span style="font-family: '微软雅黑';font-size: 20px">探·僵局查询系统</span>
          <span style="color:#186EC5 ;font-size: 14px;margin-left: 1020px"></span>
      <i class="el-icon-monitor"></i>
      <span >墨鱼</span>           <span style="color:#186EC5 ;font-size: 14px;margin-left: 10px"></span>

      <el-button type="text" icon="el-icon-message" size="medium" style="width: 20px"></el-button>
          <el-button type="text" icon="el-icon-switch-button" size="large"></el-button>
    </div>
<router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "RouterBar",
      data(){
          return{
            isCollapse: !false,
            activebar:'/corpse/companysearch'

          }
      },
      methods:{
        toHome(){
          this.$router.push({path:'/home/'})
        },
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
          this.activebar=key.index;
          console.log(key.index);

        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },

      }
    }
</script>

<style scoped>
  .body{
    /*background-image: url("../assets/粒子.jpg");*/
  }
  .menubar{
    /*float: left;*/
    margin-top: 100px;
    /*margin-left: 20px;*/
    position:fixed;
    top:20px;
    left:15px;
  }
  .footer{
    margin-left: 1%;
    width: 1350px;
    /*margin-top: 80px;*/
    display: inline-block;
    /*float: right;*/
  }
</style>
