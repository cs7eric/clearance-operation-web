<script setup>
import {ref} from 'vue'
import {useUserStore} from '@/stores'
import TabsNav from '@/components/nav/TabsNav.vue'

const userInfo = ref({})
const userStore = useUserStore()
userInfo.value = userStore.userInfo
</script>

<template>
  <div class="like-collect-container">
    <div class="user-info-section">
      <div class="info-top">
        <div class="avatar-area">
          <img class="avatar" :src="userInfo.user.avatar" alt="">
        </div>
        <div class="func-area">
          <button class="others-button button">···</button>
          <button class="follow-button button">Follow</button>
        </div>
      </div>
      <div class="info-main">

        <div class="user-username">
          <h3 class="username">{{userInfo.user.username}}</h3>
          <span class="nickname">@{{userInfo.user.username}}</span>
        </div>
        <div class="user-detail">
          <div class="introduction">
            <p>Official Sony Interactive Entertainment account. Updates on PS5, PlayStation VR2, PlayStation Plus, PS4
              and
              more. Support:
              @AskPlayStation</p>
          </div>
          <div class="other-detail">
            <div class="detail-item">Zhengzhou</div>
            <div class="detail-item">csq020611@gmail.com</div>
            <div class="detail-item">3</div>
          </div>
          <div class="follow-data">
            <div class="follow-item">
              <p class="data">11</p>
              <p class="desc">Following</p>
            </div>
            <div class="follow-item">
              <p class="data">323</p>
              <p class="desc">Followers</p>

            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="user-func-section">
      <tabs-nav :username="userInfo.username"></tabs-nav>
    </div>

  </div>

</template>


<style scoped>

.like-collect-container {

  margin-top: 80px;
  width: 880px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;



  .user-info-section {


    padding: 88px 18px 10px;


    .info-top {

      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      .avatar-area {
        border: 2px solid #fff;
        border-radius: 16px;
        overflow: hidden;

        .avatar {

          max-width: 120px;
        }
      }

      .func-area {


        .others-button {
          border-radius: 50%;
          border: 1px solid #e6e6e6;
          background: #fff;
        }

        .follow-button {
          width: 100px;
          background: #000;
          color: #fff;
          font-weight: 700;

        }

        .button {
          align-items: center;
          height: 40px;
          padding: 8px 16px;
          margin-left: 6px;
          border-radius: 30px;
          border: 1px solid #e6e6e6;
          font-size: 12px;


        }
      }
    }

    .info-main {
      margin-top: 14px;

      .username {
        font-weight: 700;
        font-size: 20px;
      }

      .nickname {
        color: #6e7d88;
        font-size: 14px;
      }

      .user-detail {


        .follow-data {
          display: flex;
          margin-top: 6px;
          .follow-item {
            display: flex;
            padding-right: 10px;

            .desc {
              color: #85919a;

            }

            .data {
              font-weight: 700;
              padding-right: 2px;
            }
          }
        }

        .other-detail {
          display: flex;
          margin-top: 8px;

          .detail-item{
            padding-right: 8px;
            font-size: 13px;
            color: #85919a;

          }
        }

        p {
          margin-top: 6px;
          color: #32363a;
          font-size: 13px;
          overflow-wrap: break-word;
        }
      }
    }
  }

  .user-func-section{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    padding: 18px 18px 0 18px;
  }
}


</style>