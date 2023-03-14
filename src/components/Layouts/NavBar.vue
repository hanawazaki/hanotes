<template>
  <nav
    class="navbar navbar-expand-lg navbar-light"
    style="background-color: #79addc"
  >
    <div class="container">
      <a class="navbar-brand fw-bold text-white" href="#">Ha-Notes</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link" active-class="active">
              Notes
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/stats" class="nav-link" active-class="active">
              Stats
            </RouterLink>
          </li>
        </ul>
        <div class="navbar-start">
          <label class="text-white">{{ storeAuth.user.email }}</label>
          <button
            v-if="storeAuth.user.id"
            @click="logout"
            class="btn btn-outline-primary logout-btn"
          >
            <svg
              v-if="storeAuth.user.id"
              @click="logout"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-log-out cursor-pointer"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useStoreAuth } from "../../stores/storeAuth";

const showMobileNav = ref(false);

const navbarMenuRef = ref(null);
const navbarBurgerRef = ref(null);
const storeAuth = useStoreAuth();

onClickOutside(
  navbarMenuRef,
  (event) => {
    showMobileNav.value = false;
  },
  {
    ignore: [navbarBurgerRef],
  }
);

const logout = () => {
  showMobileNav.value = false;
  storeAuth.signOutUser();
};
</script>

<style scoped>
/* @media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
} */
.nav-link {
  color: #fff !important;
  font-weight: normal;
}

.nav-link.active {
  font-weight: bold;
}

.logout-btn:hover {
  font-weight: bold;
}

/* span.navbar-toggler-icon {
  background-image: "../../assets/menu-white.svg" !important;
} */
</style>
