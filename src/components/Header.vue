<template>
  <header class="flex p-5">
    <h1>Niamh's Project Vue App</h1>
    <div class="flex flex-end">
      <div class="flex mr-10">
        <span class="font-bold text-lg">{{
          isAdmin ? "Admin View" : "User View"
        }}</span>
        <pencil v-if="isAdmin" class="ml-4" />
        <userIcon v-else class="ml-4" />
      </div>
      <Button v-if="isAdmin" class="btn-info" @click="toggleIsAdmin"
        >Switch to USER</Button
      >
      <Button v-else class="btn-primary" @click="toggleIsAdmin"
        >Switch to ADMIN</Button
      >
      <themeSelector />
    </div>
  </header>
</template>

<script>
import PencilIcon from "./PencilIcon.vue";
import Button from "./Button.vue";
import UserIcon from "./UserIcon.vue";
import ThemeSelector from "./ThemeSelector.vue";
export default {
  name: "Header",
  props: ["isAdmin"],
  data() {
    return {};
  },
  components: {
    pencil: PencilIcon,
    userIcon: UserIcon,
    Button,
    themeSelector: ThemeSelector,
  },
  methods: {
    toggleIsAdmin() {
      this.$emit("toggle-admin");
    },
  },
};
</script>
