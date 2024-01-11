<script setup>
import { useProjectsStore } from "../App.vue";
import StarIcon from "./StarIcon.vue";

const store = useProjectsStore();

const [project] = store.projects.filter(
  (project) => project.id === store.favouredProjectId
);

function handleCloseFavourite() {
  store.closeFavouriteProject();
}
</script>

<template>
  <div class="favourite-box h-center mt-10">
    <div>
      <div class="title-box">
        <StarIcon fill="currentColor" @click="handleCloseFavourite()" />
        <h2>
          {{ project.title }}
        </h2>
      </div>
      <img class="pd-5" v-bind:src="project.source" />
    </div>
    <div class="favourite-text-box">
      <p
        class="mt-3 first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left text-justify"
      >
        {{ project.description }}
      </p>
    </div>
  </div>
</template>
