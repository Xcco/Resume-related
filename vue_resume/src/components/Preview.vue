<template>
<div id="preview">
  <header class="header">
    <div class="left">
    </div>
    <div class="name">
      <h1>{{info.personInfo[0] || '请填写姓名'}}</h1>
      <p>{{info.personInfo[1] || '请填写应聘职位'}}</p>
      <p>{{info.personInfo[2] || '请填写城市'}} | {{info.personInfo[3] || '请填写出生年月'}}</p>
    </div>
    <div class="line">
    </div>
    <div class="right">
      <div>
        <svg class="icon">
            <use xlink:href="#icon-phone"></use>
          </svg>
        <span>{{info.contact[0] || '请填写手机号码'}}</span>
      </div>
      <div>
        <svg class="icon">
          <use xlink:href="#icon-mail"></use>
        </svg>
        <span>{{info.contact[1] || '请填写邮箱地址'}}</span>
      </div>
      <div>
        <svg class="icon">
          <use xlink:href="#icon-wechat"></use>
        </svg>
        <span>{{info.contact[2]|| '请填写微信号'}}</span>
      </div>
      </ul>
    </div>
  </header>
  <div class="main-left">
    <section>
      <h2>工作经历</h2>
      <ul>
        <li v-for="c in info.company">
          <span>{{c.time || '请输入时间'}}</span>
          <div>
            <h3>{{c.name || '请输入公司名称'}}</h3>
            <p>{{c.content || '请输入工作内容'}}</p>
          </div>
        </li>
      </ul>
    </section>
    <section>
      <h2>学业信息</h2>
      <ul>
        <li v-for="d in info.diploma">
          <span>{{d.time || '请输入时间'}}</span>
          <div>
            <h3>{{d.name|| '请输入学校名称'}}</h3>
            <span>{{d.content|| '请输入专业'}}</span> |
            <span>{{d.degree || '请输入学位'}}</span>
          </div>
        </li>
      </ul>
    </section>
    <section>
      <h2>项目经验</h2>
      <ul>
        <li v-for="p in info.project">
          <span>{{p.time|| '请输入时间'}}</span>
          <div>
            <h3>{{p.name|| '请输入项目名称'}}</h3>
            <p>{{p.content|| '请输入项目内容'}}</p>
          </div>
        </li>
      </ul>
    </section>
  </div>
  <div class="main-right">
    <section class="person">
      <h2>个人简介</h2>
      <p>{{info.personInfo[4] || '请填写简介'}}</p>
    </section>
    <section>
      <h2>掌握技能</h2>
      <ul>
        <li v-for="s in info.skill">
          <h3>{{s.name|| '请输入名称'}}</h3>
          <p>{{s.content|| '请输入掌握程度'}}</p>
        </li>
      </ul>
    </section>
  </div>





</div>
</template>

<style lang="scss">
#preview {
    position: relative;
    --main-color: #9a7c5e;
    box-sizing: border-box;
    overflow: auto;
    color: #4c3a30;
    .header {
        margin-top: 45px;
        display: flex;
        height: 120px;
        .left {
            width: 30px;
            background-color: var(--main-color);
        }
        .line {
            width: 30px;
            border-left: 4px solid var(--main-color);
        }
        .name {
            flex-grow: 1;
            h1 {
                color: var(--main-color);
                font-size: 52px;
                margin: 5px 10px 10px;
            }
            p {
                margin: 5px 10px;
                color: #aaa;
                font-size: 16px;
            }
        }
        .right {
            width: 300px;
            background-color: var(--main-color);
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            div {
                display: flex;
                align-items: center;
                padding: 10px 10px 10px 5px;
                color: #fff;
            }
        }
    }
    section {
        margin-left: 40px;
        margin-top: 50px;
        h2 {
            display: inline-block;
            font-weight: bold;
            border-bottom: 4px solid var(--main-color);
        }
        li {
            display: flex;
            margin-left: 20px;
            margin-bottom: 8px;
            span {
                width: 90px;
            }
            h3 {
                margin-top: 0;
                font-weight: bold;
            }
        }
        &.person {
            min-height: 250px;
            width: 242px;
            p {
                width: 100%;
                margin-left: 20px;
            }
        }
        &:last-of-type {
            vertical-align: bottom;
            p {
                margin-top: 3px;
                margin-left: 10px;
            }
        }
    }
}

.main-left {
    width: 464px;
    border-right: 4px solid var(--main-color);
    min-height: 620px;
}
.main-right {
    position: absolute;
    top: 165px;
    left: 468px;
    width: 292px;
}
section {
    margin-left: 40px;
    margin-top: 50px;
    h2 {
        display: inline-block;
        font-weight: bold;
        border-bottom: 4px solid var(--main-color);
    }
    li {
        display: flex;
        margin-left: 20px;
        margin-bottom: 8px;
        span {
            width: 90px;
        }
        h3 {
            margin-top: 0;
            font-weight: bold;
        }
    }
    &.person {
        min-height: 250px;
        width: 242px;
        p {
            width: 100%;
            margin-left: 20px;
        }
    }
    &:last-of-type {
        vertical-align: bottom;
        p {
            margin-top: 3px;
            margin-left: 10px;
        }
    }
}
li,
ul {
    list-style: none;
    padding: 0;
}
.icon {
    margin: 0 5px 0 10px;
    width: 1.6em;
    height: 1.6em;
    color: #fff;
    fill: currentColor;
    overflow: hidden;
    cursor: pointer;
}
</style>

<script>
export default {
  props: ['info'],
}
</script>
