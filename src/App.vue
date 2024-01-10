<template>
  <div class="pt-5 pl-5">
    <Header />
    <div class="mt-20 pt-10 pl-5">
      <Card v-if="store.isAdminView" class="container-admin h-center">
        <AdminView />
      </Card>
      <UserView v-else />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { themeChange } from "theme-change";

import AdminView from "./components/AdminView.vue";
import UserView from "./components/UserView.vue";
import Header from "./components/Header.vue";
import Card from "./components/Card.vue";

import { defineStore } from "pinia";
import { starterData } from "./StarterData";

const store = useProjectsStore();

onMounted(() => {
  themeChange(false);
});
</script>

<script>
export const useProjectsStore = defineStore("projects", {
  state: () => ({
    projects: starterData,
    isEditorMode: false,
    projectToEditId: "",
    isAdminView: false,
  }),
  getters: {},

  actions: {
    toggleIsAdminView() {
      this.isAdminView = !this.isAdminView;
    },
    openEditorMode(id) {
      this.isEditorMode = true;
      this.isAdminView = true;
      this.projectToEditId = id;
    },
    addProject(project) {
      this.projects.push(project);
    },
  },
});
</script>
