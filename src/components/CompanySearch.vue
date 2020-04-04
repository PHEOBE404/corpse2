<template>
    <div class="body">
      <div class="footer">
        <span class="title"><router-link to="/home">
          <img src="../assets/logo-teng-full.png" width="240px"></router-link></span>
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
    </div>
</template>

<script>
  import axios from 'axios';
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
              id: '489123',
              zone: '浙江',
              industry: '服务业'
            },{
              id: '4823',
              zone: '江西',
              industry: '工业',
                warn:'1'
            },{
              id: '489',
              zone: '北京',
              industry: '服务业'
            },
            ]
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
        to_search(){
          this.axios.get('http://47.98.131.111/zombie_dig/CompanyInfo/28').then((response)=>{
            this.testdata=response;
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
    background-repeat: no-repeat;
    background-position: center top;
    height: 740px;
    /*opacity: .5;*/
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
</style>
