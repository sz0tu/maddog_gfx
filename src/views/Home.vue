<template>
  <div class="home">
    <cd-container>
    </cd-container>
    <loading />
  </div>
</template>

<script>
// @ is an alias to /src

import CdContainer from "../components/CdContainer";
import Loading from "../components/Loading";
export default {
  name: 'Home',
  components: {Loading, CdContainer},
}
</script>

<style lang="scss">
  .home {

  }

  /* Tuned only for Chrome */
  /* Image courtesy wikipedia */
  /* Design inspired by http://ruky1024.deviantart.com/art/Plastic-CD-Case-2-sizes-194440543 */
  /*html {*/
  /*  min-height: 100%;*/
  /*  background: linear-gradient(hsla(200, 100%, 30%, 0.5),hsla(170, 100%, 30%, 0.5)), url(https://subtlepatterns.com/patterns/grey_wash_wall.png);*/
  /*}*/


</style>