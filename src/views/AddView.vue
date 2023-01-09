<template>
  <div>
    <HeaderComponent />
    <div class="container">
      <h1>Add new User</h1>
      <b-form>
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          class="left"
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="First Name:"
          label-for="input-2"
          class="left"
        >
          <b-form-input
            id="input-2"
            v-model="form.first_name"
            type="text"
            placeholder="Enter first name"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Last Name:"
          label-for="input-3"
          class="left"
        >
          <b-form-input
            id="input-3"
            v-model="form.last_name"
            type="text"
            placeholder="Enter last name"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Avatar:"
          label-for="input-4"
          class="left"
        >
          <b-form-input
            id="input-4"
            v-model="form.avatar"
            type="text"
            placeholder="Enter URL avatar"
            required
          ></b-form-input>
          <br />
        </b-form-group>
        <div>
          <b-button variant="success" class="m-2 t" @click="save"
            >Save</b-button
          >

          <b-button type="reset" variant="secondary" class="m-2 t" @click="exit"
            >Cancel</b-button
          >
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/Header.vue";
import { addUser } from "@/service/users";

export default {
  name: "AddView",
  data() {
    return {
      form: {
        id: null,
        email: "",
        first_name: "",
        last_name: "",
        avatar: "",
      },
    };
  },
  components: {
    HeaderComponent
  },
  methods: {
    save() {
      addUser(this.form).then((response) => {
        console.log(response.statusText);
        this.toast("Guardar", "Se guardo el usuario", "success");
          this.$router.push("/dashboard");
        })
        .catch((e) => {
          console.log(e);
          this.toast("Guardar", "No se guardo el usuario", "danger");
        });
    },
    toast(title, text, variant) {
      this.$bvToast.toast(text, {
        title: title,
        variant: variant,
        solid: true,
        autoHideDelay: 5000,
        appendToast: true,
      });
    },
    exit() {
      this.$router.push("/dashboard");
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 400px;
}
.left {
  display: inline;
  text-align: left;
}
.t {
  width: 80px;
}
</style>
