<template>
  <aside class="sidebar">
    <div class="sidebar__logo">
      <router-link to="/">
        <fa class="icon" icon="fa-bus-simple" />Summer 2022</router-link
      >
    </div>
    <nav class="sidebar__nav">
      <router-link
        class="sidebar__link"
        v-for="destination in destinations"
        :key="destination.slug"
        :to="{ name: 'destination', params: { slug: destination.slug } }"
        ><fa class="icon" icon="fa-location-dot" />{{
          destination.name
        }}</router-link
      >
    </nav>
  </aside>
</template>

<script>
import store from '@/store';

export default {
  data() {
    return {
      destinations: store.destinations,
    };
  },
  computed: {
    destination() {
      return store.destinations.find(
        destination => destination.slug === this.slug
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  min-height: 100vh;
  width: 16rem;
  padding: 2rem 1rem;

  .icon {
    margin-right: 0.5rem;
  }

  &__logo {
    margin-bottom: 3rem;
    font-size: 1.3rem;
    font-weight: 700;

    text-align: center;
    text-transform: uppercase;
    color: #c471f5;
  }

  &__nav {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }

  &__link {
    padding: 0.8rem 1.2rem;
    border-radius: 0.5rem;

    &:hover {
      background: #fdfbfb;
    }

    &.router-link-exact-active {
      color: #fff;
      background-image: linear-gradient(to top, #c471f5 0%, #fa71cd 100%);
    }
  }
}
</style>
