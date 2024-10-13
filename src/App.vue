<script setup>
  import {RouterView } from 'vue-router'
</script>

<template>
  <header id="header">
    <h1>Buchverwaltung</h1>
  </header>
  <div>
    <RouterView />
  </div>
</template>

<style>
  #header {
    width: 100%;
    padding: 20px;
    text-align: center;
    background: #284dc9;
    color: white;
    font: Helvetica;
    font-size: 30px;
    position: absolute;
    top: 0px;
    left: 0px;
  }
</style>
