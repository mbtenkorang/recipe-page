<script setup>
const props = defineProps({
    prepTime: Object
})

</script>

<template>
    <div>
        <h2>Preparation Time</h2>
        <div>
            <ul class="list-disc">
                <li v-for="(value,key,index) in prepTime" :key="index">
                    {{ key }}: {{ value }}
                </li>
            </ul>
        </div>
    </div>
</template>