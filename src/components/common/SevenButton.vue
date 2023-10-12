<script setup>

</script>

<template>
  <div class="seven-button">
    <button>
      <span class="text">go</span>
    </button>
  </div>
</template>

<style scoped>
button {

  display: flex;
  margin-left: 3px;
  padding: 10px 20px;
  border: 0;
  border-radius: 8px;
  background-color: #2ba8fb;
  color: #ffffff;
  font-weight: Bold;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  height: 36px;
  text-align: center;
  align-items: center;
}

button:hover {
  background-color: #6fc5ff;
  box-shadow: 0 0 20px #6fc5ff50;
  transform: scale(1.1);
}

button:active {
  background-color: #3d94cf;
  transition: all 0.25s;
  -webkit-transition: all 0.25s;
  box-shadow: none;
  transform: scale(0.98);
}

.text {
  font-size: 12px;
  font-weight: 700;
}
</style>