<script setup>
const props = defineProps({
    nutritionInfo: Object
})
</script>

<template>
    <section class="mb-10">
        <h2 class="font-serif text-2xl text-nutmeg mb-6">Nutrition</h2>
        <p class="my-3 text-darkcharcoal lg:text-base">The table below shows nutritional values per serving without the
            additional fillings.</p>

        <table class="w-full table-auto">
            <tr v-for="(value,key) in nutritionInfo" :key="key" class="border-b border-lightgrey">
                <td class="py-4 pl-8">{{ key }}</td>
                <td class="text-nutmeg font-bold">{{ value }}</td>
            </tr>
        </table>

    </section>
</template>