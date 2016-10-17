<style scoped lang="stylus">
	.apply
		overflow hidden
	.meter
		position relative
		&.step1
			.progress
				border-left 490px solid #000
				border-right 690px solid rgb(188,188,188)
		&.step2
			.progress
				border-left 720px solid #000
				border-right 460px solid rgb(188,188,188)
		&.step3
			.progress
				border-left 1180px solid #000
				border-right 0px solid rgb(188,188,188)				
		.circle
			width 36px
			height @width
			border-radius 50%
			border 2px solid rgb(188,188,188)
			text-align center
			line-height @width
			float left
			margin-top 70px
			font-size 14px
			position relative
			background-color #fff
			&.done
				background-color black
				color white
				border 2px solid black
				&:before
					color rgb(51, 51, 51)
			&:before
				position absolute
				font-size 18px
				top -48px
				left ((@width+4)/2)
				transform translate(-50%)
				white-space nowrap
			&:nth-of-type(2)
				&:before
					content "描述您的需求"
				margin-left 338px
			&:nth-of-type(3)
				&:before
					content "预览您的需求"
				margin-left 195px
			&:nth-of-type(4)
				&:before
					content "发送需求成功"
				margin-left 195px
		.progress
			position absolute
			height 2px
			top 90px

			
			
			
							
			
</style>
<template>
	<div class="apply w1180">
		<div class="meter step3">
			<div class="progress"></div>
			<div class="circle done">1</div>
			<div class="circle done">2</div>
			<div class="circle done">3</div>
			
		</div>
	</div>
</template>
<script></script>