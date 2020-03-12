<template>
    <div>
      <el-row :gutter="10">
        <el-col :span="6"><div class="grid-content bg-purple" id="hangye" style="height: 280px">

        </div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light" style="height: 280px" id="ditu"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple"id="hangyepaiming" style="height: 260px">
<p style="line-height: 5px">僵尸企业行业比例排名</p>
            <div style="width: 400px">
              <span class="numberBord" >No.1</span><span class="numberText">江西</span> <span class="numberRadio">34%</span>
              <el-progress percentage="80" status="exception" stroke-width="3" ></el-progress>
            </div>
            <div style="width: 400px">
              <span class="numberBord" >No.2</span><span class="numberText">湖南</span> <span class="numberRadio">22%</span>
              <el-progress percentage="70" status="exception" stroke-width="3"></el-progress>
            </div>
            <div style="width: 400px">
              <span class="numberBord" >No.3</span><span class="numberText">湖北</span> <span class="numberRadio">16%</span>
              <el-progress percentage="64" status="exception" stroke-width="3"></el-progress>
            </div>
            <div style="width: 400px">
              <span class="numberBord" >No.4</span><span class="numberText">江西</span> <span class="numberRadio">12%</span>
              <el-progress percentage="40" status="success" show-text="false"stroke-width="3"></el-progress>
            </div>
            <div style="width: 400px">
              <span class="numberBord" >No.5</span><span class="numberText">广东</span> <span class="numberRadio">10%</span>
              <el-progress percentage="30" status="success" show-text="false"stroke-width="3"></el-progress>

            </div>
            <div style="width: 400px">
              <span class="numberBord" >No.6</span><span class="numberText">福建</span> <span class="numberRadio">9%</span>
              <el-progress percentage="25" status="success" show-text="false"stroke-width="3"></el-progress>

            </div>

        </div></el-col>
<!--        <el-col :span="12"><div class="grid-content bg-purple-light" style="height: 10px"></div></el-col>-->
        <el-col :span="4"><div class="grid-content bg-purple" style="height: 300px;"id="shangbiao"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple" style="height: 300px;" id="zhuzuo"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple" style="height: 300px;" id="zhuanli"></div></el-col>
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
        $("i").removeClass("el-icon-circle-close");
        $("i").removeClass("el-icon-circle-check");


      },
      methods:{
          initHangYe(){
            var echarts = require('echarts');

            var myChart_1 = echarts.init(document.getElementById('hangye'));
            myChart_1.setOption({
              title: {
                text: '僵尸企业行业分布',
                textStyle:{
                  color:'#1A6FC9',
                },
                padding:[5,5]
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
                boundaryGap: [0, 0.01]
              },
              yAxis: {
                type: 'category',
                data: ['交通运输业', '服务业', '工业', '社区服务', '零售业', '商业服务']
              },
              series: [
                {
                  name: '2011年',
                  type: 'bar',
                  data: [235, 115, 1120, 300, 74, 411]
                },
                // {
                //   name: '2012年',
                //   type: 'bar',
                //   data: [19325, 23438, 31000, 121594, 134141, 681807]
                // }
              ]
            })
          },
          initDiTu(){
            var echarts = require('echarts');

            var myChart_2 = echarts.init(document.getElementById('ditu'));
            window.onresize = myChart_2.resize;
            myChart_2.setOption({
              backgroundColor: "#789877",
              tooltip: {}, // 鼠标移到图里面的浮动提示框
              dataRange: {
                show: true,
                min: 0,
                max: 1000,
                text: ['High', 'Low'],
                realtime: true,
                calculable: true,
                color: ['orangered', 'yellow', 'lightskyblue']
              },
              geo: { // 这个是重点配置区
                map: 'china', // 表示中国地图
                roam: true,//鼠标缩放和平移开启
                center: [110.97, 25.71],
                aspectScale:0.75,
                zoom:2,
                label: {
                  normal: {
                    show: false, // 是否显示对应地名
                    textStyle: {
                      color: 'rgba(0,0,0,0.4)'
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    areaColor:'rgba(0,0,0,0.2)',

                    borderColor: 'rgba(125, 125, 0, 0.2)' //获得焦点的地区背景色
                  },
                  emphasis: {
                    areaColor: null,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    borderWidth: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
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
                    "value": 810
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
              text: '僵尸企业行业分布',
              textStyle:{
                color:'#1A6FC9',
              },
              padding:[5,5]
            },
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: { //图例内容,点击能取消/显示图
              orient: 'vertical',
              left: 10,
              data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: {
              type: 'value',
              boundaryGap: [0, 0.01]
            },
            yAxis: {
              type: 'category',
              data: ['交通运输业', '服务业', '工业', '社区服务', '零售业', '商业服务']
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
                      fontSize: '30',
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
                  {value: 335, name: '直接访问'},
                  {value: 310, name: '邮件营销'},
                  {value: 234, name: '联盟广告'},
                  {value: 135, name: '视频广告'},
                  {value: 1548, name: '搜索引擎'}
                ]
              }

            ]
          })
        },
        initZhuZuo(){

        },
        initZhuangLi(){

        },


      }
    }
</script>

<style scoped>

  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #e4e4e4;
  }
  .bg-purple {
    background: #e4e4e4;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
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

</style>
