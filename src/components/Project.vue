<template>
  <Card class="project">
    <div class="icons-box flex flex-end">
      <TrashIcon />
      <PencilIcon @click="() => handleEdit(project.id)" />
    </div>
    <h3 class="text-lg font-bold mt-2 mb-3">{{ project.title }}</h3>
    <img class="pd-5" v-bind:src="project.source" />
    <p class="mt-3">{{ project.description }}</p>
  </Card>
</template>

<script setup>
import Card from "./Card.vue";
import TrashIcon from "./TrashIcon.vue";
import PencilIcon from "./PencilIcon.vue";

import { useProjectsStore } from "../App.vue";

const store = useProjectsStore();

function handleEdit(id) {
  store.openEditorMode(id);
}

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>
