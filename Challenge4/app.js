new Vue({
	el: '#desafio',
	data: {
		classe1: "destaque",
		style5:"",
		userCss: "",
		efeitoCss: false,
		estiloDoUsuario: "",
		userStyle: "",
		progress: 1
	},
	computed: {
		trueOrFalseClass: function () {
			return {
				'trueStyle': this.estiloDoUsuario === "true",
				'falseStyle': this.estiloDoUsuario === "false"
			}
		},
		progressBarStyle:function(){
			return `background-color: gray;height:24px;width:${this.progress}%`;
		}
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 == "destaque" ? "encolher" : "destaque"
			}, 1000);
		},
		iniciarProgresso: function() {
			var self = this;
			setInterval(() => {
				this.progress = this.progress >= 100 ? 0 : this.progress + 2;
			}, 1000);
		},
	}
});