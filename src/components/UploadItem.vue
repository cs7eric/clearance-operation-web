<script setup>
import {ref, defineProps} from 'vue'
import {ElMessage} from 'element-plus'
import {userUpdateService} from '@/api/user'
import {useUserStore} from '@/stores'
const imageUrl = ref('')

const userStore = useUserStore()
const userInfo = ref({})
userInfo.value = userStore.userInfo

const props =  defineProps({
  avatar: {
    type: String,
    required: true
  }
})


const handleAvatarSuccess = function (response, uploadFile) {
  imageUrl.value = URL.createObjectURL(uploadFile.raw)
  // console.log(response)
  const avatar = response.data
  const username = userInfo.value.user.username


  // console.log(username)
  // console.log(avatar)
  userUpdateService({username, avatar})
  userStore.setAvatar(avatar)
}

const beforeAvatarUpload = function (rawFile) {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size cannot exceed 2MB!')
    return false
  }
  return true
}

</script>

<template>
  <el-upload
      class="cover-uploader"
      action="http://localhost:8089/common/upload"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
  >
    <img  :src="imageUrl !== '' ? imageUrl : props.avatar" class="cover" alt=""/>
  </el-upload>

</template>

<style scoped>
</style>