import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const books: Array<Record<string, any>> = []
export default new Vuex.Store({
  state: {
    books: books
  },
  mutations: {
    addBook(state, book) {
      // mutate state
      state.books.push(book);
    }
  },
  actions: {
  },
  modules: {
  },
});
