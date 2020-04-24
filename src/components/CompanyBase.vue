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
    <i class="el-icon-back">返回</i>
<!--    <el-button type="default" icon="el-icon-back">返回</el-button>-->
    <div class="submenu">

      <div class="holderCircle">

        <div class="dotCircle">
			<span class="itemDot active itemDot1" data-tab="1" @click="showYujing">
				<i class="fa fa-life-ring"></i> <p>企业预警</p>
				<span class="forActive"></span>
			</span>
          <span class="itemDot itemDot2" data-tab="2" @click="showSixD">
				<i class="fa fa-bomb"></i>  <p>企业特征</p>
				<span class="forActive"></span>
			</span>
          <span class="itemDot itemDot3" data-tab="3">
				<i class="fa fa-heartbeat"></i> <p>数据分析</p>
				<span class="forActive"></span>
			</span>
          <span class="itemDot itemDot4" data-tab="4">
				<i class="fa fa-leaf"></i> <p>其他</p>
				<span class="forActive"></span>
			</span>
        </div>
        <div class="contentCircle">

          <div class="CirItem active CirItem1" >
            企业预警
          </div>
          <div class="CirItem CirItem2">
            六维特征
          </div>
          <div class="CirItem CirItem3">
            数据分析
          </div>
          <div class="CirItem CirItem4">
            其他
          </div>

        </div>

      </div>

    </div>
    <div class="YujingCont">
      <el-dialog title="企业预警" :visible.sync="YujingVisible" custom-class="Yujingdialog" top="22px" align="left">
        <div class="wordItemBox">
          <p class="word">偿债能力预警</p> <a class="taga" href="###" @click="Yujinginfo(0)"><el-tag color="rgba(0,0,0,0.001)" type="warning" size="small">中等</el-tag></a>
          <hr>
          <p class="translate">三年平均资产负债率与基准值对比</p>
        </div>
        <div class="wordItemBox">
          <p class="word">负债额度预警</p><a class="taga" href="###"><el-tag color="rgba(0,0,0,0.001)" type="danger" size="small">危险</el-tag></a>
          <hr>
          <p class="translate">三年平均利息保障倍数与基准值对比</p>
        </div>
        <div class="wordItemBox">
          <p class="word">营运能力预警</p><a class="taga" href="###"><el-tag color="rgba(0,0,0,0.001)" type="info" size="small">安全</el-tag></a>
          <hr>
          <p class="translate">两年平均资本周转率与基准值对比</p>
        </div>
        <div class="wordItemBox">
          <p class="word">资本安全性预警</p><a class="taga" href="###"><el-tag color="rgba(0,0,0,0.001)" type="info" size="small">安全</el-tag></a>
          <hr>
          <p class="translate">两年平均资本积累率与基准值对比</p>
        </div>
        <div class="wordItemBox">
          <p class="word">资本扩张能力预警</p><a class="taga" href="###"><el-tag color="rgba(0,0,0,0.001)" type="info" size="small">安全</el-tag></a>
          <hr>
          <p class="translate">两年平均营业利润增长率与基准值对比</p>
        </div>
        <div class="wordItemBox">
          <p class="word">盈利前景预警</p><a class="taga" href="###"><el-tag color="rgba(0,0,0,0.001)" type="info" size="small">安全</el-tag></a>
          <hr>
          <p class="translate">两年平均净利润增长率与基准值对比</p>
        </div>
        <div class="wordItemBox">
          <p class="word">盈利能力预警</p><a class="taga" href="###"><el-tag color="rgba(0,0,0,0.001)" type="warning" size="small">中等</el-tag></a>
          <hr>
          <p class="translate">三年平均总资产收益率与基准值的对比</p>
        </div>
        <div class="wordItemBox">
          <p class="word">创新能力预警</p><a class="taga" href="###"><el-tag color="rgba(0,0,0,0.001)" type="warning" size="small">中等</el-tag></a>
          <hr>
          <p class="translate">专利、著作权、商标权相加与基准值对比</p>
        </div>
        <div class="wordItemBox">
          <p class="word">营业总收入预警</p><a class="taga" href="###"><el-tag color="rgba(0,0,0,0.001)" type="danger" size="small">危险</el-tag></a>
          <hr>
          <p class="translate">两年平均营业总收入变化率与基准值的比较</p>
        </div>
        <div class="wordItemBox">
          <p class="word">资产总额预警</p><a class="taga" href="###"><el-tag color="rgba(0,0,0,0.001)" type="danger" size="small">危险</el-tag></a>
          <hr>
          <p class="translate">两年平均资产总额变化率与基准值的比较</p>
        </div>
        <div class="wordItemBox">
          <p class="word">员工规模预警</p><a class="taga" href="###"><el-tag color="rgba(0,0,0,0.001)" type="warning" size="small">中等</el-tag></a>
          <hr>
          <p class="translate">两年平均从业人数变化率与基准值的比较</p>
        </div>
        <el-dialog
          width="30%"
          :title="innerdialogtitle"
          :visible.sync="innerVisible"
          append-to-body>
          <h4>得分：3</h4>
          <h4>位于所有企业前25%-50%</h4>
          <h5>{{innerdialogtitle}}为利息保障倍数的表现，由三年平均资产负债率与基准值对比，三年中资产负债率大于基准值的年数得出</h5>

        </el-dialog>

      </el-dialog>
      <el-dialog title="企业特征" :visible.sync="SixDVisible" top="22px" width="1300px">
                      <div id="radioContAfter">
                      </div>
        <div class="radiolabel">
          <table border="0"  align="center" style="border-collapse:separate; border-spacing:24px 12px;color: white;font-size: 14px" >
            <tr style="font-size: 18px" >
              <th >特征</th>
              <th >说明</th>
              <th >计算</th>
              <th >结果</th>
            </tr>
            <tr></tr>
            <tr  v-for="(item, index) in radiogroup">
              <td> &nbsp&nbsp&nbsp&nbsp{{item.i1}} &nbsp&nbsp&nbsp&nbsp</td>
              <td>{{item.i2}}</td>
              <td>{{item.i3}}</td>
              <td >&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp{{item.i4}}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp &nbsp&nbsp</td>
            </tr>

          </table>

        </div>
      </el-dialog>
    </div>
  </div>
</div>
      <div class="right_contain">
        <div class="right_title1">企业画像信息 </div>
        <div class="right_1">
          <div class="wrapper">
            <div class="tagcloud fr">
              <a href="#">僵尸企业</a>
              <a href="#">债券融资</a>
              <a href="#">竞争力弱</a>
              <a href="#">偿债能力弱</a>
              <a href="#">匀速发展</a>
              <a href="#">交通运输业</a>
            </div>
          </div><!--wrapper-->
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
                <li v-for="(item, index) in labelgroup">
                  <a >{{item}}</a>
                </li>


              </ul>
            </div>
          </div>
        </div>
    </div>
              <div id="radioCont">
                   </div>
<!--            <el-tab-pane label="3D企业" name="fourth">建设中</el-tab-pane>-->
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import G6 from '@antv/g6'
  import "../assets/circle"
  import "../assets/tagcloud"
  export default {
        name: "CompanyBase",
      data(){

          return{
            radiogroup:[
              {
                i1:"企业规模",
                i2:"三年平均从业人数、资产总额、营业总收入",
                i3:"由三个指标聚类得到企业规模",
                i4:"1"
              },
              {
                i1:"创新能力",
                i2:"专利、商标、著作权",
                i3:"三个指标相加",
               i4:"3.6"
              },
              {
                i1:"盈利能力",
                i2:"三年平均总资产收益率",
                i3:"观察频率直方图后直接将总资产收益率映射到0-5区间内",
                i4:"1.29"
              },
              {
                i1:"发展能力",
                i2:"三年平均净利润增长率",
               i3:"观察频率直方图后直接将净利润增长率映射到0-5区间内",
               i4:"3.34"
              },
              {
                i1:"营运能力",
                i2:"三年平均总资产周转率",
                i3:"观察频率直方图后直接将净利润增长率映射到0-5区间内",
                i4:"3.9"
              },
              {
                i1:"偿债能力",
                i2:"三年平均资产负债率",
                i3:"观察频率直方图后直接将净利润增长率映射到0-5区间内",
                i4:"4.17"
              },
            ],
            labelgroup:["拥有商标","拥有著作权","交通运输业","发展速度慢","偿债能力弱","交通运输业","资本安全程度低","核心竞争力弱","纳税金额较多","债券融资","中型企业","中盈利","营运能力好","盈利前景一般"],
            wordtitle:["偿债能力预警","负债额度预警"],
            innerdialogtitle:'',
            innerVisible:false,
            YujingVisible:false,
            SixDVisible:false,
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

      // this.init_node();
      // if ($(".warn").text()=="僵尸企业") {
      //       $(".warn").addClass("isred");
      //     }
      ;
    // this.init_fbx();
      this.init_radio();
      $("#radioCont").hide();
      tagcloud({
        selector: ".tagcloud",  //元素选择器
        fontsize: 14,       //基本字体大小, 单位px
        radius: 50,         //滚动半径, 单位px
        mspeed: "normal",   //滚动最大速度, 取值: slow, normal(默认), fast
        ispeed: "normal",   //滚动初速度, 取值: slow, normal(默认), fast
        direction: 135,     //初始滚动方向, 取值角度(顺时针360): 0对应top, 90对应left, 135对应right-bottom(默认)...
        keep: false          //鼠标移出组件后是否继续随鼠标滚动, 取值: false, true(默认) 对应 减速至初速度滚动, 随鼠标滚动
      });
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

  $('.taga').click(function (e) {
    console.log("111111");
    e.preventDefault();
  });
  $('a').click(function (e) {
    console.log("2222");

    e.preventDefault();
  });

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
      showSixD(){

        $("#radioCont").show();
        console.log("5555");
        $("#radioContAfter").append($("#radioCont"));
        this.SixDVisible=true;


      },
      Yujinginfo(index){
        switch(index)
        {
            case 0:
              this.innerdialogtitle=this.wordtitle[index];
              this.innerVisible=true;

              break;
            case 1:
            printf("Monday\n");
            break;
          case 2:
            printf("Tuesday\n");
            break;
          case 3:
            printf("Wednesday\n");
            break;
          case 4:
            printf("Thursday\n");
            break;
          case 5:
            printf("Friday\n");
            break;
          case 6:
            printf("Saturday\n");
            break;
          case 7:
            printf("Sunday\n");
            break;
          default:
            printf("error\n");
            break;
        }
      },
      showYujing(){
        console.log("yyyyy");
        this.YujingVisible=true;
      },
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
        var _this=this;
        var echarts = require('echarts');
        var myChart_1 = echarts.init(document.getElementById('radioCont'));
        myChart_1.setOption({
          title: {
            // text: '企业六维特征',
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
            center:['50%','50%'],
            name: { //六个角上的文字标签
              // backgroundColor:'red',
              textStyle: {
                color: '#fff',
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
                value: [1,3.6,1.29,3.34,3.90,4.17],
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
        });
        myChart_1.on('click', function (params) {
          // alert(params.name);//企业编号

        });
      },
    }
    }
</script>

<style scoped>
  @import "../assets/basci.css";
  @import "http://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css";
  @import "../assets/circlecss.css";
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
    width: 500px;
    height: 580px;
    float: left;
    /*background-color: #28a9e0;*/
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
    opacity: 100%;
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
.submenu{
  width: 1000px;
  height: 600px;
  /*background-color: #fff;*/
  margin: 20px auto;
}

  .wordItemBox {
    display: inline-block;
    width: 290px;
    border-radius: 10px;
    background: #444;
    padding-left: 15px;
    padding-right: 15px;
    margin-top: 15px;
    margin-right: 20px;
    padding-bottom: 10px;
  }
  .wordItemBox .word {
    color: #fc0;
    font-size: 22px;
    line-height: 45px;
    display: inline-block;
    padding-right: 10px;
    transition: color 0.35s;
  }

  hr {
    height: 10px;
    border: none;
    border-top-color: currentcolor;
    border-top-style: none;
    border-top-width: medium;
    border-top: 1px groove #666;
    border-top: 1px groove #ddd;
  }
  .wordItemBox .pronounce {
    display: inline-block;
  }
  .wordItemBox span {
    width: 59px;
    text-align: center;
    float: right;
    margin-top: 12px;
  }


  .el-dialog{
    background: red !important;
  }
  .YujingCont{
    background-color: #00c1fb;

  }
  .fr{ float: left; }
  .wrapper{ width: 100%; height: 100%; margin: 0 auto; }
  .wrapper p{ padding-top: 0px; line-height: 18px; color: #999; font-size: 14px; text-align: center;  }
  .tagcloud { position: relative; margin-top:20px; width: 100%}
  .tagcloud a{ position: absolute;  top: 0; left: 0;  display: block; padding: 11px 10px; color: #333; font-size: 16px; border: 1px solid #e6e7e8; border-radius: 18px; background-color: #f2f4f8; text-decoration: none; white-space: nowrap;
    -o-box-shadow: 6px 4px 8px 0 rgba(151,142,136,.34);
    -ms-box-shadow: 6px 4px 8px 0 rgba(151,142,136,.34);
    -moz-box-shadow: 6px 4px 8px 0 rgba(151,142,136,.34);
    -webkit-box-shadow: 6px 4px 8px 0 rgba(151,142,136,.34);
    box-shadow: 6px 4px 8px 0 rgba(151,142,136,.34);
    -ms-filter:"progid:DXImageTransform.Microsoft.Shadow(Strength=4,Direction=135, Color='#000000')";/*兼容ie7/8*/
    filter: progid:DXImageTransform.Microsoft.Shadow(color='#969696', Direction=125, Strength=9);
    /*strength是阴影大小，direction是阴影方位，单位为度，可以为负数，color是阴影颜色 （尽量使用数字）使用IE滤镜实现盒子阴影的盒子必须是行元素或以行元素显示（block或inline-block;）*/
  }
  .tagcloud a:hover{ color: #3385cf; }
  .dotCircle p{
    font-size: 14px;
  }
  .radiolabel{
    width: 730px;
    height: 450px;
    margin: 40px;
    margin-right: 5px;
    /*margin-left: 5px;*/
    padding-top: 40px;
    background: rgba(0,0,0,0.2);
    float: right;
    display: inline-block;
  }
  .radioContAfter{
    background-color: #3a8ee6;
  }
</style>
<style>
 .el-dialog__body {
    background-color: #041A29 !important;
   background: rgba(0,0,0,0.2);

   padding-top: 0px;
    padding-right: 0px;
  }
 .el-dialog__header{
    background: #041A29 !important;

  }
  .el-dialog__title{
    color: #fff;

  }
 .el-dialog__body h4,h5{
   color: white;
 }
</style>
