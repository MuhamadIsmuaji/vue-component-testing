<script>
import 'he-tree-vue/dist/he-tree-vue.css'
import {Tree, Fold, Check, Draggable} from 'he-tree-vue'
import * as hp from 'helper-js'

export default {
  extends: Tree,
  mixins: [Fold, Check, Draggable],
  props: {
    triggerClass: {default: 'drag-trigger'},
    draggable: {type: [Boolean, Function], default: false},
    droppable: {type: [Boolean, Function], default: false},
  },
  data() {
    return {
      treeClass: 'my-tree-view1',
    }
  },
  computed: {
    total() {
      let i = 0
      this.walkTreeData((node) => {
        i++
      })
      return i
    },
  },
  methods: {
    overrideSlotDefault({node, index, path, tree}, original) {
      // return <table border="1">
      //   <tbody>
          <tr>
            <td width="100px">{ index }</td>
            <td width="300px">{ node.title }</td>
          </tr>
      //   </tbody>
      // </table>
    },
    blockHeader() {
      return <table border="1">
        <thead>
          <tr>
            <th width="100px">ID Kegiatan</th>
            <th width="300px">Nama Kegiatan</th>
          </tr>
        </thead>
      </table>  
    },
    // blockFooter() {
    //   return </table>
    // },
    //
    add() {
      this.treeData.push({text: `node ${hp.randString(3).toLowerCase()}`})
    },
    showHidden() {
      this.walkTreeData((node) => {
        this.$set(node, '$hidden', false)
      })
    },
    hideNode(node) {
      this.$set(node, '$hidden', true)
    },
    search(e) {
      const value = e.target.value || ''
      this.walkTreeData((node) => {
        this.$set(node, '$hidden', !node.text.includes(value))
      })
    },
  },
}
</script>

<style>
.my-tree-view1 .mls{
  margin-left: 5px;
}
.my-tree-view1 .mrs{
  margin-right: 5px;
}
.my-tree-view1 .tree-node{
  padding: 0;
  border: none;
}
.my-tree-view1 .node-content{
  display: flex;
}
.my-tree-view1 .node-content .fold-btn{
  display: flex;
  justify-content: center;
  width: 22px;
  border-radius: 100%;
  border: none;
  background: #fcf1a8;
}
.my-tree-view1 .tree-node-back:hover{
  background: #f5f5f5;
}
.my-tree-view1 .header{
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
  margin-bottom: 10px;
}
.my-tree-view1 .footer{
  border-top: 1px solid #ccc;
  margin-top: 10px;
}
</style>