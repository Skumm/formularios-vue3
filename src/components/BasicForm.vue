<template>
  <div>
    <h1>Formulario Basico</h1>
    <form>
      <BaseSelect
        v-model="event.categories"
        :options="categories"
        label="Selecciona una categoria"
      />
      <BaseInput v-model="event.title" type="text" label="Titulo" />
      <BaseInput v-model="event.description" type="text" label="Descripción" />
      <BaseInput v-model="event.location" type="text" label="Localización" />
      <h3>Extras</h3>
      <div>
        <BaseCheckbox v-model="event.extras.catering" label="Catering" />
        <BaseCheckbox v-model="event.extras.music" label="Musica" />
      </div>
    </form>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput";
import BaseSelect from "@/components/BaseSelect";
import BaseCheckbox from "@/components/BaseCheckbox";
export default {
  name: "BasicForm",
  components: {BaseCheckbox, BaseSelect, BaseInput },
  data() {
    return {
      categories: [
        "sustainability",
        "nature",
        "animal welfare",
        "housing",
        "education",
        "food",
        "community",
      ],
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
};
</script>

<style scoped></style>
