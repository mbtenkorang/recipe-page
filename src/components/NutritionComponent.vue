<script setup>
const props = defineProps({
    nutritionInfo: Object
})
</script>

<template>
    <div>
        <h2>Nutrition</h2>
        <p>The table below shows nutritional values per serving without the additional fillings.</p>
        <table>
            <tr v-for="(value,key) in nutritionInfo" :key="key">
                <td>{{ key }}</td>
                <td>{{ value }}</td>
            </tr>
        </table>
    </div>
</template>