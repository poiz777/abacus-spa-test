<template>
    <div class="pz-emp-image-tag" :id="empBlockRoot">

        <EmployeeImage  :employee="employee"
                        :restAccessURI="restAccessURI"
                        :empBlockRoot="empBlockRoot"
                        :empPageURI="employee.vueRoute"></EmployeeImage>

        <EmployeeTag :employee="employee"
                     :empID="employee.id"
                     :empBlockRoot="empBlockRoot"></EmployeeTag>


    </div>
</template>

  <script>
      import EmployeeImage      from '@/sub-components/EmployeeImage';
      import EmployeeTag        from '@/sub-components/EmployeeTag';
      import sMeths                     from "@/Services/SharedMethods";
      import ajaxFetch                  from '@/Services/JQAjax';

      export default {
          name: "EmployeeImageTag",
          props: ['empBlockRoot', 'wrapContent', 'employee'],
          components: {
            EmployeeImage,
            EmployeeTag,
          },

          data: function(){
            return {
                shoppingCartUrl : '/shopping-cart/basket',
                restAccessURI   : ajaxFetch.restAccessURI
            };
          },

          created: function(){
          },

          methods : {
              ...sMeths,
              ...{
              }
          },
      }
  </script>

  <style scoped>
      .pz-emp-image-tag{
          position:relative;
      }
  </style>