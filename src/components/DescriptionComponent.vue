<script setup>
const props = defineProps({
    description: String
})
</script>

<template>
    <div>
        <p class="font-sans text-pretty">{{ description }}</p>
    </div>
</template>