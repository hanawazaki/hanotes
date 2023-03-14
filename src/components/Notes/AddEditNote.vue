<template>
  <div class="card mb-5 p-4" style="background-color: #f5a3c0">
    <div class="form-floating">
      <textarea
        :value="modelValue"
        @click.prevent="expand = !expand"
        @input="$emit('update:modelValue', $event.target.value)"
        class="form-control"
        :class="{ 'is-expand': expand }"
        :placeholder="placeholder"
        id="floatingTextarea"
        ref="textareaRef"
        v-autofocus
        maxlength="100"
      ></textarea>
      <label for="floatingTextarea" class="">{{ label }}</label>
    </div>

    <!-- button -->
    <div class="d-grid gap-2 mt-3 d-md-flex justify-content-md-end">
      <slot name="buttons"></slot>
    </div>
  </div>
</template>

<script setup>
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";
import { vAutofocus } from "../../directives/vAutofocus";

const textareaRef = ref(null);
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: "success",
  },
  placeholder: {
    type: String,
    default: "Type something...",
  },
  label: {
    type: String,
  },
});

const emit = defineEmits(["update:modelValue"]);
const expand = ref(false);

const focusTextarea = () => {
  textareaRef.value.focus();
};

onClickOutside(
  textareaRef,
  () => {
    expand.value = false;
  },
  {
    ignore: [textareaRef],
  }
);

defineExpose({
  focusTextarea,
});
</script>

<style>
.is-expand {
  height: 150px !important;
}

.form-control {
  transition: height 1s !important;
}
</style>
