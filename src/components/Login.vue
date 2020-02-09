<template>
  <div>
    <div class="bac">
      <!--<img src="../assets/登录页面（密码登录）.png" width="1500px" >-->
      <div class="body">
        <img src="../assets/inputt.png" width="900">
      </div>
      <div class="login">
        <h3 >用户登录</h3>
        <el-input v-model="input1" placeholder="请输入用户名" prefix-icon="el-icon-caret-right"></el-input>
        <br><br>
        <el-input v-model="input2" type="password" placeholder="请输入密码" prefix-icon="el-icon-caret-right"></el-input>
        <br> <br>
        <router-link to='/home'>
        <el-button type="primary" icon="el-icon-circle-check" style="width: 90px;">登录</el-button>
        </router-link>

        <el-button  icon="el-icon-circle-check" style="width: 90px;">注册</el-button>
      </div>

    </div>

  </div>

</template>

<script>
  export default {
    data(){
      return{
        input1:'',
        input2:''
      }


    },
    methods: {
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
    background-image: url("../assets/登录页面（密码登录）.png");
    width: 1480px;
    height: 900px;
    /*float: left;*/

  }
  .login{
    width: 200px;
    height: 300px;
    float: left;
    /*background-color: #5daf34;*/
    margin-left: 700px;
    margin-top: -670px;
    z-index: 3;
  }
</style>
