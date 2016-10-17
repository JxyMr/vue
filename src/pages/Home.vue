<style scoped lang="stylus">
	.home
		overflow hidden
	.banner
		height 350px
		overflow hidden
		position relative
		.tab
			position absolute
			bottom 16px
			left 50%
			transform translate(-50%)
			a
				display inline-block
				width 60px
				height 4px
				background-color #bcbcbc
				margin-right 16px
				&:last-child
					margin-right 0
				&.current
					background-color white
		ul
			width 99999px				
		li
			float left
			height @height	
			position relative
			img
				width 100%
				height 100%
		.banner-tit
			position absolute
			top 124px
			left 500px
			p
				color white
				font-size 36px
				font-weight 700
				line-height 48px
	.ranking,.new,.represent,.myfashion
		margin-top 40px
	.tit
		height 48px
		overflow hidden
		h2
			float left
			font-size 24px
			color #333
			font-weight 700
							
</style>
<template>
	<div class="home">
		<div class="banner">
			<ul>
				<li v-for="item of banner">
					<img :src="item.imgUrl" alt="" />
				</li>
			</ul>
			<div class="banner-tit">
				<p>我是女王，我做主！</p>
				<p>我的品牌我代言！</p>
			</div>	
			<div class="tab">
				<a href="#" class="current"></a>
				<a href="#"></a>
				<a href="#"></a>
				<a href="#"></a>
			</div>
		</div>
		<div class="ranking w1180">
			<div class="tit">
				<h2>女王人气top10</h2>
				<div class="add"></div>
			</div>
		</div>
		<div class="new w1180">
			<div class="tit">
				<h2>首发品牌</h2>
				<div class="add"></div>
			</div>
		</div>
		<div class="represent w1180">
			<div class="tit">
				<h2>为我代言</h2>
				<div class="add"></div>
			</div>
		</div>
		<div class="myfashion w1180">
			<div class="tit">
				<h2>我的时尚</h2>
				<div class="add"></div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				banner:[
					{
						imgUrl:require("../assets/banner01.jpg"),
						
					},
					{
						imgUrl:require("../assets/banner02.jpg"),
						
					},
					{
						imgUrl:require("../assets/banner03.jpg"),
						
					},
					{
						imgUrl:require("../assets/banner04.jpg"),
						
					},
				],
			}
		}
	}
</script>