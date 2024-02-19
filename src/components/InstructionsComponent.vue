<script setup>
const props = defineProps({
    instructionSteps: Object
})

</script>

<template>
    <div class="mb-10 pb-6 border-b borger-wengebrown">
        <h2 class="font-serif text-2xl text-nutmeg mb-6">Preparation Time</h2>
        <div>
            <ol class="list-decimal list-inside marker:text-nutmeg text-darkcharcoal">
                <li v-for="(value,key,index) in instructionSteps" :key="index+110">
                    <p>{{ key }}:</p>
                    <span>{{ value }}</span>
                </li>
            </ol>
        </div>
    </div>
</template>