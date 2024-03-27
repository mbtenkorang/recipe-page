<script setup>
const props = defineProps({
    imagesrc: String
})
</script>

<template>
    <div class="md:pt-8 md:px-6 overflow-hidden">
        <img :src="imagesrc" alt="Omelette with filling served on a plate" class="md:rounded-lg">
    </div>
</template>
