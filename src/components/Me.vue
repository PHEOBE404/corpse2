<template>
    <div>
      <div class="footer">
        <span class="title"><a href="">探僵局查询系统 </a></span>

        <div class="userfooter">
          <span class="current_time">{{currentTime}}</span>
          <span class="user_a">用户5988741</span>
        </div>
        <div class="rightmenu">
          <span><router-link to="/companysearch">企业信息查询</router-link></span>
          <span ><router-link to="/computed">僵尸企业测评</router-link></span>
          <span ><router-link  to="/bigdata">大数据分析</router-link ></span>
          <span class="active"><router-link to="/me">个人中心</router-link></span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Me"
    }
</script>

<style scoped>

</style>
