<script setup>
  import {computed, onMounted, ref} from 'vue'
  import {Book} from '@/Book'

  const books = localStorage.getItem("books") ? ref(JSON.parse(localStorage.getItem("books"))) : ref([]);
  const searchString = ref('');

  function deleteBook(index) {
    const deletionConfirmed = window.confirm('Soll das folgende Buch gelöscht werden:\n' + books.value[index].title)
    if(deletionConfirmed) {
      books.value.splice(index, 1);
      localStorage.setItem("books", JSON.stringify(books.value));
    }
  };
</script>

<template>
  <input id="searchBar" v-model="searchString">
    <img src="@/components/icons/search-icon.png" style="
      left: 34.5%;
      top: 203px;
      width: 15px;
      height: 15px;
      position:absolute;"></input>
    <table id = "bookTable">
      <thead>
        <tr>
          <th>Titel</th>
          <th>
            Autor
            <RouterLink :to="{name: 'NewBook'}" id="addBookButton" title="Buch hinzufügen">Neues Buch</RouterLink>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(book, index) in books" :key="book">
          <template v-if="book.author.toLowerCase().includes(searchString.toLowerCase()) || book.title.toLowerCase().includes(searchString.toLowerCase())">
            <td>{{ book.title }}</td>
            <td>
              {{ book.author }}
              <button @click="deleteBook(index)" class="hoverButton" style="right:20px;">
                <img src="@/components/icons/delete-button.png" 
                height="90%" 
                width="100%"
                title="Löschen"/>
              </button>
              <RouterLink :to="'/details/' + book.title + '/' + index" class="hoverButton" style="right:70px;">
                <img src="@/components/icons/edit-button.png" 
                height="90%" 
                width="100%"
                title="Details"/>
              </RouterLink>
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </template>

<style>
  #searchBar {
    background-color: white;
    border-color:darkgray;
    padding-left: 25px;
    width: 30%;
    left: 34%;
    position:absolute;
    border-radius: 20px;
    top: 200px;
  }

  #bookTable {
    font: Helvetica;
    border-collapse: collapse;
    width: 90%;
    table-layout: fixed;
    position: absolute;
    top:250px;
    left: 5%;
  }

  #bookTable th {
    background: #284dc9;
    font-size: large;
    color: white;
    text-align: left;
    padding: 10px;
  }

  #bookTable td {
    font-size: large;
    color: black;
    text-align: left;
    padding: 10px;
    border: 1px solid #ddd;
  }

  #bookTable tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  #bookTable tr:hover{
    background-color: #e0e0e0;
  }

  #addBookButton {
    height: 35px;
    width: 100px;
    float: right;
    text-align: center;
    color: #000;
    background: white;
    position: absolute;
    right: 10px;
    font-size: medium;
    font: Helvetica;
    font-weight: 400;
    border-radius: 20px;
    position: relative;
  }

  #addBookButton:hover {
    background: #f0ecec;
  }

  .hoverButton {
    height: 35px;
    width: 35px;
    float: right;
    text-align: center;
    background: white;
    position: absolute;
    font-weight:900;
    font-size: large;
    visibility: hidden;
    border-radius: 125px;
    transition: none;
    border: white;
    box-shadow: darkgray 1px 3px 2px;
  }

  #bookTable tr:hover .hoverButton {
    visibility: visible;
  }

  .hoverButton:hover {
    background-color: #f0ecec;
  }



</style>

