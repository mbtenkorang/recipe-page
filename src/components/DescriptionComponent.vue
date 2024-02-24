<script setup>
const props = defineProps({
    description: String
})
</script>

<template>
    <div>
        <p class="font-sans text-pretty text-darkcharcoal lg:text-base">{{ description }}</p>
    </div>
</template>