<template>
  <div class="main">
    <Banner :destination="destination" />
    <div class="images">
      <div
        class="image"
        v-for="img in destination.images"
        :key="img.src"
        :class="{ horizontal: img.orientation === 'horizontal' }"
      >
        <img :src="require(`@/assets/${img.src}`)" alt="image" />
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import store from '@/store';

export default {
  components: { Banner },
  props: {
    slug: {
      type: String,
      required: true,
    },
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
.images {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.image {
  width: calc(25% - 0.75rem);

  img {
    height: 100%;
  }
}

.horizontal {
  width: calc(50% - 0.5rem);
}
</style>
