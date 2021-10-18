<template>
  <div>
    <h1>Formulario Basico</h1>
    <BasicInput v-model="event.title" type="text" label="Titulo" />
  </div>
</template>

<script>
import BasicInput from "@/components/BasicInput";
export default {
  name: "BasicForm",
  components: { BasicInput },
  data() {
    return {
      event: {
        category: "",
        title: "",
        description: "",
        location: "",
        pets: 1,
        extras: {
          catering: false,
          music: false,
        },
      },
    };
  },
  actions() {},
};
</script>

<style scoped></style>
