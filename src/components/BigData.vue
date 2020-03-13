<template>
    <div>
      <el-row :gutter="10">
        <el-col :span="6">
          <div class="grid-content bg-purple" id="hangye" style="height: 250px">

        </div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light" style="height: 250px" id="ditu"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple"id="hangyepaiming" style="height: 250px">
<p style="line-height: 5px">僵尸企业行业比例排名</p>
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
              <span class="numberBord" >No.4</span><span class="numberText">江西</span> <span class="numberRadio">12%</span>
              <el-progress percentage="40" status="success" show-text="false"stroke-width=3></el-progress>
            </div>
            <div style="width: 400px">
              <span class="numberBord" >No.5</span><span class="numberText">广东</span> <span class="numberRadio">10%</span>
              <el-progress percentage="30" status="success" show-text="false"stroke-width=3></el-progress>

            </div>
            <div style="width: 400px">
              <span class="numberBord" >No.6</span><span class="numberText">福建</span> <span class="numberRadio">9%</span>
              <el-progress percentage="25" status="success" show-text="false"  stroke-width=3></el-progress>

            </div>

        </div></el-col>
<!--        <el-col :span="12"><div class="grid-content bg-purple-light" style="height: 10px"></div></el-col>-->
        <el-col :span="4"><div class="grid-content bg-purple" style="height: 250px;"id="shangbiao"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple" style="height: 250px;" id="zhuzuo"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple" style="height: 250px;" id="zhuanli"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple" style="height: 250px;" id="kongzhi1"></div></el-col>

      </el-row>

      <el-row :gutter="10">
        <el-col :span="6"><div class="grid-content bg-purple" id="leixing" style="height: 250px">

        </div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light" style="height: 250px" id="diyu"></div></el-col>
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

        $("i").removeClass("el-icon-circle-close");
        $("i").removeClass("el-icon-circle-check");
        // $("#hangye").fadeTo(2000,0.5).fadeTo(2000,1.0);
        // $("#ditu").slideDown();;

      },
      methods:{
          initHangYe(){
            var echarts = require('echarts');

            var myChart_1 = echarts.init(document.getElementById('hangye'));
            myChart_1.setOption({
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
            title: {
              text: '商标',
              textStyle:{
                color:'#000',
              },
              padding:[5,5],
              left:'100',
              top:'150'
            },
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: { //图例内容,点击能取消/显示图
              orient: 'vertical',
              left: 1,
              data: ['僵尸企业', '普通企业'],
              bottom: 5,
              // left: 'center',
            },

            series: [
              {
                name: '访问来源',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
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
                  {value: 60, name: '僵尸企业',selected:'true',emphasis:{show:'true'}},
                  {value: 310,
                    name: '普通企业',
                    itemStyle: {//柱子的颜色
                      color:'#00CCFB',
                      opacity:0.8
                    },},
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
                color:'#000',
              },
              padding:[5,5],
              left:'100',
              top:'150'
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
                  {value: 160, name: '僵尸企业',selected:'true',emphasis:{show:'true'}},
                  {value: 310, name: '普通企业'},
                ]
              }

            ]
          })
        },
        initZhuanLi(){
          var echarts = require('echarts');

          var myChart_5 = echarts.init(document.getElementById('zhuanli'));
          myChart_5.setOption({
            title: {
              text: '专利',
              textStyle:{
                color:'#000',
              },
              padding:[5,5],
              left:'100',
              top:'150'
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
                  {value: 45, name: '僵尸企业',selected:'true',emphasis:{show:'true'}},
                  {value: 310, name: '普通企业'},
                ]
              }

            ]
          })
        },
        initkongzhi1(){
          var echarts = require('echarts');

          var myChart_6 = echarts.init(document.getElementById('kongzhi1'));
          myChart_6.setOption({
            title: {
              text: '僵尸企业控制人类型',
              textStyle:{
                color:'#1A6FC9',
              },
              padding:[5,5]
            },
            angleAxis: {
              type: 'category',
              data: ['自然人', '法人']
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
                data: [452, 323],
                coordinateSystem: 'polar',
                name: '个数',
                stack: 'a'
              }

            ]
          })
        },
        initLeixing: function () {
          var echarts = require('echarts');

          var myChart_7= echarts.init(document.getElementById('leixing'));
          myChart_7.setOption({
            title: {
              text: '僵尸企业企业类型分布'
            },
            tooltip: {},
            legend: { //图例内容
              data: ['某位僵尸企业',]//跟下面的data要对应
            },
            radar: {
              // shape: 'circle',
              name: { //六个角上的文字标签
                textStyle: {
                  color: '#000',
                  backgroundColor: '#f0f0f0',
                  borderRadius: 3,//标签圆角
                  padding: [3, 10] //标签长宽
                }
              },
              indicator: [ //各个角的最大值
                {name: '农民专业合作社', max: 5},
                {name: '集体所有制企业', max: 5},
                {name: '股份有限公司', max: 5},
                {name: '有限责任公司', max: 5},
                {name: '合伙企业', max: 5},
              ]
            },
            series: [{
              name: '预算 vs 开销（Budget vs spending）',
              type: 'radar',
              // areaStyle: {normal: {}},
              data: [
                {
                  value: [3.544444, 2, 1, 4, 5, ],
                  name: '某位僵尸企业'
                },

              ]


            }]
          })
        },
        initkongzhi2(){
          var echarts = require('echarts');

          var myChart_1 = echarts.init(document.getElementById('kongzhi2'));
          myChart_1.setOption({
            title: {
              text: '僵尸企业控制人类型变化',
              textStyle:{
                color:'#1A6FC9',
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
              // data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
            },
            toolbox: {
              feature: {
                saveAsImage: {}
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
                data: ['2014', '2015', '2016']
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ],
            series: [
              {
                name: '自然人',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [120, 132, 101, 134, 90, 230, 210]
              },
              {
                name: '法人',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [220, 182, 191, 234, 290, 330, 310]
              },


            ]

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
    border-radius: 4px;
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
}
  *{
    color: #00CCFB;
  }
</style>
