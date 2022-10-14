<template>
  <div class="tabs">
    <!-- 不为home界面则可以关闭 给当前选中的高亮 -->
    <el-tag
      v-for="(tag, index) in tags"
      :key="tag.name"
      :closable="tag.name !== 'home'"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
      @click="changeMenu(tag)"
      @close="handleClose(tag, index)"
      size="small"
    >
      {{tag.label}}
    </el-tag>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
    name: 'CommonTag',
    data() {
      return {

      }
    },
    computed: {
      ...mapState({
        // tags对应vuex中的tabsList
        tags: state => state.tab.tabsList
      })
    },
    methods:{
      ...mapMutations({
        close: 'closeTag'
      }),
      changeMenu(item){
        this.$router.push({name: item.name})
      },
      handleClose(tag, index) {
        const length = this.tags.length - 1
        this.close(tag)
        // 删除一个tag内容也跟着删除
        if(tag.name !== this.$route.name){
          return;
        }
        if(index === length) {
          this.$router.push({
            name: this.tags[index-1].name
          })
        } else {
          this.$router.push({
            name: this.tags[index].name
          })
        }
      }
    }
};
</script>

<style lang="less" scoped>
.tabs {
  padding: 20px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>
