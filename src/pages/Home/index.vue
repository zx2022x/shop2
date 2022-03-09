<template>
  <div>
     <TypeNav/>
     <ListContainer/>
     <Recommend/>
     <Rank/>
     <Like/>
     <Floor v-for='(floor,index) in floorList' :key='floor.id' :list='floor'/>
     
     <Brand/>


  </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import {mapState} from 'vuex'

export default {
  components:{
    ListContainer,
    Recommend,
  },
  mounted(){
    this.$router.dispatch('getFloorList');
    this.$store.dispatch('getUserInfo');
  },

  computed:{
    ...mapState({
      floorList:state=>state.home.floorList
    })
  }

}
</script>

<style>

</style>