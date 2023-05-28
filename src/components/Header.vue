<script setup>
import { computed } from 'vue'

const props = defineProps({
    title: String
})

const firstWord = computed(() => props.title.slice(0, props.title.indexOf(' ')))
const secondWord = computed(() => props.title.slice(props.title.indexOf(' ')))

</script>
<template>
    <div class="flex bg-[#6770C3] h-24 justify-center text-4xl text-white font-serif">
        <div v-if="props.title == 'World Countries'" class="title flex flex-col justify-center items-center">
            <div>{{ firstWord }}</div>
            <div class="-mt-2">{{ secondWord }}</div>
        </div>
        <div v-else class="title flex flex-col justify-center items-center">
            {{ title }}
        </div>
    </div>
</template>

<style scoped>
.title {
    font-family: 'Roboto', sans-serif;
}
</style>