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
        <span class="active"><router-link  to="/bigdata">大数据分析</router-link ></span>
        <span><router-link to="/me">个人中心</router-link></span>
      </div>
    </div>

    <div class="content">
      <el-row >
        <el-col :span="6">
          <div class="grid-content bg-purple" id="hangye" style="height: 220px">

        </div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple" style="height: 220px" id="ditu"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple" style="height: 220px" id="nianfen"></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple"id="nashui" style="height: 250px">
<p style="line-height: 20px;color: #fff;font-weight: 600">僵尸企业地域纳税排名</p>
<!--            <div style="width: 400px">-->
<!--              <span class="numberBord" >No.1</span><span class="numberText">江西</span> <span class="numberRadio">34%</span>-->
<!--              <el-progress percentage="80" status="exception" stroke-width=3 ></el-progress>-->
<!--            </div>-->
<!--            <div style="width: 400px">-->
<!--              <span class="numberBord" >No.2</span><span class="numberText">湖南</span> <span class="numberRadio">22%</span>-->
<!--              <el-progress percentage="70" status="exception" stroke-width=3></el-progress>-->
<!--            </div>-->
<!--            <div style="width: 400px">-->
<!--              <span class="numberBord" >No.3</span><span class="numberText">湖北</span> <span class="numberRadio">16%</span>-->
<!--              <el-progress percentage="64" status="exception" stroke-width=3></el-progress>-->
<!--            </div>-->
<!--            <div style="width: 400px">-->
<!--              <span style="font-size: 12px" >No.4</span><span class="numberText"> 江西</span> <span class="numberRadio">12%</span>-->
<!--              <el-progress percentage="40" status="success" show-text="false"stroke-width=3></el-progress>-->
<!--            </div>-->
<!--            <div style="width: 400px">-->
<!--              <span style="font-size: 12px" >No.5</span><span class="numberText"> 广东</span> <span class="numberRadio">10%</span>-->
<!--              <el-progress percentage="30" status="success" show-text="false"stroke-width=3></el-progress>-->

<!--            </div>-->
<!--            <div style="width: 400px">-->
<!--              <span class="numberBord" >No.6</span><span class="numberText">福建</span> <span class="numberRadio">9%</span>-->
<!--              <el-progress percentage="25" status="success" show-text="false"  stroke-width=3></el-progress>-->

<!--            </div>-->

        </div>
        </el-col>
<!--        <el-col :span="12"><div class="grid-content bg-purple-light" style="height: 10px"></div></el-col>-->
        <el-col :span="4"><div class="grid-content bg-purple" style="height: 250px;"id="hangyeText">
          <div style="color: #FFFFFF">
            <p style="color: #FFFFFF;font-family: 微软雅黑;font-weight: bolder">僵尸企业行业排名TOP6</p>
            <div class="table1">
              <table border="0"  align="center" style="border-collapse:separate; border-spacing:12px 2px;" >
                <tr style="font-size: 14px;" >
                  <th >行业</th>
                  <th >数量</th>
                  <th >占比</th>
                  <th >热度</th>
                </tr>
                <tr></tr>
                <tr>
                  <td>交通运输</td>
                  <td>2889</td>
                  <td>17.98%</td>
                  <td ><img src="../assets/lighting.png" width="24px"><img src="../assets/lighting.png" width="24px"></td>
                </tr>
                <tr>
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;工业</td>
                  <td>2655</td>
                  <td>16.52%</td>
                  <td ><img src="../assets/lighting.png" width="24px"></td>
                </tr>
                <tr>
                  <td>商业服务业</td>
                  <td>2651</td>
                  <td>16.49%</td>
                  <td ><img src="../assets/lighting.png" width="24px"></td>
                </tr> <tr>
                  <td>&nbsp;&nbsp;服务业</td>
                  <td>2642</td>
                  <td>16.44%</td>
                  <td ><img src="../assets/lighting.png" width="24px"></td>
                </tr><tr>
                  <td>社区服务</td>
                  <td>2623</td>
                  <td>16.32%</td>
                  <td ><img src="../assets/lighting.png" width="24px"></td>
                </tr><tr>
                  <td>&nbsp;&nbsp;零售业</td>
                  <td>2612</td>
                  <td>16.25%</td>
                  <td ><img src="../assets/lighting.png" width="24px"></td>
                </tr>
              </table>
              <span class="numberBord"></span> <span class="numberBord" style="width: 110px;"></span> <span class="numberBord"></span>
            </div>
          </div>
        </div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple" style="height: 250px;" id="zhuzuo"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple" style="height: 250px;" id="diquText">
          <div style="color: #FFFFFF">
            <p style="color: #FFFFFF;font-family: 微软雅黑;font-weight: bolder">僵尸企业地区排名TOP6</p>
            <div class="table1">

              <table border="0" style="border-collapse:separate; border-spacing:15px 2px;" >
                <tr style="font-size: 14px;" >
                  <th >地区</th>
                  <th >数量</th>
                  <th >占比</th>
<!--                  <th >热度</th>-->
                </tr>

                <tr></tr>
                <tr>
                  <td>江西</td>
                  <td>2483</td>
                  <td>15.45%</td>
                  <td ><img src="../assets/lighting.png" width="24px"><img src="../assets/lighting.png" width="24px"></td>
                </tr>
                <tr>
                  <td>广西</td>
                  <td>2322</td>
                  <td>14.45%</td>
                  <td ><img src="../assets/lighting.png" width="24px"><img src="../assets/lighting.png" width="24px"></td>
                </tr>
                <tr>
                  <td>福建</td>
                  <td>2315</td>
                  <td>14.40%</td>
                  <td > <img src="../assets/lighting.png" width="24px"><img src="../assets/lighting.png" width="24px"></td>
                </tr> <tr>
                <td>湖南</td>
                <td>2253</td>
                <td>14.02%</td>
                <td > <img src="../assets/lighting.png" width="24px">  </td>
              </tr>
                <tr>

                  <td>湖南</td>
                  <td>2253</td>
                  <td>14.02%</td>
                <td > <img src="../assets/lighting.png" width="24px">  </td>
              </tr><tr>
                <td>山东</td>
                <td>2245 </td>
                <td>13.97%</td>
                <td > <img src="../assets/lighting.png" width="24px">  </td>
              </tr>
              </table>
              <span class="numberBord"></span> <span class="numberBord" style="width: 110px;"></span> <span class="numberBord"></span>

            </div>
          </div>
        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple" style="height: 250px;" id="kongzhi1"></div></el-col>

      </el-row>

      <el-row >
        <el-col :span="6"><div class="grid-content bg-purple" id="leixing" style="height: 230px">

        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light" style="height: 230px" id="rongziedu"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light" style="height: 230px" id="rongzichengben"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple" id="kongzhi2" style="height: 230px;"></div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import '../../node_modules/echarts/map/js/china.js'
  import $ from 'jquery'

    export default {
        name: "BigData",
      props: ["userJson"],
      data(){

return{
  chart: null,
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
          this.initHangYe();
          this.initDiTu();
          this.initkongzhi3();
          this.initZhuZuo();
          //this.initZhuanLi();
          this.initkongzhi1();
          this.initkongzhi2();
          //this.initLeixing2();
          this.initrongzichengben();
          this.initrongziedu();
          this.initnianfen();
          this.initNashui();
        $("i").removeClass("el-icon-circle-close");
        $("i").removeClass("el-icon-circle-check");
        // $("#hangye").fadeTo(2000,0.5).fadeTo(2000,1.0);
        // $("#ditu").hide();
        // $("#hangye").hide();
        // $("#ditu").fadeIn(5000);
        // $("#hangye").fadeIn(5000);

      },
      methods:{
          initHangYe(){
            var echarts = require('echarts');

            var myChart_1 = echarts.init(document.getElementById('hangye'));
            myChart_1.setOption({
              backgroundColor: new echarts.graphic.RadialGradient(0.1, 0.051, 0.4, [{
                offset: 0.2,
                color: '#0E9DBE'
              }, {
                offset: 0.8,
                color: '#2F2F2F'
              }]),
              title: {
                text: '僵尸企业营业利润增长分布',
                textStyle:{
                  color:'#fff',
                  fontWeight:600,
                  fontFamily:'Microsoft YaHei',
                  fontSize:16,
                },
                show:true,
                backgroundColor:'rgba(128, 128, 128, 0.3)',
                shadowColor: 'rgba(255, 255, 255, 0.9)',
                shadowBlur: 10,
                shadowOffsetY:15,
                shadowOffsetX:15,
                padding:[5,5],
                // borderColor: '#fff',
                // borderWidth: 1,
                borderRadius: 5
              },
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'shadow'
                },
                formatter: '年份：{a} <br/>营业利润增长为：{b}%<br>企业数量为: {c}家 '
              },
              legend: { //图例内容,点击能取消/显示图
                data: ['2015-2016年','2016-2017年'],//跟下面的data要对应
                textStyle:{
                  color:'#fff'
                },
                top:30,
                left:110
              },
              grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
              },
              xAxis: {
                name:'（家）',
                nameLocation:'end',
                nameTextStyle:{
                  color:'#fff',
                  // backgroundColor:'#f00',
                },
                nameGap:-18,
                type: 'value',
                boundaryGap: [0, 0.01],
                nameTextStyle:{
                  color:'#fff'
                },
                textStyle:{
                  color:'#fff'
                },

              },
              yAxis: {
                name:'(%）',
                nameLocation:'end',
                nameTextStyle:{
                  color:'#fff',
                  // backgroundColor:'#f00',
                },
                nameGap:8,
                type: 'category',
                data: ['0及以下', '0-50', '50-100', '100-500', '1000以上'],
                nameTextStyle:{
                  color:'#fff'
                },
                textStyle:{
                  color:'#fff'
                },
                axisLabel:{
                  color:'#fff'
                }
              },
              series: [
                {
                  name: '2015-2016年',
                  type: 'bar',
                  data: [7044, 2064, 1250, 3567, 1033,1114 ],
                  itemStyle: {//柱子的颜色
                    color:'#00CCFB',
                    opacity:0.8
                  },
                  barWidth:7,
                  label:{
                    // show:true,
                    color:'#fff'
                  }

                },  {
                  name: '2016-2017年',
                  type: 'bar',
                  data: [7466, 1982, 1309, 3374, 986,955],
                  itemStyle: {//柱子的颜色
                    color:'#FF4200',
                    opacity:0.8
                  },
                  barWidth:7,
                  label:{
                    // show:true,
                    color:'#fff'
                  }

                },
                // {
                //   name: '2017年',
                //   type: 'bar',
                //   data: [233, 1000, 665, 420, 65],
                //   itemStyle: {//柱子的颜色
                //     color:'#ffff00',
                //     opacity:0.8
                //   },
                //   barWidth:6,
                //   label:{
                //     // show:true,
                //     color:'#fff'
                //   }
                //
                // },

              ],
              textStyle:{
                // color:'#fff'
              }
            })
          },
          initDiTu(){
            var echarts = require('echarts');

            var myChart_2 = echarts.init(document.getElementById('ditu'));
            window.onresize = myChart_2.resize;
            myChart_2.setOption({
              // backgroundColor: "#2f2f2f",
              // backgroundColor: new echarts.graphic.RadialGradient(0.5, 0.4, 0.7, [{
              //   offset: 0,
              //   color: '#0E9DBE'
              // }, {
              //   offset: 0.8,
              //   color: '#2F2F2F'
              // }]),
              tooltip: {}, // 鼠标移到图里面的浮动提示框
              dataRange: {
                show: true,
                min: 2180,
                max: 2500,
                text: ['High', 'Low'],
                realtime: true,
                calculable: true,
                color: [ '#FF4200', '#00CCFB']
              },
              geo: { // 这个是重点配置区
                map: 'china', // 表示中国地图
                roam: true,//鼠标缩放和平移开启
                center: [110.97, 27.71],
                aspectScale:0.75,
                zoom:2.8,
                label: {
                  normal: {
                    show: true, // 是否显示对应地名
                    textStyle: {
                      color: 'rgba(0,0,0,0.4)'
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    areaColor:'rgba(44,142,162,0.7)',
                    // areaColor:'#ff0000',

                    borderColor: 'rgba(125, 125, 0, 0.2)' //获得焦点的地区背景色
                  },
                  emphasis: {
                    areaColor: null,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    borderWidth: 0,
                    shadowColor: 'rgba(255, 255, 0, 0.7)'
                  }
                }
              },
              series: [{
                type: 'scatter',
                coordinateSystem: 'geo' // 对应上方配置
              },
                {
                  name: '僵尸企业数量', // 浮动框的标题
                  type: 'map',
                  geoIndex: 0,
                  data: [{
                    "name": "福建",
                    "value": 2315,

                  }, {
                    "name": "广东",
                    "value": 2241
                  }, {
                    "name": "江西",
                    "value": 2483
                  }, {
                    "name": "广西",
                    "value": 2322
                  }, {
                    "name": "湖北",
                    "value": 2213
                  }, {
                    "name": "湖南",
                    "value": 2253
                  }]
                }
              ]

            })
          },
        initkongzhi3(){
          var echarts = require('echarts');

          var myChart_3 = echarts.init(document.getElementById('leixing'));
          myChart_3.setOption({
            backgroundColor: new echarts.graphic.RadialGradient(0.48, 0.6, 0.2, [{
              offset: 0.0,
              color: '#0E9DBE'
            }, {
              offset: 0.8,
              color: '#2F2F2F'
            }]),
            title: {
              text: '僵尸企业控制人类型分布',
              textStyle:{
                color:'#fff',
                fontWeight:600,
                fontFamily:'Microsoft YaHei',
                fontSize:16,
              },

              padding:[5,5],
              // left:'90',
              // top:'140'
            },
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: { //图例内容,点击能取消/显示图
              orient: 'vertical',
              left: 1,
              data: ['法人', '自然人'],
              bottom: 5,
              // left: 'center',
              textStyle:{
                color:'#e0e0e0'
              }
            },

            series: [
              {
                name: '知识产权',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                width:'80%',
                height:'80%',
                top:30,
                left:30,
                label: {
                  normal: {
                    show: true,
                    formatter:'{b}: {d}%',
                    position: 'inside',
                    textStyle:{
                      fontSize:14
                    }
                  },
                  emphasis: {
                    show: true,
                    textStyle: {
                      fontSize: '22',
                      // fontWeight: 'bold'
                    }
                  }
                },
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                data: [
                  {value: 7957, name: '自然人',emphasis:{show:'true'},
                    itemStyle: {//柱子的颜色
                      color:'#09ACD2',
                      opacity:0.8
                    }

                  },
                  {value: 8115,
                    name: '法人',
                    itemStyle: {//柱子的颜色
                      color:'#FF4200',
                      opacity:0.8
                    }
                  },
                ]
              }

            ]
          })
        },
        initZhuZuo(){
          var echarts = require('echarts');

          var myChart_4 = echarts.init(document.getElementById('zhuzuo'));
          myChart_4.setOption({

            title: {
              text: '僵尸企业占比',
              textStyle:{
                color:'#fff',
                fontWeight:600,
                fontFamily:'Microsoft YaHei',
                fontSize:16,
              },

              padding:[5,5],
              left:'70',
              top:'190'
            },
            tooltip: {
              formatter: '{a} <br/>{b} : {c}%<br/>数量：16072家'
            },

            series: [
              {
                name: '僵尸企业占比',
                type: 'gauge',
                radius:'90%',
                detail: {formatter: '{value}%'},
                data: [{value: 34.9, name: '占比'}],
                axisLine:{
                  show:true,
                  lineStyle:{
                   color:[[0.3498, '#FF4200'], [1, '#0E9DBE']]
                  }
                },
                splitLine:{
                  show:true,
                  length:30,
                  lineStyle:{
                    color:'rgba(255, 255, 255, 0.5)',
                    width:1,
                  }
                },
                axisTick: {
                  lineStyle:{
                    color:'rgba(255, 255, 255, 0.5)',
                  }
                }
              }
            ]
          })
        },
        // initZhuanLi(){
        //   var echarts = require('echarts');
        //
        //   var myChart_5 = echarts.init(document.getElementById('zhuanli'));
        //   myChart_5.setOption({
        //     backgroundColor: new echarts.graphic.RadialGradient(0.48, 0.6, 0.2, [{
        //       offset: 0.0,
        //       color: '#0E9DBE'
        //     }, {
        //       offset: 0.8,
        //       color: '#2F2F2F'
        //     }]),
        //     title: {
        //       text: '专利',
        //       textStyle:{
        //         color:'#e0e0e0',
        //       },
        //       padding:[5,5],
        //       left:'90',
        //       top:'140'
        //     },
        //     tooltip: {
        //       trigger: 'item',
        //       formatter: '{a} <br/>{b}: {c} ({d}%)'
        //     },
        //
        //
        //     series: [
        //       {
        //         name: '访问来源',
        //         type: 'pie',
        //         radius: ['50%', '70%'],
        //         avoidLabelOverlap: false,
        //         width:'90%',
        //         label: {
        //           normal: {
        //             show: false,
        //             position: 'center'
        //           },
        //           emphasis: {
        //             show: true,
        //             textStyle: {
        //               fontSize: '28',
        //               fontWeight: 'bold'
        //             }
        //           }
        //         },
        //         labelLine: {
        //           normal: {
        //             show: false
        //           }
        //         },
        //         data: [
        //           {value: 160, name: '拥有',selected:'true',emphasis:{show:'true'},
        //             itemStyle: {//柱子的颜色
        //               color:'#09ACD2',
        //               opacity:0.8
        //             }
        //
        //           },
        //           {value: 310,
        //             name: '未拥有',
        //             itemStyle: {//柱子的颜色
        //               color:'#2E4043',
        //               opacity:0.8
        //             }
        //           },   ]
        //       }
        //
        //     ]
        //   })
        // },
        initkongzhi1(){
          var echarts = require('echarts');

          var myChart_6 = echarts.init(document.getElementById('kongzhi1'));
          myChart_6.setOption({
            backgroundColor: new echarts.graphic.RadialGradient(0.5, 0.5, 0.5, [{
              offset: 0.0,
              color: '#0E9DBE'
            }, {
              offset: 0.8,
              color: '#2F2F2F'
            }]),
            title: {
              text: '僵尸企业企业类型分布',
              textStyle:{
                color:'#fff',
                fontWeight:600,
                fontFamily:'Microsoft YaHei',
                fontSize:16,
              },
              padding:[5,5]
            },
            textStyle:{
              // color:'#f00'
            },
            angleAxis: {
              type: 'category',
              data: ['农村专业合作社', '集体所有制企业','股份有限公司','有限责任公司','合伙企业'],
              boundaryGap: true,
              axisTick:{
                interval:1,
              },
              itemStyle:{
                color:'#e0e0e0'
              },
              nameTextStyle:{
                color:'#fff'
              },
              textStyle:{
                color:'#fff'
              },
              axisLabel:{
                show:true,
                color:'#fff',
                margin:5
              }
            },
            radiusAxis: {
              type:'value',
              nameTextStyle:{
                // color:'#fff'
              },
              min:2000,
              axisLine: {
                show:false,
                lineStyle:{
                  color:'#fff'
                }
          },

              axisLabel:{
                show:false,
                margin:15,
                textStyle:{
                  // color:'#f00'
                }
              }
            },
            polar: {
              radius:'70%'
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            legend: { //图例内容,点击能取消/显示图
              data: []//跟下面的data要对应
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            label:{
              show:true,
              color:'#fff',
              itemStyle:{
                color:'#fff'
              },
              // position:'top',
              backgroundColor:'#ff0',


            },
            series: [
              {
                type: 'bar',
                coordinateSystem: 'polar',
                // width:'80px',
                name: '个数',
                label: {
                  normal: {
                    show: true,
                    formatter:'{b}: {d}%',
                    // position: 'inside',
                    textStyle:{
                      fontSize:14
                    }
                  },
                  emphasis: {
                    show: true,
                    textStyle: {
                      fontSize: '22',
                      // fontWeight: 'bold'
                    }
                  }
                },
                label:{
                  show:true,
                  color:'#fff',
                  // position:'left'
                },
                // itemStyle:{
                //   color:'#ffff00'
                // },
data:[
  {
    value:3376,
    itemStyle:{
      color:'#127E98',
      // opacity:0.8
      opacity:0.9

    },
    label:{
      show:true,
      color:'#fff'
    }
  },{
                  value:3203,
    itemStyle:{
      color:'#0E9DBE',
      opacity:0.9

    },
    label:{
      show:true,
      color:'#fff'
    }
  },{
                  value:3167,

    itemStyle:{
      color:'#0F6276',
      opacity:0.9

    },
    label:{
      show:true,
      color:'#fff'
    }
  },{
                  value:3220 ,
    itemStyle:{
      color:'#0A4858',
opacity:0.9
    },
    label:{
      show:true,
      color:'#fff'
    }
  },{
                  value:3106,
    itemStyle:{
      color:'#08313B',
      opacity:0.9

    },
    label:{
      show:true,
      color:'#fff'
    }
  },
]
              },


            ]
          })
        },
        initLeixing: function () {
          var echarts = require('echarts');
console.log("lllllllllllllllll");
          var myChart_7= echarts.init(document.getElementById('leixing'));
          myChart_7.setOption({
            // backgroundColor: new echarts.graphic.RadialGradient(0.5, 0.3, 0.9, [{
            //   offset: 0,
            //   color: '#0E9DBE'
            // }, {
            //   offset: 0.8,
            //   color: '#2F2F2F'
            // }]),
            title: {
              text: '僵尸企业类型',
              textStyle:{
                color:'#fff',
                fontWeight:600,
                fontFamily:'Microsoft YaHei',
                fontSize:16,
              },
              padding:[5,5]
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
                  color: '#fff',
                  fontSize:10,
                  lineHeight:12,
                  // backgroundColor: '#f0f0f0',

                }
              },
              axisLine:{
                // show:false
                lineStyle:{
                  color:'#083640',
                  width:2,
                  // opacity:0.3

                },


              },
              splitLine:{
                // show:false,
                lineStyle:{
                  color:'#2F2F2F',
                  width:1,
                  // opacity:0.3

                },
              },
              splitArea:{
                areaStyle:{
                  color:['#2F2F2F','#2F2F2F',],
                  shadowColor: 'rgba(111, 111, 111, 0.7)',
                  shadowBlur: 4,
                  // opacity:0.3

                },
              },

              indicator: [ //各个角的最大值
                {name: '农村专业合作社', max: 5},
                {name: '集体所有制企业', max: 5},
                {name: '股份有限公司', max: 5},
                {name: '有限责任公司', max: 5},
                {name: '合伙企业', max: 5},
                // {name: '偿清能力', max: 5}
              ]
            },

            series: [{
              name: '僵尸企业类型分布',
              type: 'radar',
              width:'90%',
              width:'60%',
              height:'60%',
              areaStyle: {
                // backgroundColor:'#ffff00'
              },
              data: [
                {
                  value: [2.66,3,3.30,2.92,3.63,3.97],
                  name:'僵尸企业类型分布',
                  label: {
                    show: true,
                    formatter: function(params) {
                      return params.value;
                    },
                    distance:8,
                    position:'inside',
                    fontSize:12,
                    fontWeight:100
                  }
                },

              ],
              itemStyle:{
                color:'#00CCFB'
              },
              areaStyle:{
                opacity: 0.5,
                // backgroundColor:'#ffff00'
              }


            }]
          })
        },
        initkongzhi2(){
          var echarts = require('echarts');

          var myChart_8 = echarts.init(document.getElementById('kongzhi2'));
          myChart_8.setOption({
            title: {
              text: '企业控制人持股占比',
              textStyle:{
                color:'#fff',
                fontWeight:600,
                fontFamily:'Microsoft YaHei',
                fontSize:16,
              },
              padding:[5,5]
            },
            tooltip: {
              trigger: 'item',
              formatter: '企业类型：{a} <br/>持股占比为{b}的企业数量为: {c}个 '
            },
            legend: {
              data: ['僵尸企业', '非僵尸企业'],
              textStyle:{
                color:'#fff'
              },
              left:'70%'
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },

            xAxis: {
              name:'(%）',
              nameLocation:'end',
              nameTextStyle:{
                color:'#fff',
                // backgroundColor:'#f00',
              },
              nameGap:-8,
              type: 'category',
              data: ['<65', '65-75', '75-85', '85-95', '95-100']
            },
            yAxis: {
              name:'企业数量',
              nameLocation:'end',
              nameTextStyle:{
                color:'#fff',
                // backgroundColor:'#f00',
              },
              nameGap:12,
              type: 'value',
              // max:6100,
              // min:3100
            },
            series: [
              {
                name: '非僵尸企业',
                type: 'line',
                step: 'start',
                data: [9037, 5879, 6010, 5900, 3045],
                barWidth:14,
                itemStyle:{
                  color:'#09ACD2',
                  // opacity:0.9,

                },
              },
              {
                name: '僵尸企业',
                type: 'line',
                step: 'end',
                data: [4846, 3223, 3201, 3195, 1607],
                barWidth:14,
                itemStyle:{
                  color:'#FF4200',
                  // opacity:0.9,
                },
              },

            ],
            textStyle:{
              color:'#fff'
            }

          })
        },
        initrongziedu(){
          var echarts = require('echarts');

          var myChart_9 = echarts.init(document.getElementById('rongziedu'));
          myChart_9.setOption({
            backgroundColor: new echarts.graphic.RadialGradient(0.5, 1.0, 0.7, [{
              offset: 0.0,
              color: '#0E9DBE'
            }, {
              offset: 0.8,
              color: '#2F2F2F'
            }]),
            title: {
              text: '僵尸企业融资额度',
              textStyle:{
                color:'#fff',
                fontWeight:600,
                fontFamily:'Microsoft YaHei',
                fontSize:16,
              },
              show:true,
              backgroundColor:'rgba(128, 128, 128, 0.3)',
              shadowColor: 'rgba(255, 255, 255, 0.9)',
              shadowBlur: 10,
              shadowOffsetY:15,
              shadowOffsetX:15,
              padding:[5,5],
              // borderColor: '#fff',
              // borderWidth: 1,
              borderRadius: 5
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            legend: { //图例内容,点击能取消/显示图
              data: []//跟下面的data要对应
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: {
              name:'年',
              nameLocation:'end',
              nameTextStyle:{
                color:'#fff',
                // backgroundColor:'#f00',
              },
              nameGap:0,
              type: 'category',
              boundaryGap: ['20%','10%'],

              data: ['2015', '2016', '2017'],
              nameTextStyle:{
                color:'#fff'
              },
              textStyle:{
                color:'#fff'
              },

            },
            yAxis: {
              name:'万元',
              nameLocation:'end',
              nameTextStyle:{
                color:'#fff',
                // backgroundColor:'#f00',
              },
              nameGap:8,
              type: 'value',
              // min:150,
              // max:1120,
              // data: ['交通运输业', '服务业', '工业', '社区服务', '零售业', '商业服务'],
              nameTextStyle:{
                color:'#fff'
              },
              textStyle:{
                color:'#fff'
              },
              axisLabel:{
                color:'#fff'
              }
            },

            series: [
              {
                name: '债券融资',
                type: 'line',
                data: [11873.91, 13130.14, 14395.81],
                itemStyle: {//柱子的颜色
                  color:'#00CCFB',
                  opacity:0.8
                },
                // barWidth:15,
                label:{
                  show:true,
                  color:'#ffffff',
                  position:'left'
                },
                smooth: true

              },
              {
                name: '股权融资',
                type: 'line',
                data: [17094.84, 20669.45, 22327.10],
                itemStyle: {//柱子的颜色
                  color:'#ffff00',
                  opacity:0.8
                },
                barWidth:15,
                label:{
                  show:true,
                  color:'#ffff00',
                  position:'top'

                },
                smooth: true

              },
              {
                name: '内部融资和贸易融资',
                type: 'line',
                data: [92673.45, 103252.44, 112412.89],
                itemStyle: {//柱子的颜色
                  color:'#FF4200',
                  opacity:0.8
                },
                barWidth:15,
                label:{
                  show:true,
                  color:'#fff',
                  position:'bottom'

                },
                smooth: true
              },
              {
                name: '项目融资和政策融资',
                type: 'line',
                data: [3504.41, 4032.67,  4387.18],
                itemStyle: {//柱子的颜色
                  color:'#7BC058',
                  opacity:0.8
                },
                barWidth:15,
                label:{
                  show:true,
                  color:'#fff',
                  position:'bottom'
                },
                smooth: true

              },

            ],
            textStyle:{
              // color:'#fff'
            }
          })
        },
        initrongzichengben(){
          var echarts = require('echarts');

          var myChart_10 = echarts.init(document.getElementById('rongzichengben'));
          myChart_10.setOption({
            backgroundColor: new echarts.graphic.RadialGradient(0.5, 0.9, 0.9, [{
              offset: 0.0,
              color: '#0E9DBE'
            }, {
              offset: 0.8,
              color: '#2F2F2F'
            }]),
            title: {
              text: '僵尸企业融资成本',
              textStyle:{
                color:'#fff',
                fontWeight:600,
                fontFamily:'Microsoft YaHei',
                fontSize:16,
              },
              show:true,
              backgroundColor:'rgba(128, 128, 128, 0.3)',
              shadowColor: 'rgba(255, 255, 255, 0.9)',
              shadowBlur: 10,
              shadowOffsetY:15,
              shadowOffsetX:15,
              padding:[5,5],
              // borderColor: '#fff',
              // borderWidth: 1,
              borderRadius: 5
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            legend: { //图例内容,点击能取消/显示图
              data: ['债券融资','股权融资','内部融资和贸易融资','项目融资和政策融资'],//跟下面的data要对应
              textStyle:{
                color:'#fff',
              },
              left:'45%'
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: {
              name:'年',
              nameLocation:'end',
              nameTextStyle:{
                color:'#fff',
                // backgroundColor:'#f00',
              },
              nameGap:0,
              type: 'category',
              boundaryGap: ['20%','10%'],

              data: ['2015', '2016', '2017'],
              nameTextStyle:{
                color:'#fff'
              },
              textStyle:{
                color:'#fff'
              },

            },
            yAxis: {
              name:'万元',
              nameLocation:'end',
              nameTextStyle:{
                color:'#fff',
                // backgroundColor:'#f00',
              },
              nameGap:8,
              type: 'value',
              // min:200,
              // max:7000,
              nameTextStyle:{
                color:'#fff'
              },
              textStyle:{
                color:'#fff'
              },
              axisLabel:{
                color:'#fff'
              }
            },
            series: [
              {
                name: '债券融资',
                type: 'line',
                data: [950.40, 1051.84, 1156.08],
                itemStyle: {//柱子的颜色
                  color:'#00CCFB',
                  opacity:0.8
                },
                barWidth:15,
                label:{
                  show:true,
                  color:'#fff',
                  position:'top'

                },
                smooth: true

              },
              {
                name: '股权融资',
                type: 'line',
                data: [728.68, 875.17, 957.35],
                itemStyle: {//柱子的颜色
                  color:'#ffff00',
                  opacity:0.8
                },
                barWidth:15,
                label:{
                  show:true,
                  color:'#ffff00',
                  position:'left'

                },
                smooth: true

              },
              {
                name: '内部融资和贸易融资',
                type: 'line',
                data: [5577.78, 6217.04, 6764.71],
                itemStyle: {//柱子的颜色
                  color:'#FF4200',
                  opacity:0.8
                },
                barWidth:15,
                label:{
                  show:true,
                  color:'#fff',
                  position:'bottom'

                },
                smooth: true
              },
              {
                name: '项目融资和政策融资',
                type: 'line',
                data: [213.48, 245.40, 266.33],
                itemStyle: {//柱子的颜色
                  color:'#7BC058',
                  opacity:0.8
                },
                barWidth:15,
                label:{
                  show:true,
                  color:'#7BC058',
                  position:'bottom'

                },
                smooth: true

              },
            ],
            textStyle:{
              // color:'#fff'
            }
          })

        },
        initnianfen(){
          var echarts = require('echarts');
          var myChart_11 = echarts.init(document.getElementById('nianfen'));
          var data = [  //参数1：x轴；参数2：y轴；
            [
              [2000,1071],
              [2001,1101],
              [2002,1068],
              [2003,1076],
              [2004,1004],
              [2005,1043],
              [2006,1089],
              [2007,1101],
              [2008,1099],
              [2009,1069],
              [2010,1091],
              [2011,1048],
              [2012,1082],
              [2013,1068],
              [2014,1062],
            ],
            //非僵尸
            [
              [2000,1988,1988],
              [2001,2015,2015],
              [2002,2045,2045],
              [2003,1988,1988],
              [2004,1967,1967],
              [2005,1975,1975],
              [2006,2032,2032],
              [2007,1950,1950],
              [2008,1968,1968],
              [2009,1999,1999],
              [2010,1926,1926],
              [2011,1964,1964],
              [2012,1964,1964],
              [2013,2021,2021],
              [2014,2057,2057],

            ]

          ];
          myChart_11.setOption({
            backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.9, [{
              offset: 0,
              color: '#0E9DBE'
            }, {
              offset: 0.8,
              color: '#2F2F2F'
            }]),
            title: {
              text: '僵尸企业注册时间分布',
              textStyle:{
                color:'#fff',
                fontWeight:600,
                fontFamily:'Microsoft YaHei',
                fontSize:16,
              },
              show:true,

            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              },
              formatter: '企业类型：{a} <br/>注册时间和数量：{c}<br>'
            },
            legend: { //图例内容,点击能取消/显示图
              right: 10,
              data: ['僵尸企业', '非僵尸企业'],
              textStyle:{
              color:'#fff'
              }
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: {
              data: data[0].data,
              name:'年',
              nameLocation:'end',
              nameTextStyle:{
                color:'#fff',
                // backgroundColor:'#f00',
              },
              nameGap:-8,
              min:1999,
              max:2014,

              splitLine: {
                lineStyle: {
                  type: 'dashed'
                }
              },
              boundaryGap: [0, 0.01],
              nameTextStyle:{
                color:'#fff'
              },
              textStyle:{
                color:'#fff'
              },

            },
            yAxis: {
              name:'数量（家)',
              nameLocation:'end',
              // min:800,
              // max:2300,
              nameTextStyle:{
                color:'#fff',
                // backgroundColor:'#f00',
              },
              nameGap:14,
              splitLine: {
                lineStyle: {
                  type: 'dashed'
                }
              },
              scale: true,
              nameTextStyle:{
                color:'#fff'
              },
              textStyle:{
                color:'#fff'
              },
              axisLabel:{
                color:'#fff'
              }
            },
            series: [{
              name: '僵尸企业',
              data: data[0],
              type: 'scatter',
              symbolSize: function (data) {
                return Math.sqrt(data[1]) / 1.7;
              },
              emphasis: {
                label: {
                  show: true,
                  formatter: function (param) {
                    // return param.data[0];
                  },
                  position: 'top'
                }
              },
              itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                  offset: 0,
                  color: 'rgb(251, 118, 123)'
                }, {
                  offset: 1,
                  color: 'rgb(255, 66, 0)'
                }])
              }
            }, {
              name: '非僵尸企业',
              data: data[1],
              type: 'scatter',
              symbolSize: function (data) {
                return Math.sqrt(data[1]) / 1.7;
              },
              emphasis: {
                label: {
                  show: true,
                  formatter: function (param) {
                    // return param.data[3];
                  },
                  position: 'top'
                }
              },
              itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                  offset: 0,
                  color: 'rgb(129, 227, 238)'
                }, {
                  offset: 1,
                  color: 'rgb(14, 157, 190)'
                }])
              }
            }],
            textStyle:{
              color:'#fff'
            }
          })
        },
        // initLeixing2(){
        //   var echarts = require('echarts');
        //   var myChart_13= echarts.init(document.getElementById('shangbiao'));
        //   myChart_13.setOption({
        //     // backgroundColor: new echarts.graphic.RadialGradient(0.5, 0.3, 0.9, [{
        //     //   offset: 0,
        //     //   color: '#0E9DBE'
        //     // }, {
        //     //   offset: 0.8,
        //     //   color: '#2F2F2F'
        //     // }]),
        //     title: {
        //       text: '僵尸企业控制人类型111',
        //       textStyle:{
        //         color:'#fff',
        //         fontWeight:600,
        //         fontFamily:'Microsoft YaHei',
        //         fontSize:16,
        //       },
        //       padding:[5,5]
        //     },
        //
        //
        //   });
        //
        // } ,//no use
        initNashui(){
          var echarts = require('echarts');
          var myChart_14= echarts.init(document.getElementById('nashui'));
          myChart_14.setOption({
            // backgroundColor: new echarts.graphic.RadialGradient(0.5, 0.3, 0.9, [{
            //   offset: 0,
            //   color: '#0E9DBE'
            // }, {
            //   offset: 0.8,
            //   color: '#2F2F2F'
            // }]),
            title: {
              text: '地区纳税贡献分析',
              textStyle:{
                color:'#fff',
                fontWeight:600,
                fontFamily:'Microsoft YaHei',
                fontSize:16,
              },
              padding:[5,5]
            },
            xAxis: {

              type: 'category',
              data: ['湖北', '湖南','江西','广西','广东','福建',],
              nameTextStyle:{
                color:'#fff',
              },
              textStyle:{
                color:'#fff',
                fontSize:8,

              },
              axisLabel:{
                color:'#fff',
                fontSize:12

              }
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            legend: { //图例内容,点击能取消/显示图
              data: ['僵尸企业','非僵尸企业'],//跟下面的data要对应
            textStyle:{
                color:'#fff',
            },
              left:'60%',

            },
            yAxis: {
              name:'(%）',
              nameLocation:'end',
              nameTextStyle:{
                color:'#fff',
                // backgroundColor:'#f00',
              },
              nameGap:8,
              type: 'value',
              max:100,

              nameTextStyle:{
                color:'#fff'
              },
              textStyle:{
                color:'#fff'
              },
              axisLabel:{
                show:true,
                color:'#fff'
              }
            },
            series: [{
              name:'僵尸企业',
              data: [22, 35, 19, 23, 20, 16],
              type: 'bar',
              barWidth:14,
              itemStyle:{
                color:'#FF4200',
                opacity:0.9,
              },

              textStyle:{
                color:"#fff"
              },
              label:{
                show:true,
                color:'#fff'
              }
            },{
              name:'非僵尸企业',
              data: [65, 54, 66, 74, 58, 70],
              type: 'bar',
              barWidth:14,
              itemStyle:{
            color:'#09ACD2',
                opacity:0.9,

              },
              textStyle:{
                color:"#fff"
              },
              label:{
                show:true,
                color:'#fff'
              }
            },
            ]
          });

        }
,


      }
    }
</script>

<style scoped>
  @import "../assets/basci.css";
  body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, /* structural elements 结构元素 */
  dl, dt, dd, ul, ol, li, /* list elements 列表元素 */
  pre, /* text formatting elements 文本格式元素 */
  form, fieldset, legend, button, input, textarea, /* form elements 表单元素 */
  th, td /* table elements 表格元素 */ {
    margin: 0;
    padding: 0;
  }
  body,
  button, input, select, textarea /* for ie */ {
    font: 12px/1.5 tahoma, arial, \5b8b\4f53, sans-serif;
    /*font-family:Microsoft YaHei*/
    font-family: "Microsoft YaHei";
  }
  h1, h2, h3, h4, h5, h6 { font-size: 100%; }
  address, cite, dfn, em, var { font-style: normal; } /* 将斜体扶正 */
  code, kbd, pre, samp { font-family: "Microsoft YaHei"; } /* 统一等宽字体 */
  small { font-size: 12px; } /* 小于 12px 的中文很难阅读，让 small 正常化 */
  .body{
    padding: 0;
    /*width: 100%;*/
    /*background-color: #5daf34;*/
    /*height: 900px;*/
    /*margin: 0px auto;*/
    /*background-image: url("../assets/粒子92.png");*/
background-color: #041A29;
    background-repeat:no-repeat;
    background-position:center top;
  }
  .el-col {
    border-radius: 4px;
  }
  /*.bg-purple-dark {*/
  /*  background: #2f2f2f;*/
  /*}*/
  .bg-purple {
    background: #2f2f2f;
    /*background-image: url("../assets/lan1.png");*/
    background-repeat: no-repeat;
  }
  .bg-purple-light {
    /*background: #2f2f2f;*/
  }
  .grid-content {
    /*border-radius: 4px;*/
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    /*background-color: #2f2f2f;*/
  }
  .numberBord{
    width: 50px;height: 1px;display: inline-block;border:1px solid #00C1FB;border-radius: 1px;font-size: 12px
  }
  .numberText{
    font-size: 12px;
    margin: 2px;
    font-family: "Microsoft YaHei";
    font-family: "微软雅黑 Light";
    /*font-family: ;*/
font-weight: bolder;
  }
  .numberRadio{
    font-size: 12px;
    margin-left: 250px;
  }
body{
  /*background-color: #2f2f2f;*/
  color: #f0f0f0;
  background-image: url("../assets/user.png");
}
  *{
    color: #FFFFFF;
    font-family: 微软雅黑;
  }
  .table1{
    font-size: 12px;
    line-height: 2px;
    margin-top: 16px;
    /*background-image: url("../assets/蓝框.png");*/
  }
  table tr {
    /*line-height: 2px;*/
    height: 0px;
  }
  #hangyeText{
    /*background-image: url("../assets/lan2.png");*/
    background-repeat: no-repeat;
    /*margin: 10px;*/

  }

  .content{
    /*padding-top: px;*/
  }
</style>
