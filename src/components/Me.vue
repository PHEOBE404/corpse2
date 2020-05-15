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
        <div class="overlay"></div>

        <!-- Sidebar -->
        <nav class="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
          <ul class="nav sidebar-nav">
            <li class="sidebar-brand">
              <a href="#">
                个人中心
              </a>
            </li>
            <li>
              <a href="#"><i class="fa fa-fw fa-home"></i> 我的信息</a>
            </li>
            <li>
              <a href="#"><i class="fa fa-fw fa-folder"></i> 我的测评</a>
            </li>
            <li>
              <a href="#"><i class="fa fa-fw fa-file-o"></i> 设置</a>
            </li>
            <li>
              <a href="#"><i class="fa fa-fw fa-cog"></i> 退出</a>
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
            <div class="row">
              <div class="col-lg-8 col-lg-offset-2">
                <h1 class="page-header">Awesome Bootstrap 3 Sidebar Navigation</h1>
                <p class="lead">Originally authored by  maridlcrmn  on Bootsnipp and then converted to Less and customized further by j_holtslander who is building a collection of great Bootstrap 3 navbars.</p>
                <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue.</p>
                <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.</p>
                <p>Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas faucibus mollis interdum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.</p>
                <h3>A heading in the mix.</h3>
                <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
                <blockquote>Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue.</blockquote>
                <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.</p>
              </div>
            </div>
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
  import "../assets/jquery-1.8.3.min"
  import "../assets/bootstrap.min"
  // import "../assets/bootstrap.min"
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
    }
    }
</script>

<style scoped>
  @import "../assets/bootstrap.css";
  @import "../assets/basci.css";
  @import "../assets/style.css";

  .body{
    /*background-image: url("../assets/粒子92.png");*/
    background-color: #19313D;
    background-repeat: no-repeat;
    background-position: center top;
    height: 740px;
  }
</style>
