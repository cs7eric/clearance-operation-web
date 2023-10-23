<script setup>
import IssueItem from '@/components/issue/IssueItem.vue'
import {useRoute} from 'vue-router'
import {onBeforeMount, onMounted, ref, watch} from 'vue'
import {issueGetService} from '@/api/issue'
import {useIssueStore} from '@/stores'

const route = useRoute()
const issueId = route.params.id
const issueStore = useIssueStore()

const issueData = ref()
issueData.value = issueStore.issueData
const getIssue = async () => {
  const res = await issueGetService(issueId)
  console.log(res.data)
  issueData.value = res.data
  console.log(issueData)
}

onBeforeMount(async () => {
    await getIssue()
  }
)

onMounted(async () => {
  if (!issueData.value) {
    const id = route.params.id
    issueData.value = await issueGetService(id)
  }
})

watch(() => route.params.id, async (newId) => {
  issueData.value = await issueGetService(newId)
})

</script>

<template>
  <div class="issue-item-container">
    <issue-item :issue="issueData"></issue-item>
  </div>

</template>

<style scoped>
:deep(.co-main) {
  margin: 0;
}

.issue-item-container {
}


</style>