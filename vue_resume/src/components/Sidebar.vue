<template>
<div id="sidebar">
  <div class="title clearfix">
    <span><i>R</i>esume</span>
    <span class="maker"><i>M</i>aker</span>
  </div>
  <ol>
    <li v-for="i in [0,1,2,3,4,5]" :class="{active: currentTab === i}" @click="changeTab(i)">
      <hr class="hr">
      <svg class="icon">
        <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
      </svg>
      <span class="detail">{{detail[i]}}</span>

    </li>
  </ol>

</div>
</template>

<script>
export default {
  props: ['resume'],
  data() {
    return {
      currentTab: 0,
      icons: ['id', 'study', 'work', 'skill', 'project', 'contact'],
      detail: ['个人信息', '学业信息', '工作经历', '掌握技能', '项目经验', '联系方式']
    }
  },
  methods: {
    changeTab(i) {
      this.currentTab = i
      this.$emit("clickTab", i)
    }
  }
}
</script>

<style lang="scss">
ol {
    width: 100%;
    list-style: none;
    padding: 0;
}
li {
    margin: 0 auto;
}
.clearfix:after {
    content: '';
    display: block;
    clear: both;
}
#sidebar {
    min-height: 100px;
    background-color: #222831;
    .title {
        color: #fafafa;
        margin: 20px 10px;
        font-size: 36px;
        font-family: Optima,Arial,"Times New Roman";
        i {
            color: #ffbc2c;
        }
        .maker {
            float: right;
        }
    }
    ol > li {
        position: relative;
        padding: 16px 0;
        height: 60px;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        .detail {
            cursor: pointer;
            color: #fff;
            margin-left: 15px;
            font-size: 18px;
        }
        .hr {
            position: absolute;
            width: 90%;
            height: 0.5px;
            top: 0;
            margin: 0;
            border-color: rgba(35,25,66,0.2);
        }
        .icon {
            width: 2.2em;
            height: 2.2em;
            color: #fff;
            fill: currentColor;
            overflow: hidden;
            cursor: pointer;
        }
        &.active {
            background: #393e46;
            box-shadow: 0 3px 2px 1px rgba(0, 0, 0, 0.2);
            .icon {
                color: #ffbc2c;
                width: 2.8em;
                height: 2.8em;
            }
        }
    }
}
</style>
