<template>
  <div class="recommend">
    <div class="recommend__title">Recommended order</div>
    <div
      class="recommend__item"
      v-for="item in recommendList"
      :key="item.id"
    >
      <img
        class="recommend__item__img"
        :src="item.imgUrl"
        alt=""
      >
      <div class="recommend__content">
        <div class="recommend__content__title">{{item.title}}</div>
        <div class="recommend__content__tags">
          <span
            class="recommend__content__tag"
            v-for="(innerItem, innerIndex) in item.tags"
            :key="innerIndex"
          >{{innerItem}}</span>
        </div>
        <div class="recommend__content__highlight">{{item.desc}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  setup () {
    const recommendList = [{
      id: 1,
      imgUrl: 'https://gitee.com/sevensound/pic-cloud/raw/master/20210309011101.png',
      title: 'XXX',
      tags: ['High credit', 'High credit', 'High credit'],
      desc: 'Novice task, high pay'
    }, {
      id: 2,
      imgUrl: 'https://gitee.com/sevensound/pic-cloud/raw/master/20210309011101.png',
      title: 'XXX',
      tags: ['High credit', 'High credit', 'High credit'],
      desc: 'Novice task, high pay'
    }, {
      id: 3,
      imgUrl: 'https://gitee.com/sevensound/pic-cloud/raw/master/20210309011101.png',
      title: 'XXX',
      tags: ['High credit', 'High credit', 'High credit'],
      desc: 'Novice task, high pay'
    }, {
      id: 4,
      imgUrl: 'https://gitee.com/sevensound/pic-cloud/raw/master/20210309011101.png',
      title: 'XXX',
      tags: ['High credit', 'High credit', 'High credit'],
      desc: 'Novice task, high pay'
    }, {
      id: 5,
      imgUrl: 'https://gitee.com/sevensound/pic-cloud/raw/master/20210309011101.png',
      title: 'XXX',
      tags: ['High credit', 'High credit', 'High credit'],
      desc: 'Novice task, high pay'
    }
    ]
    return { recommendList }
  }
}
</script>

<style lang="scss">
@import '../../style/variables.scss';
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
    padding-left: .13rem;
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
</style>
