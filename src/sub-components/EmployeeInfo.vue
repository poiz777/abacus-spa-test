<template>
    <div class="pz-info-box" :data-block-root="empBlockRoot">
        <h5 :data-eid="employee.id"
            :data-block-root="empBlockRoot"
            class="pz-emp-name">{{ employee.firstName }} {{ employee.lastName }}</h5>
        <div class="pz-extra-info-box">
            <span class="pz-emp-position pz-block-render" :data-eid="employee.id">{{ employee.position }}</span>
            <span class="pz-emp-department pz-block-render" :data-eid="employee.id">{{ employee.department }}</span>
            <span class="pz-emp-number pz-block-render" :data-eid="employee.id">{{ employee.employeeNumber }}</span>
        </div>
    </div>
</template>

<script>

	export default {
		name: "EmployeeInfo",
		props: ['employee', 'empBlockRoot'],
		components: {
		},
		created: function() {},
		methods: {}
	}
</script>

<style scoped>
    .pz-block-render{
        display: block;
    }
    .pz-emp-name {
        border-top: dashed 1px #d8d8d8;
        border-bottom: dashed 1px #d8d8d8;
        padding: 3px 0;
    }
</style>
