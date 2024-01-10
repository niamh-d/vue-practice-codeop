<script setup>
import Form from "./Form.vue";
import ProjectEditor from "./ProjectEditor.vue";

import { useProjectsStore } from "../App.vue";

const store = useProjectsStore();
</script>

<template>
  <div class="h-center">
    <h2>
      {{ store.isEditorMode ? "Edit Project Details" : "Add new project" }}
    </h2>
    <Form v-if="!store.isEditorMode" />
    <ProjectEditor v-else />
  </div>
</template>
