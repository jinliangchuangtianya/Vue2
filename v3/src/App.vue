<template>
  <div id="app">
      <ul>
        <Tree :model='model' v-for='model in TreeList'></Tree>
      </ul>
  </div>
</template>

<script>
import Tree from './components/Tree'

var data = [
  {
        "id": "1",
        "data": {"menuName": "项目管理", "menuCode": "",},
        "childTreeNode": [
          {
          "data": {
              "menuName": "项目",
              "menuCode": "BusProject",
            },
          "childTreeNode": []
          },
          {
            "data": {
              "menuName": "我的任务",
              "menuCode": "BusProject",
            },
            "childTreeNode": []
          },
          {
          "data": {
              "menuName": "人员周报",
              "menuCode": "BusProject",
            },
            "childTreeNode": [
               {
                  "data": {
                    "menuName": "娱乐周刊",
                    "menuCode": "BusProject",
                  },
                 "childTreeNode": []
                }
            ]
          }
        ]
    },
   {
       "id": "2",
       "data": {
        "menuName": "数据统计",
        "menuCode": "BusClock",
        },
        "childTreeNode": []
    },
    {
        "id": "3",
        "data": {
        "menuName": "人事管理",
        "menuCode": "",
        },
         "childTreeNode": []
    },
    {
        "id": "4",
        "data": {
          "menuName": "基础管理",
          "menuCode": "",
        },
        "childTreeNode": []
    }
]

export default {
  name: 'app',
  components: {
    Tree
  },
  data(){
    return {
      TreeList : data
    }
  }
}
</script>

<style>

</style>
