<template>
  <svg class="close" width="19" height="19" viewBox="0 0 19 19"  xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.41417 0.585789C2.63316 -0.195263 1.36681 -0.195263 0.5858 0.585789C-0.195267 1.36683 -0.195267 2.63317 0.5858 3.41422L6.24266 9.07111L0.5858 14.728C-0.195267 15.509 -0.195267 16.7754 0.5858 17.5564C1.36687 18.3375 2.63316 18.3375 3.41423 17.5564L9.07109 11.8996L14.7279 17.5564C15.509 18.3374 16.7753 18.3374 17.5563 17.5564C18.3374 16.7753 18.3374 15.509 17.5563 14.7279L11.8995 9.07113L17.5564 3.41428C18.3374 2.63323 18.3374 1.3669 17.5564 0.58585C16.7753 -0.195194 15.509 -0.195194 14.728 0.58585L9.07109 6.24271L3.41417 0.585789Z" />
  </svg>
</template>

<script>
export default {
name: "ModalClose"
}
</script>

<style scoped>
svg{
  fill: var(--text-gray);
  cursor: pointer;
  transition: all 150ms;
}
svg:hover{
  fill: black;
  transform: rotate(90deg);
}
</style>