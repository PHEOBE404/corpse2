<template>
  <div class="body">
<!--  <div class="pre_fbx" v-if="pre_fbx" style="width: 100%;height: 800px;" @click="init_fbx">-->
<!--    <iframe frameborder="0" scrolling="no" marginwidth="0" marginheight="0" width="100%" height="100%" src="../static/fbx_big.html"></iframe>-->
<!--  </div>-->
    <div class="footer">
     <span class="title"><router-link to="/home">
          <img src="../assets/logo-teng-full.png" width="240px">
         </router-link></span>

      <div class="userfooter">
        <span class="current_time">{{currentTime}}</span>
        <span class="user_a">用户5988741</span>
      </div>
      <div class="rightmenu">
        <span class="active"><router-link to="/companysearch">企业信息查询</router-link></span>
        <span ><router-link to="/computed">僵尸企业测评</router-link></span>
        <span><router-link  to="/bigdata">大数据分析</router-link ></span>
        <span><router-link to="/me">个人中心</router-link></span>
      </div>
    </div>

    <div style="width: 100%" v-if="!pre_fbx">
<div class="left_contain">
  <div class="left_back">
<!--    <i class="el-icon-back"></i>返回-->
<!--    <el-button type="primary" icon="el-icon-back">返回</el-button>-->
  </div>
</div>
      <div class="right_contain">
        <div class="right_title1">企业画像信息 </div>
        <div class="right_1">

        </div>
        <div class="right_title2">企业基本信息 </div>
        <div class="right_2">
                  <el-row :gutter="5">
                    <el-col :span="5"><div class="grid-content ">企业名称</div></el-col>
                    <el-col :span="6"><div class=" bg-purple">未命名</div></el-col>
                    <el-col :span="5"><div class="grid-content ">所属地区</div></el-col>
                    <el-col :span="7"><div class=" bg-purple">上海市</div></el-col>
                  </el-row>
                  <el-row :gutter="5">
                    <el-col :span="5"><div class="grid-content ">注册年份</div></el-col>
                    <el-col :span="6"><div class=" bg-purple">2005年</div></el-col>
                    <el-col :span="5"><div class="grid-content ">企业类型</div></el-col>
                    <el-col :span="7"><div class=" bg-purple">农民专业合作社</div></el-col>
                  </el-row>
                  <el-row :gutter="5">
                    <el-col :span="5"><div class="grid-content ">注册资本</div></el-col>
                    <el-col :span="6"><div class=" bg-purple">2050 万</div></el-col>
                    <el-col :span="5"><div class="grid-content ">控制人类型</div></el-col>
                    <el-col :span="7"><div class=" bg-purple">企业法人</div></el-col>
                  </el-row>
        </div>
        <div class="right_title3">企业标签 </div>
        <div class="right_3">
          <div style="margin-top: 5px;text-align: center">
<!--            <p></p>-->
            <el-radio-group v-model="radio6"  size="mini" fill="red">
              <el-radio-button label="普通企业" disabled></el-radio-button>
              <el-radio-button label="僵尸企业"></el-radio-button>
            </el-radio-group>
            <el-radio-group v-model="radio7"  size="mini">
              <el-radio-button label="添加企业" disabled></el-radio-button>
              <el-radio-button label="系统企业" ></el-radio-button>
            </el-radio-group>
            <div class="tag">
              <ul>
                <li><a >商标</a></li>
                <li><a>著作权</a></li>
                <li><a>交通运输业</a></li>
                <li><a>交通运输业</a></li>
                <li><a>交通运输业</a></li>
                <li><a>交通运输业</a></li>
                <li><a>交通运输业</a></li>
                <li><a>交通运输业</a></li>
                <li><a>交通运输业</a></li>
                <li><a>交通运输业</a></li>
                <li><a>交通运输业</a></li>
                <li><a>交通运输业</a></li>
                <li><a>交通运输业</a></li>
                <li><a>交通运输业</a></li>
              </ul>
            </div>
          </div>
        </div>
    </div>

<!--      <div class="id">-->
<!--      <h3>企业{{$route.params.id}}号</h3>-->
<!--      </div>-->
<!--      <div class="photo">-->
<!--&lt;!&ndash;        <iframe src="home" ></iframe>&ndash;&gt;-->
<!--&lt;!&ndash;        <iframe name="q" frameborder="0" scrolling="no" marginwidth="0" marginheight="0" width="100%" height="470" src="../static/fbx.html"></iframe>&ndash;&gt;-->
<!--      </div>-->
<!--      <div class="baseInfo" >-->
<!--        <el-row :gutter="20">-->
<!--          <el-col :span="4"><div class="grid-content bg-purple">-->
<!--            <span class="bord">1</span>企业名称</div></el-col>-->
<!--          <el-col :span="8"><div class="grid-content bg-purple">未命名</div></el-col>-->
<!--          <el-col :span="4"><div class="grid-content bg-purple"><span class="bord">1</span>所属地区</div></el-col>-->
<!--          <el-col :span="8"><div class="grid-content bg-purple">上海市</div></el-col>-->
<!--        </el-row>-->
<!--        <el-row :gutter="20">-->
<!--          <el-col :span="4"><div class="grid-content bg-purple"><span class="bord">1</span>注册时间</div></el-col>-->
<!--          <el-col :span="8"><div class="grid-content bg-purple">2005年</div></el-col>-->
<!--          <el-col :span="4"><div class="grid-content bg-purple"><span class="bord">1</span>企业类型</div></el-col>-->
<!--          <el-col :span="8"><div class="grid-content bg-purple">农民专业合作社</div></el-col>-->
<!--        </el-row>-->
<!--        <el-row :gutter="20">-->
<!--          <el-col :span="4"><div class="grid-content bg-purple"><span class="bord">1</span>注册资本</div></el-col>-->
<!--          <el-col :span="8"><div class="grid-content bg-purple">2050 万</div></el-col>-->
<!--          <el-col :span="4"><div class="grid-content bg-purple"><span class="bord">1</span>控制人类型</div></el-col>-->
<!--          <el-col :span="8"><div class="grid-content bg-purple">企业法人</div></el-col>-->
<!--        </el-row>-->
<!--        <el-row :gutter="20">-->
<!--          <el-col :span="8"><div class="grid-content bg-purple"><span class="bord">1</span>知识产权</div></el-col>-->
<!--          <el-col :span="16">-->
<!--            <div class="grid-content bg-purple">-->

<!--              <el-tag type="success">享有专利</el-tag>-->
<!--              <el-tag type="success">享有商标</el-tag>-->
<!--              <el-tag type="info">未享有著作权</el-tag>-->
<!--          </div></el-col>-->
<!--        </el-row>-->
<!--        <el-row :gutter="20">-->
<!--          <el-col :span="8"><div class="grid-content bg-purple"><span class="bord">1</span>僵尸企业测评结果</div></el-col>-->
<!--          <el-col :span="16">-->
<!--            <div class="grid-content bg-purple warn">僵尸企业</div></el-col>-->
<!--        </el-row>-->

<!--        <el-row :gutter="20">-->
<!--          <el-col :span="8"><div class="grid-content bg-purple"><span class="bord">1</span>企业安全测评结果</div></el-col>-->
<!--          <el-col :span="16"><div class="grid-content bg-purple ">不安全</div></el-col>-->
<!--        </el-row>-->
<!--      </div>-->
<!--      <div class="tab">-->
<!--        <template>-->
<!--          <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">-->
<!--            <el-tab-pane label="数据分析" name="first">建设中</el-tab-pane>-->
<!--            <el-tab-pane label="企业特征" name="second">-->

<!--              <div id="radioCont">-->
<!--              </div>-->
<!--              <div id="radioText">-->


<!--                <el-collapse v-model="activeNames" @change="handleChange">-->
<!--                  <el-collapse-item :name=index v-for="(item,index) in bbb"  >-->
<!--                    <template slot="title">-->
<!--                      <i class="el-icon-caret-right"></i>-->
<!--&lt;!&ndash;                      <img src="../assets/边框.png" width="16px" height="20px" style="margin-left: 10px;margin-right: 10px">&ndash;&gt;-->
<!--                                     <div  class="itemback">       <h3>{{item.k}}</h3>-->
<!--                                     </div>-->
<!--                    </template>-->
<!--                    {{item.v}}-->
<!--                  </el-collapse-item>-->
<!--                </el-collapse>-->
<!--              </div>-->


<!--            </el-tab-pane>-->
<!--            <el-tab-pane label="企业预警" name="third">-->
<!--              <div>-->
<!--                <div id="mountNode"></div>-->

<!--            </div>-->
<!--            </el-tab-pane>-->
<!--            <el-tab-pane label="3D企业" name="fourth">建设中</el-tab-pane>-->
<!--          </el-tabs>-->
<!--        </template>-->
<!--      </div>-->


<!--{{li}}-->
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import G6 from '@antv/g6'

  export default {
        name: "CompanyBase",
      data(){

          return{
            radio6: '僵尸企业',
            radio7: '系统企业',
            pre_fbx:false,
            timer: "",//定义一个定时器的变量
            currentTime: "----------------------", // 获取当前时间
            activeName2: 'third',
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
      this.init_node();
      // if ($(".warn").text()=="僵尸企业") {
      //       $(".warn").addClass("isred");
      //     }
      ;
    // this.init_fbx();
    },

      computed:{

      },
created(){
//var iframe="<iframe  scrolling='no' width='100%'  src='../static/fbx_big.html'></iframe>"

  // $("body").append(iframe);
  // this.init_fbx();
  // setTimeout(() => {
  //   this.pre_fbx=false;
  // }, 5800);
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
          init_fbx(){
            console.log("222111112");

            $(".pre_fbx").animate({
                opacity:'0.3',
                height:'+=850px',
                width:'+=850px'
            },9000
              );
            console.log("2222")
          },
      toHome(){
        this.$router.push({path:'/home/'})
      },
          init_node:function(){
            const data = {
              // 点集
              nodes: [
                {
                  id: 'node1', // String，该节点存在则必须，节点的唯一标识
                  x: 400, // Number，可选，节点位置的 x 值
                  y: 200, // Number，可选，节点位置的 y 值
                  label:'预警',
                  size:60,
                  style:{
                  fill:'#1A6FC9'
                  },
                  labelCfg:{
                    shape:'circle',
                    style:{
                      fill:'#ffffff',
                      fontSize:18,
                      // backgroundColor:'#00ff00'
                    }
                  }
                },
                {
                  id: 'node2', // String，该节点存在则必须，节点的唯一标识
                  x: 250, // Number，可选，节点位置的 x 值
                  y: 200, // Number，可选，节点位置的 y 值
                  label:'资产总额警告',
                  size:100,
                  style:{
                    fill:'#F56C6C'
                  },
                  labelCfg:{
                    shape:'circle',
                    style:{
                      fill:'#ffffff',
                      fontSize:14,
                      // backgroundColor:'#00ff00'
                    }
                  }


                },{
                  id: 'node3', // String，该节点存在则必须，节点的唯一标识
                  x: 370, // Number，可选，节点位置的 x 值
                  y: 70, // Number，可选，节点位置的 y 值
                  label:'资本扩张能力警告',
                  size:130,
                  style:{
                    fill:'#F56C6C'
                  },
                  labelCfg:{
                    shape:'circle',
                    style:{
                      fill:'#ffffff',
                      fontSize:14,
                      // backgroundColor:'#00ff00'
                    }
                  }
                },{
                  id: 'node4', // String，该节点存在则必须，节点的唯一标识
                  x: 460, // Number，可选，节点位置的 x 值
                  y: 150, // Number，可选，节点位置的 y 值
                  label:'盈利能力',
                  size:70,
                  style:{
                    fill:'#909399'
                  },
                  labelCfg:{
                    shape:'circle',
                    style:{
                      fill:'#ffffff',
                      fontSize:14,
                      // backgroundColor:'#00ff00'
                    }
                  }
                },{
                  id: 'node5', // String，该节点存在则必须，节点的唯一标识
                  x: 560, // Number，可选，节点位置的 x 值
                  y: 220, // Number，可选，节点位置的 y 值
                  label:'负债额度',
                  size:70,
                  style:{
                    fill:'#909399'
                  },
                  labelCfg:{
                    shape:'circle',
                    style:{
                      fill:'#ffffff',
                      fontSize:14,
                      // backgroundColor:'#00ff00'
                    }
                  }
                },{
                  id: 'node6', // String，该节点存在则必须，节点的唯一标识
                  x: 480, // Number，可选，节点位置的 x 值
                  y: 290, // Number，可选，节点位置的 y 值
                  label:'偿债能力预警',
                  size:110,
                  style:{
                    fill:'#F56C6C'
                  },
                  labelCfg:{
                    shape:'circle',
                    style:{
                      fill:'#ffffff',
                      fontSize:14,
                      // backgroundColor:'#00ff00'
                    }
                  }
                },{
                  id: 'node6', // String，该节点存在则必须，节点的唯一标识
                  x: 360, // Number，可选，节点位置的 x 值
                  y: 320, // Number，可选，节点位置的 y 值
                  label:'创新能力',
                  size:120,
                  style:{
                    fill:'#909399'
                  },
                  labelCfg:{
                    shape:'circle',
                    style:{
                      fill:'#ffffff',
                      fontSize:14,
                      // backgroundColor:'#00ff00'
                    }
                  }
                },
              ],
              // 边集
              edges: [
                {
                  source: 'node1', // String，必须，起始点 id
                  target: 'node2', // String，必须，目标点 id

                },{
                  source: 'node1', // String，必须，起始点 id
                  target: 'node3', // String，必须，目标点 id

                },{
                  source: 'node1', // String，必须，起始点 id
                  target: 'node4', // String，必须，目标点 id

                },{
                  source: 'node1', // String，必须，起始点 id
                  target: 'node5', // String，必须，目标点 id

                },{
                  source: 'node1', // String，必须，起始点 id
                  target: 'node6', // String，必须，目标点 id

                },
              ],
            };
            const graph = new G6.Graph({
              container: 'mountNode', // String | HTMLElement，必须，在 Step 1 中创建的容器 id 或容器本身
              width: 800, // Number，必须，图的宽度
              height: 500, // Number，必须，图的高度,
              modes: {
                default: [
                  {
                    type: 'tooltip',
                    formatText(model) {
                      var item="<div style=' padding: 10px 6px;\n" +
                        "    background-color: rgba(255, 255, 255, 0.9);\n" +
                        "    border: 1px solid #e2e2e2;\n" +
                        "    border-radius: 4px;\n" +
                        "color: white;" +
                        "    background-color: black;'>" +
                        "当前资本扩张能力低于安全值,<br>请关注营业利润增长率等数据"+
                        "</div>";
                      var text="当前资本扩张能力<br>低于安全值,请....";


                      return item;
                    },
                  },
                ],
              },
              defaultNode:{ //结点

                labelCfg:{
                  shape:'circle',
                  style:{
                    fill:'#fff',
                    fontSize:20,
                    // backgroundColor:'#00ff00'
                  }
                }
              },
              defaultEdge:{ //结点之间
                shape: 'line-with-arrow',
                labelCfg:{
                  style:{
                    // fill:'#ff0000',
                    fontSize:20,
                  }
                }
              }
            });
            graph.data(data); // 读取 Step 2 中的数据源到图上
            graph.render(); // 渲染图

          },
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
  @import "../assets/basci.css";
  *{
    margin: 0;
    padding: 0;
  }
  .body{
    /*background-image: url("../assets/城市.jpg");*/
    background-repeat: no-repeat;
    background-position: center top;
    height: 740px;
    background-color: #041A29;

    color: #FFFFFF;

    /*opacity: .5;*/
  }
  .g6-tooltip {
    padding: 10px 6px;
    background-color: rgba(255, 255, 255, 0.9);
    border: 1px solid #e2e2e2;
    border-radius: 4px;
    background-color: black;
  }
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
    background-color: #00243A;
    margin-top: 0px;
    background-image: url("../assets/数字粒子.gif");
    background-repeat: no-repeat;
    margin-left: 200px;
    display: inline-block;
    font-size: 58px;
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
    margin-bottom: 10px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    /*border-radius: 4px;*/
    background-color: #000000;
  }

  .bg-purple {
    font-size: 12px;
    text-align: center;
    /*border-radius: 2px;*/
    min-height: 20px;
    border-color: black;
    height: 20px;
    background: #000000;
    opacity: 80%;

  }

  .grid-content {
    font-size: 12px;
    text-align: center;
    border-radius: 2px;
    min-height: 20px;
    border-width: 2px;
    border-style:solid;
    border-color: #1A6FC9;
    /*height: 20px;*/
    /*background-color: #2f2f2f;*/

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
  .footer{
    margin-left: 5%;
    width: 1350px;
    /*margin-top: 80px;*/
    display: inline-block;
    /*float: right;*/
  }
  .footer{
    margin-left: 50px;
    color: #FFFFFF;
    font-family: 微软雅黑;
    position: relative;
  }
  .userfooter{
    margin-right: -56px;
  }
  .left_contain{
    width: 76%;
    height: 705px;
    background-color: #041A29;

    background-image: url("../assets/art1.gif");
    background-repeat: no-repeat;
    /*-moz-transform:rotate(90deg);*/
    /*-webkit-transform:rotate(90deg);*/
    /*transform:rotate(90deg);*/
    /*filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=1);*/
    background-position: center;
    background-size:cover;
    display: inline-block;
    float: left;
    opacity: 90%;
  }

  .right_contain{
    width: 24%;
    height: 705px;
    background-color: #041A29;
    display: inline-block;
    /*margin-left: 1%;*/
    opacity: 95%;
  }
  .right_title1{
    padding: 10px;
    background-color: #000;
    border-radius: 3px;
    border-color: #2f2f2f;
    text-align: center;
  }
  .right_1{
    background-image: url("../assets/数字粒子.gif");
    width: 100%;
    height: 169px;
    opacity: 80%;

  }
  .right_title2{
    margin-top: 16px;
    padding: 10px;
    background-color: #000000;
    border-radius: 4px;
    border-color: #2f2f2f;
    text-align: center;
    height: 20px;
    opacity: 100%;
    /*margin-top: 5px;*/
  }
  .right_2{
    width: 100%;
    /*height: 169px;*/
    padding: 4px;
  }  .right_title3{
    padding: 10px;
    background-color: #000000;
    border-radius: 4px;
    border-color: #2f2f2f;
    text-align: center;
    height: 20px;
    /*margin-top: 5px;*/
  }
  .right_3{
    width: 100%;
    /*height: 169px;*/
    padding: 4px;
  }
  li{list-style:none}
  .tag{
    margin-top: 5px;
    text-align:center ;
    padding: 12px;
  }
  .tag ul li a{
    float: left;
    width: 150px;
    margin: 3px;
    /*background-color: #000000;*/
    font-size: 12px;
    line-height: 20px;
    border: #1A6FC9 solid 2px;
    border-radius: 2px;
    transition: all .1s ease 0.1s;

  }
  .tag ul li a:hover{
    background-color: #1A6FC9;
    opacity: 90%;

  }

  el-tag{
    width: 100px;
    /*padding: 4px;*/
  }

</style>
