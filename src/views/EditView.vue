<template>
  <div>
    <HeaderComponent />

    <div class="container">
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
          <b-button variant="success" class="m-2 t" @click="edit"
            >Edit</b-button
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
import { editUser, getOnlyUser } from "@/service/users";

export default {
  name: "EditView",
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
  mounted() {
    this.form.id = this.$route.params.id;
    this.loadUsers();
  },
  methods: {
    loadUsers() {
      getOnlyUser(this.form.id).then((response) => {
        console.log(response);
        this.form.email = response.data.email;
        this.form.first_name = response.data.first_name;
        this.form.last_name = response.data.last_name;
        this.form.avatar = response.data.avatar;
        console.log(this.form);
      });
    },
    edit() {
      editUser(this.form)
        .then((response) => {
          console.log(response);
          this.toast("Modificar", "Se modifico el usuario", "success");
          this.$router.push("/dashboard");
        })
        .catch((e) => {
          console.log(e);
          this.toast("Modificar", "No se modificó el usuario", "danger");
        });
    },
    exit() {
      this.$router.push("/dashboard");
    },
    toast(title, text, variant) {
      this.$bvToast.toast(text, {
        title: title,
        variant: variant,
        solid: true,
        autoHideDelay: 5000,
        appendToast: true
      });
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
