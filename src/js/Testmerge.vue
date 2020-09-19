<template>
  <Tree :value="treeData" :triggerClass="'drg'">
    <span slot-scope="{node, index, path, tree}">
      <button class="drg">Drag me</button>
      <el-input placeholder="Please input" v-model="node.idkegiatan"></el-input> |
      <el-input placeholder="Please input" v-model="node.namakegiatan"></el-input>
      Result: {{ node.idkegiatan  + `-` + node.namakegiatan}}
    </span>
  </Tree>
</template>
<script>
import {Tree,Draggable} from 'he-tree-vue'

export default {
  components: {Tree: Tree.mixPlugins([Draggable])},
  data() {
    return {
      treeData: [{idkegiatan: '111'}, {idkegiatan: '222', children: [{idkegiatan: '112'}]}]
    }
  },
}
</script>