<template>
    <div>
      <el-row :gutter="10">
        <el-col :span="6"><div class="grid-content bg-purple" id="hangye" style="height: 300px">

        </div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light" style="height: 300px"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple" style="height: 350px">

        </div></el-col>
<!--        <el-col :span="12"><div class="grid-content bg-purple-light" style="height: 10px"></div></el-col>-->
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "BigData",
      data(){

      },
      mounted() {
          this.initHangYe();
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

      }
    }
</script>

<style scoped>
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
</style>
