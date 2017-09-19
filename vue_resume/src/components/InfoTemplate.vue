<template>
<div id="infoTemplate">
  <h2>{{label.title}}</h2>
  <div class="infoTemplate" v-for="(c,index) in items">
    <div class="delete" @click="removeItem(index)" :class="{active:ifOnly}">
      x
    </div>
    <el-form ref="form">
      <el-form-item :label="label.time" v-if="label.time">
        <el-input v-model="c.time" :placeholder="placeholderTime"></el-input>
      </el-form-item>
      <el-form-item :label="label.name">
        <el-input v-model="c.name" :placeholder="placeholderName"></el-input>
      </el-form-item>
      <el-form-item :label="label.content">
        <el-input v-model="c.content" :placeholder="placeholderContent"></el-input>
      </el-form-item>
      <el-form-item :label="label.degree" v-if="label.degree">
        <el-input v-model="c.degree" :placeholder="placeholderDegree"></el-input>
      </el-form-item>
      <el-form-item class="button">
        <el-button @click="clearContnt(index)">清空</el-button>
        <el-button @click="createNew">新建</el-button>
      </el-form-item>
    </el-form>
    <hr class="line" :class="{active:ifOnly}">
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props: ['items', 'label'],
  methods: {
    createNew() {
      let newItem = {}
      for (let key in this.items[0]) {
        newItem[key] = ""
      }
      this.items.push(newItem)
    },
    clearContnt(index) {
      for (let key in this.items[index]) {
        this.items[index][key] = ""
      }
    },
    removeItem(index) {
      this.items.splice(index, 1)
    }
  },
  computed: {
    ifOnly() {
      return this.items.length === 1 ? false : true
    },
    placeholderTime() {
      return `请输入${this.label.time}`
    },
    placeholderContent() {
      return `请输入${this.label.content}`
    },
    placeholderName() {
      return `请输入${this.label.name}名称`
    },
    placeholderDegree() {
      return `请输入${this.label.degree}`
    }
  }
}
</script>
<style lang="scss">
#infoTemplate {
    border: 1px solid #9a7c5e;
    > h2 {
        margin-top: 15px;
        font-size: 30px;
        color: #fafafa;
        padding: 25px 20px;
        background-color: #9a7c5e;
    }
}
.infoTemplate {
    margin-left: 20px;
    margin-right: 20px;
    position: relative;
    .button {
        position: relative;
        left: 154px;
    }
    .line {
        width: 300px;
        display: none;
        margin: 0 auto;
        height: 1px;
        background-color: #9a7c5e;
        border-style: none;
        &.active {
            display: block;
        }
    }
}
.delete {
    display: none;
    position: absolute;
    right: 10px;
    top: 10px;
    color: #f96d00;
    font-size: 18px;
    cursor: pointer;
    z-index: 1;
    &.active {
        display: block;
    }
}
</style>
