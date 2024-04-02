<script setup>

</script>

<template>
  <button> Follow
  </button>
</template>

<style scoped>
button {
  height: 1.9em;
  width: 5.3em;
  border: none;
  border-radius: 10em;
  background: #0f1419;
  font-size: 15px;
  color: #ffffff;
  font-family: inherit;
  font-weight: 700;
}

button:hover {
  animation: shake3856 0.3s linear infinite both;
}

@keyframes shake3856 {
  0% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }

  20% {
    -webkit-transform: translate(-2px, 2px);
    transform: translate(-2px, 2px);
  }

  40% {
    -webkit-transform: translate(-2px, -2px);
    transform: translate(-2px, -2px);
  }

  60% {
    -webkit-transform: translate(2px, 2px);
    transform: translate(2px, 2px);
  }

  80% {
    -webkit-transform: translate(2px, -2px);
    transform: translate(2px, -2px);
  }

  100% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
}

</style>