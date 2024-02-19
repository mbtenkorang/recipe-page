<script setup>
import { reactive } from 'vue';
import ImageComponent from './components/ImageComponent.vue';
import TitleComponent from "./components/TitleComponent.vue";
import DescriptionComponent from './components/DescriptionComponent.vue';
import PreparationTimeComponent from './components/PreparationTimeComponent.vue';
import IngredientsComponent from './components/IngredientsComponent.vue';
import InstructionsComponent from "./components/InstructionsComponent.vue";
import NutritionComponent from './components/NutritionComponent.vue';

const recipeData = reactive({
  recipeTitle: "Simple Omelette Recipe",
  recipeImage: "./src/assets/images/image-omelette.jpeg",
  description:
    "An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked\
    to perfection, optionally filled with your choice of cheese, vegetables, or meats.",
  preparationtime: {
    Total: "Approximately 10 minutes",
    Preparation: "5 minutes",
    Cooking: "5 minutes",
  },
  ingredients: [
    " 2-3 large eggs",
    "Salt, to taste",
    "Pepper, to taste",
    "1 tablespoon of butter or oil",
    " Optional fillings: cheese, diced vegetables, cooked meats, herbs",
  ],
  instructions: {
    "Beat the eggs":
      " In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.\
        You can add a tablespoon of water or milk for a fluffier texture.",
    "Heat the pan":
      " Place a non-stick frying pan over medium heat and add butter or oil.",
    "Cook the omelette":
      "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure\
    the eggs evenly coat the surface.",
    "Add fillings (optional)":
      "When the eggs begin to set at the edges but are still slightly runny in the \
middle, sprinkle your chosen fillings over one half of the omelette.",
    "Fold and serve":
      "As the omelette continues to cook, carefully lift one edge and fold it over the \
fillings. Let it cook for another minute, then slide it onto a plate.",
    "Enjoy": "Serve hot, with additional salt and pepper if needed.",
  },
  nutritionValues: {
    Calories: "277kcal",
    Carbs: "0g",
    Protein: "20g",
    Fat: "22g",
  },
})
</script>

<template>
  <main class="md:border-b md:border-white md:bg-white">
    <ImageComponent :imagesrc="recipeData.recipeImage" />
    <div class="w-5/6 mx-auto">
      <TitleComponent :recipeTitle="recipeData.recipeTitle" />
      <DescriptionComponent :description="recipeData.description" />
      <PreparationTimeComponent :prepTime="recipeData.preparationtime" />
      <IngredientsComponent :ingredientsList="recipeData.ingredients" />
      <InstructionsComponent :instructionSteps="recipeData.instructions" />
      <NutritionComponent :nutritionInfo="recipeData.nutritionValues" />
    </div>
  </main>
</template>

<style ></style>
