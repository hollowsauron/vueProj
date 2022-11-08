<template>
  <div class="home">
    <Header></Header>
    <el-container class="content">
      <Menu></Menu>
      <el-container>
        <el-main>
          <BreadcrumbVue/>
         <div class="cont">
          <router-view/>
        </div>
        </el-main>
        <el-footer>
          <Footer></Footer>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from './common/header'
import Menu from './common/menu'
import Footer from './common/footer'
import BreadcrumbVue from './common/Breadcrumb.vue'

export default {
    components: {Header, Menu, Footer,BreadcrumbVue},
    data(){
      return{

      }
    }
}
</script>

<style scoped lang="scss">
.home{
  background: pink;
  .content{
    position: absolute;
    background:bisque;
    width: 100%;
    top:60px;
    bottom: 0;
    .cont{
      margin:20px 0px
    }
  }
}
</style>
HeaderMenu