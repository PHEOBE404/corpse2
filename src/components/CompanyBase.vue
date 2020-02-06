<template>
    <div style="width: 100%">
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
      <div class="id">
      <h3>企业{{$route.params.id}}号</h3>
      </div>
      <div class="photo">

      </div>
      <div class="baseInfo" >
        <el-row :gutter="20">
          <el-col :span="4"><div class="grid-content bg-purple">
            <span class="bord">1</span>企业名称</div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple">未命名</div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple"><span class="bord">1</span>所属地区</div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple">上海市</div></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="4"><div class="grid-content bg-purple"><span class="bord">1</span>注册时间</div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple">2005年</div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple"><span class="bord">1</span>企业类型</div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple">农民专业合作社</div></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="4"><div class="grid-content bg-purple"><span class="bord">1</span>注册资本</div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple">2050 万</div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple"><span class="bord">1</span>控制人类型</div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple">企业法人</div></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8"><div class="grid-content bg-purple"><span class="bord">1</span>知识产权</div></el-col>
          <el-col :span="16">
            <div class="grid-content bg-purple">

              <el-tag type="success">享有专利</el-tag>
              <el-tag type="success">享有商标</el-tag>
              <el-tag type="info">未享有著作权</el-tag>
          </div></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8"><div class="grid-content bg-purple"><span class="bord">1</span>僵尸企业测评结果</div></el-col>
          <el-col :span="16">
            <div class="grid-content bg-purple warn">僵尸企业</div></el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="8"><div class="grid-content bg-purple"><span class="bord">1</span>企业安全测评结果</div></el-col>
          <el-col :span="16"><div class="grid-content bg-purple ">不安全</div></el-col>
        </el-row>
      </div>
      <div class="tab">
        <template>
          <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
            <el-tab-pane label="数据分析" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="企业特征" name="second">

              <div id="radioCont">
              </div>
              <div id="radioText">


                <el-collapse v-model="activeNames" @change="handleChange">
                  <el-collapse-item :name=index v-for="(item,index) in bbb"  >
                    <template slot="title">
                      <img src="../assets/边框.png" width="16px" height="20px" style="margin-left: 10px;margin-right: 10px">
                                     <div  class="itemback">       <h3>{{item.k}}</h3>
                                     </div>
                    </template>
                    {{item.v}}
                  </el-collapse-item>
                </el-collapse>
              </div>


            </el-tab-pane>
            <el-tab-pane label="企业预警" name="third">
              <div>

            </div>
            </el-tab-pane>
            <el-tab-pane label="3D企业" name="fourth">建设中</el-tab-pane>
          </el-tabs>
        </template>
      </div>


<!--{{li}}-->
    </div>
</template>

<script>
  import $ from 'jquery'

  export default {
        name: "CompanyBase",
      data(){
          return{
            activeName2: 'second',
            li:this.$route.params.id,//可以返回当前企业id
            isCollapse: !false,
            figure:null,//接收后台的数据
            figure_text:null,
            activeNames: [0,1,2,3,4,5],
            bbb:[ //放维度描述
              {
                k:'企业规模',
                v:'企业规模指数为1.66，属于小型企业'

              }, {
                k:'创新能力',
                v:'创新能力指数为3，处于中等水平'
              },{
                k:'盈利能力',
                v:'盈利能力指数为0.37，处于较低水平'
              },{
                k:'发展能力',
                v:'发展能力为2.92，处于中等水平'
              },{
                k:'营运能力',
                v:'营运能力为3.63，处于中等偏上水平'
              },{
                k:'偿清能力',
                v:'偿清能力指数为3.97，处于良好水平'
              },
            ]

          }
      },
    mounted(){
      // alert($(".warn").text());

      this.init_radio();
      if ($(".warn").text()=="僵尸企业") {
            $(".warn").addClass("isred");
          }
      ;

    },
      computed:{
      },

    methods:{
      init_radio: function () {
        var echarts = require('echarts');

        var myChart_1 = echarts.init(document.getElementById('radioCont'));
        myChart_1.setOption({
          title: {
            text: '企业六维特征',
            textStyle:{
              color:'#1A6FC9',
            },
            padding:[5,300]
          },
          tooltip: {},
          legend: { //图例内容,点击能取消/显示图
            data: []//跟下面的data要对应
          },
          radar: {
            center:['50%','55%'],
            name: { //六个角上的文字标签
              // backgroundColor:'red',
              textStyle: {
                color: '#000',
                fontSize:16,
                lineHeight:24,
                // backgroundColor: '#f0f0f0',
                borderColor:'#1A6FC9',
                borderWidth:1,
                borderRadius: 3,//标签圆角
                padding: [3, 10], //标签长宽
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                shadowBlur: 1
              }
            },
            axisLine:{
              // show:false
              lineStyle:{
                color:'#d9eeec',
                width:2
              },


            },
            splitLine:{
              // show:false,
              lineStyle:{
                color:'#d9eeec',
                width:2
              },
            },
            splitArea:{
              areaStyle:{
              color:['#ffffff','#d9eeec',],
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 4

              },
            },

            indicator: [ //各个角的最大值
              {name: '企业规模', max: 5},
              {name: '创新能力', max: 5},
              {name: '盈利能力', max: 5},
              {name: '发展能力', max: 5},
              {name: '营运能力', max: 5},
              {name: '偿清能力', max: 5}
            ]
          },

          series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
              {
                value: [1.66,3,1.30,2.92,3.63,3.97],
                name: this.li+'号企业',
                label: {
                  show: true,
                  formatter: function(params) {
                    return params.value;
                  },
                  distance:8,
                  position:'inside',
                  fontSize:18
                }
              },

            ],
            itemStyle:{
              color:'#3c70a4'
            },
            areaStyle:{
              opacity: 0.5
            }


          }]
        })
      },

      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleChange(val) {
        console.log(val);
      }
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
  .photo{
    width: 350px;
    height: 420px;
    background-color: #8c939d;
    margin-top: 0px;
    background-image: url("../assets/主题.png");
    margin-left: 200px;
    display: inline-block;
  }
  .id{
    width: 200px;
    height: 50px;
    /*margin-left: 420px;*/
    margin: 50px auto;
  }
  .baseInfo{
    width: 720px;
    height: 370px;
    /*background-color: #5daf34;*/
    /*margin-left: 500px;*/
    display: inline-block;
    margin-left: 10px;
    /*background-image: url("../assets/边框.png");*/
    /*background-position: center center;*/

  }
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    /*background: #d3dce6;*/
    font-size: 18px;
    /*background-image: url("../assets/边框.png");*/
    /*background-position: center right;*/
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    border-color: black;
    /*border*/
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .isred{
    color: red;
  }
  .tab{
    width: 1080px;
    height: 500px;
    /*background-color: #99a9bf;*/
    margin-left: 200px;
  }
  .bord{
    width: 7px;
    height: 22px;
    background-color: #1A6FC9;
    color: #1A6FC9;
    margin-right: 5px;
    display: inline-block;
  }
  #radioCont{
    margin-top: 20px;
    width: 700px;
    height: 680px;
    float: left;
  }
  .itemback{
    /*background-image: url("../assets/边框.png");*/
    /*background-color: #d1dbe5;*/
  }
</style>
