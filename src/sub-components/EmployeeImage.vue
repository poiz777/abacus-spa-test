<template>
    <div class="pz-pix-box" :data-block-root="empBlockRoot">
        <img :src="employee.thumbnail"
             :data-block-root="empBlockRoot"
             :data-id="employee.id"
             :data-action="'loadDetailView'"
             class="pz-rounded pz-emp-pix" v-on:click="renderDetailView" />
    </div>
</template>

<script>

	import ajaxFetch  from '@/Services/JQAjax';

    export default {
        name: "EmployeeImage",
        props: ['employee', 'empBlockRoot'],
        components: {
        },
        created: function() {
        },
        methods: {
            renderDetailView: function(e){
                const $$        = ajaxFetch.$;
                const initiator = $$(e.target);
                const ajaxPane  = $$("#pz-ajax-receptacle");
                const empID     = initiator.attr("data-id");

                // FETCH EMPLOYEE DATA FROM API...
                ajaxFetch.flatAjaxFetch(ajaxFetch.endPointBaseURL + ajaxFetch.employeeEndPoint + '/' + empID, {}).then(
                    function(data){
                        if (data) {
                            // RENDER DATA WITHIN THE RECEPTACLE
                            ajaxPane.fadeOut(750, function(){
                                ajaxPane.find("#employeeName").text(`${data.firstName} ${data.lastName}`);
                                ajaxPane.find("#position").text(data.position);
                                ajaxPane.find("#employeePix").attr('src', data.thumbnail);
                                ajaxPane.find("#department").text(data.department);
                                ajaxPane.find("#employeeNumber").text(data.employeeNumber);
                                $$(this).slideDown(500);
                            });
                            $$('html, body').animate({scrollTop:(0)}, '2000');
                        }
                    }).catch(function (error) {
                    ajaxFetch.log(error.responseText);
                });

            }
        }
    }
</script>

<style scoped>
    .pz-rounded.pz-emp-pix{
        width:50px;
        height:auto;
        border-radius:100%;
        cursor:pointer;
        opacity: 1;
        box-shadow: 1px 1px 2px 2px rgba(113, 113, 113, 0.57);
        transition:all 0.75s;
    }
    .pz-rounded.pz-emp-pix:hover{
        opacity: 0.5;
    }
</style>