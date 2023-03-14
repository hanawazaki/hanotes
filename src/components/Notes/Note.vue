<template>
  <div class="col-md-4">
    <div class="card mb-4 w-100">
      <div class="card-body">
        {{ note.content }}
      </div>
      <div class="mt-4 px-3 text-black-50 d-flex justify-content-between">
        <small>{{ dateFormated }}</small>
        <small>{{ characterLength }}</small>
      </div>
      <div class="row mx-2 py-2 border-top text-center">
        <!-- <div class="col border-end">
          <a href="#" class="card-footer-item" @click.prevent="showModal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2e75b2"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-monitor"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
          </a>
        </div> -->
        <div class="col border-end">
          <router-link :to="`/editNote/${note.id}`" class="card-footer-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2e75b2"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-edit"
            >
              <path
                d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
              ></path>
              <path
                d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
              ></path>
            </svg>
          </router-link>
        </div>
        <div class="col border-start">
          <a href="#" class="card-footer-item" @click.prevent="showModal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2e75b2"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-trash-2"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path
                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
              ></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </a>
        </div>
      </div>
      <ModalDeleteNote
        ref="thisModal"
        v-model="modals.deleteNote"
        :noteId="note.id"
      />
      <!-- <ModalDeleteNote
        v-if="modals.deleteNote === true"
        v-model="modals.deleteNote"
        :noteId="note.id"
      /> -->
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import { useStoreNotes } from "@/stores/StoreNotes";
import ModalDeleteNote from "./ModalDeleteNote.vue";
import { useNow, useDateFormat } from "@vueuse/core";

const storeNotes = useStoreNotes();
let thisModal = ref(null);

function showModal() {
  thisModal.value.show();
}

const dateFormated = computed(() => {
  let date = new Date(parseInt(props.note.date));

  let formattedDate = useDateFormat(date, "DD MMM");

  return "edited " + formattedDate.value;
});

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

// const emit = defineEmits(["deleteClicked"]);

const characterLength = computed(() => {
  let length = props.note.content.length;
  let desc = length > 1 ? "chars" : "char";

  return length + " " + desc;
});

const modals = reactive({
  deleteNote: false,
});

// const handleDeleteClicked = () => {
//   emit("deleteClicked", props.note.id);
// };
</script>

<style></style>
