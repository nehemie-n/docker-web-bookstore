<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Books</router-link>
      <router-link to="/add">Add Book</router-link>
    </div>
    <div id="app-c">
      <router-view />
    </div>
  </div>
</template>

<style lang="less">
body {
  margin: 0;
  background: fade(deepskyblue, 5%);
  font-family: "Poppins", sans-serif;
}
* {
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
#nav {
  display: flex;
  justify-content: space-around;
  background: white;
  background: fade(deepskyblue, 10%);
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.033);

  a {
    transition: 500ms ease;

    text-decoration: none;
    border-bottom: 2px solid transparent;
    color: black;
    font-weight: 400;
    padding: 10px;
    text-align: center;
    font-size: 12px;
    width: 100%;
    &.router-link-exact-active {
      border-bottom: 2px solid deepskyblue;
      color: deepskyblue;
    }
  }
}
#app {
  margin: 0 auto;
  background: white;
  max-width: 500px;
  min-height: 100vh;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.233);
}
#app-c {
  padding: 10px;
}
</style>
