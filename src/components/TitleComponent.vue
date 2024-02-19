<script setup>
const props = defineProps({
    recipeTitle: String
})
</script>

<template>
    <div>
        <h1 class="font-serif text-4xl lg:text-6xl leading-none my-8 text-darkcharcoal">{{ recipeTitle }}</h1>
    </div>
</template>