<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          To do app
        </q-toolbar-title>
        <div>To do</div>
      </q-toolbar>
    </q-header>
    <q-footer  reveal elevated bordered >
      <div class="q-gutter-y-md " style="max-width: 600px">
        <q-tabs>
          <q-route-tab 
          
          exact
          v-for="link of essentialLinks"
          :key="link.id"
          name="todo" 
          :icon="link.icon" 
          :label="link.title"
          :to="link.link"
           />

         
        </q-tabs>
      </div>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :width="250"
      show-if-above
      bordered
      :breakpoint="767"
      content-class="bg-grey-2"
    >
      <q-list class="">
        <q-item-label header class="text-grey-8">
          Nav Bar
        </q-item-label>
        <q-item 
          exact 
          clickable
          v-for="link of essentialLinks"
          :key="link.id" 
          :to="link.link"
          
        >
          <q-item-section>
            <q-icon :name="link.icon"  size='md'></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{link.title}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

export default {
  name: "MainLayout",

  components: {
    EssentialLink
  },

  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          id: 0,
          title: "Todo",
          icon: "list",
          link: "/"
        },
        {
          id: 1,
          title: "Settings",
          icon: "settings",
          link: "/settings"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
   @media screen and (min-width: 751px) {
    .q-footer{
      display:none,
    }
    
  }
  
</style>
