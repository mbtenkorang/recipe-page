<script setup>
const props = defineProps({
    imagesrc: String
})
</script>

<template>
    <div class="md:pt-8 md:px-6 overflow-hidden">
        <img :src="imagesrc" alt="image of omellette" class="md:rounded-lg">
    </div>
</template>
