<script setup>
const props = defineProps({
    prepTime: Object
})

</script>

<template>
    <div class="my-10 py-4 px-2 bg-rosewhite rounded-lg">
        <h2 class="text-xl font-bold my-3 ml-3 text-darkraspberry">Preparation time</h2>
        <div class="ml-4 mb-4">
            <ul role="list" class="list-disc list-inside marker:text-darkraspberry">
                <li v-for="(value,key) in prepTime" :key="key" class="first-mt-0 last:mb-0 my-2 text-l">
                    <span class="font-bold ml-3">{{ key }}</span>: <span class="text-darkcharcoal">{{ value }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

