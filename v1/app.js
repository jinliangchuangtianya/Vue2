
Vue.component('greenrt', {
	template : `
		<div>
			<p>{{name}}： 大家好我的女朋友呵呵</p>
			<button @click="changname">点击</button>
		</div>
	`,
	data(){
		return {
			name : "鹿晗"
		}
	},
	methods :{
		changname(){
			this.name = "金梁";
		}
	}
})

new Vue({
	el : '#vue-app-one'

})


new Vue({
	el : '#vue-app-two'

})

