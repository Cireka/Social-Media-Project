<script setup>


const emit = defineEmits(['modalToggle'])
const toggle = () => {
  emit("modalToggle")
}

</script>

<template>
  <div @click="toggle" style="background-color: rgba(0, 0, 0, 0.4)" class="absolute left-0 top-0 w-[100vw] h-[100vh] bg-black z-10">
  </div>
  <div
      class=" py-[32px] px-[130px] w-[600px] h-[500px] absolute left-0 top-0 z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#222030]">
    <div class="flex flex-col gap-3">
      <h2 class="text-center text-[32px]">Login to your profile</h2>
      <h2 class="text-center text-[16px] text-[#6C757D]">Please login using your details</h2>
    </div>
    <form class="flex flex-col gap-3">
      <div class="flex flex-col gap-[2.8px]">
        <label for="email">Email</label>
        <input class="indent-2 text-black rounded outline-none h-[38px]" type="email" placeholder="Enter your email"
               name="email"/>
      </div>
      <div class="flex flex-col gap-[2.8px]">
        <label for="password">Password</label>
        <input class="indent-2 text-black rounded outline-none h-[38px]" type="password" placeholder="Password"
               name="password"/>
      </div>
      <div class="flex justify-between">
        <div class="flex gap-3">
          <input name="remember" type="checkbox"/>
          <label for="remember">Remember me</label>
        </div>
        <a href="/" class="underline text-[#0D6EFD]">Password reset</a>
      </div>
      <button class="bg-[#E31221] h-[38px] rounded">Sign in</button>
      <button class=" border h-[38px] rounded">Sign in with Google</button>
      <p class="text-center pt-2 text-[#6C757D]">Dont have an account? <a href="/" class="underline text-[#0D6EFD]">Sign up</a></p>
    </form>
  </div>


</template>
