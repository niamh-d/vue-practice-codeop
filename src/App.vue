<template>
  <div class="pt-5 pl-5">
    <Header @toggle-admin="toggleIsAdmin" v-bind:is-admin="isAdmin" />
    <div class="mt-20 pt-10 pl-5">
      <card v-if="isAdmin" class="container-admin h-center">
        <admin-view />
      </card>
      <user-view v-else />
    </div>
  </div>
</template>

<script>
import AdminView from "./components/AdminView.vue";
import UserView from "./components/UserView.vue";
import Header from "./components/Header.vue";
import Card from "./components/Card.vue";

import { defineStore } from "pinia";
import { onMounted } from "vue";
import { themeChange } from "theme-change";
import { starterData } from "./components/StarterData";

export const useProjectsStore = defineStore("projects", {
  state: () => ({
    projects: starterData,
  }),
  getters: {},
  actions: {
    addProject(project) {
      this.projects.push(project);
    },
  },
});

export default {
  setup() {
    onMounted(() => {
      themeChange(false);
    });
  },
  name: "app",
  components: {
    userView: UserView,
    adminView: AdminView,
    Header,
    card: Card,
  },
  data() {
    return {
      isAdmin: false,
    };
  },
  methods: {
    toggleIsAdmin() {
      this.isAdmin = !this.isAdmin;
    },
  },
};
</script>
