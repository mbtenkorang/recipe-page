<script setup>
const props = defineProps({
    instructionSteps: Object
})

</script>

<template>
    <div class="mb-10 pb-6 border-b borger-wengebrown">
        <h2 class="font-serif text-2xl text-nutmeg mb-6">Preparation Time</h2>
        <div class="ml-4 mr-6">
            <ol class="list-decimal list-outside marker:text-nutmeg text-darkcharcoal">
                <li v-for="(value,key,index) in instructionSteps" :key="index+110" class=" mb-2 last:mb-0">
                    <p class="text-pretty ml-1"><span class="font-bold">{{ key }}:</span> {{ value }}</p>
                </li>
            </ol>
        </div>
    </div>
</template>