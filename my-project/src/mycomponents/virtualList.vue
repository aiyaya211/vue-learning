<template>
  <div class="home">
    <!-- <div class="father">
      <div class="right">
        <div class="every_type">
          <div class="item_box">
            <div
              class="item"
              v-for="(item, index) in items"
              :key="index"
            >
              {{ item.title }}
            </div>
          </div>
          
        </div>
      </div>
    </div> -->
    <RecycleScroller
      style="height: 300px;background-color: rgba(0, 0, 0, 0.1);"
      :items="items"
      :item-size="50"
      v-if="items.length"
    >
      <template v-slot="{ item }">
        <div style=" height: 50px; padding: 0 12px; display: flex; align-items: center;">
          {{ item.title }}
        </div>
      </template>
    </RecycleScroller>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
  data () {
    return {
      items: []
    }
  },
  created () {
    this.getData()
    // console.log(this.items)
  },
  methods: {
    getData () {
      for (let i = 0; i < 200000; i++) {
        this.items.push({ title: 'ssadqwesadwqe' ,id : i})
      }
    }
  }
}
</script>

