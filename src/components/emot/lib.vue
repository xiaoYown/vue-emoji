<template lang="jade">
  .emot__lib
    .emot__lib-choose(@mousedown.stop="close(1)") 选择表情
    ul.emot__lib-box(v-show="show",@mousedown.stop="")
      li.emot__lib-img(v-for="emot in emots")
        img(:src="'/static/em/' + emot + '.gif'",@click="select(emot)")
</template>

<script>
  import ems from './emot'

  export default {
    data () {
      return {
        show: false,
        emots: []
      }
    },
    created () {
      this.emots = ems
      window.addEventListener('mousedown', this.close)
    },
    beforeDestroy () {
      window.removeEventListener('mousedown', this.close)
    },
    methods: {
      close (ev) {
        if (ev === 1) {
          this.show = !this.show
        } else {
          this.show = false
        }
      },
      select (emot) {
        this.$emit('select', emot)
        this.show = false
      }
    }
  }
</script>

<style lang="sass">
  .emot__lib {
    position: relative;
    display: inline-block;
    &-choose {
      cursor: pointer;
    }
    &-box {
      position: absolute;
      bottom: 100%;
      width: 400px;
      padding: 8px;
      background-color: #eee;
      z-index: 10;
    }
    &-img {
      display: inline-block;
      vertical-align: top;
      cursor: pointer;
    }
  }
</style>
