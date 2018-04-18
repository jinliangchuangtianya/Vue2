<template>
  <li>
    <div @click="toggle">
      <i v-if='isFolder'>有子级》</i><i v-else>无子级》</i>  {{model.data.menuName}}
    </div>
    <ul v-show="open" v-if='Folder'>
      <Tree v-for='cel in model.childTreeNode' :model='cel'></Tree>
    </ul>
  </li>
</template>
<script type="text/javascript">
  export default {
    name: 'Tree',
    props: ['model'],
    components: {},
    data() {
      return {
        open: false,
        Folder: true
      }
    },
    computed: {
      isFolder: function() {
        return this.model.childTreeNode && this.model.childTreeNode.length
      }
    },
    methods : {
      toggle(){
        if(this.isFolder) {
          this.open = !this.open
        }
      }
    }
  }
</script>

