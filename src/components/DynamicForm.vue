<script setup>
import Button from "./Button.vue";

import { Form, Field, ErrorMessage } from "vee-validate";

const emit = defineEmits(["handler"]);

const props = defineProps({
  isEditorMode: {
    type: Boolean,
    required: true,
  },
  schema: {
    type: Object,
    required: true,
  },
});

function onSubmit(values, { resetForm }) {
  resetForm();
  emit("handler", values);
}

function validateNotEmpty(value) {
  if (!value) return "Required field";
  else return true;
}
</script>

<template>
  <Form @submit="onSubmit" class="mt-10">
    <div v-for="field in schema.fields" :key="field.name" class="mb-5 form-row">
      <label :for="field.name" class="font-bold">{{ field.label }}:</label>
      <Field
        v-if="isEditorMode"
        :rules="validateNotEmpty"
        :as="field.as"
        :id="field.name"
        :name="field.name"
      />
      <Field
        v-else
        :rules="validateNotEmpty"
        :as="field.as"
        :id="field.name"
        :name="field.name"
        :placeholder="field.placeholder"
      />
      <ErrorMessage :name="field.name" class="italic text-red-500" />
    </div>
    <Button class="btn-neutral btn-sm mt-5">SUBMIT</Button>
  </Form>
</template>
