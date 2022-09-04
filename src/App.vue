<template>
  <Sidebar />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="$route.path"></component>
    </transition>
  </router-view>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
export default {
  components: { Sidebar },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap');

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}

.main {
  min-height: 100vh;
  margin-left: 16rem;
  padding: 2rem;
  background: #fdfbfb;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  width: 100%;
  display: block;
}

h1 {
  margin-bottom: 1rem;
  font-size: 3.5rem;
  font-weight: 900;
  line-height: 1;
  letter-spacing: 2px;
}

p {
  line-height: 1.25;
  letter-spacing: 0.5px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
