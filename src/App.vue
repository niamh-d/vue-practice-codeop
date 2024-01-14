<template>
  <div class="pt-5 pl-5">
    <Header />
    <Favourite
      v-if="store.favouriteIsVisible && !store.isAdminView"
      :key="favouriteSectionComponentKey"
    />
    <div class="mt-20 pt-10 pl-5">
      <Card v-if="store.isAdminView" class="container-admin h-center">
        <AdminView />
      </Card>
      <UserView v-else :key="userViewComponentKey" />
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
import Favourite from "./components/Favourite.vue";

import { defineStore } from "pinia";
import { starterData } from "./StarterData";

const store = useProjectsStore();

onMounted(() => {
  themeChange(false);
});
</script>

<script>
import { ref } from "vue";

const favouriteSectionComponentKey = ref(0);
const userViewComponentKey = ref(0);

export const useProjectsStore = defineStore("projects", {
  state: () => ({
    projects: starterData,
    isEditorMode: false,
    projectToEditId: "",
    isAdminView: false,
    favouriteIsVisible: false,
    favouredProjectId: "",
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
    closeEditorMode() {
      this.isEditorMode = false;
      this.isAdminView = false;
    },
    favourProject(id) {
      if (id === this.favouredProjectId) {
        this.closeFavouriteProject();
      } else {
        ++favouriteSectionComponentKey.value;
        this.favouriteIsVisible = true;
        this.favouredProjectId = id;
      }
    },
    closeFavouriteProject() {
      ++userViewComponentKey.value;
      this.favouriteIsVisible = false;
      this.favouredProjectId = "";
    },
    addProject(project) {
      this.projects.push(project);
    },
    editProject(payload) {
      const { title, source, description } = payload;

      const index = this.projects.indexOf(
        this.projects.find((project) => project.id === this.projectToEditId)
      );

      this.projects.splice(index, 1, {
        title,
        source,
        description,
        id: this.projectToEditId,
      });

      this.projectToEditId = "";
    },

    deleteProject(id) {
      if (id === this.favouredProjectId) this.closeFavouriteProject();
      this.projects = this.projects.filter((project) => project.id !== id);
    },
  },
});
</script>
