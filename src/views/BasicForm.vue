<template>
  <div>
    <h1>Formulario Basico</h1>
    <form @submit.prevent="submit">
      <BaseSelect
        v-model="category"
        :options="categories"
        label="Selecciona una categoria"
        :error="errors.category"
      />
      <BaseInput
        v-model="title"
        :error="errors.title"
        type="text"
        label="Titulo"
      />
      <BaseInput
        v-model="description"
        :error="errors.description"
        type="text"
        label="Descripción"
      />
      <BaseInput
        v-model="location"
        :error="errors.location"
        type="text"
        label="Localización"
      />
      <h3>Extras</h3>
      <div>
        <BaseCheckbox
          v-model="catering"
          :error="errors.catering"
          label="Catering"
        />
      </div>
      <div>
        <BaseCheckbox v-model="music" :error="errors.music" label="Musica" />
      </div>
      <h3>¿Se permiten mascotas?</h3>
      <div>
        <BaseRadioGroup
          v-model="pets"
          name="mascotas"
          :error="errors.pets"
          :options="petOptions"
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput";
import BaseSelect from "@/components/BaseSelect";
import BaseCheckbox from "@/components/BaseCheckbox";
import BaseRadioGroup from "@/components/BaseRadioGroup";
//import axios from "axios";
import { useField, useForm } from "vee-validate";
import { object, string, boolean, number } from "yup";
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
  methods: {
    /*enviarFormulario() {
      axios
        .post(
          "https://my-json-server.typicode.com/Skumm/formularios-vue3/events",
          this.event
        )
        .then((response) => {
          console.log("Los datos han sido enviados", response);
        })
        .catch((error) => {
          console.log("ha ocurrido un error", error);
        });
    },*/
  },
  setup() {
    const validationSchema = object({
      category: string().required(),
      title: string().required("El título es obligatorio").min(3),
      description: string().required(),
      pets: number(),
      music: boolean(),
      catering: boolean(),
    });
    const { handleSubmit, errors } = useForm({
      validationSchema,
      initialValues: {
        pets: 1,
        music: false,
        catering: false,
      },
    });
    const submit = handleSubmit((value) => {
      console.log("enviar", value);
    });
    const { value: category } = useField("category");
    const { value: title } = useField("title");
    const { value: description } = useField("description");
    const { value: location } = useField("location");
    const { value: pets } = useField("pets");
    const { value: catering } = useField("catering");
    const { value: music } = useField("music");

    return {
      category,
      title,
      description,
      location,
      pets,
      catering,
      music,
      errors,
      submit,
    };
  },
};
</script>

<style scoped></style>
