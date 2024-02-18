<script setup>
const props = defineProps({
    instructionSteps: Object
})

</script>

<template>
    <div>
        <h2>Preparation Time</h2>
        <div>
            <ol class="list-decimal">
                <li v-for="(value,key,index) in instructionSteps" :key="index">
                    <span>{{ key }}:</span> {{ value }}
                </li>
            </ol>
        </div>
    </div>
</template>