<template>
  <div class="body">

  <div v-loading="loading"
       element-loading-text="登录中"
       element-loading-spinner="el-icon-loading"
       element-loading-background="rgba(0, 0, 0, 0.8)">
<!--    <img src="../assets/粒子.jpg" height="100%"style="float:left;position: fixed;">-->


      <!--<img src="../assets/登录页面（密码登录）.png" width="1500px" >-->
<!--        <img src="../assets/inputt.png" width="900">-->
      <div class="login">
        <h2 style="position: fixed;color: #fff;margin-top: -80px;margin-left: 50px">探·僵局查询系统</h2>
        <el-input v-model="username" placeholder="请输入用户名" prefix-icon="el-icon-user"style="width: 300px"></el-input>
        <br><br>
        <el-input v-model="password" type="password" placeholder="请输入密码" prefix-icon="el-icon-lock" style="width: 300px"></el-input>
        <br> <br>
        <el-button type="primary"  style="width: 300px;position: fixed;" @click="login">登录</el-button>
        <el-button   style="width: 300px;position: fixed;margin-top: 40px;margin-left: -0px">注册</el-button>
      </div><p></p>



  </div>
  </div>

</template>

<script>
  // import { mapState, mapMutations } from "vuex";
  import { mapMutations } from 'vuex';
  export default {
    data(){
      return{
        loading: false,
        username:'',
        password:''
      }


    },
    methods: {
      ...mapMutations(['changeLogin']),
      login(){
        // this.loading=true;
        const loading = this.$loading({
          lock: true,
          text: '登录中',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        let _this = this;
        if (this.username === '' || this.password === '') {
          alert('账号或密码不能为空');
        } else {
          this.axios({
            method: 'post',
            url: 'http://47.106.74.144/zombie_dig/login',
            data: {
              username: _this.username,    
              password: _this.password,
            }
          }).then(res => {
            console.log(res);
            // console.log(res.id);
            _this.userToken = 'Bearer ' + res.data.access;
            // 将用户token保存到vuex中
            _this.changeLogin({ Authorization: _this.userToken });
            // console.log(_this.userToken);
              loading.close();
            _this.$router.push('/home');


          }).catch(error => {
            alert('账号或密码错误');
            console.log(error);
          });
        }






      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>

  .body{
    padding: 0;
    /*width: 100%;*/
    /*background-color: #5daf34;*/
    height: 740px;

    /*margin: 0px auto;*/
    background-image: url("../assets/粒子92.png");

    background-repeat:no-repeat;
    background-position:center top;

  }

  .login{
    width: 200px;
    height: 300px;
    float: left;
    /*background-color: #5daf34;*/
    margin-left: 570px;
    margin-top: 310px;
    z-index: 3;
  }
</style>
