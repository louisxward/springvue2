<template>
  <div class="home">
    <h1>User Page</h1>
    <UserTable></UserTable> 
  </div>

</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue from 'vue';

library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);

import UserTable from '../components/UserTable.vue'
    export default{
        name: 'UserView',
        components: {
            UserTable
        }
    }
</script>