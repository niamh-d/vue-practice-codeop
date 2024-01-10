<script>
export const formSchema = {
  fields: [
    {
      label: "Project Title",
      name: "title",
      placeholder: "Type title",
      as: "input",
    },
    {
      label: "Image URL",
      name: "source",
      placeholder: "Provide URL to image",
      as: "input",
    },
    {
      label: "Project Description",
      name: "description",
      placeholder: "Type description of project",
      as: "textarea",
    },
  ],
};
</script>

<script setup>
import DynamicForm from "./DynamicForm.vue";
import { useProjectsStore } from "../App.vue";

const store = useProjectsStore();

function addProject(payload) {
  const [{ title, source, description }, id] = payload;

  store.addProject({ title, source, description, id });
}
</script>

<template>
  <DynamicForm
    @handler="addProject"
    :schema="formSchema"
    :isEditorMode="false"
  />
</template>
