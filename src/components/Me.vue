<template>
    <div class="body">
      <div class="footer">
     <span class="title"><router-link to="/home">
          <img src="../assets/logo-teng-full.png" width="240px">

         </router-link></span>

        <div class="userfooter">
          <span class="current_time">{{currentTime}}</span>
          <span class="user_a">用户5988741</span>
        </div>
        <div class="rightmenu">
          <span><router-link to="/companysearch">企业信息查询</router-link></span>
          <span ><router-link to="/computed">僵尸企业测评</router-link></span>
          <span ><router-link  to="/bigdata">大数据分析</router-link ></span>
          <span class="active"><router-link to="/me">个人中心</router-link></span>
        </div>
      </div>

      <div id="wrapper">
<!--        <div class="overlay"></div>-->

        <!-- Sidebar -->
        <nav  class="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
          <ul class="nav sidebar-nav">
            <li class="sidebar-brand">
              <a href="#">
                个人中心
              </a>
            </li>
            <li>
              <a href="#" @click="showInfo"><i class="fa fa-fw fa-home"></i> 我的信息</a>
            </li>
            <li>
              <a href="#"  @click="showCompu"><i class="fa fa-fw fa-folder"></i> 我的测评</a>
            </li>
            <li>
              <a href="#"  @click="showSet"><i class="fa fa-fw fa-cog"></i> 设置</a>
            </li>
            <li>
              <a href="#"  @click="exit"><i class="fa fa-fw fa-file-o"></i> 退出</a>
            </li>
          </ul>
        </nav>
        <!-- /#sidebar-wrapper -->
        <!-- Page Content -->
        <div id="page-content-wrapper">
          <button type="button" class="hamburger is-closed animated fadeInLeft" data-toggle="offcanvas">
            <span class="hamb-top"></span>
            <span class="hamb-middle"></span>
            <span class="hamb-bottom"></span>
          </button>
          <div class="container">
            <div class="myInfo">
              <div class="user" style="width: 290px;float: left">
                <div class="user__head">
                  <div class="user__img">
<!--                    <img src="img/user5.jpg" alt="">-->
                  </div>
                </div>
                <div class="user__title">
                  <h2>John Doe</h2>
                  <p>Front-end Developer</p>
                </div>
                <div class="user__btns">
                  <a href="add-project.html" class="user__btn user__btn--blue"><span>Post a project</span></a>
                  <a href="add-job.html" class="user__btn user__btn--orange"><span>Post a job</span></a>
                </div>
                <ul class="user__stats">
                  <li>
                    <p>Following</p>
                    <span>26</span>
                  </li>
                  <li>
                    <p>Followers</p>
                    <span>88</span>
                  </li>
                </ul>
                <a href="#" class="sidebox__more">View profile</a>
              </div>

              <!-- sidebox -->
              <div class="sidebox" style="float: left;width: 500px;margin-left: 40px">
                <h4 class="sidebox__title">历史测评</h4>
                <div class="sidebox__content">

                  <div class="sidebox__user">
                    <a href="#" class="sidebox__user-img">

                    </a>
                    <div class="sidebox__user-title">
                      <h5><a href="#">Andy Ramos</a></h5>
                      <p>Secretary</p>
                    </div>
                    <button class="sidebox__user-btn" type="button">
                      <i class="icon el-icon-view"></i>
                    </button>
                  </div>

                  <div class="sidebox__user">
                    <a href="#" class="sidebox__user-img">
<!--                      <img src="img/user1.jpg" alt="">-->
                    </a>
                    <div class="sidebox__user-title">
                      <h5><a href="#">Tony Young</a></h5>
                      <p>Herbalist</p>
                    </div>
                    <button class="sidebox__user-btn" type="button">
                      <i class="icon el-icon-view"></i>

                    </button>
                  </div>

                  <div class="sidebox__user">
                    <a href="#" class="sidebox__user-img">
<!--                      <img src="img/user2.jpg" alt="">-->
                    </a>
                    <div class="sidebox__user-title">
                      <h5><a href="#">Santiago Robinson</a></h5>
                      <p>Fashion designer</p>
                    </div>
                    <button class="sidebox__user-btn" type="button">
                      <i class="icon el-icon-view"></i>

                    </button>
                  </div>

                  <div class="sidebox__user">
                    <a href="#" class="sidebox__user-img">
<!--                      <img src="img/user3.jpg" alt="">-->
                    </a>
                    <div class="sidebox__user-title">
                      <h5><a href="#">Sophia Mendoza</a></h5>
                      <p>Teaching assistant</p>
                    </div>
                    <button class="sidebox__user-btn" type="button">
                      <i class="icon el-icon-view"></i>

                    </button>
                  </div>

                  <div class="sidebox__user">
                    <a href="#" class="sidebox__user-img">
<!--                      <img src="img/user4.jpg" alt="">-->
                      <i class="el-icon-tickets"></i>
                    </a>
                    <div class="sidebox__user-title">
                      <h5><a href="#">Marsha Baldwin</a></h5>
                      <p>Gardener</p>
                    </div>
                    <button class="sidebox__user-btn" type="button">
                      <i class="icon el-icon-view"></i>

                    </button>
                  </div>
                </div>
                <a href="#" class="sidebox__more">View more</a>
              </div>
              <!-- end sidebox -->


            </div>
            <div class="myCompu">myCompu</div>
            <div class="mySet">mySet</div>
            <div class="exit">exit</div>
          </div>
        </div>
        <!-- /#page-content-wrapper -->
      </div>
    </div>
</template>

<script>
  import "../assets/icomoon.eot"
  import "../assets/icomoon.svg"
  import "../assets/icomoon.ttf"
  import "../assets/icomoon.woff"
  import $ from 'jquery'
  import "../assets/jquery.mousewheel.min"

  import "../assets/jquery-1.8.3.min"
  import "../assets/bootstrap.min"
  import "../assets/jquery-3.4.1.min"
  // import "../assets/bootstrap.bundle.min"
  import "../assets/owl.carousel.min"
  import "../assets/wNumb"
  import "../assets/nouislider.min"
  import "../assets/select2.min"
  // import "../assets/jquery.mCustomScrollbar.min"
  import "../assets/main"
  export default {
        name: "Me",
      data(){
        return{
          timer: "",//定义一个定时器的变量
          currentTime: "----------------------", // 获取当前时间
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
      var trigger = $('.hamburger'),
        overlay = $('.overlay'),
        isClosed = false;

      trigger.click(function () {
        hamburger_cross();
      });

      function hamburger_cross() {

        if (isClosed == true) {
          overlay.hide();
          trigger.removeClass('is-open');
          trigger.addClass('is-closed');
          isClosed = false;
        } else {
          overlay.show();
          trigger.removeClass('is-closed');
          trigger.addClass('is-open');
          isClosed = true;
        }
      }

      $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
      });

      $(".myInfo").show();
      $(".myCompu").hide();
      $(".mySet").hide();
      $(".exit").hide();
    },
    methods:{
      showInfo(){
        $(".myInfo").show();
        $(".myCompu").hide();
        $(".mySet").hide();
        $(".exit").hide();

      },
      showCompu(){
        $(".myInfo").hide();
        $(".myCompu").show();
        $(".mySet").hide();
        $(".exit").hide();

      },
      showSet(){
        $(".myInfo").hide();
        $(".myCompu").hide();
        $(".mySet").show();
        $(".exit").hide();

      },
      exit(){
        $(".myInfo").hide();
        $(".myCompu").hide();
        $(".mySet").hide();
        $(".exit").show();

      },
    }
    }
</script>

<style scoped>
  @import "../assets/bootstrap.css";
  @import "../assets/basci.css";
  @import "../assets/style.css";
  @import "../assets/bootstrap-reboot.min.css";
  @import "../assets/bootstrap-grid.min.css";
  @import "../assets/owl.carousel.min.css";
  @import "../assets/nouislider.min.css";
  @import "../assets/select2.min.css";
  @import "../assets/jquery.mCustomScrollbar.min.css";
  @import "../assets/ionicons.min.css";
  @import "../assets/main.css";

  .body{
    /*background-image: url("../assets/粒子92.png");*/
    background-color: #19313D;
    background-repeat: no-repeat;
    background-position: center top;
    height: 740px;
  }
  .userfooter{
    /*margin-right: 20px;*/
    /*width: 300px;*/
  }
  .container{
    color: white;
  }
  .footer{
    z-index: 1000;
  }
  /*.title img{*/
  /*  color: #ffffff;*/
  /*  !*background-color: #041A29;*!*/
  /*  line-height: 38px;*/
  /*  font-size: 18px;*/
  /*  text-decoration: none;*/
  /*  padding-top: 4px;*/
  /*  padding-bottom: 2px;*/
  /*  transition: all .1s ease 0s;*/
  /*}*/
  /*.title  :hover{*/
  /*  !*background-color:#041A29 ;*!*/
  /*  opacity: 92%;*/
  /*}*/
</style>
