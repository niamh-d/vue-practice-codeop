<template>
  <div class="container-projects">
    <Card v-for="project in store.projects" :key="project.id" class="project">
      <h3 class="text-lg font-bold mb-3">{{ project.title }}</h3>
      <img class="pd-5" v-bind:src="project.source" />
      <p class="mt-3">{{ project.description }}</p>
    </Card>
  </div>
</template>

<script setup>
import { useProjectsStore } from "../App.vue";
import Card from "./Card.vue";
const store = useProjectsStore();
</script>
