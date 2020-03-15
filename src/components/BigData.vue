<template>
    <div>
      <el-row >
        <el-col :span="6">
          <div class="grid-content bg-purple" id="hangye" style="height: 250px">

        </div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light" style="height: 250px" id="ditu"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple" style="height: 250px" id="nianfen"></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple"id="hangyepaiming" style="height: 250px">
<p style="line-height: 20px">僵尸企业行业比例排名</p>
            <div style="width: 400px">
              <span class="numberBord" >No.1</span><span class="numberText">江西</span> <span class="numberRadio">34%</span>
              <el-progress percentage="80" status="exception" stroke-width=3 ></el-progress>
            </div>
            <div style="width: 400px">
              <span class="numberBord" >No.2</span><span class="numberText">湖南</span> <span class="numberRadio">22%</span>
              <el-progress percentage="70" status="exception" stroke-width=3></el-progress>
            </div>
            <div style="width: 400px">
              <span class="numberBord" >No.3</span><span class="numberText">湖北</span> <span class="numberRadio">16%</span>
              <el-progress percentage="64" status="exception" stroke-width=3></el-progress>
            </div>
            <div style="width: 400px">
              <span style="font-size: 12px" >No.4</span><span class="numberText"> 江西</span> <span class="numberRadio">12%</span>
              <el-progress percentage="40" status="success" show-text="false"stroke-width=3></el-progress>
            </div>
            <div style="width: 400px">
              <span style="font-size: 12px" >No.5</span><span class="numberText"> 广东</span> <span class="numberRadio">10%</span>
              <el-progress percentage="30" status="success" show-text="false"stroke-width=3></el-progress>

            </div>
<!--            <div style="width: 400px">-->
<!--              <span class="numberBord" >No.6</span><span class="numberText">福建</span> <span class="numberRadio">9%</span>-->
<!--              <el-progress percentage="25" status="success" show-text="false"  stroke-width=3></el-progress>-->

<!--            </div>-->

        </div></el-col>
<!--        <el-col :span="12"><div class="grid-content bg-purple-light" style="height: 10px"></div></el-col>-->
        <el-col :span="4"><div class="grid-content bg-purple" style="height: 250px;"id="shangbiao"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple" style="height: 250px;" id="zhuzuo"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple" style="height: 250px;" id="zhuanli"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple" style="height: 250px;" id="kongzhi1"></div></el-col>

      </el-row>

      <el-row >
        <el-col :span="6"><div class="grid-content bg-purple" id="leixing" style="height: 250px">

        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light" style="height: 250px" id="rongziedu"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light" style="height: 250px" id="rongzichengben"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple" id="kongzhi2" style="height: 250px;"></div></el-col>
      </el-row>
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
  chart: null
}
      },
      mounted() {
          this.initHangYe();
          this.initDiTu();
          this.initShangBiao();
          this.initZhuZuo();
          this.initZhuanLi();
          this.initkongzhi1();
          this.initkongzhi2();
          this.initLeixing();
          this.initrongzichengben();
          this.initrongziedu();
          this.initnianfen();

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
                text: '僵尸企业行业分布',
                textStyle:{
                  color:'#fff',
                  fontWeight:200,
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
                type: 'category',
                data: ['交通运输业', '服务业', '工业', '社区服务', '零售业', '商业服务'],
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
                  name: '僵尸企业',
                  type: 'bar',
                  data: [235, 115, 1120, 300, 74, 411],
                  itemStyle: {//柱子的颜色
                    color:'#00CCFB',
                    opacity:0.8
                  },
                  barWidth:15,
                  label:{
                    show:true,
                    color:'#fff'
                  }

                },
                // {
                //   name: '2012年',
                //   type: 'bar',
                //   data: [19325, 23438, 31000, 121594, 134141, 681807]
                // }
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
              backgroundColor: "#2f2f2f",
              backgroundColor: new echarts.graphic.RadialGradient(0.5, 0.4, 0.7, [{
                offset: 0,
                color: '#0E9DBE'
              }, {
                offset: 0.8,
                color: '#2F2F2F'
              }]),
              tooltip: {}, // 鼠标移到图里面的浮动提示框
              dataRange: {
                show: true,
                min: 20,
                max: 700,
                text: ['High', 'Low'],
                realtime: true,
                calculable: true,
                color: [ '#FF4200', '#00CCFB']
              },
              geo: { // 这个是重点配置区
                map: 'china', // 表示中国地图
                roam: true,//鼠标缩放和平移开启
                center: [110.97, 28.71],
                aspectScale:0.75,
                zoom:2,
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
                    "value": 599,

                  }, {
                    "name": "广东",
                    "value": 142
                  }, {
                    "name": "江西",
                    "value": 44
                  }, {
                    "name": "广西",
                    "value": 92
                  }, {
                    "name": "湖北",
                    "value": 510
                  }, {
                    "name": "湖南",
                    "value": 453
                  }]
                }
              ]

            })
          },
        initShangBiao(){
          var echarts = require('echarts');

          var myChart_3 = echarts.init(document.getElementById('shangbiao'));
          myChart_3.setOption({
            backgroundColor: new echarts.graphic.RadialGradient(0.48, 0.6, 0.2, [{
              offset: 0.0,
              color: '#0E9DBE'
            }, {
              offset: 0.8,
              color: '#2F2F2F'
            }]),
            title: {
              text: '商标',
              textStyle:{
                color:'#e0e0e0',
              },

              padding:[5,5],
              left:'90',
              top:'140'
            },
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: { //图例内容,点击能取消/显示图
              orient: 'vertical',
              left: 1,
              data: ['拥有', '未拥有'],
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
                width:'90%',
                label: {
                  normal: {
                    show: false,
                    position: 'center'
                  },
                  emphasis: {
                    show: true,
                    textStyle: {
                      fontSize: '28',
                      fontWeight: 'bold'
                    }
                  }
                },
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                data: [
                  {value: 160, name: '拥有',selected:'true',emphasis:{show:'true'},
                    itemStyle: {//柱子的颜色
                      color:'#09ACD2',
                      opacity:0.8
                    }

                  },
                  {value: 310,
                    name: '未拥有',
                    itemStyle: {//柱子的颜色
                      color:'#2E4043',
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
              text: '著作',
              textStyle:{
                color:'#e0e0e0',
              },
              padding:[5,5],
              left:'90',
              top:'140'
            },
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b}: {c} ({d}%)'
            },


            series: [
              {
                name: '知识产权',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                width:'90%',
                label: {
                  normal: {
                    show: false,
                    position: 'center'
                  },
                  emphasis: {
                    show: true,
                    textStyle: {
                      fontSize: '28',
                      fontWeight: 'bold'
                    }
                  }
                },
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                data: [
                  {value: 160, name: '拥有',selected:'true',emphasis:{show:'true'},
                    itemStyle: {//柱子的颜色
                      color:'#FF4200',
                      // opacity:0.8
                    }

                  },
                  {value: 310,
                    name: '未拥有',
                    itemStyle: {//柱子的颜色
                      color:'#2E4043',
                      opacity:0.8
                    }
                  },  ]
              }

            ]
          })
        },
        initZhuanLi(){
          var echarts = require('echarts');

          var myChart_5 = echarts.init(document.getElementById('zhuanli'));
          myChart_5.setOption({
            backgroundColor: new echarts.graphic.RadialGradient(0.48, 0.6, 0.2, [{
              offset: 0.0,
              color: '#0E9DBE'
            }, {
              offset: 0.8,
              color: '#2F2F2F'
            }]),
            title: {
              text: '专利',
              textStyle:{
                color:'#e0e0e0',
              },
              padding:[5,5],
              left:'90',
              top:'140'
            },
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b}: {c} ({d}%)'
            },


            series: [
              {
                name: '访问来源',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                width:'90%',
                label: {
                  normal: {
                    show: false,
                    position: 'center'
                  },
                  emphasis: {
                    show: true,
                    textStyle: {
                      fontSize: '28',
                      fontWeight: 'bold'
                    }
                  }
                },
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                data: [
                  {value: 160, name: '拥有',selected:'true',emphasis:{show:'true'},
                    itemStyle: {//柱子的颜色
                      color:'#09ACD2',
                      opacity:0.8
                    }

                  },
                  {value: 310,
                    name: '未拥有',
                    itemStyle: {//柱子的颜色
                      color:'#2E4043',
                      opacity:0.8
                    }
                  },   ]
              }

            ]
          })
        },
        initkongzhi1(){
          var echarts = require('echarts');

          var myChart_6 = echarts.init(document.getElementById('kongzhi1'));
          myChart_6.setOption({
            backgroundColor: new echarts.graphic.RadialGradient(0.85, 0.13, 0.9, [{
              offset: 0.0,
              color: '#0E9DBE'
            }, {
              offset: 0.8,
              color: '#2F2F2F'
            }]),
            title: {
              text: '僵尸企业控制人类型',
              textStyle:{
                color:'#fff',
                fontWeight:200,
                fontFamily:'Microsoft YaHei',
                fontSize:16,
              },
              padding:[5,5]
            },
            angleAxis: {
              type: 'category',
              data: ['自然人', '法人'],
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
                color:'#fff'
              }
            },
            radiusAxis: {
            },
            polar: {
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

            series: [
              {
                type: 'bar',
                // data: [452, 323],
                coordinateSystem: 'polar',
                name: '个数',
                stack: 'a',
                // itemStyle:{
                //   color:'#ffff00'
                // },
data:[
  {
    value:452,
    itemStyle:{
      color:'#FF4200'
    },
  },{
                  value:323,
    itemStyle:{
      color:'#0E9DBE',

    },
  }
]
              },


            ]
          })
        },
        initLeixing: function () {
          var echarts = require('echarts');

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
              text: '僵尸企业企业类型',
              textStyle:{
                color:'#fff',
                fontWeight:200,
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
              text: '僵尸企业控制人类型变化',
              textStyle:{
                color:'#fff',
                fontWeight:200,
                fontFamily:'Microsoft YaHei',
                fontSize:16,
              },
              padding:[5,5]
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
                label: {
                  backgroundColor: '#6a7985'
                }
              }
            },
            legend: {
            },
            toolbox: {
              feature: {
                // saveAsImage: {}
              }
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: [
              {
                type: 'category',
                boundaryGap: false,
                data: ['2014', '2015', '2016'],
                itemStyle:{
                  color:'#fff'
                },
                nameTextStyle:{
                  color:'#fff'
                },
                textStyle:{
                  color:'#fff'
                },
                axisLabel:{
                  color:'#fff'
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                name:'类型',
                nameLocation:'end',
                itemStyle:{
                  color:'#fff'
                }
              }
            ],
            series: [
              {
                // name: '自然人',
                type: 'line',
                stack: '自然人',
                areaStyle: {
                  color:'#00CCFB'
                },

                data: [180, 132, 151, 134, 90, 230, 210]
              },
              {
                // name: '法人',
                type: 'line',
                stack: '法人',
                areaStyle: {
                  color:'#FF4200'

                },
                data: [220, 182, 191, 234, 290, 330, 310]
              },


            ]

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
                fontWeight:200,
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
              type: 'value',
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
                data: [235, 115, 1120],
                itemStyle: {//柱子的颜色
                  color:'#00CCFB',
                  opacity:0.8
                },
                barWidth:15,
                label:{
                  show:true,
                  color:'#fff'
                },
                smooth: true

              },
              {
                name: '股权融资',
                type: 'line',
                data: [444, 543, 866],
                itemStyle: {//柱子的颜色
                  color:'#ffff00',
                  opacity:0.8
                },
                barWidth:15,
                label:{
                  show:true,
                  color:'#fff'
                },
                smooth: true

              },
              {
                name: '内部融资和贸易融资',
                type: 'line',
                data: [345, 655, 741],
                itemStyle: {//柱子的颜色
                  color:'#FF4200',
                  opacity:0.8
                },
                barWidth:15,
                label:{
                  show:true,
                  color:'#fff'
                },
                smooth: true
              },
              {
                name: '项目融资和政策融资',
                type: 'line',
                data: [400, 499, 734],
                itemStyle: {//柱子的颜色
                  color:'#7BC058',
                  opacity:0.8
                },
                barWidth:15,
                label:{
                  show:true,
                  color:'#fff'
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
                fontWeight:200,
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
              type: 'value',
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
                data: [461, 334, 660],
                itemStyle: {//柱子的颜色
                  color:'#00CCFB',
                  opacity:0.8
                },
                barWidth:15,
                label:{
                  show:true,
                  color:'#fff'
                },
                smooth: true

              },
              {
                name: '股权融资',
                type: 'line',
                data: [544, 512, 659],
                itemStyle: {//柱子的颜色
                  color:'#ffff00',
                  opacity:0.8
                },
                barWidth:15,
                label:{
                  show:true,
                  color:'#fff'
                },
                smooth: true

              },
              {
                name: '内部融资和贸易融资',
                type: 'line',
                data: [324, 433, 454],
                itemStyle: {//柱子的颜色
                  color:'#FF4200',
                  opacity:0.8
                },
                barWidth:15,
                label:{
                  show:true,
                  color:'#fff'
                },
                smooth: true
              },
              {
                name: '项目融资和政策融资',
                type: 'line',
                data: [400, 499, 634],
                itemStyle: {//柱子的颜色
                  color:'#7BC058',
                  opacity:0.8
                },
                barWidth:15,
                label:{
                  show:true,
                  color:'#fff'
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
          var data = [  //参数1：x轴；参数2：y轴；参数3：圆的面积；参数5：是否为僵尸企业，图例，什么值不重要
            [[1997,90,90,'',120],
              [1998,54,84,'',120],
              [1999,30,77,'',120],
              [2000,30,77,'',120],
              [2001,35,77,'',120],
              [2002,12,77,'',120],
              [2003,45,77,'',120],
              [2004,34,77,'',120],
              [2005,89,77,'',120],
              [2006,88,77,'',120],
              [2007,120,77,'',120],
              [2008,135,77,'',120],
              [2009,120,77,'',120],
              [2010,140,77,'',120],
              [2011,90,80,'',120],
              [2012,100,80,'',120],
              [2013,40,80,'',120],
              [2014,60,80,'',120],
              [2015,80,80,'',120],
            ],
            [[1997,205,1340,'',2015],
              [1998,456,211,'',2015],
              [1999,333,77,'',120],
              [2000,330,77,'',120],
              [2001,400,77,'',120],
              [2002,500,77,'',120],
              [2003,745,77,'',120],
              [2004,700,77,'',120],
              [2005,612,77,'',120],
              [2006,600,77,'',120],
              [2007,680,77,'',120],
              [2008,590,77,'',120],
              [2009,800,77,'',120],
              [2010,820,77,'',120],
              [2011,960,80,'',120],
              [2012,920,80,'',120],
              [2013,898,80,'',120],
              [2014,840,80,'',120],
              [2015,800,80,'',120],
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
                fontWeight:200,
                fontFamily:'Microsoft YaHei',
                fontSize:16,
              },
              show:true,

            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
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
              // data: data[0],
              min:1990,
              max:2020,

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
                return Math.sqrt(data[1]) / 0.7;
              },
              emphasis: {
                label: {
                  show: true,
                  formatter: function (param) {
                    return param.data[3];
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
                return Math.sqrt(data[1]) / 0.8;
              },
              emphasis: {
                label: {
                  show: true,
                  formatter: function (param) {
                    return param.data[3];
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




      }
    }
</script>

<style scoped>
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
    font-family:Microsoft YaHei
  }
  h1, h2, h3, h4, h5, h6 { font-size: 100%; }
  address, cite, dfn, em, var { font-style: normal; } /* 将斜体扶正 */
  code, kbd, pre, samp { font-family: courier new, courier, monospace; } /* 统一等宽字体 */
  small { font-size: 12px; } /* 小于 12px 的中文很难阅读，让 small 正常化 */

  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #2f2f2f;
  }
  .bg-purple {
    background: #2f2f2f;
  }
  .bg-purple-light {
    background: #2f2f2f;
  }
  .grid-content {
    /*border-radius: 4px;*/
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #2f2f2f;
  }
  .numberBord{
    width: 30px;height: 18px;display: inline-block;border:2px solid #00C1FB;border-radius: 4px;font-size: 12px
  }
  .numberText{
    font-size: 12px;
    margin: 2px;
  }
  .numberRadio{
    font-size: 12px;
    margin-left: 250px;
  }
body{
  background-color: #2f2f2f;
  color: #f0f0f0;
  background-image: url("../assets/user.png");
}
  *{
    color: #00CCFB;
  }
</style>
