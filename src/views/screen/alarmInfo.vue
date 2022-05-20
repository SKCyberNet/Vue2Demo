<template>
	<div class="into" style="pointer-events: fill">
		<div class="topTitle" >
			<span style="color:#5cd9e8">
				<svg-icon icon-class="stotop"></svg-icon>
			</span>
			<span class="fs-xl text mx-2">环境严重级别</span>
		</div>
		<div class="content">
			<dv-capsule-chart :config="config" style="height:80%" />
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				config: {
					data: [{
							name: '未分类',
							value:10
						},
						{
							name: '信息',
							value: 15
						},
						{
							name: '警告',
							value: 1
						},
						{
							name: '一般严重',
							value: 6
						},
						{
							name: '严重',
							value: 7
						},
						{
							name: '灾难',
							value: 9
						}
					],
					/* activeRadius: "70%",
					showOriginValue: true,
					radius: "60%", */
					  unit: '单位',
					/* colors: ['#d0d0d0', '#676fd3', '#f8ff61', '#ff9b29', '#d33e04', '#9a046d'] */
				}
			};
		},
		mounted() { 
		},
		methods: {
			
		},
		destroyed() {
			window.onresize = null;
		}
	};
</script>

<style lang="scss" scoped>
	.into{
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
.topTitle{
	height: 10%;
	padding-top: 15px;
}
.content{
	flex: 2;
}
	}
</style>
