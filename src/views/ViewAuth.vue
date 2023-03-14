<template>
  <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
      <button
        class="nav-link active"
        @click.prevent="register = false"
        id="login-tab"
        data-bs-toggle="tab"
        data-bs-target="#login"
        type="button"
        role="tab"
        aria-controls="login"
        aria-selected="true"
      >
        Login
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        @click.prevent="register = true"
        class="nav-link"
        id="register-tab"
        data-bs-toggle="tab"
        data-bs-target="#register"
        type="button"
        role="tab"
        aria-controls="register"
        aria-selected="false"
      >
        Register
      </button>
    </li>
  </ul>
  <!-- tab content -->
  <div class="tab-content" id="myTabContent">
    <div
      class="tab-pane fade show active"
      id="login"
      role="tabpanel"
      aria-labelledby="login-tab"
    >
      <!-- login -->
      <div
        class="card mx-auto mt-4 text-white"
        style="width: 25rem; background-color: #f5a3c0"
      >
        <div class="card-body">
          <h5 class="card-title">{{ formTitle }}</h5>
          <form @submit.prevent="onSubmit">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Email address</label
              >
              <input
                v-model="credentials.email"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Password</label
              >
              <input
                v-model="credentials.password"
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" class="btn btn-blue">
              {{ formTitle }}
            </button>
          </form>
        </div>
      </div>
      <!-- end login -->
    </div>
    <div
      class="tab-pane fade"
      id="register"
      role="tabpanel"
      aria-labelledby="register-tab"
    >
      <!-- register -->
      <div
        class="card mx-auto mt-4 text-white"
        style="width: 25rem; background-color: #79addc"
      >
        <div class="card-body">
          <h5 class="card-title">{{ formTitle }}</h5>
          <form @submit.prevent="onSubmit">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Email address</label
              >
              <input
                v-model="credentials.email"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Password</label
              >
              <input
                v-model="credentials.password"
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" class="btn btn-pink">
              {{ formTitle }}
            </button>
          </form>
        </div>
      </div>
      <!-- end register -->
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive, onMounted } from "vue";
import { useStoreAuth } from "@/stores/storeAuth";

const register = ref(false);
const storeAuth = useStoreAuth();

const formTitle = computed(() => {
  return register.value ? "Register" : "Login";
});

const onSubmit = () => {
  if (!credentials.email || !credentials.password) {
    alert("please enter an email and password");
  } else {
    if (register.value == true) {
      storeAuth.registerUser(credentials);
    } else {
      storeAuth.signInUser(credentials);
    }
  }
};

const credentials = reactive({
  email: "",
  password: "",
});
</script>

<style>
.auth-form {
  max-width: 400px;
  margin: 0 auto;
}
</style>
