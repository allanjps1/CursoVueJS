new Vue({
    el:"#challenge",
    data:{
        value: ""
    },
    methods:{
        showAlert(){
            window.alert("this is a alert!");
        },
        keepValue(e){
            this.value = e.target.value;
        },

    }
})