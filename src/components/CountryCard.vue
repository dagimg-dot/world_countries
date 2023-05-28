<script setup>
const props = defineProps({
    name: String,
    emoji: String
})
</script>

<template>
    <div class="card-wrapper bg-[#F0E9E9] rounded-2xl flex flex-col space-y-4 mb-5">
      <div class="flex h-3/4 rounded-2xl justify-center items-center">
        <div class="flag">
          {{ emoji }}
        </div>
      </div>
      <div class="flex bg-[#6770C3] h-1/4 rounded-2xl text-white justify-center items-center">
        <div class="text-2xl text-center">
          {{ name }}
        </div>
      </div>
    </div>
</template>

<style scoped>
.card-wrapper {
    height: 230px;
    width: 210px;
    cursor: pointer;
}

.flag {
  font-size: 210px;
}

span {
  font-family: 'Roboto', sans-serif;
}
</style>