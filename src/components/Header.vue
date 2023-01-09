<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#" class="texto">Users</b-navbar-brand>

      <b-navbar-nav class="ml-auto">
        <b-button size="sm" class="my-2 my-sm-0 tamaño" right @click="exit"
          >Salir</b-button
        >
      </b-navbar-nav>
    </b-navbar>
    <br /><br />
  </div>
</template>
<script>
export default {
  name: "HeaderComponent",
  methods: {
    exit() {
      console.log(localStorage.token);
      
      localStorage.clear();
      console.log(localStorage.token,'🤷‍♀️');
      this.$router.replace("/");
    },
  },
};
</script>
<style scoped>
.tamaño{
  width: 60px;
  margin-right: 20px;
}
.texto{
  margin-left: 20px;
  font-weight: 400;
}
</style>