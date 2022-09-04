<template>
  <section class="banner">
    <div class="banner__img">
      <img
        :src="require(`@/assets/${destination.img}`)"
        :alt="destination.name"
      />
    </div>
    <div class="banner__content">
      <h1>
        {{ destination.name }}
      </h1>
      <p>{{ destination.description }}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: ['destination'],
};
</script>

<style lang="scss" scoped>
.banner {
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  &__img {
    flex: 1;
  }

  &__content {
    flex: 1;
  }
}
</style>
