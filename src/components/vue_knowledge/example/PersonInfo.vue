<template>
  <div>
    <div>
      <span>个人兴趣：{{ interestingStr }}</span>
    </div>
    <div>
      <span>个人技能：{{ skill.toString().replace(',', ' ') }}</span>
    </div>
    <div>
      <span>通过绑定props传递来的数据：{{ name }}</span>
      <br>
      <span>通过inject父模板provide的数据：{{ childStr }}</span>
    </div>
    <div>
      <span>prop双向绑定，修改年龄</span>
      <input type="text" @input="$emit('update:age', $event.target.value)">
    </div>
    <div>
      <span>组件v-model双向绑定，修改地址</span>
      <input ref="input" type="text" @input="$emit('input-test', $event.target.value)">
    </div>
  </div>
</template>
<script>
export default {
  name: 'PersonInfo',
  inject: {
    childStr: 'parentStr'
  },
  props: {
    name: String,
    age: {
      type: String
    },
    interesting: {
      type: [Array, Object]
    },
    skill: {
      type: Array,
      required: false,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        // this 指向当前实例
        console.log('PersonInfo props的skill默认值属性default中的this:', this)
        return ['没什么不会的哦~']
      },
      validator: (value) => {
        return value.length >= 0
      }
    }
  },
  data () {
    // data中可以访问props和注入的数据
    return {
      // childPerson: this.person
    }
  },
  computed: {
    interestingStr: {
      get () {
        return this.interesting.toString().replace(',', ' ')
      }
    }
    // 也可以为skill声明一个计算属性，这个功能最初就是为这个设计的
  },
  model: {
    event: 'input-test'
  }
}
</script>
