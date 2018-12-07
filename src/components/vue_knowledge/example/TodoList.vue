<template>
  <div>
    <h3 id="slot_component" class="mt-4 mb-4">Slot组件</h3>
    <ul>
      <li v-for="todo in todoList" :key="todo.id">
        <slot :todo="todo">
          {{ todo.text }}
        </slot>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'TodoList',
  data () {
    return {
      todoList: []
    }
  },
  mounted: function () {
    this.todoList = [
      {
        text: '洗衣',
        isComplete: false,
        id: '1'
      },
      {
        text: '读书',
        isComplete: true,
        id: '2'
      },
      {
        text: '进家大公司',
        isComplete: false,
        id: '3'
      }
    ]
  }
}
</script>
