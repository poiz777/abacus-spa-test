<template>
    <span :class="'pz-emp-tag badge ' + getTagClassByEmpNumber(employee.employeeNumber) " :data-eid="employee.id">{{ employee.id }}</span>
</template>

<script>

	export default {
		name: "EmployeeTag",
		props: ['employee', 'empBlockRoot'],
		components: {
		},
		created: function() {
		},
		methods: {
			getTagClassByEmpNumber(empNumber){
				return 'tmp-tag-' + empNumber;
            }
		}
	}
</script>

<style scoped>
    .pz-emp-tag{
        position:absolute;
        right:0;
        top: 0;
    }
</style>
