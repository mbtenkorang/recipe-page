<script setup>
const props = defineProps({
    imagesrc: String
})
</script>

<template>
    <div>
        <img :src="imagesrc" alt="omellette" class="w-full">
    </div>
</template>
