<template>
  <div class="AddBook">
    <form @submit="submitForm" name="book">
      <div>
        <!--  -->
        <!-- Title -->
        <div class="Btn-h">
          <h1>Enter book details</h1>
        </div>

        <div class="Input-h">
          <input v-model="book.title" placeholder="Title" type="text" />
        </div>
        <!--  -->
        <!-- author -->
        <div class="Input-h">
          <input v-model="book.author" placeholder="Author" type="text" />
        </div>
        <!--  -->
        <!-- Quantity -->
        <div class="Input-h">
          <input v-model="book.quantity" placeholder="Quantity" type="number" />
        </div>
        <!--  -->
        <div class="Btn-h">
          <button type="submit">Submit Book</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Book from "./index";

export default Vue.extend({
  data() {
    return {
      book: {
        title: "",
        author: "",
        quantity: 0
      }
    };
  },
  methods: {
    submitForm(form: Event) {
      form.preventDefault();
      const book: Book = this.book;
      this.$store.commit("addBook", book);
      this.$router.push('/')
    }
  }
});
</script>


<style lang="less">
.AddBook {
  display: flex;
  min-height: 60vh;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  .Input-h {
    display: block;
    input {
      height: 48px;
      border: 2px solid fade(black, 5%);
      padding: 5px 10px;
      transition: 300ms ease;
      margin: 10px 0;
      width: 100%;
      display: block;
      border-radius: 4px;

      &:focus {
        border-color: deepskyblue;
      }
    }
  }
  // Button
  button {
    background: deepskyblue;
    padding: 10px 30px;
    border: 0;
    cursor: pointer;
    border-radius: 4px;
    margin: 20px auto;
  }
  .Btn-h {
    text-align: center;
    padding-top: 30px;
    padding-bottom: 10px;
  }
  h1 {
    color: deepskyblue;
  }
  // Form
  form {
    max-width: 400px;
    width: 100%;
  }
}
</style>
