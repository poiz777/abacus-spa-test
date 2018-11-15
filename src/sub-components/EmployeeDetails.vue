<template>
    <aside>
        <span class="fa fa-close pz-close-pane" v-on:click="closeReceptacle"></span>
        <div class="col-md-12 no-lr-pad">
            <div class="pz-employee-info">
                <div class="col-md-4">
                    <img class="pz-rounded pz-emp-pix-big" id="employeePix" src="http://sim-rest.poiz.me/api-data/employees/martina-wenger.jpg" />
                </div>
                <div class="col-md-8">
                    <p class="pz-emp-name" id="employeeName">Natasha Hardegger</p>
                    <div class="pz-emp-data">
                        <aside class="pz-key-val-pair">
                            <span class="pz-key">Mitarbeiter-Nr.</span>
                            <span class="pz-val employeeNumber" id="employeeNumber">223</span>
                        </aside>
                        <aside class="pz-key-val-pair">
                            <span class="pz-key">Vertrag</span>
                            <span class="pz-val department" id="department">223</span>
                        </aside>
                        <aside class="pz-key-val-pair">
                            <span class="pz-key">Abteilung</span>
                            <span class="pz-val position" id="position">223</span>
                        </aside>
                        <aside class="pz-key-val-pair">
                            <span class="pz-key">Stelle</span>
                            <span class="pz-val stelle" id="stelle">Classified</span>
                        </aside>
                    </div>
                </div>
                <section class=" col-md-12">
                    <p class="pz-unavailable-rest">
                        No more Data! End Rendering... :-)
                    </p>
                </section>
            </div>
        </div>
    </aside>
</template>

<script>
	import ajaxFetch from '@/Services/JQAjax';

	export default {
		name: "EmployeeDetail",
		props: [],
		components: {
		},
		created: function() {
		},
		methods: {
			closeReceptacle: function(){
				const $$ = ajaxFetch.$;
				$$("#pz-ajax-receptacle").fadeOut(750);
			}
		}
	}
</script>

<style scoped>
    .pz-emp-name {
        border-top: dashed 1px #d8d8d8;
        border-bottom: dashed 1px #d8d8d8;
        padding: 3px 0;
    }

    .pz-employee-info:after,
    .pz-employee-info:before{
        display:table;
        content: " ";
    }
    .pz-employee-info:after{
        clear:both;
    }
    .pz-left-pane,
    .pz-employee-info{
        background:white;
    }
    .pz-employee-info {
        padding: 10px 0 150px 0;
    }
    .pz-rounded.pz-emp-pix-big{
        width:150px;
        height:auto;
        border-radius: 100%;
        box-shadow: 1px 1px 2px 2px rgba(113, 113, 113, 0.57);
    }
    .pz-emp-name{
        font-size:16px;
    }
    .pz-val,
    .pz-key {
        display: inline-block;
        font-size: 11px;
        min-width: 100px;
    }

    .pz-val {}

    .pz-key {
        text-align: right;
        padding-right: 20px;
    }
    .pz-unavailable-rest{
        border-top: dashed 1px #d8d8d8;
        border-bottom: dashed 1px #d8d8d8;
        padding: 5px 0;
        margin:15px;
        text-align: center;
        text-transform: uppercase;
        font-weight: 300;
        font-size:14px;
        letter-spacing: 0.05em;
    }
    .pz-close-pane{
        position: absolute;
        top: 14px;
        right:33px;
        z-index: 99999;
        font-size:20px;
        cursor:pointer;
        color:darkred;
    }
</style>
