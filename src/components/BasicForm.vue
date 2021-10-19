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
      </div>
      <div>
        <BaseCheckbox v-model="event.extras.music" label="Musica" />
      </div>
      <h3>¿Se permiten mascotas?</h3>
      <div>
        <BaseRadioGroup
          v-model="event.pets"
          name="mascotas"
          :options="petOptions"
        />
      </div>
    </form>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput";
import BaseSelect from "@/components/BaseSelect";
import BaseCheckbox from "@/components/BaseCheckbox";
import BaseRadioGroup from "@/components/BaseRadioGroup";
export default {
  name: "BasicForm",
  components: {
    BaseRadioGroup,
    BaseCheckbox,
    BaseSelect,
    BaseInput,
  },
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
      petOptions: [
        { label: "Yes", value: 1 },
        { label: "No", value: 0 },
      ],
    };
  },
};
</script>

<style scoped></style>
