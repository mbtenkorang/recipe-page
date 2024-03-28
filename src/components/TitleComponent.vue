<script setup>
const props = defineProps({
    recipeTitle: String
})
</script>

<template>
    <h1 class="font-serif text-4xl my-8 text-darkcharcoal">{{ recipeTitle }}</h1>
</template>