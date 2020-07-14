<template>
  <div id="app">
    <transition name="page" mode="out-in">
    <router-view></router-view>
      <Main />
    </transition>


  </div>
</template>

<style lang="scss">
  #app {
    display: flex;
    justify-content: center;

    height: 100vh;
    width: 100vw;
  }
  .page-enter-active, .page-leave-active {
    transition: opacity 1s, transform 1s;
  }
  .page-enter, .page-leave-to {
    opacity: 0;
    transform: translateX(-30%);
  }

</style>
<script>
  import Main from "./views/Main";
  export default {
    components: {Main}
  }
</script>