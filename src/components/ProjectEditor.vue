<script setup>
import DynamicForm from "./DynamicForm.vue";

import { useProjectsStore } from "../App.vue";

const store = useProjectsStore();

const [project] = store.projects.filter(
  (project) => project.id === store.projectToEditId
);

const formValues = {
  title: project.title,
  source: project.source,
  description: project.description,
};

function editProject(payload) {
  store.closeEditorMode();
  store.editProject(payload);
}

const formSchema = {
  fields: [
    {
      label: "Project Title",
      name: "title",
      as: "input",
      value: project.title,
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
      as: "textarea",
      value: project.description,
    },
  ],
};
</script>

<template>
  <DynamicForm
    :schema="formSchema"
    :isEditorMode="true"
    @handler="editProject"
    :initialValues="formValues"
  />
</template>
