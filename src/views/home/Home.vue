<!--
 * @Author: your name
 * @Date: 2021-03-09 12:43:41
 * @LastEditTime: 2021-03-09 13:11:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /dust-light-front/src/views/home/Home.vue
-->
<template>
  <div class="wrapper">
    <StaticPart />
    <Recommend />
  </div>
  <Docker />
</template>

<script>
import StaticPart from './StaticPart'
import Recommend from './Recommend'
import Docker from './Docker'
export default {
  name: 'Home',
  components: {
    StaticPart,
    Recommend,
    Docker
  }
}
</script>

<style lang="scss">
@import '../../style/variables.scss';
@import '../../style/mixins.scss';
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  background: $wrapper-fontcolor;
  padding: 0 .18rem .3rem .18rem;
}

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
} */
</style>
