<template>
  <div class="w-100pre h-100pre">
    <components class="w-100pre h-100pre" :is="component"></components>
  </div>
</template>

<script>

import three from "./three/index.vue";


export default {
  name: "Home",
  components: {
   
    three
  },
  data() {
    return {
      component: "three",
      
    };
  },

  mounted() {
  
  },
  methods: {
    }
};
</script>

