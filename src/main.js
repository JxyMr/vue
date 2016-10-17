import Vue from "vue";
import Router from "vue-router";
import Apply from "./pages/Apply";
import Home from "./pages/Home"; 
import App from "./App";
Vue.use(Router);
new Vue({
	el : "#app",
	router : new Router({
		mode : "history",//确保服务器端开放页面路径访问权限
		routes:[
			{
				path : "/apply",
				component : Apply
			},
			{
				path : "/home",
				component : Home
			}
		]
	}),
	render : h => h(App)
});