<template>
    <div>
<!--      <div class="header">-->
<!--        <span>返回</span>-->
<!--      </div>-->
<!--      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">-->
<!--        <el-radio-button :label="false">展开</el-radio-button>-->
<!--        <el-radio-button :label="true">收起</el-radio-button>-->
<!--      </el-radio-group>-->
      <div class="menubar">
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
      </el-menu>
      </div>
      <div class="sear_input"  v-if="show_item">
        <el-input placeholder="请输入企业编号" v-model="select_key" class="input-with-select" style="width: 80%">

        </el-input>
        <el-button slot="append" icon="el-icon-search" type="primary" @click="show_item=!show_item"></el-button>

      </div>
      <div class="sear_input_later"  v-if="!show_item">
        <el-input placeholder="请输入企业编号" v-model="select_key" class="input-with-select" style="width: 80%">

        </el-input>
        <el-button slot="append" icon="el-icon-search" type="primary" ></el-button>

      </div>
      <div class="table" v-if="!show_item">
        <template>
          <el-table
            :data="tableData"
            style="width: 100%"
            >
            <el-table-column
              prop="id"
              label="企业编号"
              align="center"
              >
            </el-table-column>
            <el-table-column
              prop="zone"
              label="所在地区"
              align="center"
             >
            </el-table-column>
            <el-table-column
              prop="industry"
              align="center"
              label="所属行业">
            </el-table-column>
            <el-table-column
              prop="warn"
              align="center"
              label="备注">
              <template slot-scope="scope">
                <el-tag v-if="isCorpse(scope)"
                  :type="scope.row.warn === '1' ? 'danger' : 'warning'"
                  close-transition>僵尸企业</el-tag>
              </template>
            </el-table-column>
            <el-table-column
              prop="co"
              align="center"
              label="详情">
              <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">查看</el-button>
                </template>
            </el-table-column>
          </el-table>
        </template>
      </div>
    </div>
</template>

<script>
    export default {
        name: "CompanySearch",
      data(){
          return{
            isCollapse: true,
            select_tpye:'',
            select_key:'',
            show_item:!false,
            tableData: [
              {
              id: '489123',
              zone: '浙江',
              industry: '服务业'
            },{
              id: '4823',
              zone: '江西',
              industry: '工业',
                warn:'1'
            },{
              id: '489',
              zone: '北京',
              industry: '服务业'
            },
            ]
          }
      },
      methods:{
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
        isCorpse(scope){
          // console.log(scope.row)
          if (scope.row.warn=='1') {
            // console.log("2222");
            return true;
          }
        },
        toDetail(scope){
          console.log("2222");
          console.log(scope);

        },
        handleEdit(index, row) {
          console.log(index, row);
          console.log(row.id);
           var id=row.id;
          this.$router.push({path:'/companybase/'+id})

        },
      }
    }
</script>

<style scoped>
  .menubar{
    float: left;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
.sear_input{
  width: 600px;
  margin: 250px auto;
  /*background-color: #5daf34;*/
}
.sear_input_later{
  width: 600px;
  margin: 50px auto;
}
  .header{
    background-color:#f0f0f0 ;
    font-size: 22px;
    font-family: "微软雅黑 Light";
  }
.table{
  width: 760px;
  margin: 0 auto;
}
</style>
