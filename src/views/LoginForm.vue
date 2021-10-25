<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="onSubmit">
      <BaseInput
        v-model="email"
        :error="emailError"
        type="email"
        label="Email"
      />
      <BaseInput
        v-model="password"
        :error="passwordError"
        type="password"
        label="Contraseña"
      />
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput";
import { useField, useForm } from "vee-validate";
export default {
  name: "LoginForm",
  components: { BaseInput },
  setup() {
    const validations = {
      email: (value) => {
        if (!value) return "Este es un campo requerido";
        const regex =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regex.test(String(value).toLowerCase())) {
          return "Introduce un email valido";
        }
        return true;
      },
      password: (value) => {
        const requerido = "Este es un campo obligatorio";
        if (value === undefined || value === null) return requerido;
        if (!String(value).length) return requerido;
        return true;
      },
    };

    useForm({
      validationSchema: validations,
    });

    const { value: email, errorMessage: emailError } = useField("email");
    const { value: password, errorMessage: passwordError } = useField("password");
    function onSubmit() {
      window.alert("Enviado¡");
    }
    return {
      onSubmit,
      email,
      emailError,
      password,
      passwordError,
    };
  },
};
</script>
