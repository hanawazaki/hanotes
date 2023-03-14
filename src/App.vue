<script setup>
import { onMounted } from "vue";
import NavBar from "@/components/Layouts/NavBar.vue";
import { useStoreAuth } from "@/stores/StoreAuth";

const storeAuth = useStoreAuth();

// mounted
onMounted(() => {
  storeAuth.init();
});
</script>

<template>
  <NavBar />
  <div class="container py-4 px-2">
    <routerView />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&display=swap");
* {
  font-family: "Nunito", sans-serif;
}

body {
  background-color: #55d6be;
}

.btn-primary {
  background-color: #2e75b2 !important;
  --bs-btn-border-color: none !important;
}

.btn-outline-primary {
  background-color: none !important;
  --bs-btn-border-color: none !important;
  --bs-btn-hover-bg: none !important;
  --bs-btn-active-bg: none !important;
}

.btn-pink {
  background-color: #f5a3c0 !important;
  color: white !important;
}

.btn-blue {
  background-color: #79addc !important;
  color: white !important;
}

.btn-blue:hover {
  background-color: #3c89cd !important;
}

.btn-pink:hover {
  background-color: #ed5a8d !important;
  color: white !important;
}
</style>
