<script setup>
import PencilIcon from "./PencilIcon.vue";
import Button from "./Button.vue";
import UserIcon from "./UserIcon.vue";
import ThemeSelector from "./ThemeSelector.vue";

import { useProjectsStore } from "../App.vue";

const store = useProjectsStore();

function toggleIsAdmin() {
  store.toggleIsAdminView();
}
</script>

<template>
  <header class="flex p-5">
    <h1>Niamh's Project Vue App</h1>
    <div class="flex flex-end">
      <div class="flex mr-10">
        <span class="font-bold text-lg">{{
          store.isAdminView ? "Admin View" : "User View"
        }}</span>
        <PencilIcon v-if="store.isAdminView" class="ml-4" fill="none" />
        <UserIcon v-else class="ml-4" />
      </div>
      <Button v-if="store.isAdminView" class="btn-info" @click="toggleIsAdmin"
        >Switch to USER</Button
      >
      <Button v-else class="btn-primary" @click="toggleIsAdmin"
        >Switch to ADMIN</Button
      >
      <ThemeSelector />
    </div>
  </header>
</template>
