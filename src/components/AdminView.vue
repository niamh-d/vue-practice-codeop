<template>
  <div class="h-center">
    <h2>Add new project</h2>
    <Form />
  </div>
</template>

<script>
import Form from "./Form.vue";

export default {
  name: "AdminView",
  components: {
    Form,
  },
};
</script>
