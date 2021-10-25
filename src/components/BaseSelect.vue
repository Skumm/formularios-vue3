<template>
  <label v-if="label">{{ label }}</label>
  <select
    :value="modelValue"
    class="field"
    v-bind="{
      ...$attrs,
      onChange: ($event) => {
        $emit('update:modelValue', $event.target.value);
      },
    }"
  >
    <option
      v-for="option in options"
      :value="option"
      :key="option"
      :selected="option === modelValue"
    >
      {{ option }}
    </option>
  </select>
  <p v-if="error" :class="error ? 'error' : ''">{{ error }}</p>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    options: {
      type: Array,
      required: true,
    },
    error: {
      type: String,
      default: ""
    }
  },
};
</script>

<style scoped>
.error {
  color: red;
  font-weight: bold;
  margin-top: 0;
  border: 0;
}
</style>
