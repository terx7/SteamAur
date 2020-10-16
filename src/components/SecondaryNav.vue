<template>
  <body>
    <div class="flex ml-40 mr-40 mt-0 border-sec-nav-br bg-sec-nav shadow-sm">

    <sec-nav-button>Sinu Pood</sec-nav-button>
    <sec-nav-button>Sirvi</sec-nav-button>
    <sec-nav-button>Punktide Pood</sec-nav-button>
    <sec-nav-button>Uudised</sec-nav-button>
    <sec-nav-button>Labor</sec-nav-button>

      <div class="ml-auto pr-8">
        <input
          type="text"
          name="search"
          class="bg-search text-black h-10"
          placeholder="search"
        />
      </div>
    </div>
  </body>
</template>
<script>
import SecNavButton from "./SecNavButton.vue";
export default {
  components: {
    SecNavButton,
  },
};
</script>
<style scoped>
.secondary-nav {
  display: flex;
  flex: 1;
  border: 1px solid rgba(16, 21, 25, 0.3);
  margin: 0 10rem;
  background-color: rgba(62, 126, 167, 0.8);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
}

.secondary-nav div {
  padding: 1rem 0;
  border-right-color: rgba(16, 21, 25, 0.3);
  border-right-style: solid;
  border-right-width: 1px;
}

.secondary-nav div:hover {
  background-image: linear-gradient(
    rgb(227, 234, 239) 5%,
    rgb(199, 213, 224) 95%
  );
  cursor: pointer;
}

.nav-item {
  font-family: "Roboto", sans-serif;
  color: white;
  padding: 1rem 2rem;
}

.search {
  margin-left: auto;
}
</style>
