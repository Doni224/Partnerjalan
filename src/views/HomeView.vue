<template>
  <div class="home">
    <NavigationApp />
    <HeaderApp />
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationApp from "@/components/NavigationApp.vue";
import HeaderApp from "@/components/HeaderApp.vue";

export default {
  name: "HomeView",
  components: {
    NavigationApp,
    HeaderApp,
  },
};
</script>
