<template>
    <div>

      <div class="step">
        <el-steps :active="1" align-center>
          <el-step title="1.选择分析模型" icon="el-icon-upload"></el-step>
          <el-step title="2.输入企业信息" icon="el-icon-edit"></el-step>
          <el-step title="3.查看数据报表" icon="el-icon-picture"></el-step>
        </el-steps>
      </div>
      <div class="tab">
      <template>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="多个输入" name="first" >
            <span slot="label" style="width: 290px"><i class="el-icon-date"></i> 我的行程</span>
<div style="width: 600px;margin: 0 auto">
折叠面板收纳
</div>
          </el-tab-pane>
          <el-tab-pane label="文件上传" name="second">
            <div style="width: 300px;margin: 0 auto">
              <el-upload
                class="upload-demo"
                ref="upload"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                :auto-upload="false">
                <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                <div slot="tip" class="el-upload__tip">请上传xlm、csv文件</div>
              </el-upload>
            </div>
          </el-tab-pane>
          <el-tab-pane label="单个输入" name="three">
            <div style="width: 90%;margin: 0 auto">
              <label>基本信息表</label>
              <el-table :data="tableData1" class="tb-edit" style="width: 100%" highlight-current-row >
                <el-table-column label="企业编号" >
                  <template scope="scope">
                    <el-input size="small" v-model="scope.row.id" placeholder="请输入内容" ></el-input> <span>{{scope.row.id}}</span>
                  </template>
                </el-table-column>
                <el-table-column label="注册年份" >
                  <template scope="scope">
                    <el-input size="small" v-model="scope.row.year" placeholder="请输入内容" ></el-input> <span>{{scope.row.year}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="注册资本" label="注册资本">
                  <template scope="scope">
                    <el-input size="small" v-model="scope.row.registered_capital" placeholder="请输入内容" ></el-input> <span>{{scope.row.registered_capital}}</span>
                  </template>
                </el-table-column>

                <el-table-column prop="区域" label="区域">
                  <template scope="scope">
<!--                    <el-input size="small" v-model="scope.row.area" placeholder="请输入内容" ></el-input> <span>{{scope.row.area}}</span>-->
                    <el-select v-model="scope.row.area" placeholder="请选择">
                      <el-option
                        v-for="item in options_area"
                        :key="item.value"
                        :label="item.label"
                        :value="item.label">
                      </el-option>

                    </el-select>
                  </template>
                </el-table-column>

                <el-table-column prop="行业" label="行业">
                  <template scope="scope">
<!--                    <el-input size="small" v-model="scope.row.industry" placeholder="请输入内容" ></el-input> <span>{{scope.row.industry}}</span>-->
                    <el-select v-model="scope.row.industry" placeholder="请选择">
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






                <el-table-column prop="企业类型" label="企业类型">
                  <template scope="scope">
<!--                    <el-input size="small" v-model="scope.row.company_type" placeholder="请输入内容" ></el-input> <span>{{scope.row.company_type}}</span>-->
                    <el-select v-model="scope.row.company_type" placeholder="请选择">
                      <el-option
                        v-for="item in options_industry_company_type"
                        :key="item.value"
                        :label="item.label"
                        :value="item.label">
                      </el-option>

                    </el-select>
                  </template>
                </el-table-column>
                <el-table-column prop="控制人类型" label="控制人类型">
                  <template scope="scope">
                    <el-input size="small" v-model="scope.row.controller_type" placeholder="请输入内容" ></el-input> <span>{{scope.row.controller_type }} %</span>
                  </template>
                </el-table-column>
                <el-table-column prop="控制人持股" label="控制人持股">
                  <template scope="scope">
                    <el-input size="small" v-model="scope.row.controller_share" placeholder="请输入内容" ></el-input> <span>{{scope.row.controller_share}}</span>
                  </template>
                </el-table-column>

              </el-table>
<!--              <br>数据:{{tableData1}}-->
            </div>
            <br>
            <div style="width: 90%;margin: 0 auto">
              <label>知识产权信息表</label>
              <el-table :data="tableData2" class="tb-edit" style="width: 100%" highlight-current-row >
                <el-table-column label="企业编号" >
                  <template scope="scope">
                    <el-input size="small" v-model="scope.row.id" placeholder="请输入内容" ></el-input>
                    <span>{{scope.row.id}}</span>
                  </template>
                </el-table-column>
                <el-table-column label="专利" >
                  <template scope="scope">
<!--                    <el-input size="small" v-model="scope.row.patentt" placeholder="请输入内容" ></el-input>-->
                    <el-radio v-model="scope.row.patentt" label="1">有</el-radio>
                    <el-radio v-model="scope.row.patentt" label="0">无</el-radio>
<!--                    <span>{{scope.row.patentt}}</span>-->
                  </template>
                </el-table-column>
                <el-table-column prop="商标" label="商标">
                  <template scope="scope">
<!--                    <el-input size="small" v-model="scope.row.brand" placeholder="请输入内容" ></el-input> <span>{{scope.row.brand}}</span>-->
                    <el-radio v-model="scope.row.brand" label="1">有</el-radio>
                    <el-radio v-model="scope.row.brand" label="0">无</el-radio>
                  </template>
                </el-table-column>
                <el-table-column prop="著作权" label="著作权">
                  <template scope="scope">
<!--                    <el-input size="small" v-model="scope.row.copyrightt" placeholder="请输入内容" ></el-input> <span>{{scope.row.copyrightt}}</span>-->
                    <el-radio v-model="scope.row.copyrightt" label="1">有</el-radio>
                    <el-radio v-model="scope.row.copyrightt" label="0">无</el-radio>
                  </template>
                </el-table-column>


              </el-table>
<!--              <br>数据:{{tableData2}}-->
            </div>
            <br>
            <div style="width: 90%;margin: 0 auto">
              <label>融资信息表</label>
              <el-table :data="tableData3" class="tb-edit" style="width: 100%" highlight-current-row :span-method="objectSpanMethod"
                        border >
                <el-table-column label="企业编号" >
                  <template scope="scope">
                    <el-input size="small" v-model="scope.row.id" placeholder="请输入内容" ></el-input> <span>{{scope.row.id}}</span>
                  </template>
                </el-table-column>
                <el-table-column label="年份" >
                  <template scope="scope">
                    <el-input size="small" v-model="scope.row.year" placeholder="请输入内容" ></el-input> <span>{{scope.row.year}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="债权融资额度" label="债权融资额度">
                  <template scope="scope">
                    <el-input size="small" v-model="scope.row.debt_financing_line" placeholder="请输入内容" ></el-input> <span>{{scope.row.debt_financing_line}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="债权融资成本" label="债权融资成本">
                  <template scope="scope">
                    <el-input size="small" v-model="scope.row.debt_financing_cost" placeholder="请输入内容" ></el-input> <span>{{scope.row.debt_financing_cost}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="股权融资额度" label="股权融资额度">
                  <template scope="scope">
                    <el-input size="small" v-model="scope.row.equity_financing_line" placeholder="请输入内容" ></el-input> <span>{{scope.row.equity_financing_line}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="股权融资成本" label="股权融资成本">
                  <template scope="scope">
                    <el-input size="small" v-model="scope.row.equity_capital_cost" placeholder="请输入内容" ></el-input> <span>{{scope.row.equity_capital_cost}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="内部融资和贸易融资额度" label="内部融资和贸易融资额度">
                  <template scope="scope">
                    <el-input size="small" v-model="scope.row.internal_and_trade_finance_line" placeholder="请输入内容" ></el-input> <span>{{scope.row.internal_and_trade_finance_line}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="内部融资和贸易融资成本" label="内部融资和贸易融资成本">
                  <template scope="scope">
                    <el-input size="small" v-model="scope.row.internal_and_trade_finance_cost" placeholder="请输入内容" ></el-input> <span>{{scope.row.internal_and_trade_finance_cost}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="项目融资和政策融资额度" label="项目融资和政策融资额度">
                  <template scope="scope">
                    <el-input size="small" v-model="scope.row.project_financing_and_policy_financing_line" placeholder="请输入内容" ></el-input> <span>{{scope.row.project_financing_and_policy_financing_line}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="项目融资和政策融资成本" label="项目融资和政策融资成本">
                  <template scope="scope">
                    <el-input size="small" v-model="scope.row.project_financing_and_policy_financing_cost" placeholder="请输入内容" ></el-input> <span>{{scope.row.project_financing_and_policy_financing_cost}}</span>
                  </template>
                </el-table-column>


              </el-table>
<!--              <br>数据:{{tableData3}}-->
            </div>

          </el-tab-pane>
        </el-tabs>
      </template>
      </div>
    </div>
</template>

<script>
    export default {
      name: "Mulinput",
      data() {

        return {
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
            label: '服务业'
          },{
            value: '7',
            label: '商业服务'
          }],
          options_industry_company_type:[{
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
          activeName: 'three',
          fileList: [{
            name: 'food.jpeg',
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
            status: 'finished'
          }, {
            name: 'food2.jpeg',
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
            status: 'finished'
          }],
          tableData1: [{
            id: '11',
            year: 'year',
            registered_capital: 'registered_capital',
            industry: '22',
            area: 'area',
            company_type: 'company_type',
            controller_type: 'controller_type',
            controller_share: 'controller_share'
          }],
          tableData2: [{
            id: '11',
            patentt: '',
            brand: '',
            copyrightt: ''
          }],
          tableData3: [{
            id: '11',
            year: '2002',
            debt_financing_line: '2',
            debt_financing_cost:'111',
            equity_financing_line:'222',
            equity_capital_cost:'333',
            internal_and_trade_finance_line:'444',
            internal_and_trade_finance_cost:'555',
            project_financing_and_policy_financing_line:'666',
            project_financing_and_policy_financing_cost:'777'
          },{
            id: '11',
            year: '2003',
            debt_financing_line: '2',
            debt_financing_cost:'111',
            equity_financing_line:'222',
            equity_capital_cost:'333',
            internal_and_trade_finance_line:'444',
            internal_and_trade_finance_cost:'555',
            project_financing_and_policy_financing_line:'666',
            project_financing_and_policy_financing_cost:'777'
          },{
            id: '11',
            year: '2004',
            debt_financing_line: '2',
            debt_financing_cost:'111',
            equity_financing_line:'222',
            equity_capital_cost:'333',
            internal_and_trade_finance_line:'444',
            internal_and_trade_finance_cost:'555',
            project_financing_and_policy_financing_line:'666',
            project_financing_and_policy_financing_cost:'777'
          }
          ],

        }
      },
      methods: {
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
      }
    }
</script>

<style scoped>
  .tb-edit .el-input {
    display: none
  }
  .tb-edit .current-row .el-input {
    display: block
  }
  .tb-edit .current-row .el-input+span {
    display: none
  }
  .tb-edit .select .option{
    display: none
  }
  .tb-edit .current-row  .el-option{
    display: block
  }
  .tb-edit .current-row  .el-select + .el-option+span {
    display: none
  }
  .tb-edit .option {
    display: none
  }
  .tb-edit .current-row .el-option +span{
    display: none
  }
  .tb-edit .current-row .el-select+span {
    display: none
  }
  .step{
    width: 800px;
    margin: 50px auto;
  }
  .tab{
    width: 1200px;
    margin: 0 auto;
  }
</style>
