<script setup>

</script>

<template>
  <div class="user-home-container">
    <div class="user-info-section">
      <div class="info-top">
        <div class="avatar-area">
          <img class="avatar" src="@/assets/avatar.jpg" alt="">
        </div>
        <div class="func-area">
          <button class="others-button button">···</button>
          <button class="follow-button button">Follow</button>
        </div>
      </div>
      <div class="info-main">

        <div class="user-username">
          <h3 class="username">Cccs7</h3>
          <span class="nickname">@cccs7</span>
        </div>
        <div class="user-detail">
          <p>Official Sony Interactive Entertainment account. Updates on PS5, PlayStation VR2, PlayStation Plus, PS4 and
            more. Support:
            @AskPlayStation</p>
        </div>

      </div>
    </div>
    <div class="user-func-section"></div>

  </div>
</template>

<style scoped>
.user-home-container {

  display: flex;
  margin-top: 10px;
  padding-top: 88px;
  border-left: 1px solid #e6e6e6;
  border-right: 1px solid #e6e6e6;


  .user-info-section {

    width: 760px;

    padding: 10px;

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

        & > p {
          margin-top: 6px;
          color: #32363a;
          font-size: 13px;
          overflow-wrap: break-word;
        }
      }
    }
  }
}
</style>