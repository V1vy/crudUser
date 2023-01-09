<template>
  <div>
    <HeaderComponent />
    <div class="container">
      <div class="d-flex justify-content-end mb-3">
        <b-button variant="success" @click="newUser"
          >New User
          <b-icon icon="person-plus" />
        </b-button>
      </div>

      <b-table striped hover :items="users" :fields="fields">
        <template #cell(avatar)="data">
          <b-img :src="data.item.avatar" rounded fluid width="60px" />
        </template>
        <template #cell(actions)="data">
          <b-button
            size="sm"
            variant="warning"
            @click="loadEditUser(data.item.id)"
          >
            <b-icon icon="pencil-square" />
          </b-button>
          <b-button
            size="sm"
            class="m-2"
            variant="danger"
            @click="deleteRecord(data)"
          >
            <b-icon icon="trash" />
          </b-button>
        </template>
      </b-table>
      <br /><br /><br />
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/Header.vue";
import { getUsers, deleteUser } from "@/service/users.js";

export default {
  name: "DasboardView",
  components: {
    HeaderComponent
  },
  data() {
    return {
      users: [],
      fields: [
        { key: "id", label: "Id" },
        { key: "first_name", label: "Firts Name" },
        { key: "last_name", label: "Last Name" },
        { key: "email", label: "Email" },
        { key: "avatar", label: "Avatar" },
        { key: "actions", label: "Actions" },
      ],
    };
  },
  mounted() {
    this.loadUsers();
  },
  methods: {
    loadUsers() {
      getUsers().then((response) => {
        this.users = response.data;
      });
    },
    newUser() {
      this.$router.push("/add");
    },
    loadEditUser(id) {
      console.log(id);
      this.$router.push(`/edit/${id}`);
    },
    deleteRecord(data) {
      this.$bvModal
        .msgBoxConfirm("Are you sure wants to delete?", {
          title: "Confirmation",
          size: "sm",
          buttonSize: "sm",
          okVariant: "success",
          headerClass: "p-2 border-bottom-0",
          footerClass: "p-2 border-top-0",
          centered: true,
        })
        .then((value) => {
          if (value) {
            deleteUser(data.item.id)
              .then((response) => {
                console.log(response);
                this.users.splice(data.index, 1);
                this.toast("Eliminar", "Se elimino el usuario", "success");
              })
              .catch((e) => {
                console.log(e);
                this.toast("Eliminar", "No se elimino el usuario", "danger");
              });
          }
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
  },
};
</script>
<style scoped></style>
