<template>
  <input class="field" type="checkbox" />
  <label
    v-if="label"
    :checked="modelValue"
    @change="$emit('update:Modelvalue', $event.target.checked)"
    >{{ label }}</label
  >
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
};
</script>
