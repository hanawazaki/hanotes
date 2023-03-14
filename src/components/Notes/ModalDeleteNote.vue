<template>
  <!--  -->

  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modalEle"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Delete note?</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="closeModal"
          ></button>
        </div>
        <div class="modal-body">Are you sure to delete note ?</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="closeModal"
          >
            Close
          </button>
          <button
            @click="storeNotes.deleteNote(noteId)"
            type="button"
            class="btn btn-danger"
            data-bs-dismiss="modal"
          >
            Delete
          </button>
          <!-- <button
            @click="storeNotes.deleteNote(noteId)"
            type="button"
            class="btn btn-danger"
            data-bs-dismiss="modal"
          >
            Delete
          </button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useStoreNotes } from "../../stores/StoreNotes";
import { Modal } from "bootstrap";

const storeNotes = useStoreNotes();
let modalEle = ref(null);
let thisModalObj = null;

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  noteId: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const closeModal = () => {
  emit("update:modelValue", false);
};

const deletenote = (noteId) => {
  console.log("noteId", noteId);
};

const ModalCardRef = ref(null);

onClickOutside(ModalCardRef, closeModal);

const handleKeyboard = (e) => {
  if (e.key === "Escape") closeModal();
};

onMounted(() => {
  document.addEventListener("keyup", handleKeyboard);
  thisModalObj = new Modal(modalEle.value);
});

function _show() {
  thisModalObj.show();
}
defineExpose({ show: _show });

onUnmounted(() => {
  document.removeEventListener("keyup", handleKeyboard);
});
</script>
