import {defineStore} from 'pinia'
import {issueGetService} from '@/api/issue'
import {ref} from 'vue'
export const useIssueStore = defineStore('issue', () => {

  const issueData = ref({})
  const fetchIssueData = async (id) => {
    const response = await issueGetService(id)
    issueData.value = response.data
    console.log("111111")
  }


  return {
    issueData,
    fetchIssueData
  }
})