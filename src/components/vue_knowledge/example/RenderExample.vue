<script>
import RenderTemplate from './RenderTemplate'
// 单文件组件中如果要渲染函数起作用，不能声明template
export default {
  name: 'RenderExample',
  props: {
    showError: Boolean,
    info: String
  },
  // 这里render不能使用箭头函数，否则this不会指向当前实例
  render: function (h) {
    if (this.showError) {
      throw new Error('Custom Render Error!')
    } else {
      return h(RenderTemplate, {
        // 这里是一个传给第一个参数（元素或者模板）的数据对象
        props: {
          info: this.info
        },
        attrs: {
          // DOM 原生特性
          id: 'testRender'
        },
        'class': {
          foo: true
        },
        style: {
          color: 'orange'
        }
      },
      [
        'content from RenderExample',
        h('h3', {
          slot: 'my-slot'
        }, 'some other info~')
      ]
      )
    }
  },
  renderError: function (h, err) {
    return h('div', {
      style: {
        color: 'red'
      }
    }, '错误信息：' + err.message)
  }
}
</script>
