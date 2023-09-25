<script setup>
import {ref} from 'vue'
import {Promotion} from '@element-plus/icons-vue'

const currentDate = ref(new Date())

</script>

<template>
  <div class="home-container">
    <div class="home-main">
      <div class="main-article main-item">
        <el-card v-for="o in 5" :key="o" class="article-card">
          <template #header>
            <div class="card-header">
              <span>文章标题</span>
              <el-button class="button" type="primary" plain>查看</el-button>
            </div>
          </template>
          <div class="card-main">
            <div class="image card-item">
              <img src="@/assets/logo-co.png" alt=""/>
            </div>

            <div class="card-item" style="padding: 14px">
              <span>Yummy hamburger</span>
              <div class="bottom">
                <time class="time">{{ currentDate }}</time>
                <el-button text class="button">Operating</el-button>
              </div>
            </div>
          </div>

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
                <el-button class="button" text>button</el-button>
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
              <button>进入创作中心 ></button>
            </div>
          </div>
        </el-card>
        <el-card class="recommend-card">
          <template #header>
            <div class="function-header">
              <div>
                <span> <el-icon><Promotion/></el-icon> 推荐关注</span>
              </div>

            </div>
          </template>
          <div class="recommend-list" >
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
        margin-bottom: 10px;


        .card-header {
          display: flex;
          height: 14px;
          justify-content: space-between;
          align-items: center;

          & > span {
            font-weight: 700;
          }
        }

        .image {
          width: 100px;
          height: 100px;
        }
      }
    }


    .main-function {

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

.recommend-card {

  .recommend-list{

    .recommend-child {

      display: flex;
      align-items: center;
      margin-bottom: 10px;
      height: 44px;

      .child-item {
        padding-right: 10px;
      }

      .child-info {

        &>span {
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