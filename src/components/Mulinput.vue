<template>
    <div>

      <div class="menubar">
        <el-menu :default-active=activebar class="el-menu-vertical-demo" @click="handleOpen" @close="handleClose" :collapse="isCollapse"router>
          <el-menu-item index="/corpse/companysearch">
            <i class="el-icon-location"></i>
            <span slot="title">企业信息查询</span>
          </el-menu-item>
          <el-menu-item index="/corpse/computed">
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
<!--      <div class="footer">-->
<!--        <img src="../assets/user.png" width="30px" style="margin-top: 10px">-->
<!--        <span >用户8462336</span>-->


<!--      </div>-->
      <div class="footer">
        <img src="../assets/logo.png" width="20px" @click="toHome">  <span style="font-family: '微软雅黑';font-size: 20px">探·僵局查询系统</span>
        <span style="color:#186EC5 ;font-size: 14px;margin-left: 1020px"></span>
        <i class="el-icon-monitor"></i>
        <span >墨鱼</span>           <span style="color:#186EC5 ;font-size: 14px;margin-left: 10px"></span>

        <el-button type="text" icon="el-icon-message" size="medium" style="width: 20px"></el-button>
        <el-button type="text" icon="el-icon-switch-button" size="large"></el-button>
      </div>

      <div class="step">
        <el-steps :active="1" align-center>
          <el-step title="1.选择分析模型" icon="el-icon-upload"></el-step>
          <el-step title="2.输入企业信息" icon="el-icon-edit"></el-step>
          <el-step title="3.查看数据报表" icon="el-icon-picture"></el-step>
        </el-steps>
      </div>
      <div class="inputtype">
        <div style="margin-top: 20px">
          <span>请选择企业信息的输入方式：</span>
          <el-radio-group v-model="radio4" size="medium" @change="changeradio">

            <el-radio-button label="单个输入" ></el-radio-button>
            <el-radio-button label="多个输入"></el-radio-button>
            <el-radio-button label="文件上传"></el-radio-button>
          </el-radio-group>
        </div>
      </div>
      <div class="tab">
      <template>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="" name="second" >
<!--            <span slot="label" style="width: 290px"><i class="el-icon-date"></i> 我的行程</span>-->
<div style="width: 100%;margin: 0 auto" v-if="show02">
  <el-row :gutter="50">
    <el-col :span="8" >
<!--      <el-card :body-style="{ padding: '0px' }">-->
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>企业编号：212311</span>

              <el-button style="float: right; padding: 3px 0" type="text"  @click="EditCard">编辑信息</el-button>
            </div>
<!--            <div  class=" item">-->

<!--            填写进度<el-progress :percentage="22"  :stroke-width="10" style="display:inline-block;width: 280px;margin-left: 15px"></el-progress>-->
<!--            </div>-->
            <div  class="text item">
              <i class="el-icon-s-flag"> </i> 基本信息表
              <el-progress :percentage="per1" :stroke-width="6" style="display:inline-block;width: 222px;margin-left: 45px"></el-progress>
            </div><div  class="text item">
            <i class="el-icon-s-flag"> </i>  知识产权表
            <el-progress :percentage="per2"   :stroke-width="6" style="display:inline-block;width: 222px;margin-left: 45px"></el-progress>

            </div><div  class="text item">
            <i class="el-icon-s-flag"> </i>   三年融资情况表
            <el-progress :percentage="per3" :stroke-width="6" style="display:inline-block;width: 222px;margin-left: 15px"></el-progress>

          </div><div  class="text item">
            <i class="el-icon-s-flag"> </i> 三年财务报告表
            <el-progress :percentage="per4" :stroke-width="6" style="display:inline-block;width: 222px;margin-left: 15px"></el-progress>

          </div>
          </el-card>
    </el-col>
    <el-col :span="8" >


        <el-card class="box-card" v-if="secondd">
          <div slot="header" class="clearfix">
            <span>企业编号：未编辑</span>
            <el-button style="float: right; padding: 3px 0" type="text">编辑信息</el-button>
          </div>
          <div  class="text item">
            <i class="el-icon-s-flag"> </i> 基本信息表
            <el-progress :percentage="0" :stroke-width="6" style="display:inline-block;width: 222px;margin-left: 45px"></el-progress>
          </div><div  class="text item">
          <i class="el-icon-s-flag"> </i>  知识产权表
          <el-progress :percentage="0"   :stroke-width="6" style="display:inline-block;width: 222px;margin-left: 45px"></el-progress>

        </div><div  class="text item">
          <i class="el-icon-s-flag"> </i>   三年融资情况表
          <el-progress :percentage="0" :stroke-width="6" style="display:inline-block;width: 222px;margin-left: 15px"></el-progress>

        </div><div  class="text item">
          <i class="el-icon-s-flag"> </i> 三年财务报告表
          <el-progress :percentage="0" :stroke-width="6" style="display:inline-block;width: 222px;margin-left: 15px"></el-progress>

        </div>

        </el-card>


    </el-col>
<!--    <el-col :span="8">-->
<!--      <el-card class="box-card">-->
<!--      </el-card>-->

<!--    </el-col>-->
        <el-col :span="8">

    <div style="margin-top: 200px">
      <a >
      <img src="../assets/添加2.png" width="40" @click="addmore">
      </a>
<!--      <el-button type="text" icon="el-icon-info"></el-button>-->

    </div>
        </el-col>

  </el-row>
<!--<img src="../assets/数据.gif" width="500px">-->
</div>
            <el-dialog title="企业基本信息表(1/4)" :visible.sync="editVisible01" width="500px">
              <el-form ref="form" :model="form" label-width="90px" >
                <el-form-item label="企业编号">
                  <el-input v-model="form.id"   size="small" ></el-input>
                </el-form-item>
                <el-form-item label="注册年份">
                  <el-input v-model="form.regist_date" size="small"></el-input>
                </el-form-item>
                <el-form-item label="注册资本">
                  <el-input v-model="form.regist_capital" size="small"><span slot="suffix">万</span></el-input>
                </el-form-item>
                <el-form-item label="区域">
                  <el-select v-model="form.area" placeholder=" " size="small">
                    <el-option
                      v-for="item in options_area"
                      :key="item.value"
                      :label="item.label"
                      :value="item.label">
                    </el-option>

                  </el-select>
                </el-form-item>
                <el-form-item label="行业">
                  <el-select v-model="form.industry" placeholder=" " size="small">
                    <el-option
                      v-for="item in options_industry"
                      :key="item.value"
                      :label="item.label"
                      :value="item.label">
                    </el-option>

                  </el-select>
                </el-form-item>
                <el-form-item label="企业类型">
                  <el-select v-model="form.company_type" placeholder=" " size="small">
                    <el-option
                      v-for="item in options_industry_company_type"
                      :key="item.value"
                      :label="item.label"
                      :value="item.label">
                    </el-option>

                  </el-select>
                </el-form-item>
                <el-form-item label="控制人类型">
                  <el-select v-model="form.controller_type" placeholder=" " size="small">
                    <el-option
                      v-for="item in options_industry_controller_type"
                      :key="item.value"
                      :label="item.label"
                      :value="item.label">
                    </el-option>

                  </el-select>
                </el-form-item>
                <el-form-item label="控制人持股">
                  <el-input v-model="form.interests" size="small"> <span slot="suffix">%</span></el-input>
                </el-form-item>
              </el-form>
              <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible01 = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit(1)">下一步</el-button>
            </span>
            </el-dialog>
            <el-dialog title="企业知识产权表(2/4)" :visible.sync="editVisible02" width="500px">
              <el-form ref="form" :model="form" label-width="90px" >

                <el-form-item label="专利" >
                  <el-radio v-model="form.patentt" label="1" >有</el-radio>
                  <el-radio v-model="form.patentt" label="0">无</el-radio>
                </el-form-item>
                <el-form-item label="商标">
                  <el-radio v-model="form.brand" label="1">有</el-radio>
                  <el-radio v-model="form.brand" label="0">无</el-radio>
                </el-form-item>
                <el-form-item label="著作权">
                  <el-radio v-model="form.copyrightt" label="1">有</el-radio>
                  <el-radio v-model="form.copyrightt" label="0">无</el-radio>
                </el-form-item>
              </el-form>
              <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible02 = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit(2)">下一步</el-button>
            </span>
            </el-dialog>
            <el-dialog title="三年融资情况表(4/4)" :visible.sync="editVisible03" width="1200px">

              <el-form ref="form" :model="form" label-width="170px" label-position="left" size="small">
                <el-row :gutter="20">
                  <el-col :span="8">
                    <div class="grid-content bg-purple">
                    <h3>2015年的融资情况表</h3>
                    <!--                <el-input v-model="form.regist_capital" size="small" style="width: 100px;"><span slot="suffix"> </span></el-input><label>年的融资情况表</label>-->
                    <el-form-item label="债券融资额度">
                      <el-input size="small" v-model="form.debt_financing_1" placeholder=" " > </el-input>
                    </el-form-item>
                    <el-form-item label="债券融资成本">
                      <el-input size="small" v-model="form.debt_financing_2" placeholder=" " > </el-input>
                    </el-form-item>
                    <el-form-item label="股权融资额度">
                      <el-input size="small" v-model="form.debt_financing_3" placeholder=" " > </el-input>
                    </el-form-item>
                    <el-form-item label="股权融资成本">
                      <el-input size="small" v-model="form.debt_financing_4" placeholder=" " > </el-input>
                    </el-form-item>
                    <el-form-item label="内部融资和贸易融资额度">
                      <el-input size="small" v-model="form.debt_financing_5" placeholder=" " > </el-input>
                    </el-form-item>
                    <el-form-item label="内部融资和贸易融资成本">
                      <el-input size="small" v-model="form.debt_financing_6" placeholder=" " > </el-input>
                    </el-form-item>
                    <el-form-item label="项目融资和政策融资额度">
                      <el-input size="small" v-model="form.debt_financing_7" placeholder=" " > </el-input>
                    </el-form-item>
                    <el-form-item label="项目融资和政策融资成本">
                      <el-input size="small" v-model="form.debt_financing_8" placeholder=" " > </el-input>
                    </el-form-item>
                    </div>
                  </el-col>
                  <el-col :span="8"><div class="grid-content bg-purple">
                    <h3>2016年的融资情况表</h3>
                    <!--                <el-input v-model="form.regist_capital" size="small" style="width: 100px;"><span slot="suffix"> </span></el-input><label>年的融资情况表</label>-->
                    <el-form-item label="债券融资额度">
                      <el-input size="small" v-model="form.debt_financing_11" placeholder=" " > </el-input>
                    </el-form-item>
                    <el-form-item label="债券融资成本">
                      <el-input size="small" v-model="form.debt_financing_12" placeholder=" " > </el-input>
                    </el-form-item>
                    <el-form-item label="股权融资额度">
                      <el-input size="small" v-model="form.debt_financing_13" placeholder=" " > </el-input>
                    </el-form-item>
                    <el-form-item label="股权融资成本">
                      <el-input size="small" v-model="form.debt_financing_14" placeholder=" " > </el-input>
                    </el-form-item>
                    <el-form-item label="内部融资和贸易融资额度">
                      <el-input size="small" v-model="form.debt_financing_15" placeholder=" " > </el-input>
                    </el-form-item>
                    <el-form-item label="内部融资和贸易融资成本">
                      <el-input size="small" v-model="form.debt_financing_16" placeholder=" " > </el-input>
                    </el-form-item>
                    <el-form-item label="项目融资和政策融资额度">
                      <el-input size="small" v-model="form.debt_financing_17" placeholder=" " > </el-input>
                    </el-form-item>
                    <el-form-item label="项目融资和政策融资成本">
                      <el-input size="small" v-model="form.debt_financing_18" placeholder=" " > </el-input>
                    </el-form-item>
                  </div></el-col>
                  <el-col :span="8"><div class="grid-content bg-purple">
                    <h3>2017年的融资情况表</h3>
                    <!--                <el-input v-model="form.regist_capital" size="small" style="width: 100px;"><span slot="suffix"> </span></el-input><label>年的融资情况表</label>-->
                    <el-form-item label="债券融资额度">
                      <el-input size="small" v-model="form.debt_financing_21" placeholder=" " > </el-input>
                    </el-form-item>
                    <el-form-item label="债券融资成本">
                      <el-input size="small" v-model="form.debt_financing_22" placeholder=" " > </el-input>
                    </el-form-item>
                    <el-form-item label="股权融资额度">
                      <el-input size="small" v-model="form.debt_financing_23" placeholder=" " > </el-input>
                    </el-form-item>
                    <el-form-item label="股权融资成本">
                      <el-input size="small" v-model="form.debt_financing_24" placeholder=" " > </el-input>
                    </el-form-item>
                    <el-form-item label="内部融资和贸易融资额度">
                      <el-input size="small" v-model="form.debt_financing_25" placeholder=" " > </el-input>
                    </el-form-item>
                    <el-form-item label="内部融资和贸易融资成本">
                      <el-input size="small" v-model="form.debt_financing_26" placeholder=" " > </el-input>
                    </el-form-item>
                    <el-form-item label="项目融资和政策融资额度">
                      <el-input size="small" v-model="form.debt_financing_27" placeholder=" " > </el-input>
                    </el-form-item>
                    <el-form-item label="项目融资和政策融资成本">
                      <el-input size="small" v-model="form.debt_financing_28" placeholder=" " > </el-input>
                    </el-form-item>
                  </div></el-col>
                </el-row>

              </el-form>
              <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible03 = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit(3)">完成</el-button>
            </span>
            </el-dialog>

            <el-button type="primary" @click="visib_loading" style="width: 100px;margin-left: 500px;">提交</el-button> <el-tooltip content="若查询数量较多，建议使用文件上传." placement="right" effect="light">
            <i class="el-icon-info" ></i>
          </el-tooltip>

          </el-tab-pane>

          <el-tab-pane label="" name="three">
            <div style="width: 400px;margin-left: 20px">

              <h3>请按照格式要求提交文件： </h3><br>
              1.基本信息表: <br>
              <img src="../assets/事例1.png" height="60px"/> <br><br>
              2.知识产权表:<br>
              <img src="../assets/事例2.png" height="60px"/> <br><br>
              3.三年融资信息表： <br>
              <img src="../assets/事例3.png" height="55px"/> <br><br>
              4.三年财务报告表： <br>
              <img src="../assets/事例4.png" height="60px"/> <br><br>

<!--              对应表格的数据项可移至 <el-tooltip placement="top" effect="light">-->
<!--                <div slot="content"style="font-size: 16px">-->
<!--                  1.企业信息表:<br/>-->
<!--                  ID	|	注册时间 |	注册资本	|	行业	|	区域	|	企业类型	|	控制人类型	|	控制人持股比例-->
<!--                  <br><br>-->
<!--                  2.知识产权表: <br>-->
<!--                  ID	|	专利	|	商标	|	著作权-->
<!--                  <br><br>-->
<!--                  3.融资信息表 <br>-->
<!--                  ID	|	年份	|	债权融资额度	|	债权融资成本	|	股权融资额度	|	股权融资成本	|	内部融资和贸易融资额度	|	内部融资和贸易融资成本	|	项目融资和政策融资额度	|	项目融资和政策融资成本-->
<!--                </div>-->
<!--                <el-button>此处</el-button>-->
<!--              </el-tooltip>查看-->

            </div>
            <div style="width:400px;margin: 0 auto" v-if="show03">
              <el-upload
                class="upload-demo"
                ref="upload"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                :auto-upload="false">
                <i class="el-icon-upload"></i>
<!--                <el-button slot="trigger" size="small" type="text" >点此上传xlm、csv等格式的文件</el-button>-->
<!--                <div slot="tip" class="el-upload__tip">请上传xlm、csv文件</div>-->
                <div>点此上传xlm、csv等格式的文件</div>

              </el-upload>
              <el-button style="width: 260px;margin-left: 50px" size="small" type="primary" @click="visib_loading">提交</el-button>
              <br>

<!--              @click="submitUpload"-->
            </div>

            <div style="margin: 0 auto;width: 800px;color:#ff4d51" v-if="ans">根据您输入的企业信息，判定该企业为：僵尸企业
              点击<el-button type="text" @click="show_ans">详情</el-button>即可查看企业的详细分析数据。
            </div>

          </el-tab-pane>

          <el-tab-pane label="" name="first">
            <div class="colla" v-if="show01">
              <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="基本信息表" name="1">
                  <div style="width: 90%;margin: 0 auto">
                    <el-table :data="tableData1" class="tb-edit" style="width: 100%" highlight-current-row >
                      <el-table-column label="企业编号" align="center" width="100">
                        <template scope="scope">
                          <el-input size="small" v-model="compan_num" placeholder=" " ></el-input>
                        </template>
                      </el-table-column>
                      <el-table-column label="注册年份" align="center" width="100">
                        <template scope="scope">
                          <el-input size="small" v-model="scope.row.year" placeholder=" " ></el-input>
                        </template>
                      </el-table-column>
                      <el-table-column prop="注册资本" label="注册资本" align="center" width="120">
                        <template scope="scope">
                          <el-input size="small" v-model="scope.row.registered_capital" placeholder=" " ><span slot="suffix">万</span></el-input>
                        </template>
                      </el-table-column>

                      <el-table-column prop="区域" label="区域" align="center" width="110">
                        <template scope="scope">
                          <!--                    <el-input size="small" v-model="scope.row.area" placeholder=" " ></el-input> <span>{{scope.row.area}}</span>-->
                          <el-select v-model="scope.row.area" placeholder=" ">
                            <el-option
                              v-for="item in options_area"
                              :key="item.value"
                              :label="item.label"
                              :value="item.label">
                            </el-option>

                          </el-select>
                        </template>
                      </el-table-column>

                      <el-table-column prop="行业" label="行业" align="center" width="140">
                        <template scope="scope">
                          <!--                    <el-input size="small" v-model="scope.row.industry" placeholder=" " ></el-input> <span>{{scope.row.industry}}</span>-->
                          <el-select v-model="scope.row.industry" placeholder=" ">
                            <el-option
                              v-for="item in options_industry"
                              :key="item.value"
                              :label="item.label"
                              :value="item.label">
                            </el-option>

                          </el-select>
                          <!--                    <span>{{scope.row.industry}}</span>-->

                        </template>
                      </el-table-column>






                      <el-table-column prop="企业类型" label="企业类型" align="center" width="170">
                        <template scope="scope">
                          <!--                    <el-input size="small" v-model="scope.row.company_type" placeholder=" " ></el-input> <span>{{scope.row.company_type}}</span>-->
                          <el-select v-model="scope.row.company_type" placeholder=" ">
                            <el-option
                              v-for="item in options_industry_company_type"
                              :key="item.value"
                              :label="item.label"
                              :value="item.label">
                            </el-option>

                          </el-select>
                        </template>
                      </el-table-column>
                      <el-table-column prop="控制人类型" label="控制人类型" align="center" width="130">
                        <template scope="scope">
<!--                          <el-input size="small" v-model="scope.row.controller_type" placeholder=" " ></el-input> <span>{{scope.row.controller_type }} </span>-->
                          <el-select v-model="scope.row.controller_type" placeholder=" ">
                            <el-option
                              v-for="item in options_industry_controller_type"
                              :key="item.value"
                              :label="item.label"
                              :value="item.label">
                            </el-option>

                          </el-select>
                        </template>
                      </el-table-column>
                      <el-table-column prop="控制人持股" label="控制人持股" align="center" width="100">
                        <template scope="scope">
                          <el-input size="small" v-model="scope.row.controller_share" placeholder=" " >
                            <span slot="suffix">%</span>
                          </el-input>
                        </template>
                      </el-table-column>

                    </el-table>
                    <!--              <br>数据:{{tableData1}}-->
                  </div>

                </el-collapse-item>
                <el-collapse-item title="知识产权表" name="2">
                  <div style="width: 60%;margin: 0 auto">
                    <el-table :data="tableData2" class="tb-edit" style="width: 100%" highlight-current-row >
                      <el-table-column label="企业编号" align="center" width="110">
                        <template scope="scope">
                          <el-input size="small" v-model="compan_num" placeholder=" " ></el-input>
                        </template>
                      </el-table-column>
                      <el-table-column label="专利" align="center" >
                        <template scope="scope">
                          <!--                    <el-input size="small" v-model="scope.row.patentt" placeholder=" " ></el-input>-->
                          <el-radio v-model="scope.row.patentt" label="1">有</el-radio>
                          <el-radio v-model="scope.row.patentt" label="0">无</el-radio>
                          <!--                    <span>{{scope.row.patentt}}</span>-->
                        </template>
                      </el-table-column>
                      <el-table-column prop="商标" label="商标" align="center">
                        <template scope="scope">
                          <!--                    <el-input size="small" v-model="scope.row.brand" placeholder=" " ></el-input> <span>{{scope.row.brand}}</span>-->
                          <el-radio v-model="scope.row.brand" label="1">有</el-radio>
                          <el-radio v-model="scope.row.brand" label="0">无</el-radio>
                        </template>
                      </el-table-column>
                      <el-table-column prop="著作权" label="著作权" align="center">
                        <template scope="scope">
                          <!--                    <el-input size="small" v-model="scope.row.copyrightt" placeholder=" " ></el-input> <span>{{scope.row.copyrightt}}</span>-->
                          <el-radio v-model="scope.row.copyrightt" label="1">有</el-radio>
                          <el-radio v-model="scope.row.copyrightt" label="0">无</el-radio>
                        </template>
                      </el-table-column>


                    </el-table>
                    <!--              <br>数据:{{tableData2}}-->
                  </div>

                </el-collapse-item>
                <el-collapse-item title="三年融资情况表" name="3">
                  <div style="width: 100%;margin: 0 auto">
                    <el-table :data="tableData3" class="tb-edit" style="width: 100%" highlight-current-row :span-method="objectSpanMethod"
                              border >
                      <el-table-column label="企业编号" align="center" width="100">
                        <template scope="scope">
                          <el-input size="small" v-model="compan_num" placeholder=" " ></el-input>
                        </template>
                      </el-table-column>
                      <el-table-column label="年份" align="center" width="80">
                        <template scope="scope">
                          <el-input size="small" v-model="scope.row.year" placeholder=" " ></el-input>
                        </template>
                      </el-table-column>
                      <el-table-column prop="债权融资额度" label="债权融资额度" align="center" width="110">
                        <template scope="scope">
                          <el-input size="small" v-model="scope.row.debt_financing_line" placeholder=" " > </el-input>
                        </template>
                      </el-table-column>
                      <el-table-column prop="债权融资成本" label="债权融资成本" align="center" width="110">
                        <template scope="scope">
                          <el-input size="small" v-model="scope.row.debt_financing_cost" placeholder=" " ></el-input>
                        </template>
                      </el-table-column>
                      <el-table-column prop="股权融资额度" label="股权融资额度" align="center" width="110">
                        <template scope="scope">
                          <el-input size="small" v-model="scope.row.equity_financing_line" placeholder=" " ></el-input>
                        </template>
                      </el-table-column>
                      <el-table-column prop="股权融资成本" label="股权融资成本" align="center" width="110">
                        <template scope="scope">
                          <el-input size="small" v-model="scope.row.equity_capital_cost" placeholder=" " ></el-input>
                        </template>
                      </el-table-column>
                      <el-table-column prop="内部融资和贸易融资额度" label="内部融资和贸易融资额度"  align="center">
                        <template scope="scope">
                          <el-input size="small" v-model="scope.row.internal_and_trade_finance_line" placeholder=" " ></el-input>
                        </template>
                      </el-table-column>
                      <el-table-column prop="内部融资和贸易融资成本" label="内部融资和贸易融资成本"  align="center">
                        <template scope="scope">
                          <el-input size="small" v-model="scope.row.internal_and_trade_finance_cost" placeholder=" " ></el-input>
                        </template>
                      </el-table-column>
                      <el-table-column prop="项目融资和政策融资额度" label="项目融资和政策融资额度"  align="center">
                        <template scope="scope">
                          <el-input size="small" v-model="scope.row.project_financing_and_policy_financing_line" placeholder=" " ></el-input>
                        </template>
                      </el-table-column>
                      <el-table-column prop="项目融资和政策融资成本" label="项目融资和政策融资成本"  align="center">
                        <template scope="scope">
                          <el-input size="small" v-model="scope.row.project_financing_and_policy_financing_cost" placeholder=" " ></el-input>
                        </template>
                      </el-table-column>


                    </el-table>
                    <!--              <br>数据:{{tableData3}}-->
                  </div>
                </el-collapse-item>
                <el-collapse-item title="三年财务报告表" name="4">
                  <div style="width: 100%;margin: 0 auto">
                    <el-table :data="tableData3" class="tb-edit" style="width: 100%" highlight-current-row :span-method="objectSpanMethod"
                              border >
                      <el-table-column label="企业编号" align="center" width="100">
                        <template scope="scope">
                          <el-input size="small" v-model="compan_num" placeholder=" " ></el-input>
                        </template>
                      </el-table-column>
                      <el-table-column label="年份" align="center" width="80">
                        <template scope="scope">
                          <el-input size="small" v-model="scope.row.year" placeholder=" " ></el-input>
                        </template>
                      </el-table-column>
                      <el-table-column prop="从业人数" label="从业人数" align="center" width="110">
                        <template scope="scope">
                          <el-input size="small" v-model="scope.row.debt_financing_line" placeholder="" >
                            <span slot="suffix">人</span>
                          </el-input>
                        </template>
                      </el-table-column>
                      <el-table-column prop="资产总额" label="资产总额" align="center" >
                        <template scope="scope">
                          <el-input size="small" v-model="scope.row.debt_financing_cost" placeholder=" " ></el-input>
                        </template>
                      </el-table-column>
                      <el-table-column prop="负债总额" label="负债总额" align="center">
                        <template scope="scope">
                          <el-input size="small" v-model="scope.row.equity_financing_line" placeholder=" " ></el-input>
                        </template>
                      </el-table-column>
                      <el-table-column prop="营业总收入" label="营业总收入" align="center">
                        <template scope="scope">
                          <el-input size="small" v-model="scope.row.equity_capital_cost" placeholder=" " ></el-input>
                        </template>
                      </el-table-column>
                      <el-table-column prop="主营业务收入" label="主营业务收入"  align="center" width="110">
                        <template scope="scope">
                          <el-input size="small" v-model="scope.row.internal_and_trade_finance_line" placeholder=" " ></el-input>
                        </template>
                      </el-table-column>
                      <el-table-column prop="利润总额" label="利润总额"  align="center">
                        <template scope="scope">
                          <el-input size="small" v-model="scope.row.internal_and_trade_finance_cost" placeholder=" " ></el-input>
                        </template>
                      </el-table-column>
                      <el-table-column prop="净利润" label="净利润"  align="center">
                        <template scope="scope">
                          <el-input size="small" v-model="scope.row.project_financing_and_policy_financing_line" placeholder=" " ></el-input>
                        </template>
                      </el-table-column>
                      <el-table-column prop="纳税总额" label="纳税总额"  align="center">
                        <template scope="scope">
                          <el-input   size="small" v-model="scope.row.project_financing_and_policy_financing_cost" placeholder=" " >
<!--                            <span slot="suffix">万</span>-->
                          </el-input>
                        </template>
                      </el-table-column>
                      <el-table-column prop="所有者权益合计" label="所有者权益合计"  align="center">
                        <template scope="scope">
                          <el-input size="small" v-model="scope.row.project_financing_and_policy_financing_cost" placeholder=" " ></el-input>
                        </template>
                      </el-table-column>


                    </el-table>
                    <!--              <br>数据:{{tableData3}}-->
                  </div>
                </el-collapse-item>
              </el-collapse>
            </div>
            <br>
            <div style="margin: 0 auto;width: 100px">
            <el-button type="primary" @click="visib_loading">提交</el-button>
            </div>
            <div style="margin: 0 auto;width: 800px" v-if="ans">根据您输入的企业信息，判定该企业为：僵尸企业，
              点击<el-button type="text" @click="show_ans">详情</el-button>即可查看企业的详细分析数据。
            </div>
          </el-tab-pane>
        </el-tabs>

      </template>
      </div>

      <el-dialog
        style="background-color: #000;opacity: 0.8"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <img src="../assets/_0.gif" width="600px" style="margin-left: -50px;margin-top: -60px">
        <img src="../assets/_0.gif" width="600px" style="margin-left: -50px;margin-top: -10px">
<!--        <span style="background-color: black">您输入的信息正在被计算，请稍后……</span>-->
        <span slot="footer" class="" style="background-color: black">
<!--    <el-button @click="dialogVisible = false">取 消</el-button>-->
    <el-button type="primary" @click="dialogVisible = false;ans=true">确 定</el-button>
  </span>
      </el-dialog>
    </div>
</template>

<script>
  import $ from 'jquery'
    export default {
      name: "Mulinput",
      data() {

        return {
          secondd:false,
          per1:0,
          per2:0,
          per3:0,
          per4:0,
          form: {},
          editVisible01:false,
          editVisible02:false,
          editVisible03:false,
          editVisible04:false,
          checkList: ['选中且禁用','复选框 A'],
          currentDate: new Date(),
          compan_num:'',
          ans:false,
          dialogVisible: false,
          isCollapse: !false,
          activebar:'/corpse/computed',
          show01:true,
          show02:false,
          show03:false,
          radio4: '',
          activeNames: ['1'],
          radio: '',
          options_area: [
            {
            value: '1',
            label: '福建'
          }, {
            value: '2',
            label: '广东'
          }, {
            value: '3',
            label: '江西'
          }, {
            value: '4',
            label: '山东'
          }, {
            value: '5',
            label: '广西'
          },
          {
            value: '6',
            label: '湖南'
          },{
            value: '7',
            label: '湖北'
          }],
          options_industry: [
            {
            value: '1',
            label: '交通运输业'
          }, {
            value: '2',
            label: '服务业'
          }, {
            value: '3',
            label: '工业'
          }, {
            value: '4',
            label: '社区服务'
          }, {
            value: '5',
            label: '零售业'
          },
          {
            value: '6',
            label: '商业服务'
          }],
          options_industry_company_type:[
            {
          value: '1',
          label: '农民专业合作社'
        }, {
          value: '2',
          label: '集体所有制企业'
        }, {
          value: '3',
          label: '股份有限公司'
        }, {
          value: '4',
          label: '有限责任公司'
        }, {
          value: '5',
          label: '合伙企业'
        }],
          options_industry_controller_type:[
            {
              value: '1',
              label: '企业法人'
            },{
              value: '2',
              label: '自然人'
            },
          ],
          activeName: '',
          fileList: [
        //     {
        //   // name: '事例excel文件.xml',
        //   // url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        //   // status: 'finished'
        // },
          //   {
          //   name: 'food2.jpeg',
          //   url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
          //   status: 'finished'
          // }
          ],
          tableData1: [{
            // id: '11',
            // year: 'year',
            // registered_capital: 'registered_capital',
            // industry: '22',
            // area: 'area',
            // company_type: 'company_type',
            // controller_type: 'controller_type',
            // controller_share: 'controller_share'
            id: this.compan_num,
            year: '',
            registered_capital: '',
            industry: '',
            area: '',
            company_type: '',
            controller_type: '',
            controller_share: ''
          }],
          tableData2: [{
            id: this.compan_num,
            patentt: '',
            brand: '',
            copyrightt: ''
          }],
          tableData3: [
          //   {
          //   id: '11',
          //   year: '2002',
          //   debt_financing_line: '2',
          //   debt_financing_cost:'111',
          //   equity_financing_line:'222',
          //   equity_capital_cost:'333',
          //   internal_and_trade_finance_line:'444',
          //   internal_and_trade_finance_cost:'555',
          //   project_financing_and_policy_financing_line:'666',
          //   project_financing_and_policy_financing_cost:'777'
          // },{
          //   id: '11',
          //   year: '2003',
          //   debt_financing_line: '2',
          //   debt_financing_cost:'111',
          //   equity_financing_line:'222',
          //   equity_capital_cost:'333',
          //   internal_and_trade_finance_line:'444',
          //   internal_and_trade_finance_cost:'555',
          //   project_financing_and_policy_financing_line:'666',
          //   project_financing_and_policy_financing_cost:'777'
          // },{
          //   id: '11',
          //   year: '2004',
          //   debt_financing_line: '2',
          //   debt_financing_cost:'111',
          //   equity_financing_line:'222',
          //   equity_capital_cost:'333',
          //   internal_and_trade_finance_line:'444',
          //   internal_and_trade_finance_cost:'555',
          //   project_financing_and_policy_financing_line:'666',
          //   project_financing_and_policy_financing_cost:'777'
          // }
            {
            id: this.compan_num,
            year: '2015',
            debt_financing_line: '',
            debt_financing_cost:'',
            equity_financing_line:'',
            equity_capital_cost:'',
            internal_and_trade_finance_line:'',
            internal_and_trade_finance_cost:'',
            project_financing_and_policy_financing_line:'',
            project_financing_and_policy_financing_cost:''
          },{
            id: this.compan_num,
            year: '2016',
            debt_financing_line: '',
            debt_financing_cost:'',
            equity_financing_line:'',
            equity_capital_cost:'',
            internal_and_trade_finance_line:'',
            internal_and_trade_finance_cost:'',
            project_financing_and_policy_financing_line:'',
            project_financing_and_policy_financing_cost:''
          },{
            id: this.compan_num,
            year: '2017',
            debt_financing_line: '',
            debt_financing_cost:'',
            equity_financing_line:'',
            equity_capital_cost:'',
            internal_and_trade_finance_line:'',
            internal_and_trade_finance_cost:'',
            project_financing_and_policy_financing_line:'',
            project_financing_and_policy_financing_cost:''
          }
          ],

        }
      },
      methods: {
        visib_loading(){
          this.dialogVisible = true;
          setTimeout(() => {
           this.dialogVisible = false;
            this.$message('僵尸企业测评已完成，用时0.58413秒！');


          }, 2200);
        },
        addmore(){
          this.secondd=true;
        },
        saveEdit(i){
          if(i==1){
          this.editVisible01 = false;
          this.editVisible02 = true;
          this.$set(this.tableData, this.idx, this.form);
          } if(i==2){
          this.editVisible02 = false;
            this.editVisible03 = true;
          this.$set(this.tableData, this.idx, this.form);
          }if(i==3){
            this.per1=100;
            this.per2=100;
            this.per3=100;
            this.per4=100;
          this.editVisible03 = false;
            this.editVisible04 = true;
          this.$set(this.tableData, this.idx, this.form);


          }if(i==4){
          this.editVisible04 = false;
          this.$set(this.tableData, this.idx, this.form);
          }
        },
        EditCard(){
          this.editVisible01 = true;
        },
        toHome(){
          this.$router.push({path:'/home/'})
        },
        show_ans(){
          alert("跳转至数据报表页面，与企业详细信息类似")
        },
        handleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {

              done();
            })
            .catch(_ => {});
        },
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
          this.activebar=key.index;
          console.log(key.index);

        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
        changeradio(){
          console.log("change");
          console.log(this.radio4);
          if (this.radio4 == "单个输入"){
            this.show01=true;
            this.show02=false;
            this.show03=false;
            this.activeName="first"

          }if (this.radio4 == "多个输入"){
            this.show01=false;
            this.show02=true;
            this.show03=false;
            this.activeName="second"


          }if (this.radio4 == "文件上传"){
            this.show01=false;
            this.show02=false;
            this.show03=true;
            this.activeName="three"


          }



        },
        handleChange(val) {
          console.log(val);
        },
        handleClick(tab, event) {
          console.log(tab, event);
        },
        submitUpload() {
          this.$refs.upload.submit();
        },
        handleRemove(file, fileList) {
          console.log(file, fileList);
        },
        handlePreview(file) {
          console.log(file);
        },
        objectSpanMethod({row, column, rowIndex, columnIndex}) {
          if (columnIndex === 0) {
            if (rowIndex % 3 === 0) {
              return {
                rowspan: 3,
                colspan: 1
              };
            } else {
              return {
                rowspan: 0,
                colspan: 0
              };
            }
          }
        }
      },
      mounted() {
        $("el-table-column").attr("align","center");
        console.log("111")
      }
    }
</script>

<style scoped>
  .inputtype{
    width: 560px;
    margin: 0 auto;
  }

  .step{
    /*margin-left: 150px;*/

    width: 900px;
    margin: 50px auto;
  }
  .tab{
    width: 1200px;
    margin: 0 auto;
  }
  .menubar{
    /*float: left;*/
    margin-top: 100px;
    /*margin-left: 20px;*/
    position:fixed;
    top:20px;
    left:15px;
  }
  .footer{
    margin-left: 90%;
    width: 650px;
    /*margin-top: 80px;*/
    display: inline-block;
    /*float: right;*/
  }
  .colla{
    width: 1100px;
    margin: 0 auto;
  }
  .footer{
    margin-left: 1%;
    width: 1350px;
    /*margin-top: 80px;*/
    display: inline-block;
    /*float: right;*/
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 400px;
  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
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
    /*background: #99a9bf;*/
  }
  .bg-purple {
    background: linen;
  }
  .bg-purple-light {
    /*background: #e5e9f2;*/
  }
  .grid-content {
    width: 100%;
    height:14px;
    border-radius: 4px;
    border-color: #ff4d51;
    border-width: 8px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
