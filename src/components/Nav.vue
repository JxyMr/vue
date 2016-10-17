<style scoped lang="stylus">
	.nav
		height 40px
		background-color rgb(188,188,188)
		.w1180
			.all
				float left
				width 180px
				height @height
				text-align center
				line-height @height
				background-color #aeaeae
				position relative
				color #000
				font-family Arial
				font-size 14px
				&:before
					content ""
					background url("../assets/icon1.png") no-repeat
					width 15px
					height 12px
					position absolute
					display inline-block
					top 15px
					left 16px
				&:after
					content ""
					width 5px
					height 5px
					border-left 1px solid #000
					border-bottom 1px solid #000
					display inline-block
					transform rotate(-45deg)
					position absolute
					top 16px
					right 22px	
					
			>a
				padding 0 30px
				font-size 14px
				line-height @height
					
</style>
<template>
	<div class="nav">
		<div class="w1180">
			<div class="all">全部商品</div>
			<router-link v-for="item of list" :to="item.href">{{item.name}}</router-link>	
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				list:[
					{
						name : "首页",
						href : "/home"
					},
					{
						name : "品牌首发",
						href : "/brandNew"
					},
					{
						name : "品牌街",
						href : "/brand"
					},
					{
						name : "为我代言",
						href : "/me"
					},
					{
						name : "创意申请",
						href : "/apply"
					},
					{
						name : "活动",
						href : "/activity"
					}

				]
			}
		}
	};
</script>