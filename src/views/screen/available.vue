<template>
	<div>
			<div class="topTitle" style="padding-top: 10px;">
				<span style="color:#5cd9e8">
					<svg-icon icon-class="avail"></svg-icon>
				</span>
				<span class="fs-xl text mx-2">主机可用性</span>
				<!-- <dv-decoration-2 style="height:5px;" /> -->
			</div>
       <!-- <dv-scroll-board :config="config" style="width:295px;height:200px; margin-left: 5px;" /> -->
	<dv-scroll-board :config="config" style="padding:0 15px;box-sizing:border-box;height:200px; " />

		</div>
</template>

<script>
	import {
		fommAval
	} from './sub/datetime.js'
	export default{
		data(){
			return{
				config:{
					 header: ["名称","可用性"],
					  data: [],
					  rowNum: 5, //表格行数
					  headerHeight: 35,
					  headerBGC: "#0f1325", //表头
					  oddRowBGC: "#33407e", //奇数行
					  evenRowBGC: "#121216", //偶数行
					  align: ["center"],
					   columnWidth: [200,100],
					  
					 
					}
				}
			}
		}
	
</script>

<style>
</style>
