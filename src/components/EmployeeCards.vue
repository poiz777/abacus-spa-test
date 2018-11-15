<template >
    <div class="container" >
        <div style="margin:0 auto;padding:40px;text-align:center;display:block;color:#dadada;" v-if="!rendered">Loading...</div>
        <div class="fa fa-5x fa-cog fa-spin" style="margin:0 auto;padding:40px;text-align:center;display:block;color:#dadada;" v-if="!rendered" ></div>
        <div style="clear:both"></div>
        <div style="clear:both"></div>
        <div class="col-md-12 pz-dual-col-wrapper no-lr-pad">
            <div class="col-md-12 pz-heading-block">
                <h3 class="pz-heading">Personalstamm</h3>
                Alle Informationen zur Person, Gehalt und Organisation.
            </div>
            <div class="col-md-5 no-lr-pad pz-left-pane">
                <FullTextSearch></FullTextSearch>
                <EmployeeCard
                        v-for="(employee, index) in employeesData"
                        :dataIndex="employee.id"
                        :key="getUniqueKey(index)"
                        :employee="employee"
                        :cue="index"
                        :colNum="getColNum()">
                </EmployeeCard>
            </div>
            <div class="col-md-7 no-lr-pad pz-ajax-receptacle" id="pz-ajax-receptacle">
                <EmployeeDetail></EmployeeDetail>
            </div>
        </div>

    </div>
</template>

<script>
	import FullTextSearch from "@/components/FullTextSearch";
	import EmployeeDetail from "@/sub-components/EmployeeDetails";
	import EmployeeCard from "./EmployeeCard";
	import sMeths       from "@/Services/SharedMethods";
	import ajaxFetch  from '@/Services/JQAjax';
	export default {
		name: "EmployeeCards",
		props: [],

		data: function(){
			return {
				rendered : false,
				employeesData: [],
				columnsPerRow:4,
				colsPerRow:4,
			}
		},

		created: function(){
			this.fetchEmployeesData();
		},


		components : {
			EmployeeDetail,
			FullTextSearch,
			'EmployeeCard' : EmployeeCard,
		},

		methods : {
			...sMeths,
			...{
				fetchEmployeesData(){
                    const self  = this;
					ajaxFetch.flatAjaxFetch(ajaxFetch.endPointBaseURL + ajaxFetch.employeeEndPoint, {}).then(
					function(response){
						if (response) {
							self.employeesData  = response;
							self.rendered       = true;
						}
					}).catch(function (error) {
						ajaxFetch.log(error.responseText);
					});
                },
			}
		},

	}
</script>

<style scoped>
    @import './../assets/css/products.css';
    .pz-dual-col-wrapper{
        background: #e6e6e6;
        padding: 15px;
    }
    .pz-heading-block{
        margin-bottom: 10px;
    }
    .pz-heading{
        margin:0;
    }

    #pz-ajax-receptacle {
        position:relative;
        padding: 0 20px;
        display:none;
    }
    .pz-left-pane{
        background:white;
    }
</style>
