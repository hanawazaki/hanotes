<template>
  <div class="notes">
    <AddEditNote
      v-model="newNote"
      ref="addEditNoteRef"
      placeholder="Add a new note"
      label="Add a new note"
    >
      <template #buttons>
        <button
          class="btn btn-blue"
          type="button"
          @click="addNote"
          :disabled="!newNote"
        >
          Add New Note
        </button>
      </template>
    </AddEditNote>

    <progress
      v-if="!storeNotes.loading"
      class="progress is-large is-success"
      max="100"
    />
    <template v-else>
      <div class="row mx-auto w-100">
        <Note :note="note" v-for="note in storeNotes.notes" :key="note.id" />
      </div>
    </template>
  </div>

  <div
    class="fs-4 text-center text-grey font-monospace py-6"
    v-if="!storeNotes.notes.length"
  >
    No notes here yet ...
  </div>
</template>

<script setup>
import { ref } from "vue";
import Note from "@/components/Notes/Note.vue";
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { useStoreNotes } from "../stores/StoreNotes";
import { useWatchCharacters } from "../use/useWatchCharacters";

const newNote = ref("");
const addEditNoteRef = ref(null);
const storeNotes = useStoreNotes();

const addNote = () => {
  storeNotes.addNote(newNote.value);
  newNote.value = "";
  addEditNoteRef.value.focusTextarea();
};

useWatchCharacters(newNote);

// const deletedNote = (idToDelete) => {
//   notes.value = notes.value.filter((note) => {
//     return note.id !== idToDelete;
//   });
// };
</script>
