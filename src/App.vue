<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/publish/task">Publish Task</router-link>
  </div>
  <router-view/> -->
  <div class="wrapper">
    <div class="header">
      <span class="iconfont header__icon">&#xe646;</span>
      Welcome to Dust Light App
      <span class="iconfont header__notice">&#xe609;</span>
    </div>
    <div class="search">
      <span class="iconfont header__notice">&#xe610;</span>
      <span class="search__text">Order Tracking</span>
    </div>
    <div class="banner">
      <img
        class="banner__img"
        src="https://gitee.com/sevensound/pic-cloud/raw/master/banner.png"
      />
    </div>
    <div class="icons">
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="https://gitee.com/sevensound/pic-cloud/raw/master/design.png"
          alt=""
        >
        <p class="icons__item__desc">design</p>
      </div>
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="https://gitee.com/sevensound/pic-cloud/raw/master/design.png"
          alt=""
        >
        <p class="icons__item__desc">design</p>
      </div>
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="https://gitee.com/sevensound/pic-cloud/raw/master/design.png"
          alt=""
        >
        <p class="icons__item__desc">design</p>
      </div>
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="https://gitee.com/sevensound/pic-cloud/raw/master/design.png"
          alt=""
        >
        <p class="icons__item__desc">design</p>
      </div>
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="https://gitee.com/sevensound/pic-cloud/raw/master/design.png"
          alt=""
        >
        <p class="icons__item__desc">design</p>
      </div>
    </div>
    <div class="gap"></div>
    <div class="recommend">
      <div class="recommend__title">Recommended order</div>
      <div class="recommend__item">
        <img
          class="recommend__item__img"
          src="https://gitee.com/sevensound/pic-cloud/raw/master/20210309011101.png"
          alt=""
        >
        <div class="recommend__content">
          <div class="recommend__content__title">XXX</div>
          <div class="recommend__content__tags">
            <span class="recommend__content__tag">High credit </span>
            <span class="recommend__content__tag">High credit </span>
            <span class="recommend__content__tag">High credit </span>
          </div>
          <div class="recommend__content__highlight">Novice task, high pay</div>
        </div>
      </div>
      <div class="recommend__item">
        <img
          class="recommend__item__img"
          src="https://gitee.com/sevensound/pic-cloud/raw/master/20210309011101.png"
          alt=""
        >
        <div class="recommend__content">
          <div class="recommend__content__title">XXX</div>
          <div class="recommend__content__tags">
            <span class="recommend__content__tag">High credit </span>
            <span class="recommend__content__tag">High credit </span>
            <span class="recommend__content__tag">High credit </span>
          </div>
          <div class="recommend__content__highlight">Novice task, high pay</div>
        </div>
      </div>
      <div class="recommend__item">
        <img
          class="recommend__item__img"
          src="https://gitee.com/sevensound/pic-cloud/raw/master/20210309011101.png"
          alt=""
        >
        <div class="recommend__content">
          <div class="recommend__content__title">XXX</div>
          <div class="recommend__content__tags">
            <span class="recommend__content__tag">High credit </span>
            <span class="recommend__content__tag">High credit </span>
            <span class="recommend__content__tag">High credit </span>
          </div>
          <div class="recommend__content__highlight">Novice task, high pay</div>
        </div>
      </div>
    </div>
  </div>

  <div class="docker">
    <span class="docker__item docker__item--active">
      <div class="iconfont">&#xe6ac;</div>
      <div class="docker__title">Home</div>
    </span>
    <span class="docker__item">
      <div class="iconfont">&#xe685;</div>
      <div class="docker__title">Publish</div>
    </span>
    <span class="docker__item">
      <div class="iconfont">&#xe6e9;</div>
      <div class="docker__title">Contact</div>
    </span>
    <span class="docker__item">
      <div class="iconfont">&#xe658;</div>
      <div class="docker__title">My</div>
    </span>
  </div>
</template>

<style lang="scss">
@import './style/variables.scss';
@import './style/mixins.scss';
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

.header {
  position: relative;
  padding: .16rem 0;
  line-height: .22rem;
  font-size: .21rem;
  @include ellipsis;
  .header__icon {
    position: relative;
    margin-right: .24rem;
    right: .05rem;
    top: .01rem;
    margin: .08rem;
    font-size: .2rem;
  }
  .header__notice {
    position: relative;
    left: .05rem;
    top: .01rem;
    margin: .08rem;
    font-size: .2rem;
  }
  color: $content-fontcolor;
}
.search {
  line-height: .32rem;
  background: #f5f5f5;
  color: #B7B7B7;
  border-radius: .16rem;
  margin-bottom: .12rem;
  .iconfont {
    padding: 0 .12rem 0 .12rem;
    display: inline-block;
    font-size: .25rem;
  }
  &__text {
    display: inline-block;
    font-size: .14rem;
    position: relative;
    bottom: .04rem;
  }
}
.banner {
  height: 0%;
  overflow: hidden;
  padding-bottom: 28.2%;
  &__img {
    width: 100%;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: .16rem;
  &__item {
    width: 20%;
    &__img {
      position: relative;
      left: .12rem;
      display: block;
      width: .4rem;
      height: .4rem;
      margin: 0 aoto;
    }
    &__desc {
      margin: .06rem 0 .06rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}
.gap {
  margin: 0 -.18rem;
  height: .1rem;
  background: $content-bgcolor;
}
.recommend {
  &__title {
    margin: .16rem 0 .04rem 0;
    font-size: .18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }
  &__item {
    display: flex;
    padding-top: .12rem;
    &__img {
      margin-left: .16rem;
      width: .56rem;
      height: .56rem;
    }
  }
  &__content {
    flex: 1;
    padding-bottom: .12rem;
    border-bottom: 1px solid $content-bgcolor;
    &__title {
      line-height: .22rem;
      font-size: .16rem;
      color: $content-fontcolor;
    }
    &__tags {
      line-height: .18rem;
      font-size: .13rem;
      margin-top: .08rem;
      color: $content-fontcolor;
    }
    &__tag {
      margin-right: .16rem;
    }
    &__highlight {
      color: red;
    }
  }
}
.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 .18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .49rem;
  border-top: .01rem solid $content-bgcolor;
  color: $content-fontcolor;
  &__item {
    flex: 1;
    text-align: center;
    .iconfont {
      margin: .01rem 0 .02rem 0;
      font-size: .22rem;
    }
    &--active {
      color: #1FA4FC;
    }
  }
  &__title {
    font-size: 20px;
    margin-top: -.09rem;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }

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
