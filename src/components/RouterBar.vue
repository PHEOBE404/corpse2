<template>
  <div>
  <div class="menubar">
    <el-menu :default-active=activebar class="el-menu-vertical-demo" @click="handleOpen" @close="handleClose" :collapse="isCollapse"router>
      <el-menu-item index="/corpse/companysearch">
        <i class="el-icon-location"></i>
        <span slot="title">企业信息查询</span>
      </el-menu-item>
      <el-menu-item index="/corpse/computed">
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
<!--      <div class="footer" >-->
        <img src="../assets/logo.png" width="30px" @click="toHome">  <span style="font-family: '微软雅黑';font-size: 20px">探·僵局查询系统</span>
<!--        <div style="float: right;margin-right: 50px">-->
          <span style="color:#186EC5 ;font-size: 14px;margin-left: 620px"></span>
      <img src="../assets/user.png" width="30px" style="margin-top: 10px;margin-left: 180px">
      <span >用户8462336</span>
          <el-button type="text" icon="el-icon-delete">退出</el-button>
<!--        </div>-->
<!--      </div>-->



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
  .menubar{
    /*float: left;*/
    margin-top: 100px;
    /*margin-left: 20px;*/
    position:fixed;
    top:20px;
    left:15px;
  }
  .footer{
    margin-left: 5%;
    width: 1350px;
    /*margin-top: 80px;*/
    display: inline-block;
    /*float: right;*/
  }
</style>
