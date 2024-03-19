<script setup>

const props = defineProps({
  placeholderText: String,
  modelValue: String
})

// const emit = defineEmits(['askQuestion'])

// const askQuestion = () => {
//   emit('askQuestion')
// }
//
// const askAI = () => {
//   askQuestion()
// }
</script>

<template>
  <form class="formField">
    <textarea
        type="text" required
        :value="modelValue"
        @textarea="$emit('update:modelValue', $event.target.value)"
        onkeydown="if (event.keyCode === 13) event.preventDefault();"
    />
    <span>{{props.placeholderText}}</span>
  </form>

</template>

<style scoped>
.formField {
  margin: 10px;
  position: relative;
}

.formField textarea {
  width: 800px;
  height: 170px;
  padding: 10px 20px;
  outline: none;
  overflow:hidden;
  border: none;
  border-radius: 5px;
  background-color: #f1f1f1;
  color: #333;
  font-size: 16px;
  font-weight: 550;
  text-align: center;
  justify-content: center;
  transition: 0.3s ease-in-out;
  box-shadow: 0 0 0 5px transparent;
  resize: none;
}

.formField textarea:hover,
.formField textarea:focus {
  box-shadow: 0 0 0 2px #333;
}

.formField span {
  position: absolute;
  left: 0;
  top: 0;
  padding: 8px 15px;
  color: #333;
  font-size: 16px;
  font-weight: 600;
  text-shadow: -1px -1px 0 #f1f1f1, 1px -1px 0 #f1f1f1, -1px 1px 0 #f1f1f1,
  1px 1px 0 #f1f1f1;
  transition: 0.3s ease-in-out;
  pointer-events: none;
}

.formField textarea:focus + span,
.formField textarea:valid + span {
  transform: translateY(-32px) translateX(-5px) scale(0.95);
  transition: 0.3s ease-in-out;
}

</style>