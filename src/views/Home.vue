<template>
  <div class="home main">
    <div class="home__wrapper">
      <img :src="require(`@/assets/ljoret_1.jpg`)" alt="Image" />
      <div class="home__gradiant"></div>
      <div class="home__title">
        <span>Summer 2022</span> <br />
        visit beautiful destinations for fantastic experience
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  &__wrapper {
    position: relative;
    width: 100%;
    height: calc(100vh - 4rem);
    overflow: hidden;

    display: grid;
    place-content: center;

    img {
      position: absolute;
    }
  }

  &__gradiant {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(49, 47, 51, 0.3);
  }

  &__title {
    font-size: 1.6rem;
    text-align: center;
    color: #ffffff;
    z-index: 1;

    span {
      font-size: 5rem;
      font-weight: 900;
      letter-spacing: 2px;
      color: #c471f5;
    }
  }
}
</style>
