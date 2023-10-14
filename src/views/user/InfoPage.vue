<script setup>
import {ref} from 'vue'
import {useUserStore} from '@/stores'
import UploadItem from '@/components/UploadItem.vue'

const userInfo = ref({})
const userStore = useUserStore()
userInfo.value = userStore.userInfo
</script>

<template>
  <div class="user-container">
    <div class="content-item">
      <div class="title-section">
        <div class="title">个人信息</div>
        <div class="profile">
          您在各种 co 服务中的个人信息和偏好设置
        </div>
      </div>

    </div>
    <div class="content-item">
      <div class="tip-container">
        <div class="tip-left-section">
          <div class="tip-top">
            <h2>您在 co 服务中的个人资料信息</h2>
          </div>
          <div class="tip-bottom">
            <p>
              个人信息以及用于管理这些信息的选项。您可以向他人公开部分信息（例如您的详细联系信息），以方便他们与您联系。您还可以查看您的个人资料的摘要。</p>
          </div>
        </div>
        <div class="tip-right-section">
          <img src="@/assets/user_info_illustration.png" alt="">
        </div>
      </div>

    </div>
    <div class="content-item">
      <div class="data-container">
        <div class="data-title">
          <h3>基本信息</h3>
        </div>
        <div class="data-profile">
          <p>使用 co 服务的其他用户可能会看到部分信息</p>
          <p class="detail">了解详情</p>
          <img class="icon" src="@/assets/icon/empty_mask.svg" alt="">
        </div>
        <div class="data-avatar">
          <div class="avatar-desc">
            <p>个人资料照片</p>
            <p>更换个人资料照片可帮助您个性化您的账号</p>

            <upload-item
                class="avatar-upload-section"
                :avatar="userInfo.user.avatar"
            ></upload-item>
            
          </div>
        </div>
        <div class="data-list">
          <ul class="list">
            <li class="info-item">
              <p>用户名</p>
              <p>{{ userInfo.user.username }}</p>
              <img class="icon" src="@/assets/icon/arrow_right.svg" alt="">
            </li>
            <li class="info-item">
              <p>昵称</p>
              <p>{{ userInfo.user.nickName }}</p>
              <img class="icon" src="@/assets/icon/arrow_right.svg" alt="">
            </li>
            <li class="info-item">
              <p>性别</p>
              <p>{{ userInfo.user.sex === null ? '私密' : userInfo.user.sex === '1' ? '男' : '女'  }}</p>
              <img class="icon" src="@/assets/icon/arrow_right.svg" alt="">
            </li>
            <li class="info-item">
              <p>个人简介</p>
              <p>我是个人</p>
              <img class="icon" src="@/assets/icon/arrow_right.svg" alt="">
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="content-item">
      <div class="contact-container">
        <div class="contact-title-section">
          <h3>联系信息</h3>
        </div>
        <div class="contact-list-section">
          <ul class="contact-list">
            <li class="contact-item">
              <p>电子邮件</p>
              <p>{{ userInfo.user.email }}</p>
              <img class="icon" src="@/assets/icon/arrow_right.svg" alt="">
            </li>
            <li class="contact-item">
              <p>手机号</p>
              <p>{{ userInfo.user.phonenumber }}</p>
              <img class="icon" src="@/assets/icon/arrow_right.svg" alt="">
            </li>
            <li class="contact-item more">
              <p>更多选项</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="content-item">
      <div class="private-container">
        <div class="private-profile">
          <div class="private-left-section">
            <div class="private-top">
              <h2>CO 服务中的其他信息和偏好设置</h2>
            </div>
            <div class="private-bottom">
              <p>用于验证您身份的方式和其他设置</p>
            </div>
          </div>
          <div class="private-right-section">
            <img src="@/assets/user_password_illustration.png" alt="">
          </div>

        </div>
        <div class="password-section">
          <div class="password-item password">
            <div class="password-profile">
              <h3>密码</h3>
              <p>安全的密码可以更好地保护您的 CO 账号</p>
            </div>
            <div class="password-setting">
              <div class="item">
                <p>••••••••</p>
                <p>账号安全性: 高</p>
              </div>
              <img class="icon" src="@/assets/icon/arrow_right.svg" alt="">
            </div>
          </div>
          <div class="password-item settings">
            <div class="setting-profile">
              <h3>验证的常规偏好设置</h3>
              <p>管理 CO 服务验证登录设置</p>
            </div>
            <div class="setting-list-section">
              <ul class="setting-list">
                <li class="setting-item">
                  <div class="item">
                    <img class="icon" src="@/assets/icon/wechat.svg" alt="">
                    <p>微信登录</p>
                  </div>
                  <img class="icon" src="@/assets/icon/arrow_right.svg" alt="">
                </li>
                <li class="setting-item">
                  <div class="item">
                    <img class="icon" src="@/assets/icon/mail.svg" alt="">
                    <p>邮箱登录</p>
                  </div>
                  <img class="icon" src="@/assets/icon/arrow_right.svg" alt="">
                </li>
                <li class="setting-item">
                  <div class="item">
                    <img class="icon" src="@/assets/icon/password.svg" alt="">
                    <p>密码登录</p>
                  </div>
                  <img class="icon" src="@/assets/icon/arrow_right.svg" alt="">
                </li>

              </ul>
            </div>
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

  </div>

</template>
<style>
.el-upload--text{
  width: 46px;
  height: 46px;
}
</style>

<style scoped>


.avatar-uploader{
  width: 78px;
  height: 78px;
  display: block;
}


.avatar-uploader .avatar {
  width: 78px;
  height: 78px;
  display: block;
}

.user-container {

  .content-item {
    display: flex;
    justify-content: center;
    margin-top: 20px;

    .feedback {

      margin-bottom: 30px;

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


    .private-container {
      margin-top: 10px;
      width: 740px;

      .password-section {
        display: flex;
        margin-top: 20px;

        .settings {

          .setting-list-section {
            .setting-list {
              .setting-item {
                display: flex;
                justify-content: space-between;
                padding: 15px 20px 15px 20px;
                border-bottom: 1px solid #e6e6e6;
                cursor: pointer;

                &:hover {
                  background: #e6e6e6;
                }

                .icon {
                  max-width: 16px;
                }

                .item {
                  display: flex;

                  & > p {
                    margin-left: 5px;
                    font-size: 12px;
                    color: #444746;
                  }
                }
              }
            }
          }

          .setting-profile {
            padding: 20px;

            & > h3 {
              font-size: 22px;
            }

            & > p {
              font-size: 14px;
              color: #444746;
            }
          }

        }

        .password-setting {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
          height: 46px;
          cursor: pointer;

          &:hover {
            background: #e6e6e6;
          }

          .item {
            & > p {
              font-size: 12px;
              color: #444746;
            }
          }


          & > .icon {
            max-width: 16px;
          }
        }

        .password-profile {
          padding: 20px;

          & > h3 {
            font-weight: 400;
            font-size: 22px;
          }

          & > p {
            margin-top: 5px;
            font-size: 14px;
            color: #444746;
          }
        }

        .password-item {
          margin-right: 20px;
          width: 360px;
          border-radius: 8px;
          border: 1px solid #e6e6e6;

          &:last-child {
            margin-right: 0;;
          }
        }
      }

      .private-profile {
        display: flex;
        position: relative;
        width: 740px;
        height: 110px;

        .private-left-section {
          .private-top {
            & > h2 {
              font-weight: 400;
              font-size: 28px;
            }
          }

          .private-bottom {
            max-width: 410px;
            margin-top: 10px;

            & > p {
              font-size: 16px;
            }
          }
        }

        .private-right-section {
          right: 0;
          position: absolute;

          & > img {
            max-height: 110px;
          }
        }
      }

    }


    .contact-container {
      width: 740px;
      border-radius: 8px;
      border: 1px solid #e6e6e6;


      .contact-list-section {

        .contact-list {

          .more {

          }

          .contact-item {
            display: flex;
            justify-content: space-between;
            padding: 15px 20px 15px 20px;
            border-bottom: 1px solid #e6e6e6;
            font-size: 12px;
            color: #444746;
            cursor: pointer;

            &:hover {
              background: #e6e6e6;
            }

            & > .icon {
              max-width: 16px;
            }

            &:last-child {
              height: 60px;

              &:hover {
                background: #fff;
              }
            }
          }
        }

      }

      .contact-title-section {

        & > h3 {
          padding: 20px;
          font-size: 22px;
          font-weight: 400;
        }
      }
    }

    .data-container {
      padding: 20px 20px 0 20px;
      margin-top: 10px;
      width: 740px;
      border-radius: 8px;
      border: 1px solid #e1e3e1;

      .data-title {

        & > h3 {
          font-weight: 400;
          font-size: 22px;
        }
      }

      .data-list {
        .list {
          margin-top: 20px;

          .info-item {
            display: flex;
            justify-content: space-between;
            align-items: center; /* 垂直居中内容 */
            border-top: 1px solid #e1e3e1;
            color: #444746;
            cursor: pointer;

            &:last-child {
              padding: 0;
            }


            & > p {
              width: 80px;
              font-size: 12px;
              height: 46px;
              line-height: 46px;

              &:first-child {
                flex-grow: 0;
                margin-right: 170px;
              }

              &:nth-child(2) {
                flex-grow: 1;
                text-align: left;
              }
            }

            .icon {
              max-width: 16px;
            }
          }
        }
      }

      .data-avatar {
        margin-top: 20px;

        .avatar-desc {
          display: flex;
          justify-content: space-between;

          & > p {
            font-size: 12px;
            height: 46px;
            line-height: 46px;
          }

          .avatar-upload-section {
            width:46px;

          }

          .avatar {
            border-radius: 23px;
            max-width: 46px;
            cursor: pointer;
            transition: transform 0.3s ease;

            &:hover {
              transform: scale(1.25);
            }

          }

        }
      }

      .data-profile {
        display: flex;
        margin-top: 5px;

        & > p {
          font-size: 14px;
          color: #1f1f1f;
        }

        .detail {
          color: #0b57d0;
          margin-left: 5px;
          cursor: pointer;

        }

        .icon {
          margin-left: 2px;
          width: 16px;
        }
      }
    }

    .tip-container {
      display: flex;
      position: relative;
      margin-top: 10px;
      width: 740px;

      .tip-left-section {
        .tip-top {
          & > h2 {
            font-weight: 400;
            font-size: 28px;
          }
        }

        .tip-bottom {
          max-width: 410px;
          margin-top: 10px;

          & > p {
            font-size: 16px;
          }
        }
      }

      .tip-right-section {
        right: 0;
        position: absolute;

        & > img {
          max-height: 110px;
        }
      }
    }

    .title-section {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .title {
        margin: 0 auto;
        font-size: 28px;
      }

      .profile {
        margin-top: 10px;
        font-size: 16px;
        color: #1f1f1f;
      }

    }
  }
}

.border-item {
  width: 740px;
  border-radius: 8px;
  border: 1px solid #e1e3e1;
}
</style>