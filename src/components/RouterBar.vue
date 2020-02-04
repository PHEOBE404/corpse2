<template>
  <div>
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
    <div class="footer">
      <img src="../assets/user.png" width="30px" style="margin-top: 10px">
        <span >用户8462336</span>


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

          }
      },
      methods:{
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },

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
  .footer{
    margin-left: 90%;
    width: 650px;
    /*margin-top: 80px;*/
    display: inline-block;
    /*float: right;*/
  }
</style>
