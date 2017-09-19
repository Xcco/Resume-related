<template>
<div id="info">
  <ol>
    <li :class="{active: currentTab === 0}">
      <Profile :profile="info.personInfo":label="[4,'个人信息','姓名','应聘职位','城市','出生日期']"/>
    </li>
    <li :class="{active: currentTab === 1}">
      <InfoTemplate :items="info.diploma" :label="{title:'学习经历',time:'时间',name:'学校',content:'专业',degree:'学位'}"/>    </li>
    <li :class="{active: currentTab === 2}">
      <InfoTemplate :items="info.company" :label="{title:'工作经历',time:'时间',name:'公司',content:'工作内容'}"/>
    </li>
    <li :class="{active: currentTab === 3}">
      <InfoTemplate :items="info.skill" :label="{title:'工作经历',name:'技能',content:'掌握程度'}"/>
    </li>
    <li :class="{active: currentTab === 4}">
      <InfoTemplate :items="info.project" :label="{title:'工作经历',time:'时间',name:'项目',content:'项目内容'}"/>
    </li>
    <li :class="{active: currentTab === 5}">
      <Profile :profile="info.contact":label="[3,'联系方式','手机','邮箱','微信']"/>
    </li>
  </ol>
</div>
</template>

<script>
import InfoTemplate from './InfoTemplate'
import Profile from './Profile'
export default {
  props: ['currentTab','info'],
  components: {
    InfoTemplate,
    Profile
  },

}
</script>
<style lang="scss">
#info {
    ol {
        position: relative;
        height: 100%;
        margin: 0;
        overflow: auto;
        li {
            display: none;
            position: relative;
            margin-bottom: 40px;
            &.active {
                display: block;
            }
        }
    }
}
</style>
