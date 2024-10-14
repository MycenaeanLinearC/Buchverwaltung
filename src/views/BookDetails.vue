<script setup>
    import { RouterLink } from 'vue-router'
    import { ref, watch } from 'vue'
    import { useRoute } from 'vue-router'
    import { EmptyBook } from '@/Book'

    const route = useRoute()

    const selectedBook = ref(new EmptyBook());
    const editActive = ref(false);

    watch(() => route.meta.mode, updateForm, {immediate: true})

    function updateForm() {
        if(route.meta.mode == "new") {
            selectedBook.value = new EmptyBook();
            editActive.value = true;
        }
        else if(route.meta.mode == "existing") {
            let books = JSON.parse(localStorage.getItem("books"));
            selectedBook.value = books[route.params.id];
            editActive.value = false;
        }
    }

    function saveData() {
        let books = [];

        if(selectedBook.value.title == "") return;

        if(localStorage.getItem("books")) {

            books = JSON.parse(localStorage.getItem("books"));

            if(route.meta.mode == "new") {
                books.push(selectedBook.value);
                localStorage.setItem("books", JSON.stringify(books));
            }

            if(route.meta.mode == "existing"){
                books[route.params.id] = selectedBook.value;
                localStorage.setItem("books", JSON.stringify(books));
            }
        }
        else {
            books.push(selectedBook.value);
            localStorage.setItem("books", JSON.stringify(books));   
        }
    };

    function toggleEdit() {
        editActive.value = !editActive.value;
    }
</script>

<template>
    <table class="details">
        <tbody>
            <tr>
                <td>
                    <label class="bookDetailsLabel">Titel:</label>
                </td>
                <td style="width: 80%; left: 10%">
                    <textarea v-if="editActive"
                        spellcheck="false"
                        rows="1"
                        class="bookDetailsInput"
                        v-model="selectedBook.title">
                    </textarea>
                    <template v-else>{{ selectedBook.title }}</template>
                </td>
            </tr>
            <tr>
                <td>
                    <label class="bookDetailsLabel">Autor:</label>
                </td>
                <td>
                    <textarea v-if="editActive"
                        spellcheck="false"
                        rows="1"
                        class="bookDetailsInput"
                        v-model="selectedBook.author">
                    </textarea>
                    <template v-else>{{ selectedBook.author }}</template>
                </td>
            </tr>
            <tr>
                <td>
                    <label class="bookDetailsLabel">Erscheinungsjahr:</label>
                </td>
                <td>
                    <textarea v-if="editActive"
                        spellcheck="false"
                        rows="1"
                        class="bookDetailsInput"
                        v-model="selectedBook.year">
                    </textarea>
                    <template v-else>{{ selectedBook.year }}</template>
                </td>
            </tr>
            <tr>
                <td>
                    <label class="bookDetailsLabel">Beschreibung:</label>
                </td>
                <td>
                    <textarea v-if="editActive"
                        class="bookDetailsInput" 
                        rows="20" 
                        v-model="selectedBook.description"
                        style="resize: none;">
                    </textarea>
                    <template v-else>{{ selectedBook.description }}</template>
                </td>
            </tr>
        </tbody>
    </table>
    <RouterLink v-if="editActive"
        :to="{name: 'BookTable'}" 
        @click="saveData" 
        class="handleChangesButton"
        style="left: 65%; top: 80%;">
            <template v-if="route.meta.mode == 'existing'">
                Änderungen Speichern
            </template>
            <template v-else>
                Speichern
            </template>
    </RouterLink>
    <button v-else
        class="handleChangesButton"
        @click="toggleEdit"
        style="left: 65%; top: 80%;">
            Editieren
    </button>

    <button v-if="editActive && route.meta.mode == 'existing'"
        class="handleChangesButton"
        @click="toggleEdit"
        style="left: 20%; top: 80%;">
            Abbrechen
    </button>
    <RouterLink v-else
        :to="{name: 'BookTable'}" 
        class="handleChangesButton"
        style="left: 20%; top: 80%;">
            <template v-if="route.meta.mode == 'existing'">
                Zurück
            </template>
            <template v-else>
                Abbrechen
            </template>
    </RouterLink>
</template>

<style>
    .details {
        width: 90%;
        font: Helvetica;
        position: absolute;
        top:20%;
        left:5%;
        border-collapse: collapse;
        table-layout: fixed;
    }

    .details td {
        border: 1px solid #ddd;
    }

    .details td:nth-child(odd) {
        background-color: #f2f2f2;
    }

    .handleChangesButton {
        height: 35px;
        width: 200px;
        color: #000;
        float: right;
        text-align: center;
        background: #c7c7c7;
        position: absolute;
        font-weight: normal;
        font-size: medium;
        font: Helvetica;
        font-style: normal;
        border-radius: 20px;
        border: none;
        font-optical-sizing: no;
    }

    .handleChangesButton:hover {
        color: #000;
        background: #afafaf;
    }

    .bookDetailsInput {
        border-radius: 5px;
        margin: 10px;
        width: 95%;
        padding-left: 10px;
        padding-right: 10px; 
        border-color: darkgray;
        resize: none;
    }

    .bookDetailsLabel {
        text-align: left;
        padding-right: 10px;
        padding-left: 5px;
    }
</style>
