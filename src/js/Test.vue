<template>
  <TreeView :value="treeData" draggable droppable></TreeView>
</template>
<script>
import TreeView from './Treeview.vue'

export default {
  components: {TreeView},
  data() {
    return {
      treeData: [{text: 'node 1'}, {text: 'node 2', children: [{text: 'node 2-1'}]}]
    }
  },
}
</script>