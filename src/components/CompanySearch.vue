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
          <span class="active"> <router-link to="/companysearch">企业信息查询</router-link></span>
          <span ><router-link to="/computed">僵尸企业测评</router-link></span>
          <span><router-link  to="/bigdata">大数据分析</router-link ></span>
          <span><router-link to="/me">个人中心</router-link></span>
        </div>
      </div>
      <div id="container">

      </div>
      <div class="sear_input"  v-if="show_item" style="position: fixed;margin-left: 500px">
        <el-input placeholder="请输入企业编号" v-model="select_key" class="input-with-select" style="width: 80%"></el-input>
        <el-button slot="append" icon="el-icon-search" type="primary" @click="to_search"></el-button>

      </div>
      <div class="sear_input_later"  v-if="!show_item" style="position: fixed;margin-left: 440px;margin-top: 50px">
        <el-input placeholder="请输入企业编号" v-model="select_key" class="input-with-select" style="width: 80%"></el-input>
        <el-button slot="append" icon="el-icon-search" type="primary" ></el-button>

      </div>
      <div class="table" v-if="!show_item" >
        <template>
          <el-table
            :data="tableData"
            style="width: 100%"
            >
            <el-table-column
              prop="id"
              label="企业编号"
              align="center"
              >
            </el-table-column>
            <el-table-column
              prop="zone"
              label="所在地区"
              align="center"
             >
            </el-table-column>
            <el-table-column
              prop="industry"
              align="center"
              label="所属行业">
            </el-table-column>
            <el-table-column
              prop="warn"
              align="center"
              label="备注">
              <template slot-scope="scope">
                <el-tag v-if="isCorpse(scope)"
                  :type="scope.row.warn === '1' ? 'danger' : 'warning'"
                  close-transition>僵尸企业</el-tag>
              </template>
            </el-table-column>
            <el-table-column
              prop="co"
              align="center"
              label="详情">
              <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">查看</el-button>
                </template>
            </el-table-column>
          </el-table>
        </template>
      </div>
      <div class="ranNum">
        <a href="#" @click="startNumber">任意选择企业</a>
      </div>
      <div class="divCenter"></div>
    </div>
</template>

<script>
  import axios from 'axios';
  import $ from 'jquery'
// import "../assets/numberbomb"
  export default {
        name: "CompanySearch",
      data(){
          return{
            isCollapse: !false,
            timer: "",//定义一个定时器的变量
            currentTime: "----------------------", // 获取当前时间
            select_tpye:'',
            select_key:'',
            show_item:!false,
            testdata:'',
            tableData: [
              {
              id: '48913423',
              zone: '浙江',
              industry: '服务业'
            },{
              id: '48256863',
              zone: '广西',
              industry: '工业',
                warn:'1'
            },{
              id: '48567977',
              zone: '北京',
              industry: '服务业'
            },{
              id: '48234973',
              zone: '湖南',
              industry: '社区服务'
            },{
              id: '56474489',
              zone: '浙江',
              industry: '工业'
            },{
              id: '46743489',
              zone: '广东',
              industry: '商业服务',
                warn:'1'
              },{
              id: '88744348',
              zone: '广东',
              industry: '服务员',
              },
            ],
            timerNum:null,
            number:1,
            colors :["#f26395", "#62efab", "#ef7658", "#ffe868", "#80e3f7", "#d781f9"]
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
      methods:{
        startNumber(){
          if (this.timerNum) { //已经开始了
            this.stop();
          }
          else {
            this.start();
          }
        },
        start() {
          this.timerNum = setInterval(this.createNumber, 100);
        },
        stop() {
          clearInterval(this.timerNum);
          this.timerNum = null;
        },
        createNumber() {
          //生成数字
          var span = document.createElement("span");
          var _this=this;
          var divCenter=$(".divCenter");
          var container = document.getElementById("container"); //数字容器
          span.innerText = this.number;
          divCenter.innerText = this.number; //设置中间div的文本
          if (this.isPrime()) {
            //随机从颜色数组中取出一个颜色
            //生成随机下标
            var index = this.getRandom(0, this.colors.length); // 0 ~ colors.length - 1
            var color = this.colors[index]; //取出随机颜色
            span.style.color = this.color;
            //添加阴影
            span.style.textShadow = "0 0 3px " + this.color;
            //在中间新建一个div，然后让它飘动
            var center = document.createElement("div");
            center.className = "center";
            center.innerText = this.number;
            center.style.color = this.color;
            $(".ranNum").append(center);
            //为什么要等待：希望先将元素加入到页面，让浏览器把元素渲染出来，然后再更改样式，这样才能触发动画
            setTimeout(function () {
              //1. 设置transform: translate(?, ?)
              center.style.transform = "translate(" + _this.getRandom(-300, 300) + "px, " + _this.getRandom(-300, 300) + "px)";
              //2. 设置opacity：0
              center.style.opacity = 0;
            }, 303);

            //动画结束后，移除新增的div
            center.addEventListener("transitionend", function () {
              //动画结束后运行的事件
              center.remove(); //移除
            })
          }
          container.appendChild(span);
          // span.scrollIntoView(); //让滚动条滚动到该元素可以被显示的位置
          //数字自增
          this.number++;
        },
        isPrime() {
          //素数：只能被1和自身整数
          //小于2的数字，一定不是素数
          if (this.number < 2) {
            return false;
          }
          //说明：从 2 到 number-1 之间，如果找到有一个数能整数number，则number 不是素数
          for (var i = 2; i <= this.number - 1; i++) {
            if (this.number % i === 0) {
              //发现2到number-1之间，有一个数字能整除number，number不是素数
              return false;
            }
          }
          //循环结束了，此时还没有返回，说明，没有找到能整除number的数字
          return true;
        },
        getRandom(min, max) {
          return Math.floor(Math.random() * (max - min) + min);
        },
        to_search(){
          this.axios.get('http://47.98.131.111/zombie_dig/CompanyInfo/').then((response)=>{
            this.testdata=response;
            console.log(response);
            this.show_item=!this.show_item;

          }).catch((response)=>{
            console.log(response);
            this.show_item=!this.show_item;

          })

        },
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
        isCorpse(scope){
          // console.log(scope.row)
          if (scope.row.warn=='1') {
            // console.log("2222");
            return true;
          }
        },
        toDetail(scope){
          console.log("2222");
          console.log(scope);

        },
        handleEdit(index, row) {
          console.log(index, row);
          console.log(row.id);
           var id=row.id;
          this.$router.push({path:'/companybase/'+id})

        },
      }
    }
</script>

<style scoped>
  @import "../assets/basci.css";
  .body{
    background-image: url("../assets/城市.jpg");
    background-color: black;
    background-repeat: no-repeat;
    background-position: center top;
    height: 740px;
    /*opacity: .5;*/
  }
  .ranNum a{
    color: #e4e4e4;
    position: absolute;
    right: 100px;
    bottom: 99px;
    text-decoration: none;

  }

  #container span {
    float: left;
    /* 最小宽度为2em */
    min-width: 2em;
    margin-right: 20px;
    color: white;
    display: inline-block;
    margin: 6px;

    /*padding: 4px;*/
  }
  #container{
    width: 1000px;
    position: absolute;
    top: 120px;
    left: 20px;
    background-color: #2f2f2f;
    opacity: 90%;
    color: white;
    font-size: 24px;

  }
  .center {
    position: fixed;
    left: 50%;
    top: 50%;
    font-size: 26px;
    color: #fff;
    transform: translate(-50%, -50%);
    /*
    1s ease-in 对于所有的css属性，先慢后快的变化，动画在1秒钟之内完成
    opacity 0.7s ease-in 0.3s 对于opacity属性，先慢后快的变化，动画在0.7秒内完成，并且，整个动画延迟0.3秒后执行
     */
    transition: 1s ease-in, opacity 0.7s ease-in  0.3s;
  }
  .menubar{
    /*float: left;*/
    margin-top: 100px;
    /*margin-left: 20px;*/
    position:fixed;
    top:20px;
    left:15px;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
.sear_input{
  width: 600px;
  margin: 250px auto;
  /*background-color: #5daf34;*/
}
.sear_input_later{
  width: 600px;
  margin: 80px auto;
}
  .header{
    background-color:#f0f0f0 ;
    font-size: 22px;
    font-family: "微软雅黑 Light";
  }
.table{
  width: 760px;
  margin: 0 auto;
  background-color: #FFFFFF;
  padding: 8px;
  position: fixed;
  margin-left: 340px;
  margin-top: 150px;
  /*height: 400px;*/
  border-radius: 4px;
}
  .footer,.title{
    box-sizing: content-box;
  }
  .footer{
    height: 38px;
    margin-left: 0px;
    padding-left: 50px;
  }
</style>
