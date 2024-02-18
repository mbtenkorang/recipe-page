<script setup>
const props = defineProps({
    ingredientsList: Object
})

</script>

<template>
    <div>
        <h2>Ingredients</h2>
        <div>
            <ul class="list-disc">
                <li v-for="(item,index) in ingredientsList" :key="index">
                    {{ item }}
                </li>
            </ul>
        </div>
    </div>
</template>