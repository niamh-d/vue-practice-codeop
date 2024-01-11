<template>
  <Card class="project" :class="{ 'bg-base-200': isFavoured }">
    <div class="icons-box">
      <StarIcon
        @click="() => handleFavourite(project.id)"
        :projectId="project.id"
        :favouredId="store.favouredProjectId"
      />
      <TrashIcon @click="() => handleDelete(project.id)" />
      <PencilIcon @click="() => handleEdit(project.id)" />
    </div>
    <h3 class="text-lg font-bold mt-2 mb-3">{{ project.title }}</h3>
    <img class="pd-5" v-bind:src="project.source" />
    <p class="mt-3">{{ project.description }}</p>
  </Card>
</template>

<script setup>
import { useProjectsStore } from "../App.vue";

import Card from "./Card.vue";
import TrashIcon from "./TrashIcon.vue";
import PencilIcon from "./PencilIcon.vue";
import StarIcon from "./StarIcon.vue";

const emit = defineEmits(["refresh"]);

const store = useProjectsStore();

const props = defineProps({
  favouredId: {
    type: String,
    required: true,
  },
  project: {
    type: Object,
    required: true,
  },
});

const isFavoured = props.favouredId === props.project.id;

function handleEdit(id) {
  store.openEditorMode(id);
}

function handleDelete(id) {
  store.deleteProject(id);
}

function handleFavourite(id) {
  emit("refresh");
  store.favourProject(id);
}
</script>
