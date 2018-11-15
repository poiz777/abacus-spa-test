<template>
    <div :class="'pz-card-outer col-md-'+columnCount">
        <aside class="pz-card-wrapper">
            <div class="pz-card-inner pz-emp-slot" :id="getBlockRootID(employee.id)">
                <EmployeeImageTag :employee="employee"
                                  :empBlockRoot="getBlockRootID(employee.id, '#')"
                                  :empPageURI="employee.vueRoute"></EmployeeImageTag>

                <EmployeeInfo :employee="employee"
                              :empID="employee.id"
                              :empName="employee.firstName + ' ' + employee.lastName"
                              :empBlockRoot="getBlockRootID(employee.id, '#')"></EmployeeInfo>

            </div>
        </aside>
    </div>
</template>

  <script>
      import EmployeeInfo               from '@/sub-components/EmployeeInfo';
      import EmployeeImageTag           from '@/sub-components/EmployeeImageTag';
      import sMeths                     from "@/Services/SharedMethods";

      export default {
          name: "EmployeeCard",
          props: ['dataIndex', 'cue', 'colNum', 'wrapContent', 'employee'],
          components: {
            EmployeeInfo,
            EmployeeImageTag,
          },

          data: function(){
            return {
                columnCount     : 6,
            };
          },

          methods : {
              ...sMeths,
              ...{
                  getColumnClass : function(){
                      this.colNum = (!this.colNum) ? 12: this.colNum;
                      return 'col-xs-12 ' + 'col-md-' + this.colNum + ' col-lg-'+ this.colNum;
                  },

                  getBlockRootID : function(id, prefix){
                      prefix = (undefined === prefix) ? '' : prefix;
                      return prefix + 'pz-emp-slot-' + id
                  },
              }
          },
      }
  </script>

  <style scoped>
      .pz-card-wrapper{
          /*padding:10px 10px 0 10px;*/
      }
      .pz-card-outer{
          padding:10px;
      }
      .pz-card-inner{
          padding: 15px 15px;
          border: solid 1px #e4e4e4;
          background: #f5f5f5;
          transition:all 0.75s;
      }
      .pz-card-inner:hover{
          border: solid 1px #d2d2d2;
          background: #eaeaea;
      }
  </style>