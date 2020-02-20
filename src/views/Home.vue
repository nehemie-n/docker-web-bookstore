<template>
  <div class="Homepage">
    <div v-if="books.length < 1">
      <h2 style="text-align:center; width: 100%">Add Books</h2>
    </div>
    <div v-for="(book, index) of books" :key="`${book.title}${index}`" class="Book">
      <div>
        <h3>{{book.title}}</h3>
        <div>
          <span>{{book.title}}</span>
        </div>
      </div>
      <div>{{book.quantity}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  computed: {
    books() {
      return this.$store.state.books;
    }
  }
};
</script>

<style lang="less">
.Homepage {
  .Book {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 25px 25px 25px;
    border: 1px solid fade(deepskyblue, 4%);
    background: fade(deepskyblue, 2%);
    border-radius: 4px;
    margin-bottom: 10px;
    h3 {
      margin: 0px;
    }
  }
}
</style>
