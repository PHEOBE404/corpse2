<template>
    <div>
      <div class="cardgroup">
          <router-link to="">
            <el-card class="box-card" v-for="o in 3" :key="o">

          <div  class="text item">

            {{'模型 ' + o }}

          </div>
            </el-card>

          </router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Computed"
    }
</script>

<style scoped>
.cardgroup{
width: 1200px;
margin: 100px auto;
  margin-left: 250px;
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 300px;
  height: 380px;
  display: inline-block;
  margin: 20px;
}
</style>
