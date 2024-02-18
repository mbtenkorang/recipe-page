<script setup>
const props = defineProps({
    description: String
})
</script>

<template>
    <div>
        <p class="font-sans">{{ description }}</p>
    </div>
</template>