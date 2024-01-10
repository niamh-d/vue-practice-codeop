<script setup>
import DynamicForm from "./DynamicForm.vue";
import { useProjectsStore } from "../App.vue";

const store = useProjectsStore();

const id = store.selectedId;

const project = store.projects.filter((project) => project.id === id);

const formSchema = {
  fields: [
    {
      label: "Project Title",
      name: "title",
      value: project.title,
      as: "input",
    },
    {
      label: "Image URL",
      name: "source",
      value: project.source,
      as: "input",
    },
    {
      label: "Project Description",
      name: "description",
      value: project.description,
      as: "textarea",
    },
  ],
};

//@handler="editProject"
</script>

<template>
  <DynamicForm :schema="formSchema" :isEditorMode="true" />
</template>
