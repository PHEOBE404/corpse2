<template>
    <div class="body">
      <div class="footer">
     <span class="title"><router-link to="/home">

          <img src="../assets/103.png" width="310px">

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
              <a href="#"  @click="showSet"><i class="fa fa-fw fa-cog"></i> 我的权限</a>
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
              <div class="user" style="width: 290px;float: left;height: 510px;">
                <div class="user__head">
                  <div class="user__img">
                    <img src="../assets/user.png" alt="">

                  </div>
                </div>
                <div class="user__title">
                  <h2>用户5988741</h2>
                  <p>普通用户</p>
                </div>
                <div class="user__btns">
                  <a href="add-project.html" class="user__btn user__btn--blue"><span>用户升级</span></a>
                  <a href="add-job.html" class="user__btn user__btn--orange"><span>注销</span></a>
                </div>
                <ul class="user__stats">
                  <li>
                    <p>测评次数</p>
                    <span>26</span>
                  </li>
                  <li>
                    <p>剩余次数</p>
                    <span>74</span>
                  </li>
                </ul>
                <a href="#" class="sidebox__more" style="margin-top: 20px">更多</a>
              </div>

              <!-- sidebox -->
              <div class="sidebox" style="float: left;width: 500px;height: 510px;margin-left: 40px">
                <h4 class="sidebox__title">历史测评  <p style="color: #99a9bf;font-size: 12px">平均用时：3.66秒</p></h4>
                <div class="sidebox__content">

                  <div class="sidebox__user">
                    <a href="#" class="sidebox__user-img">
                      <img src="../assets/r3.png" alt="">

                    </a>
                    <div class="sidebox__user-title">
                      <h5><a href="#">20200515_01</a></h5>
                      <p>文件上传</p>
                    </div>
                    <button class="sidebox__user-btn" type="button">
                      <i class="icon el-icon-view"></i>
                    </button>
                  </div>

                  <div class="sidebox__user">
                    <a href="#" class="sidebox__user-img">
                      <img src="../assets/r3.png" alt="">

                    </a>
                    <div class="sidebox__user-title">
                      <h5><a href="#">20200514_03</a></h5>
                      <p>文件上传</p>
                    </div>
                    <button class="sidebox__user-btn" type="button">
                      <i class="icon el-icon-view"></i>

                    </button>
                  </div>

                  <div class="sidebox__user">
                    <a href="#" class="sidebox__user-img">
<!--                      <img src="img/user2.jpg" alt="">-->
                      <img src="../assets/r1.png" alt="">

                    </a>
                    <div class="sidebox__user-title">
                      <h5><a href="#">20200514_02</a></h5>
                      <p>单个输入</p>
                    </div>
                    <button class="sidebox__user-btn" type="button">
                      <i class="icon el-icon-view"></i>

                    </button>
                  </div>

                  <div class="sidebox__user">
                    <a href="#" class="sidebox__user-img">
<!--                      <img src="img/user3.jpg" alt="">-->
                      <img src="../assets/r2.png" alt="">

                    </a>
                    <div class="sidebox__user-title">
                      <h5><a href="#">20200514_03</a></h5>
                      <p>多个输入</p>
                    </div>
                    <button class="sidebox__user-btn" type="button">
                      <i class="icon el-icon-view"></i>

                    </button>
                  </div>

                  <div class="sidebox__user">
                    <a href="#" class="sidebox__user-img">
                      <img src="../assets/r3.png" alt="">
                      <i class="el-icon-tickets"></i>
                    </a>
                    <div class="sidebox__user-title">
                      <h5><a href="#">20200512_01</a></h5>
                      <p>文件上传</p>
                    </div>
                    <button class="sidebox__user-btn" type="button">
                      <i class="icon el-icon-view"></i>

                    </button>
                  </div>
                  <div class="sidebox__user">
                    <a href="#" class="sidebox__user-img">
                      <img src="../assets/r3.png" alt="">
                      <i class="el-icon-tickets"></i>
                    </a>
                    <div class="sidebox__user-title">
                      <h5><a href="#">20200511_02</a></h5>
                      <p>文件上传</p>
                    </div>
                    <button class="sidebox__user-btn" type="button">
                      <i class="icon el-icon-view"></i>

                    </button>
                  </div>
                  <div class="sidebox__user">
                    <a href="#" class="sidebox__user-img">
                      <img src="../assets/r3.png" alt="">
                      <i class="el-icon-tickets"></i>
                    </a>
                    <div class="sidebox__user-title">
                      <h5><a href="#">20200511_01</a></h5>
                      <p>文件上传</p>
                    </div>
                    <button class="sidebox__user-btn" type="button">
                      <i class="icon el-icon-view"></i>

                    </button>
                  </div>
                </div>
                <a href="#" class="sidebox__more" @click="showCompu">更多</a>
              </div>
              <!-- end sidebox -->
              <!-- sidebox -->
              <div class="sidebox sidebox--desk" style="width: 300px;float:left;margin-left: 40px;height: 510px;">
                <h4 class="sidebox__title quanxian">权限情况</h4>
                <div class="sidebox__content">
                  <div class="sidebox__job">
                    <div class="sidebox__job-title">
                      <a href="#">大数据分析展示</a>
                      <span>拥有</span>
                    </div>
                    <p class="sidebox__job-description">通过不同维度对大量企业信息进行分析
                    </p>
                  </div>
                  <div class="sidebox__job">
                    <div class="sidebox__job-title">
                      <a href="#">文件上传批量测评企业</a>
                      <span>拥有</span>
                    </div>
                    <p class="sidebox__job-description">可实现大量企业数据同时测评
                    </p>
                  </div>

                  <div class="sidebox__job">
                    <div class="sidebox__job-title">
                      <a href="#">查询系统企业信息</a>
                      <span>拥有</span>
                    </div>
                    <p class="sidebox__job-description">拥有系统企业查询权限
                    </p>
                  </div>

                  <div class="sidebox__job">
                    <div class="sidebox__job-title">
                      <a href="#">单个查询实时生成企业数据</a>
                      <span>拥有</span>
                    </div>
                    <p class="sidebox__job-description">快速生成结果查询企业数据报告
                    </p>
                  </div>

                  <div class="sidebox__job">
                    <div class="sidebox__job-title">
                      <a href="#">批量查询实时生成企业数据</a>
                      <strong>68元/月</strong>
                    </div>
                    <p class="sidebox__job-description">同时生成多个企业数据报告
                    </p>
                  </div>

                  <div class="sidebox__job">
                    <div class="sidebox__job-title">
                      <a href="#">大数据分析投屏展示</a>
                      <strong>48元/月</strong>
                    </div>
                    <p class="sidebox__job-description">应用于宣传推广需要
                    </p>
                  </div>

                  <div class="sidebox__job">
                    <div class="sidebox__job-title">
                      <a href="#">推荐查询企业</a>
                      <strong>78元/月</strong>
                    </div>
                    <p class="sidebox__job-description">在未知企业ID时可查看推荐企业信息
                    </p>
                  </div>
                </div>
                <a href="#" class="sidebox__more" @click="showSet">更多</a>
              </div>
              <!-- end sidebox -->


            </div>
            <div class="myCompu">
              <!-- filter -->
              <div class="sidebox" style="width: 280px;float: left;">
                <h4 class="sidebox__title" style="width: 239px">搜索 <button type="button">清除</button></h4>

                <div class="filter">
                  <div class="filter__group">
                    <label class="filter__label">关键词:</label>
                    <input type="text" class="filter__input" placeholder="请搜索">
                  </div>

                  <div class="filter__group">
                    <label for="skills2" class="filter__label">测评类型:</label>

                    <div class="filter__select-wrap">
                      <select name="skills2" id="skills2" class="filter__select">
                        <option>单个输入</option>
                        <option>多个输入</option>
                        <option>文件上传</option>
                        <option>不限</option>

                      </select>
                    </div>
                  </div>

                  <div class="filter__group filter__group--last">
                    <label class="filter__label">日期:</label>
                    <input type="text" class="filter__input" placeholder="请选择日期">
                  </div>

                  <div class="filter__group">
                    <button class="filter__btn" type="button"><span>搜索</span></button>
                  </div>
                </div>
              </div>
              <!-- end filter -->
              <!-- company -->
                <div class="company" style="float: left;margin-left: 40px">
                  <div class="company__logo">
                    <img src="../assets/r3.png" alt="">
                  </div>

                  <div class="company__wrap">
                    <h2 class="company__title"><a href="#">20200515_01</a></h2>

                    <p class="company__text">文件上传</p>
                  </div>

                  <div class="company__actions">
                    <div class="post__location">
                      <i class="icon el-icon-caret-right"></i>
                      <span>已保存</span>
                    </div>

                    <div class="post__actions">
                      <a class="post__actions-btn post__actions-btn--green" href="#">
                        <i class="el-icon-more"></i>
                      </a>
                      <a class="post__actions-btn post__actions-btn--red" href="#">
                        <i class="el-icon-delete"></i>
                      </a>
                    </div>
                  </div>
                </div>
              <!-- end company -->
              <!-- company -->
              <div class="company" style="float: left;margin-left: 40px">
                <div class="company__logo">
                  <img src="../assets/r3.png" alt="">
                </div>

                <div class="company__wrap">
                  <h2 class="company__title"><a href="#">20200514_03</a></h2>

                  <p class="company__text">文件上传</p>
                </div>

                <div class="company__actions">
                  <div class="post__location">
                    <i class="icon el-icon-caret-right"></i>
                    <span>已保存</span>
                  </div>

                  <div class="post__actions">
                    <a class="post__actions-btn post__actions-btn--green" href="#">
                      <i class="el-icon-more"></i>
                    </a>
                    <a class="post__actions-btn post__actions-btn--red" href="#">
                      <i class="el-icon-delete"></i>
                    </a>
                  </div>
                </div>
              </div>
              <!-- end company -->
              <!-- company -->
              <div class="company" style="float: left;margin-left: 40px">
                <div class="company__logo">
                  <img src="../assets/r1.png" alt="">
                </div>

                <div class="company__wrap">
                  <h2 class="company__title"><a href="#">20200514_02</a></h2>

                  <p class="company__text">单个输入</p>
                </div>

                <div class="company__actions">
                  <div class="post__location">
                    <i class="icon el-icon-caret-right"></i>
                    <span>已保存</span>
                  </div>

                  <div class="post__actions">
                    <a class="post__actions-btn post__actions-btn--green" href="#">
                      <i class="el-icon-more"></i>
                    </a>
                    <a class="post__actions-btn post__actions-btn--red" href="#">
                      <i class="el-icon-delete"></i>
                    </a>
                  </div>
                </div>
              </div>
              <!-- end company -->
              <!-- company -->
              <div class="company" style="float: left;margin-left: 40px">
                <div class="company__logo">
                  <img src="../assets/r2.png" alt="">
                </div>

                <div class="company__wrap">
                  <h2 class="company__title"><a href="#">20200514_01</a></h2>

                  <p class="company__text">多个输入</p>
                </div>

                <div class="company__actions">
                  <div class="post__location">
                    <i class="icon el-icon-caret-right"></i>
                    <span>已保存</span>
                  </div>

                  <div class="post__actions">
                    <a class="post__actions-btn post__actions-btn--green" href="#">
                      <i class="el-icon-more"></i>
                    </a>
                    <a class="post__actions-btn post__actions-btn--red" href="#">
                      <i class="el-icon-delete"></i>
                    </a>
                  </div>
                </div>
              </div>
              <!-- end company -->
              <!-- company -->
              <div class="company" style="float: left;margin-left: 40px">
                <div class="company__logo">
                  <img src="../assets/r2.png" alt="">
                </div>

                <div class="company__wrap">
                  <h2 class="company__title"><a href="#">20200514_01</a></h2>

                  <p class="company__text">多个输入</p>
                </div>

                <div class="company__actions">
                  <div class="post__location">
                    <i class="icon el-icon-caret-right"></i>
                    <span>已保存</span>
                  </div>

                  <div class="post__actions">
                    <a class="post__actions-btn post__actions-btn--green" href="#">
                      <i class="el-icon-more"></i>
                    </a>
                    <a class="post__actions-btn post__actions-btn--red" href="#">
                      <i class="el-icon-delete"></i>
                    </a>
                  </div>
                </div>
              </div>
              <!-- end company -->
              <!-- company -->
              <div class="company" style="float: left;margin-left: 40px">
                <div class="company__logo">
                  <img src="../assets/r2.png" alt="">
                </div>

                <div class="company__wrap">
                  <h2 class="company__title"><a href="#">20200514_01</a></h2>

                  <p class="company__text">多个输入</p>
                </div>

                <div class="company__actions">
                  <div class="post__location">
                    <i class="icon el-icon-caret-right"></i>
                    <span>已保存</span>
                  </div>

                  <div class="post__actions">
                    <a class="post__actions-btn post__actions-btn--green" href="#">
                      <i class="el-icon-more"></i>
                    </a>
                    <a class="post__actions-btn post__actions-btn--red" href="#">
                      <i class="el-icon-delete"></i>
                    </a>
                  </div>
                </div>
              </div>
              <!-- end company -->

            </div>
            <div class="mySet">


              <div class="container2">
                <div class="component">
                  <table>
                    <thead>
                    <tr>
                      <th>权限</th>
                      <th>拥有</th>
                      <th>描述</th>
                      <th>价格</th>
                      <th>操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr><td class="user-name">查询添加企业</td><td class="user-email">是</td><td class="user-phone">可查看非官方提供的企业信息 </td><td class="user-mobile">免费</td><td class="toUser"><el-button type="text">使用</el-button></td></tr>
                    <tr><td class="user-name">查看企业六维特征分析</td><td class="user-email">是</td><td class="user-phone">提供六维特征图文分析 </td><td class="user-mobile">免费</td><td class="toUser"><el-button type="text">使用</el-button></td></tr>
                    <tr><td class="user-name">查看企业预警信息</td><td class="user-email">是</td><td class="user-phone">提供预警信息 </td><td class="user-mobile">免费</td><td class="toUser"><el-button type="text">使用</el-button></td></tr>
                    <tr><td class="user-name">提供多种僵尸企业测试模型</td><td class="user-email">是</td><td class="user-phone">针对不同数据量类型进行僵尸企业测评 </td><td class="user-mobile">免费</td><td class="toUser"><el-button type="text">使用</el-button></td></tr>
                    <tr><td class="user-name">大数据分析展示</td><td class="user-email">是</td><td class="user-phone">通过不同维度对大量企业信息进行分析 </td><td class="user-mobile">免费</td><td class="toUser"><el-button type="text">使用</el-button></td></tr>
                    <tr><td class="user-name">文件上传批量测评企业</td><td class="user-email">是</td><td class="user-phone">可实现大量企业数据同时测评 </td><td class="user-mobile">9.9元/月</td><td class="toUser"><el-button type="text">使用</el-button></td></tr>
                    <tr><td class="user-name">查询系统企业信息</td><td class="user-email">是</td><td class="user-phone">拥有系统企业查询权限 </td><td class="user-mobile">9.9元/月</td><td class="toUser"><el-button type="text">使用</el-button></td></tr>
                    <tr><td class="user-name">单个查询实时生成企业数据</td><td class="user-email">是</td><td class="user-phone">快速生成结果查询企业数据报告 </td><td class="user-mobile">9.9元/月</td><td class="toUser"><el-button type="text">使用</el-button></td></tr>
                    <tr><td class="user-name">批量查询实时生成企业数据</td><td class="user-email">否</td><td class="user-phone">同时生成多个企业数据报告 </td><td class="user-mobile">68元/月</td><td class="toBuy"><el-button type="text">购买</el-button></td></tr>
                    <tr><td class="user-name">大数据分析投屏展示</td><td class="user-email">否</td><td class="user-phone">应用于宣传推广需要 </td><td class="user-mobile">48元/月</td><td class="toBuy"><el-button type="text">购买</el-button></td></tr>
                    <tr><td class="user-name">推荐查询企业</td><td class="user-email">否</td><td class="user-phone">在未知企业ID时可查看推荐企业信息  </td><td class="user-mobile">78元/月</td><td class="toBuy"><el-button type="text">购买</el-button></td></tr>
                    <tr><td class="user-name">查看3D企业</td><td class="user-email">是</td><td class="user-phone">形成3维企业人物 </td><td class="user-mobile">109元/月</td><td class="toBuy"><el-button type="text">购买</el-button></td></tr>

                    </tbody>
                  </table>
                </div>

              </div><!-- /container -->
            </div>




            <div class="exit">exit</div>
          </div>
        </div>
        <!-- /#page-content-wrapper -->
      </div>
    </div>
</template>

<script>

  import $ from 'jquery'


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
  @import "../assets/style.css";
  @import "../assets/bootstrap-reboot.min.css";
  @import "../assets/bootstrap-grid.min.css";
  @import "../assets/main.css";
  @import "../assets/component.css";
  @import "../assets/basci.css";
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
  .footer,.title{
    box-sizing: content-box;
  }
  .footer{
    height: 38px;
    margin-left: 0px;
    padding-left: 50px;
  }
  .container{
    color: white;
  }
  .footer{
    z-index: 1000;
  }
  .quanxian{
    width: 86%;
  }
  .myInfo{
    margin-left: 50px;
  }
  .company__logo
  {
    margin-left: 10px;
  }
  .sidebox__job-title span{
    color: #5daf34;
  }
  .sidebox__job-title strong{
    color: #99a9bf;
    font-size: 14px;
    font-weight: 600;
    line-height: 100%;
  }
  .container2{
    color: #7c8d87;
  }
  .toUser{
    color: #5daf34;
  }
  .toBuy{
    color: #3a8ee6;
  }
</style>
