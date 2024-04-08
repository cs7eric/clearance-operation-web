<script setup>
import {defineProps} from 'vue'
const props  = defineProps({
  list: Array
})

console.log(props.list)
</script>

<template>
  <div class="discuss-container" v-if="props.list.length > 0">
    <article-item v-for="article in props.list" :key="article.id" :article="article"></article-item>

  </div>
</template>

<style scoped>
.discuss-container {

  width: 100%;
  border-radius: 8px;


  .discuss-card {
    height: 184px;
    padding: 16px 16px 0 16px;
    border-bottom: 1px solid #d0d7de;

    &:last-child {
      border-bottom: none;

    }

    .discuss-top {
      display: flex;
      height: 24px;

      .top-avatar {
        display: block;
        width: 32px;
        height: 23px;
        cursor: pointer;

        & > img {
          width: 22px;
          height: 22px;
          margin: 0 10px 0 0;
        }
      }

      .top-title {
        font-size: 16px;
      }

      & > span {
        line-height: 23px;
        font-size: 12px;
        margin: 0 0 0 10px;
        padding: 0 8px;
        border-radius: 15%;
      }
    }

    .discuss-middle {
      height: 80px;

      .middle-label {
        display: flex;
        height: 24px;
        margin: 4px 0 0;

        & > span {
          line-height: 23px;
          font-size: 12px;
          margin: 0 0 0 10px;
          padding: 0 8px;
          border-radius: 30px;
          background-color: #f2f3f4;
          color: #85858a;
        }
      }

      .middle-content {
        height: 48px;
        margin: 4px 0 0;

        .detailed-content {
          display: flex;
          flex-wrap: wrap;
          font-size: 14px;
          line-height: 24px;
          margin-top: 12px;
          color: #595959;
          word-break: break-word;
          align-self: stretch;
          -webkit-line-clamp: 2;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical
        }
      }
    }

    .discuss-bottom {
      height: 24px;
      margin: 12px 0 0 -9px;

      .bottom-label {
        display: flex;
        font-size: 14px;
        margin-top: 15px;
        color: #595959;

        .label-like {
          cursor: pointer;

          & > img {
            width: 24px;
            height: 24px;
          }
        }

        & > a {
          & > img {
            width: 26px;
            height: 26px;
          }
        }

        &:nth-child(4) {
          & > img {
            width: 26px;
            height: 26px;
          }
        }
      }
    }
  }
}

.label-icon {
  width: 26px;
  height: 26px;
  filter: drop-shadow(1000px 0 0);
  transform: translate(-1000px);
}

.label-span {
  height: 20px;
  margin: 0 0 0 7px;
  vertical-align: middle;
  line-height: 20px;
}

.label-bottom {
  display: flex;
  margin: 0 12px;
  overflow: hidden;
  align-items: center;
}
</style>