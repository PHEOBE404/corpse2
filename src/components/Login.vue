<template>
  <div v-loading="loading"
       element-loading-text="登录中"
       element-loading-spinner="el-icon-loading"
       element-loading-background="rgba(0, 0, 0, 0.8)">
    <img src="../assets/粒子.jpg" height="100%"style="float:left;position: fixed;">

    <div class="bac">
      <!--<img src="../assets/登录页面（密码登录）.png" width="1500px" >-->
      <div class="body">
<!--        <img src="../assets/inputt.png" width="900">-->
      </div>
      <div class="login">
        <h2 style="position: fixed;color: #fff;margin-top: -80px;margin-left: 50px">探·僵局查询系统</h2>
        <el-input v-model="input1" placeholder="请输入用户名" prefix-icon="el-icon-user"style="width: 300px"></el-input>
        <br><br>
        <el-input v-model="input2" type="password" placeholder="请输入密码" prefix-icon="el-icon-lock" style="width: 300px"></el-input>
        <br> <br>
        <el-button type="primary"  style="width: 300px;position: fixed;" @click="login">登录</el-button>
        <el-button   style="width: 300px;position: fixed;margin-top: 50px;margin-left: -0px">注册</el-button>
      </div>

    </div>

  </div>

</template>

<script>
  export default {
    data(){
      return{
        loading: false,
        input1:'',
        input2:''
      }


    },
    methods: {
      login(){
        // this.loading=true;

        const loading = this.$loading({
          lock: true,
          text: '登录中',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
          this.$router.push({path:'/home'});

        }, 1200);


      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>

  .body{
    width: 800px;
    height: 800px;
    /*background-color: #10A6B4;*/
    float: left;
    /*z-index: 2;*/
    margin-top: 140px;
    margin-left: 270px;
    /*background-image: url("../assets/inputt.png");*/

  }
  .bac{
    /*background-image: url("../assets/登录页面（密码登录）.png");*/
    width: 100%;
    height: 900px;
    /*float: left;*/

  }
  .login{
    width: 200px;
    height: 300px;
    float: left;
    /*background-color: #5daf34;*/
    margin-left: 570px;
    margin-top: -630px;
    z-index: 3;
  }
</style>
