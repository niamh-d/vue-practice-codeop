<template>
  <div class="container-projects h-center">
    <Project
      v-for="project in store.projects"
      :key="project.id"
      :project="project"
    />
  </div>
</template>

<script setup>
import { useProjectsStore } from "../App.vue";
import Project from "./Project.vue";

const store = useProjectsStore();
</script>
