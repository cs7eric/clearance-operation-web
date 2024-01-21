<script setup>
import {ref} from 'vue'
import {Promotion} from '@element-plus/icons-vue'
import {articleGetAllService} from '@/api/article'

import ArticleItem from '@/components/article/ArticleItem.vue'
import {useUserStore} from '@/stores'

const articleList = ref([])


const getArticles = async () => {
  const articleDTO = ref()
  const userInfo = ref()
  const userStore = useUserStore()
  console.log(userStore.userInfo)
  userInfo.value = userStore.userInfo
  console.log(userInfo.value.user.id)
  articleDTO.value = userInfo.value.user
  console.log(articleDTO.value)
  const res = await articleGetAllService(articleDTO)
  console.log(res)
  articleList.value = res.data
}

getArticles()


</script>

<template>
  <div class="home-container">
    <div class="home-main">
      <div class="main-article main-item">
        <el-card v-for="article in articleList" :key="article.id" class="article-card">
          <article-item :article="article"></article-item>
        </el-card>
      </div>
      <div class="main-function main-item">
        <el-card class="box-card">
          <template #header>
            <div class="function-header">
              <div>
                <span> <el-icon><Promotion/></el-icon> 创作中心</span>
              </div>
              <div>
                <el-button class="button" text>草稿箱</el-button>
              </div>
            </div>
          </template>
          <div class="module">
            <div class="module-item">
              <svg t="1695650259057" class="icon" viewBox="0 0 1308 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg" p-id="976" width="200" height="200">
                <path
                    d="M881.58984367 882.78857422a247.19238258 247.19238258 0 1 0 0-494.38476586 247.19238258 247.19238258 0 0 0 0 494.38476586z"
                    fill="#1296db" p-id="977"></path>
                <path
                    d="M551.99999999 882.78857422A370.78857422 370.78857422 0 1 0 551.99999999 141.21142578a370.78857422 370.78857422 0 0 0 0 741.57714844z"
                    fill="#1296db" fill-opacity=".22" p-id="978"></path>
                <path
                    d="M731.21447777 535.895264h-358.42895555c-10.29968246 0-18.95141609-8.65173364-18.9514161-18.95141611s8.65173364-18.95141609 18.9514161-18.95141609h358.42895555c10.29968246 0 18.95141609 8.65173364 18.9514161 18.95141609s-8.23974625 18.95141609-18.9514161 18.95141611z"
                    fill="#1296db" p-id="979"></path>
                <path
                    d="M533.0485839 683.38671892v-358.42895558c0-10.29968246 8.65173364-18.95141609 18.95141609-18.95141536s18.95141609 8.65173364 18.95141609 18.95141536v358.42895558c0 10.29968246-8.65173364 18.95141609-18.95141609 18.95141608s-18.95141609-8.23974625-18.95141609-18.95141608z"
                    fill="#1296db" p-id="980"></path>
              </svg>
            </div>
            <div class="module-item">
              <svg t="1695650343200" class="icon" viewBox="0 0 1807 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg" p-id="1171" width="200" height="200">
                <path
                    d="M1555.85530597 548.72988019l-83.84183975 95.35809689V549.64594595c0-32.7166392-25.47535634-59.45703852-56.62159655-59.4570385h-354.64836556C1029.59726386 490.18890745 1004.12190753 516.92930675 1004.12190753 549.64594595v273.68558975c0 32.7166392 25.47535634 59.45703852 56.62159657 59.45703852h354.64836557c31.14624023 0 56.62159657-26.74039931 56.62159655-59.45703852v-94.44203113l83.84183975 95.40171959c5.23466201 6.41246105 15.35500953 2.26835342 15.35500953-6.45608375V555.14234125c0-8.72443717-10.07672482-12.86854481-15.35500953-6.41246106z"
                    fill="#ffc473" p-id="1172"></path>
                <path
                    d="M1054.41828698 882.78857422H371.20762268C311.18349564 882.78857422 262.5447591 832.71030535 262.5447591 770.85404678V253.14595322C262.5447591 191.28969465 311.18349564 141.21142578 371.164 141.21142578h683.25428698c60.02412705 0 108.6192409 50.07826887 108.6192409 111.89090475v517.79533894c0 61.81263661-48.59511457 111.89090475-108.6192409 111.89090475z"
                    fill="#ffc473" fill-opacity=".22" p-id="1173"></path>
                <path
                    d="M1102.18457974 500.00389898l222.82212248-248.64645532c10.55656869-11.73436773 29.57584127-3.92599633 29.57584128 11.77798972v497.29291134c0 16.14020865-19.01927257 23.51235817-29.57584128 11.77798972l-222.82212248-248.64645532a16.92540778 16.92540778 0 0 1 0-23.55598013z"
                    fill="#ffc473" fill-opacity=".22" p-id="1174"></path>
                <path
                    d="M782.12860686 502.18500845L657.41277929 363.2919704c-5.88899522-6.97954958-16.48918588-2.61733137-16.48918588 6.54332768v277.82969811c0 9.16065907 10.60019066 13.04303342 16.48918588 6.54332769l124.75945027-138.93666003a9.6841249 9.6841249 0 0 0 0-13.0866554z"
                    fill="#ffc473" p-id="1175"></path>
              </svg>
            </div>
            <div class="module-item">
              <svg t="1695650421456" class="icon" viewBox="0 0 1303 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg" p-id="1464" width="200" height="200">
                <path d="M1076.40151485 339.79829538h-43.72159077v256.96022772h43.72159077v-256.96022772z"
                      fill="#f4c807" p-id="1465"></path>
                <path
                    d="M1150.52006419 350.56090192l-486.83416228 233.70916228L176.49218749 350.56090192 663.68590191 116.4921875l486.83416228 234.06871442z"
                    fill="#f4c807" fill-opacity=".22" p-id="1466"></path>
                <path
                    d="M661.16903386 623.46129254L371.01012066 470.29190363v343.73224396c0 39.19122834 133.03444617 71.19140625 297.34996442 71.19140624 164.31551825 0 297.34996442-31.640625 297.34996441-71.19140625V462.7412995l-304.54101563 160.71999304z"
                    fill="#f4c807" p-id="1467"></path>
                <path
                    d="M1054.69412871 564.15909075l-41.8039769 41.72727312 41.8039769 41.80397688 41.765625-41.80397688-41.8039769-41.72727312z"
                    fill="#f4c807" p-id="1468"></path>
              </svg>
            </div>
            <div class="module-item">
              <svg t="1695650480767" class="icon" viewBox="0 0 1303 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg" p-id="1721" width="200" height="200">
                <path d="M1076.40151485 339.79829538h-43.72159077v256.96022772h43.72159077v-256.96022772z"
                      fill="#29c0c0" p-id="1722"></path>
                <path
                    d="M1150.52006419 350.56090192l-486.83416228 233.70916228L176.49218749 350.56090192 663.68590191 116.4921875l486.83416228 234.06871442z"
                    fill="#29c0c0" fill-opacity=".22" p-id="1723"></path>
                <path
                    d="M661.16903386 623.46129254L371.01012066 470.29190363v343.73224396c0 39.19122834 133.03444617 71.19140625 297.34996442 71.19140624 164.31551825 0 297.34996442-31.640625 297.34996441-71.19140625V462.7412995l-304.54101563 160.71999304z"
                    fill="#29c0c0" p-id="1724"></path>
                <path
                    d="M1054.69412871 564.15909075l-41.8039769 41.72727312 41.8039769 41.80397688 41.765625-41.80397688-41.8039769-41.72727312z"
                    fill="#29c0c0" p-id="1725"></path>
              </svg>
            </div>
          </div>
          <div class="write-button">
            <div class="button">
              <router-link to="/editor" target="_blank">
                <button> 进入创作中心 ></button>
              </router-link>
            </div>
          </div>
        </el-card>
        <el-card class="recommend-card box-card">
          <template #header>
            <div class="function-header">
              <div>
                <span>
                  <svg t="1695705855736" class="icon" viewBox="0 0 1024 1024" version="1.1"
                       xmlns="http://www.w3.org/2000/svg" p-id="1175" width="200" height="200"><path
                      d="M513 515.2c-60.1 0-116.5-23.4-159-65.9s-65.9-98.9-65.9-159c0-60.1 23.4-116.5 65.9-159s99-65.8 159-65.8c60.1 0 116.5 23.4 159 65.9s65.9 98.9 65.9 159c0 60.1-23.4 116.5-65.9 159s-98.9 65.8-159 65.8z m0-369.7c-79.9 0-144.9 65-144.9 144.9s65 144.9 144.9 144.9 144.9-65 144.9-144.9-65-144.9-144.9-144.9zM920.9 958.2H104c-11.8 0-22.9-5.2-30.5-14.1-7.6-9-10.9-20.8-8.9-32.4 16.5-99.1 70.7-189.9 152.6-255.6 40.3-32.3 85.8-57.5 135.3-74.9 51.1-18 104.9-27.1 160-27.1s108.9 9.1 160 27.1c49.5 17.4 95 42.6 135.3 74.9 81.9 65.7 136.1 156.4 152.6 255.6 1.9 11.6-1.3 23.5-8.9 32.4-7.7 9-18.8 14.1-30.6 14.1z m-766-80H870c-46.8-142-192.3-244.1-357.5-244.1-165.3 0-310.9 102.1-357.6 244.1z"
                      p-id="1176"></path></svg>
                  推荐关注
                </span>
              </div>

            </div>
          </template>
          <div class="recommend-list">
            <div class="recommend-child" v-for="o in 5" :key="o">
              <div class="child-avatar child-item">
                <img src="@/assets/avatar.jpg" class="avatar" alt="">
              </div>
              <div class="child-info child-item">
                <span class="info-name">cccs7</span>
                <span class="info-topic">「Java」 领域答主</span>
              </div>
              <div class="star child-item">
                <button class="button">
                  + 关注
                </button>
              </div>
            </div>
          </div>
        </el-card>
        <el-card class="function-card box-card">
          <div class="function">
            <div class="function-item">
              <div class="item-icon">
                <svg t="1695695151837" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     p-id="973" width="200" height="200">
                  <path
                      d="M234.0864 881.6128v-445.44c0-18.0224-12.1344-32.6144-27.0848-32.6144H149.1968c-27.904 0-50.4832 27.2384-50.4832 60.8768v389.12c0 33.5872 22.5792 60.8768 50.4832 60.8768h57.8048c14.9504-0.1536 27.0848-14.7968 27.0848-32.8192z"
                      fill="#ffcf00" p-id="974"></path>
                  <path
                      d="M272.9984 890.88V426.5472a23.4496 23.4496 0 0 1 17.5104-22.7328c36.4544-9.3184 120.1152-42.7008 155.648-156.6208C467.8144 147.456 491.52 100.352 560.9984 106.0352s74.3936 73.4208 74.3936 94.1056v160s-5.6832 24.4736 17.8688 26.368 207.0528 0 207.0528 0 100.7104-1.6896 68.7104 123.392c-27.8016 108.8-82.944 283.8528-96.8192 327.68a96.256 96.256 0 0 1-12.3392 25.6c-13.4656 19.6608-41.7792 51.2-85.0432 51.2H296.4992a23.5008 23.5008 0 0 1-23.5008-23.5008z"
                      fill="#ffcf00" p-id="975"></path>
                </svg>
              </div>
              <div class="item-title">
                <span>点赞</span>
              </div>

            </div>
            <div class="function-item">
              <div class="item-icon">
                <svg t="1695695634213" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     p-id="1242" width="200" height="200">
                  <path
                      d="M582.1952 119.6032l72.8064 147.5072a89.7024 89.7024 0 0 0 67.5328 49.1008l162.7648 23.6544a89.7024 89.7024 0 0 1 49.7152 152.9856l-117.76 114.7904a89.8048 89.8048 0 0 0-25.6 79.4112l27.5456 162.1504a89.7024 89.7024 0 0 1-130.1504 94.5664l-145.6128-76.8a89.4464 89.4464 0 0 0-83.456 0l-145.6128 76.8A89.7024 89.7024 0 0 1 184.32 849.2032l27.8016-162.1504a89.8048 89.8048 0 0 0-25.6-79.4112l-117.76-114.7904a89.7024 89.7024 0 0 1 49.7152-152.9856l162.7648-23.6544a89.7024 89.7024 0 0 0 67.5328-49.1008l72.5504-147.5072a89.7024 89.7024 0 0 1 160.8704 0z"
                      fill="#43d480" p-id="1243"></path>
                  <path
                      d="M535.5008 357.632l30.72 61.9008a37.5808 37.5808 0 0 0 28.3136 20.48l68.3008 9.9328a37.632 37.632 0 0 1 20.8384 64.1536l-49.408 48.1792a37.632 37.632 0 0 0-10.8032 33.28l11.4176 68.0448a37.632 37.632 0 0 1-54.5792 39.68l-61.0304-32.1024a37.4784 37.4784 0 0 0-35.0208 0l-61.0304 32.1024A37.632 37.632 0 0 1 368.64 663.6032l11.6224-67.9936a37.632 37.632 0 0 0-10.8032-33.28l-49.408-48.1792a37.632 37.632 0 0 1 20.8384-64.1536L409.1904 440.32a37.5808 37.5808 0 0 0 28.3136-20.48l30.72-61.9008a37.632 37.632 0 0 1 67.2768-0.3072z"
                      fill="#43d480" p-id="1244"></path>
                </svg>
              </div>
              <div class="item-title">
                <span>收藏</span>
              </div>
            </div>
            <div class="function-item">
              <div class="item-icon">
                <svg t="1695695989469" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1511" width="200" height="200">
                  <path
                      d="M93.0816 99.6864m114.6368 0l155.8016 0q114.6368 0 114.6368 114.6368l0 155.8016q0 114.6368-114.6368 114.6368l-155.8016 0q-114.6368 0-114.6368-114.6368l0-155.8016q0-114.6368 114.6368-114.6368Z"
                      fill="#0066ff" p-id="1512"></path>
                  <path
                      d="M93.0816 538.3168m114.6368 0l155.8016 0q114.6368 0 114.6368 114.6368l0 155.8016q0 114.6368-114.6368 114.6368l-155.8016 0q-114.6368 0-114.6368-114.6368l0-155.8016q0-114.6368 114.6368-114.6368Z"
                      fill="#0066ff" p-id="1513"></path>
                  <path
                      d="M536.32 538.3168m114.6368 0l155.8016 0q114.6368 0 114.6368 114.6368l0 155.8016q0 114.6368-114.6368 114.6368l-155.8016 0q-114.6368 0-114.6368-114.6368l0-155.8016q0-114.6368 114.6368-114.6368Z"
                      fill="#0066ff" p-id="1514"></path>
                  <path
                      d="M536.32 99.6864m114.6368 0l155.8016 0q114.6368 0 114.6368 114.6368l0 155.8016q0 114.6368-114.6368 114.6368l-155.8016 0q-114.6368 0-114.6368-114.6368l0-155.8016q0-114.6368 114.6368-114.6368Z"
                      fill="#0066ff" p-id="1515"></path>
                </svg>
              </div>
              <div class="item-title">
                <span>分类</span>
              </div>

            </div>
            <div class="function-item">
              <div class="item-icon">
                <svg t="1695698660594" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1291" width="200" height="200">
                  <path
                      d="M689.152 365.6192h118.8352a122.4192 122.4192 0 0 1 122.4192 122.4192v322.56a122.4192 122.4192 0 0 1-122.4192 122.4192H689.152V365.6192z"
                      fill="#7A7AF9" p-id="1292"></path>
                  <path
                      d="M252.2112 87.04h352.2048a149.0432 149.0432 0 0 1 149.0432 149.0432v696.9856h-501.248a149.0432 149.0432 0 0 1-149.0432-149.0432v-547.84A149.0432 149.0432 0 0 1 252.2112 87.04z"
                      fill="#CCDAFF" p-id="1293"></path>
                  <path
                      d="M206.848 251.7504m47.9744 0l329.2672 0q47.9744 0 47.9744 47.9744l0 1.3824q0 47.9744-47.9744 47.9744l-329.2672 0q-47.9744 0-47.9744-47.9744l0-1.3824q0-47.9744 47.9744-47.9744Z"
                      fill="#7A7AF9" p-id="1294"></path>
                  <path
                      d="M206.848 455.3728m47.9744 0l329.2672 0q47.9744 0 47.9744 47.9744l0 1.3824q0 47.9744-47.9744 47.9744l-329.2672 0q-47.9744 0-47.9744-47.9744l0-1.3824q0-47.9744 47.9744-47.9744Z"
                      fill="#7A7AF9" p-id="1295"></path>
                  <path
                      d="M206.848 658.9952m47.9744 0l220.4672 0q47.9744 0 47.9744 47.9744l0 1.3824q0 47.9744-47.9744 47.9744l-220.4672 0q-47.9744 0-47.9744-47.9744l0-1.3824q0-47.9744 47.9744-47.9744Z"
                      fill="#7A7AF9" p-id="1296"></path>
                </svg>
              </div>
              <div class="item-title">
                <span>text</span>
              </div>
            </div>
            <div class="function-item">
              <div class="item-icon">
                <svg t="1695699015223" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1453" width="200" height="200">
                  <path
                      d="M908.2368 463.8208l-156.5696 441.9072a102.4 102.4 0 0 1-130.816 61.952l-369.152-132.8128a102.0928 102.0928 0 0 1-55.1424-144.896L235.008 619.52l278.7328 131.9936z"
                      fill="#7A7AF9" p-id="1454"></path>
                  <path
                      d="M117.2992 450.56l374.784-370.4832a95.0272 95.0272 0 0 1 75.5712-26.9824l271.36 25.6a93.6448 93.6448 0 0 1 84.6336 87.04l17.152 259.7376a94.976 94.976 0 0 1-27.6992 73.472L539.7504 870.4a103.424 103.424 0 0 1-145.664 0.3072l-276.48-273.3568A103.3728 103.3728 0 0 1 117.2992 450.56z"
                      fill="#CCDAFF" p-id="1455"></path>
                  <path
                      d="M767.0784 227.2256m-60.1088 0a60.1088 60.1088 0 1 0 120.2176 0 60.1088 60.1088 0 1 0-120.2176 0Z"
                      fill="#7A7AF9" p-id="1456"></path>
                  <path
                      d="M696.32 415.5392l-117.76-4.2496-4.4032-116.224a33.28 33.28 0 0 0-66.56 2.56l3.584 94.9248-37.376-37.7856a33.28 33.28 0 0 0-47.3088 46.848l57.4976 58.2656L450.56 493.8752 393.1136 435.9168a33.28 33.28 0 0 0-47.2576 46.848l58.0096 58.5216-35.84 36.608a33.28 33.28 0 0 0 23.7568 56.6272 32.9728 32.9728 0 0 0 23.5008-9.8816l35.2768-35.84 56.32 56.32a33.28 33.28 0 0 0 47.3088-46.848l-56.32-57.0368 33.4336-33.9456 56.32 56.7296a33.28 33.28 0 1 0 47.2576-46.848l-38.144-38.5536 97.6384 3.5328h1.2288a33.28 33.28 0 0 0 1.1776-66.56z"
                      fill="#7A7AF9" p-id="1457"></path>
                </svg>
              </div>
              <div class="item-title">
                <span>text</span>
              </div>
            </div>
            <div class="function-item">
              <div class="item-icon">
                <svg t="1695699072939" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1616" width="200" height="200">
                  <path
                      d="M814.08 937.9328l-284.672-111.0528a61.44 61.44 0 0 0-45.0048 0L210.432 936.96a61.44 61.44 0 0 1-84.0704-56.832V192.8704A104.192 104.192 0 0 1 230.4 88.6272h563.2a104.192 104.192 0 0 1 104.2432 104.2432V880.64A61.44 61.44 0 0 1 814.08 937.9328z"
                      fill="#CCDAFF" p-id="1617"></path>
                  <path
                      d="M538.9312 262.0416l39.0656 79.2064a29.7984 29.7984 0 0 0 22.5792 16.384l87.3984 12.6976a30.0032 30.0032 0 0 1 16.64 51.2l-63.232 61.44a30.1568 30.1568 0 0 0-8.6528 26.5728l14.9504 87.04a30.0544 30.0544 0 0 1-43.5712 31.6416l-78.1312-40.96a30.3104 30.3104 0 0 0-27.9552 0l-78.1312 40.96a30.0544 30.0544 0 0 1-43.5712-31.6416l14.9504-87.04a30.1568 30.1568 0 0 0-8.6528-26.5728l-63.232-61.44a30.0032 30.0032 0 0 1 16.64-51.2l87.3984-12.6976a29.7984 29.7984 0 0 0 22.5792-16.384l39.0656-79.2064a30.0544 30.0544 0 0 1 53.8624 0z"
                      fill="#7A7AF9" p-id="1618"></path>
                </svg>
              </div>
              <div class="item-title">
                <span>text</span>
              </div>
            </div>
          </div>

        </el-card>
        <el-card class="recent-card" ref="recentCard">
          <template #header>
            <div class="recent-header">
              <svg t="1695721337703" class="icon" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg" p-id="2304" width="200" height="200">
                <path
                    d="M938.666667 896H85.333333c-46.933333 0-85.333333-38.4-85.333333-85.333333V213.333333c0-46.933333 38.4-85.333333 85.333333-85.333333h853.333334c46.933333 0 85.333333 38.4 85.333333 85.333333v597.333334c0 46.933333-38.4 85.333333-85.333333 85.333333z m-196.266667-460.8V640h51.2v-204.8h81.066667V384h-213.333334v51.2h81.066667zM204.8 384H149.333333v256h51.2v-106.666667h106.666667V640h51.2V384H307.2v93.866667H200.533333L204.8 384z m243.2 0c-25.6 0-42.666667 17.066667-42.666667 42.666667v170.666666c0 25.6 17.066667 42.666667 42.666667 42.666667h128c25.6 0 42.666667-17.066667 42.666667-42.666667v-170.666666c0-25.6-17.066667-42.666667-42.666667-42.666667h-128z m106.666667 204.8h-85.333334c-4.266667 0-8.533333-4.266667-8.533333-8.533333v-128c0-4.266667 4.266667-8.533333 8.533333-8.533334h85.333334c4.266667 0 8.533333 4.266667 8.533333 8.533334v128s-4.266667 8.533333-8.533333 8.533333z"
                    p-id="2305" fill="#444444"></path>
              </svg>
              近期热点事件
            </div>
          </template>
          <div class="recent-list">
            <div class="recent-child" v-for="(o, index) in 7" :key="o">
              <span class="index" :class="{ 'top-three': index < 3, 'after-three': index >= 3 }">
                {{ index + 1 }}
              </span>
              电信诈骗事件... ...
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<style scoped>

.home-container {

  .home-main {
    display: flex;
    justify-content: center;

    .main-article {

      .article-card {
        width: 800px;
        margin-bottom: 4px;
      }
    }

    .main-function {
      height: 1080px;
      bottom: 0;

      .recent-card {
        .recent-header {
          .icon {
            max-width: 16px;
            height: auto;
          }
        }

        .recent-list {
          .recent-child {
            margin-top: 5px;
            height: 38px;
            line-height: 30px;
            border-bottom: 1px solid #e6e6e6;

            .index {
              margin-right: 8px;
              font-style: italic;
            }

            .top-three {
              color: #f26d5f;
              font-weight: bold;
              font-size: 18px;
            }

            /* 4 以后的样式 */

            .after-three {
              color: #ff8200;
            }
          }
        }
      }

      .box-card {
        margin-bottom: 10px;

        .write-button {


          .button {
            margin: 10px;
            width: 240px;
            height: 40px;
            border-radius: 4px;
            border: 1px solid #82b6f3;
            text-align: center;
            line-height: 40px;
            color: #056de8;

            &:hover {
              font-weight: 700;

            }
          }
        }

        .module {
          display: flex;

          .module-item {
            flex: 1;
            padding-left: 10px;
            transition: transform 0.3s ease;
            cursor: pointer;

            &:hover {
              transform: scale(1.25);
            }


            .icon {
              max-width: 40px;
              height: auto;
            }
          }
        }

        .function-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 250px;
          height: 10px;
        }

        .button {
          float: right;
        }
      }
    }

    .main-item {
      padding-right: 10px;
    }
  }
}

.function-card {
  .function {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 5px;

    .function-item {

      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1 1 calc(33.33% - 10px);
      height: 70px;
      max-width: calc(33.33% - 10px);
      transition: transform 0.3s ease;
      cursor: pointer;
      margin-top: 10px;

      .item-title {
        color: #8590a6;
      }

      &:hover {

        transform: scale(1.15);
      }

      .icon {
        width: 36px;
        height: auto;
        margin: 0 auto;
      }
    }

  }
}

.recommend-card {

  .function-header {

    .icon {
      max-width: 16px;
      height: auto;
    }
  }


  .recommend-list {

    .recommend-child {

      display: flex;
      align-items: center;
      margin-bottom: 10px;
      height: 44px;

      .child-item {
        padding-right: 10px;
      }

      .child-info {

        & > span {
          display: block;
        }

        .info-name {
          color: #444444;
        }

        .info-topic {
          color: #acacac;
        }
      }

      .star {
        font-size: 12px;
        color: #056de8;
        cursor: pointer;
      }

      .child-avatar {


        .avatar {

          width: auto;
          height: 40px;
          border-radius: 5px;
        }
      }
    }
  }

}
</style>