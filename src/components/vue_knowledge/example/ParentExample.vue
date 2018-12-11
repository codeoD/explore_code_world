<template>
  <div>
    <h3 class="mt-4 mb-4" id="component_concern">组件相关</h3>
    <div class="mt-4">
      <div>
        <!-- <dir></dir> -->
        <!-- 使用v-model双向绑定数据，并使用上文自定义的全局指令v-focus聚焦输入框 -->
        <!-- 单纯就聚焦来说，也可以使用html内置特性 autofocus -->
        <div class="pl-4">
          <label for="">姓名：</label>
          <input id="name" type="text" v-model="person.name" autocomplete="off">
          <span class="ml-8">年龄：{{ person.age }}</span>
          <span class="ml-8">地址：{{ person.address }}</span>
        </div>
        <div class="pl-4">
          <!-- 使用上文自定义的全局过滤器以及此处定义的局部过滤器处理数据 -->
          <span>{{ person.name | capitalize | abc | edf }}</span>
          <!-- 此处声明为计算属性 -->
          <span class="ml-4">姓名长度为:{{ personNameLength }}</span>
        </div>
        <div class="mt-2 pl-4 ">
          <!-- 此处使用自定义指令绑定数据，具体输出点击提交并按f12查看 -->
          <input class="w-24" type="button" value="提交" @click="handleSubmit" v-cool:test="person.name">
        </div>
      </div>
      <div class="pl-4 mt-2">
        <!-- v-bind="person" 不是v-bind:person="person"的简写 前者传递的是一个对象，后者是对象的各个属性，
        .sync可以双向绑定prop，它是触发事件监听事件模式的简写-->
        <!-- https://cn.vuejs.org/v2/guide/components-props.html#%E5%8D%95%E5%90%91%E6%95%B0%E6%8D%AE%E6%B5%81 -->
        <!-- 如果绑定的是引用类型(数组或对象)，子组件修改prop将会直接改变引用的值，而vue不给出警告，因为内存地址没变 参考上面链接-->
        <person-info v-model="person.address" :name="person.name" v-bind:age.sync="person.age" :interesting="person.interesting" :skill="person.skill"></person-info>
      </div>
    </div>
  </div>
</template>
<script>
import PersonInfo from './PersonInfo'
const interestings = ['读书', '写字', '听歌', '看电影', '思考', '运动']
const skills = ['编程', '教学', '做糕点', '插花', '钢琴师', '写诗', '作词']
export default {
  name: 'ParentExample',
  components: {
    PersonInfo
    // AnotherComponent,
    // FunctionalComponent
  },
  // 插值分隔符，默认为2个大括号,Mustache 语法
  delimiters: ['{{', '}}'],
  // 设置为true时将会保留模板内的注释并渲染，默认行为是丢弃
  comments: false,
  mixins: [{
    data () {
      return {
        // 混入时，mixin的相同属性会被丢弃，不同属性会被添加
        person: {
          name: 'li si',
          address: 'tian shui street'
        }
      }
    }
  }],
  extends: {
    data () {
      return {
        // 扩展时，行为和mixin类似
        person: {
          name: 'wang er',
          age: '13'
        }
      }
    }
  },
  data () {
    return {
      person: {
        name: 'zhang shan',
        interesting: [],
        skill: []
      },
      isError: true
    }
  },
  provide: function () {
    return {
      parentStr: this.person.name
    }
  },
  computed: {
    personNameLength: {
      get () {
        return this.person.name.split(' ').join('').length
      },
      set (v) {
        return v
      }
    }
  },
  watch: {
    // watch 应该是通过侦听的属性（表达式）的setter里触发的事件实现的
    'person.name': {
      // 使用箭头函数时，this不绑定当前vue实例
      handler: (val, oldVal) => {
        console.log('output from watch person.name of this:', this)
        console.log('watch person.name --> new: %s, old: %s', val, oldVal)
      }
    }
  },
  methods: {
    handleSubmit (e) {
      // 数据修改后DOM并没更新，而是等到本次事件循环结束，下次事件循环开始时更新
      this.name = ''
      console.log(document.querySelector('#name').value)
      // 和全局的Vue.nextTick的区别是会传入当前实例
      this.$nextTick().then(() => {
        if (document.querySelector('#name').value === '') {
          console.log('DOM 已更新！')
        }
      })

      // 获取并修改兴趣和爱好
      this.person.interesting = this.getInterestingSkill(interestings)
      this.person.skill = this.getInterestingSkill(skills)
      console.log(this.person.interesting, this.person.skill)
    },
    getInterestingSkill (arr) {
      // 等概率取出随机个数的数组项目
      let baseNum = arr.length
      let num = Math.floor(Math.random() * (baseNum - 1)) + 1
      let selectedItem = []
      while (selectedItem.length < num) {
        let selectedIndex = Math.floor(Math.random() * (baseNum - 1))
        if (!selectedItem.includes(arr[selectedIndex])) selectedItem.push(arr[selectedIndex])
      }
      return selectedItem
    }
  },
  // 注册局部指令
  directives: {
    cool: {
      bind (el, binding, vnode, oldVnode) {
        // 只调用一次，指令第一次绑定到元素时调用
      },
      inserted (el, binding, vnode, oldVnode) {
        // 被绑定元素插入父节点时调用
        el.style.backgroundColor = 'skyblue'
        console.log('arg:' + binding.arg, 'value:' + binding.value)
      },
      update (el, binding, vnode, oldVnode) {
        // 所在组件的vnode更新时调用
      },
      componentUpdated () {
        // 所在组件vnode及其子vnode全部更新后调用
      },
      unbind (el, binding, vnode, oldVnode) {
        // 只调用一次，指令与元素解绑时调用
      }
    }
  },
  // 注册局部过滤器
  filters: {
    // 以下两种this输出结果参考http://es6.ruanyifeng.com/#docs/let#global-%E5%AF%B9%E8%B1%A1
    abc: (value) => {
      // 输出当前模块对象，不是vue实例
      console.log('output from filter abc of this:', this)
      if (!value) return ''
      return value.toString().replace(' ', '·')
    },
    edf: function (value) {
      // 这里没有传入vue实例，输出undefined
      console.log('output from filter edf of this', this)
      return value
    }
  },
  // 生命周期钩子
  beforeCreate: function () {
    // 实例初始化后，数据观测和事件配置前调用
  },
  created: function () {
    // 挂载阶段开始前
    console.log('parent provide: ', this._provided)
  },
  beforeMount: function () {
    // 挂载开始前被调用，相关render函数首次被调用。。。。该钩子服务端渲染不可用
  },
  mounted: function () {
    // 挂载阶段结束，不保证所有子组件也都一起被挂载了，如果希望等到整个视图渲染完毕，可以在此调用nextTick函数
  },
  beforeUpdate: function () {
    // 数据更新时调用，发生在VDOM打补丁前。。。。服务端渲染不可用
  },
  updated: function () {
    // VDOM打补丁后调用，不保证所有子组件也都一起被重绘。。。。服务端渲染不可用
  },
  activated: function () {
    // keep-alive 组件激活时调用。。。。服务端渲染不可用
  },
  deactivated: function () {
    // keep-alive 组件停用时调用。。。。服务端渲染不可用
  },
  beforeDestroy: function () {
    // 实例销毁前调用。。。。服务端渲染不可用
  },
  destroyed: function () {
    // 实例销毁后调用，此事vue实例已不可用。。。。服务端渲染不可用
  },
  errorCaptured: function (err, vm, info) {
    // 捕获来自子孙组件的错误时调用，接收三个参数：错误对象，发生错误的组件实例，错误来源信息
    // 可以返回false阻止错误继续向上传播
    console.log(err, info)
  }
}
</script>
