<script setup>
const props = defineProps({
    prepTime: Object
})

</script>

<template>
    <div class="my-10 py-4 px-3 bg-rosewhite rounded-lg">
        <h2 class="text-xl font-bold my-4 ml-3 text-darkraspberry">Preparation time</h2>
        <div class="ml-6 mb-4">
            <ul role="list" class="list-disc list-outside marker:text-darkraspberry">
                <li v-for="(value,key) in prepTime" :key="key" class="last:mb-0 mb-2  lg:text-base">
                    <span class="font-bold ml-5">{{ key }}</span>: <span class="text-darkcharcoal">{{ value }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

