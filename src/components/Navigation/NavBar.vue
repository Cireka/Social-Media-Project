<script setup>
import {ref} from "vue";
import Login from "../Login&Register Forms/Login.vue";

const loginModal = ref(false)
const registerModal = ref(false)

const toggleRegiser = () => {
  registerModal.value = !registerModal.value
}

const toggleLogin = () => {
  console.log(loginModal.value)
  loginModal.value = !loginModal.value
}

</script>

<template>
  <nav class="h-[40px]  max-w-[1600px] m-auto">
    <div class="flex justify-between items-center mt-3">
      <div>
        <p class="text-[#DDCCAA]">Universal Media</p>
      </div>
      <div class="flex justify-between gap-[16px]">
        <button @click="toggleRegiser" class="bg-[#E31221] px-4 py-1 rounded">Sign Up</button>
        <button @click="toggleLogin" class="text-white px-4 py-1 rounded border">Log in</button>
      </div>
    </div>
    <div class="flex justify-center h-[100vh] items-center">
      <div class="w-[700px] h-[180px] flex flex-col items-center gap-8">
        <h1 class="text-[#DDCCAA] text-[62px] text-center font-[Montserrat]">Find and connect with billions of people</h1>
        <button class="bg-[#E31221] px-4 py-1 rounded w-[140px]">Get Started</button>
      </div>
    </div>
    <Login v-if="loginModal" @modalToggle="toggleLogin"/>
  </nav>
</template>

