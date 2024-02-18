<script setup>
const props = defineProps({
    recipeTitle: String
})
</script>

<template>
    <div>
        <h1 class="font-serif font-bold text-4xl lg:text-6xl text-darkcharcoal">{{ recipeTitle }}</h1>
    </div>
</template>