<template>
    <div class="component-wrapper">
     <EmployeeCards :employees="categories"></EmployeeCards>
    </div>
</template>

<script>
    import EmployeeCards         from './components/EmployeeCards';


    export default {
      data: function(){
        return {
          categories    : [],
        }
      },

      created: function(){
      },

      components: {
        "EmployeeCards": EmployeeCards
      },

      methods: {
      },
    };



</script>

<style>
    div.component-wrapper {
    }
</style>
