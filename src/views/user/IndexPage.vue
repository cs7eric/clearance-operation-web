<script setup>
import {useUserStore} from '@/stores'
import {ref} from 'vue'


const userInfo = ref({})
const userStore = useUserStore()
userInfo.value = userStore.userInfo

</script>

<template>
  <div class="index-container">
    <div class="content-item">
      <div class="info-container">
        <img class="avatar info-item" :src="userInfo.user.avatar" alt="头像">
        <h3 class="welcome info-item">欢迎使用, {{ userInfo.username }}</h3>
        <div class="info-item">
          <p>管理自己的信息、隐私和安全，让 co 服务更好地满足您的需求。</p>
          <p class="detail">了解详情</p>
          <img src="@/assets/icon/empty_mask.svg" class="icon" alt="">
        </div>

      </div>
    </div>
    <div class="content-item">
      <div class="source-container">
        <div class="source-item">
          <div class="item-top">
            <div class="title">
              点赞与收藏
            </div>
            <div class="intro">
              查看您 co 账号中的数据，包括点赞和收藏过的文章、问题，您可以自由的选择添加或者删除，您所操作的数据都会显示在这里
            </div>
          </div>
          <div class="item-bottom">
            <div class="settings">
              管理您的点赞或收藏数据
            </div>
          </div>
        </div>
        <div class="source-item">
          <div class="item-top">
            <div class="title">
              关注和订阅
            </div>
            <div class="intro">
              您可以一目了然地查看所有关注的用户和您所订阅的内容源。每一个更改都会实时更新在此处，让您随时调整和管理自己的兴趣焦点，确保始终与您喜爱的内容和用户保持连接。
            </div>
          </div>
          <div class="item-bottom">
            <div class="settings">
              查看关注与订阅
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="content-item">
      <div class="advice">
        <div class="advice-top item-top-common">
          <div class="content">
            <div class="title">有您的推荐设置建议</div>
            <div class="intro">
              进行推荐设置修改，并选择适合您的选项
            </div>
          </div>
          <div class="illustration-container">
            <img src="@/assets/recommend.svg" class="illustration" alt="">
          </div>
        </div>
        <div class="advice-bottom item-bottom-common">
          <div class="settings">
            查看建议
          </div>
        </div>
      </div>
    </div>
    <div class="content-item">
      <div class="feedback border-item">
        <div class="feedback-top">
          想了解其他内容？
        </div>
        <div class="feedback-item-list">
          <ul>
            <li class="feedback-item">
              <img src="@/assets/icon/search.svg" class="icon">
              <h6>搜索 co 账号</h6>
              <div class="to">
                <img src="@/assets/icon/arrow_right.svg" class="icon" alt="">
              </div>
            </li>

            <li class="feedback-item">
              <img src="@/assets/icon/feedback.svg" class="icon">
              <h6>发送反馈</h6>
              <div class="to">
                <img src="@/assets/icon/arrow_right.svg" class="icon" alt="">
              </div>
            </li>
            <li class="feedback-item">
              <img src="@/assets/icon/user_about.svg" class="icon">
              <h6>关于我们</h6>
              <div class="to">
                <img src="@/assets/icon/arrow_right.svg" class="icon" alt="">
              </div>
            </li>
            <li class="feedback-item">
              <img src="@/assets/icon/contactus.svg" class="icon">
              <h6>联系我们</h6>
              <div class="to">
                <img src="@/assets/icon/arrow_right.svg" class="icon" alt="">
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>
    <div class="content-item">
      <div class="tip">
        <div class="text">
          只有您本人可以查看您的设置。您可能还想查看其他 co 服务的设置。Co 会确保您数据的隐私性和安全性。
        </div>
        <div class="icon-right">
          <img src="@/assets/icon/shield.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.index-container {

  .content-item {
    display: flex;
    justify-content: center;
    margin-top: 20px;

    .tip {
      display: flex;
      position: relative;
      margin-bottom: 50px;
      width: 740px;

      .text {
        width: 600px;
        font-size: 12px;
        color: #1f1f1f;
      }
      .icon-right {
        position: absolute;
        right: 10px;
        max-width: 36px;
      }
    }

    .feedback {

      .feedback-top {
        margin: 20px 0 20px 20px;
      }

      .feedback-item-list {


        .feedback-item {
          display: flex;
          position: relative;
          align-items: center;
          padding-left: 20px;
          height: 50px;
          line-height: 50px;
          font-size: 14px;
          color: #1f1f1f;
          border-bottom: 1px solid #e1e3e1;

          &:last-child {
            border: none;
          }

          &:hover {
            background: #f6f6f6;
          }

          & > h6 {
            padding-left: 10px;
            font-size: 13px;
            font-weight: 400;
            color: #1f1f1f
          }

          .icon {
            color: #424544;
            width: 18px;
          }

          .to {
            position: absolute;
            right: 20px;
          }


        }
      }

    }

    .advice {
      width: 740px;
      border-radius: 8px;
      border: 1px solid #e1e3e1;

      .advice-top {

        display: flex;
        justify-content: space-between;

        .illustration-container {
          .illustration {
            bottom: 0;
            height: 130px;
          }
        }
      }

      .advice-bottom {
      }
    }

    .source-container {

      display: flex;
      justify-content: center;

      .source-item {
        width: 360px;
        border-radius: 8px;
        border: 1px solid #e1e3e1;

        &:nth-of-type(1) {
          margin-right: 20px;
        }

        .item-top {
          padding-left: 20px;
          height: 110px;

          .title {
            margin-top: 10px;
            font-size: 18px;
          }

          .intro {
            margin-top: 10px;
            max-width: 300px;
            font-size: 12px;
            color: #444746;
          }

        }

        .item-bottom {
          height: 38px;
          border-top: 1px solid #e6e6e6;

          &:hover {
            background: #f6f6f6;
          }

          .settings {

            margin-left: 20px;
            height: 38px;
            line-height: 38px;
            font-size: 8px;
            color: #0b57d0;
            cursor: pointer;
          }

        }
      }


    }

    .info-container {

      display: flex;
      flex-direction: column;
      justify-content: center;

      .info-item {
        margin: 5px auto;
        display: flex;
        justify-content: center;
        align-items: center;

        .detail {
          cursor: pointer;
          color: #0b57d0;
        }

        .icon {
          margin-left: 3px;
          width: 15px;
          height: auto;
        }

      }

      .welcome {
        font-size: 24px;
        font-weight: 400;
      }

      .avatar {
        display: flex;
        margin: 0 auto;
        justify-content: center;
        max-width: 90px;
        border-radius: 45px;
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.1);
        }
      }
    }


  }
}

.item-bottom-common {
  height: 38px;
  border-top: 1px solid #e6e6e6;

  &:hover {
    background: #f6f6f6;
  }

  .settings {

    margin-left: 20px;
    height: 38px;
    line-height: 38px;
    font-size: 8px;
    color: #0b57d0;
    cursor: pointer;
  }
}

.item-top-common {
  margin-top: 10px;
  padding-left: 20px;
  height: 110px;

  .title {
    margin-top: 10px;
    font-size: 18px;
  }

  .intro {
    margin-top: 10px;
    max-width: 300px;
    font-size: 12px;
    color: #444746;
  }
}

.border-item {
  width: 740px;
  border-radius: 8px;
  border: 1px solid #e1e3e1;
}
</style>