<script setup>
const props = defineProps({
    ingredientsList: Object
})

</script>

<template>
    <div class="mb-10 pb-8 border-b borger-wengebrown">
        <h2 class="font-serif text-2xl text-nutmeg mb-6">Ingredients</h2>
        <div class="ml-4">
            <ul role="list" class="list-disc list-outside marker:text-nutmeg">
                <li v-for="(item,index) in ingredientsList" :key="index">
                    <p class="ml-3 text-darkcharcoal">{{ item }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>