<script setup>
const props = defineProps({
    description: String
})
</script>

<template>
    <div>
        <p class="font-sans text-pretty text-darkcharcoal">{{ description }}</p>
    </div>
</template>