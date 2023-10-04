<script setup>
import {ref} from 'vue'
import LogoItem from '@/components/common/LogoItem.vue'
import {sendCodeService} from '@/api/code'
import {userLoginService} from '@/api/user'
import router from '@/router'
import {useUserStore} from '@/stores'

const formRef = ref(null)
const loginForm = ref({
  email: '',
  code: ''
})

const rules = {
  email: [
    {required: true, message: '邮箱地址不能为空', trigger: 'blur'},
    {pattern: /^\S+@\S+\.\S+$/, message: '请输入有效的邮箱地址', trigger: 'blur'}
  ]
}

const isSending = ref(false)
const countdown = ref(0)

// 发送邮箱验证码
const sendVerificationCode = async () => {
  const valid = await formRef.value.validateField('email')
  if (!valid) return
  isSending.value = true
  countdown.value = 60

  // 调用发送验证码的API
  await sendCodeService(loginForm.value.email)

  const timer = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      clearInterval(timer)
      isSending.value = false
    }
  }, 1000)
}

const verify = async () => {
  const res = await userLoginService(
    {
      email: loginForm.value.email,
      code: loginForm.value.code
    }
  )

  const userStore = useUserStore()
  const {data: {token, user}} = res

  console.log(user)
  userStore.setUser(user)
  userStore.setJWT(token)

  router.push('/home')
}
</script>

<template>
  <div class="container">
    <div class="frame-main">
      <div class="login-main">
        <div class="logo-container">
          <div class="logo">
            <logo-item class="logo-item"></logo-item>
            <h3>肃清行动-还世界一片蔚蓝</h3>
          </div>
        </div>
        <div class="login-form">
          <el-form ref="formRef" :model="loginForm" :rules="rules" label-position="left">
            <el-form-item prop="email">
              <el-input class="login-input" v-model="loginForm.email" placeholder="请输入邮箱"></el-input>
            </el-form-item>
            <div class="code">
              <el-form-item>
                <el-input class="login-input" v-model="loginForm.code" placeholder="验证码">
                  <template #append>
                    <el-button :disabled="isSending || countdown > 0" @click="sendVerificationCode">
                      <span v-if="countdown > 0">{{ countdown }}秒后重新发送</span>
                      <span v-else>获取验证码</span>
                    </el-button>
                  </template>
                </el-input>
              </el-form-item>
            </div>
          </el-form>
          <div class="login-button">
            <button class="login" @click="verify">登录 / 注册</button>
          </div>
          <div class="login-uap">
            <span>账号密码登录</span>
          </div>
          <div class="third-party">
            <div class="wechat item">
              <img src="@/assets/icon/wechat.svg" alt="wechat登录" class="icon">
            </div>
            <div class="qq item">
              <img src="@/assets/icon/QQ.svg" alt="qq登录" class="icon">
            </div>
            <div class="google item">
              <img src="@/assets/icon/google.svg" alt="Google登录" class="icon">
            </div>
          </div>
          <div class="protocol">
            <span>注册或登录即代表您同意 用户协议和 隐私协议</span>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');
@import url('https://fonts.googleapis.com/css2?family=ZCOOL+QingKe+HuangYou&display=swap');

.login-input {
  border-width: 0.1px !important;
}


.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 500px;


  .frame-main {

    margin-top: 80px;
    width: 350px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3); /* 阴影 */

    .login-main {
      padding: 25px;

      .login-form {
        padding-top: 20px;

        .login-button {
          height: 32px;
          text-align: center;
          line-height: 32px;
          font-size: 12px;
          color: #fff;
          background: #242528;
          border-radius: 6px;

          &:hover {
            background: #454548;
          }
        }

        .login-uap {
          margin-top: 12px;
          font-size: 6px;
          color: #5c5c5c;
        }

        .third-party {

          display: flex;
          justify-content: center; /* 水平居中 */
          align-items: center; /* 垂直居中 */


          .item {

            display: flex;
            justify-content: center;
            align-items: center;
            margin: 15px; /* 为每个图标添加一些间距 */
            border-radius: 50%; /* 使外部容器呈圆形 */
            overflow: hidden; /* 隐藏超出的部分 */
            width: 26px; /* 设置为更大的尺寸，以容纳图标并留下一些空间 */
            height: 26px; /* 设置为更大的尺寸，以容纳图标并留下一些空间 */
            border: .1px solid #e6e6e6; /* 添加边框 */

          }

          .icon {
            width: 16px;
            height: 16px;
          }
        }

        .protocol {
          margin-top: 20px;
          text-align: center;
          color: #8a8a8e;
          font-size: 3px;
        }
      }

      .logo-container {
        height: 50px;

        .logo {

          display: flex;
          align-items: center;

          .logo-item {
            font-size: 45px;
          }

          & > h3 {
            color: #000;
            margin-left: 10px;
            font-family: 'ZCOOL QingKe HuangYou', sans-serif;
          }
        }
      }
    }
  }
}
</style>