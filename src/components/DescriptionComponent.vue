<script setup>
const props = defineProps({
    description: String
})
</script>

<template>
    <p class="font-sans text-pretty text-darkcharcoal lg:text-base">{{ description }}</p>
</template>