let index

let ppp=document.querySelector(".interaction>li>span").focus();
const store = {
  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  fetch(key) {
    return JSON.parse(localStorage.getItem(key)) || []
  }
}
const filter = {
  all(list) {
    return list
  },
  unfinished(list) {
    return list.filter(function(item) {
      return !item.isChecked
    })
  },
  finished(list) {
    return list.filter(function(item) {
      return item.isChecked
    })
  },
  searched(list,regExp) {
    return list.filter(function(item) {
      return  regExp? regExp.test(item.content):null
    })
  }
}

let list = store.fetch('cc-item-save')


const interaction = new Vue({
  el: '.interaction',
  data: {
    list: list,
    present: 'all',
    createPlan:false,
    searchPlan:false,
    regExp:undefined
  },
  computed: {
    unfinished() {
      return filter.unfinished(this.list).length
    },
    finished() {
      return filter.finished(this.list).length
    },
    searched() {
      return filter.searched(this.list,this.regExp).length
    }
  },
  watch: {
    present() {
      main.present = this.present
    },
    createPlan() {
      main.createPlan = this.createPlan
    },
    searchPlan() {
      main.searchPlan = this.searchPlan
    }
  },
  methods: {
    toggleCreate() {
      this.searchPlan=false
      this.createPlan=!this.createPlan
    },
    toggleSearch() {
      this.createPlan=false
      this.searchPlan=!this.searchPlan
    }
  }
})

const main = new Vue({
  el: '.main',
  data: {
    list: list,
    content: '',
    editItem: '',
    editContent: '',
    searchContent:'',
    regExp:null,
    present: interaction.present,
    createPlan:false,
    searchPlan:false
  },
  watch: {
    list: {
      handler() {
        store.save('cc-item-save', this.list)
      },
      deep: true
    },
    createPlan() {
      interaction.createPlan = this.createPlan
    },
    searchPlan() {
      interaction.searchPlan = this.searchPlan
    },
    present() {
      interaction.present = this.present
    },
    regExp() {
      interaction.regExp = this.regExp
    }
  },
  methods: {
    addTodo() {
      this.list.push({
        content: this.content,
        isChecked: false,
        time: new Date().toString().slice(0, 24)
      })
      this.createPlan=false
      this.content = ''
      window.location.hash='#all'
    },
    deleteTodo(item) {
      index = this.list.indexOf(item)
      this.list.splice(item, 1)
    },
    editTodo(item) {
      this.editItem = item
      this.editContent = item.content
      this.createPlan=false
      this.searchPlan=false
    },
    finishEdit(item) {
      this.editItem = ''
      this.editContent = ''
    },
    cancelEdit(item) {
      item.content = this.editContent
      this.editItem = ''
      this.editContent = ''
    },
    searchTodo() {
      this.regExp=new RegExp(this.searchContent)
      this.present='searched'
      this.searchPlan=false
      window.location.hash='#searched'
    },
    deleteSearch() {
      this.regExp=null
      this.searchContent=''
    }
  },
  computed: {
    filteredList() {
      return filter[this.present] ? filter[this.present](this.list,this.regExp) : this.list;
    }
  },
  directives: {
    focus: {
        update: function (el, {value}) {
            if (value) {
              setTimeout(function(){
                el.focus()
              })
            }
        }
    }
  }
})



window.addEventListener('hashchange', function(){
  var hash = window.location.hash.slice(1);
  interaction.present = hash;
})
