<template>
  <div class="container-projects h-center" :key="componentKey">
    <Project
      v-for="project in store.projects"
      :key="project.id"
      :project="project"
      @refresh="forceRerender"
      :favouredId="store.favouredProjectId"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

import { useProjectsStore } from "../App.vue";
import Project from "./Project.vue";

const store = useProjectsStore();

const componentKey = ref(0);

const forceRerender = () => {
  ++componentKey.value;
};
</script>
