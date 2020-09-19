<template>
  <div>
    <Tree :value="treeData">
      <span slot-scope="{node, index, path, tree}">
        <b>{{index}}</b>
        Title: {{node.title}}
        - path: <i>{{path.join(',')}}</i> <button>Oke</button>
      </span>
    </Tree>
  </div>
</template>

<script>
import 'he-tree-vue/dist/he-tree-vue.css'
import {Tree, Draggable} from 'he-tree-vue'

export default {
  components: {Tree: Tree.mixPlugins([Draggable])},
  name: 'Users',
  data() {
    return {
      name: 'Muhamad Ismuaji Prajitno',
      treeData: [{title: 'node 1'}, {title: 'node 1'}, {title: 'node 2', children: [{title: 'node 2-1'}]}]
    }
  }
}
</script>