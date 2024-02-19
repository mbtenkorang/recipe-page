<script setup>
const props = defineProps({
    nutritionInfo: Object
})
</script>

<template>
    <div class="mb-10">
        <h2 class="font-serif text-2xl text-nutmeg mb-6">Nutrition</h2>
        <p>The table below shows nutritional values per serving without the additional fillings.</p>
        <div>
            <ul>
                <li v-for="(value,key) in nutritionInfo" :key="key">
                    <p>
                        <span>{{ key }}</span>
                        <span>{{ value }}</span>
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>