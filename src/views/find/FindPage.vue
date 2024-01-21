<script setup>





</script>

<template>
 <div class="find-container">
   <div class="carousel-section find-item">

     <h3 class="carousel-title">近期热点事件</h3>
     <el-carousel :interval="4000" type="card" height="200px">
       <el-carousel-item v-for="item in 6" :key="item">
         <h3 text="2xl" justify="center">{{ item }}</h3>
       </el-carousel-item>
     </el-carousel>
   </div>
   <div class="issue-section find-item">
     <div class="issue-card">
         <div class="card-header">
           <h3>问题广场</h3>
         </div>

       <div class="issue-list">
         <ul>
           <li v-for="o in 6" :key="o">{{o}}</li>
         </ul>
         <p class="detail">查看全部热点问题></p>
       </div>
     </div>

     <div class="issue-card">
         <div class="card-header">
           <h3>事件广场</h3>
         </div>

       <div class="issue-list">
         <ul>
           <li v-for="o in 6" :key="o">{{o}}</li>
         </ul>
         <p class="detail">查看全部最新事件></p>
       </div>
     </div>
      

   </div>
   <div class="category-section find-item">
     分类专区

   </div>
 </div>
</template>

<style scoped>

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.carousel-section {
  .carousel-title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
  }
}

.issue-card {
  margin-right: 12px;
  padding: 18px;
  border-radius: 8px;
  border: 2px solid #e6e6e6;

  .issue-list {
    width: 480px;
    margin-top: 20px;

    .detail {
      margin-top: 10px;
      color: #bababa;
      font-size: 12px;
      cursor: pointer;
    }
  }
  
  .card-header {
    h3 {
      font-weight: 700;
    }
  }
}

.find-item {
  margin-top: 20px;
}

.issue-section{
  display: flex;
  margin-top: 80px;
}

</style>