<script setup>
const props = defineProps({
    ingredientsList: Object
})

</script>

<template>
    <div class="mb-10 pb-6 border-b borger-wengebrown">
        <h2 class="font-serif text-2xl text-nutmeg mb-6">Ingredients</h2>
        <div>
            <ul role="list" class="list-disc list-inside marker:text-nutmeg">
                <li v-for="(item,index) in ingredientsList" :key="index">
                    <span class="ml-3 text-darkcharcoal">{{ item }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>