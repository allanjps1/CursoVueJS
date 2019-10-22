new Vue({
    el:"#challenge",
    data:{
        value: "",
        valor: 0
    },
    computed:{
        resultado() {
            let self = this;

            return this.valor == 37 ? "Valor igual" : "Valor diferente";
        }
    },
    methods:{

    },
    watch:{
        resultado() {
            setTimeout(() =>{
                this.valor = 0;
            }, 5000);
        }
    }
})