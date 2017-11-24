
new Vue({
    el:'#app',
    data: {
        health:100,
        ended:false
    },
    methods:{
        punch:function(){
            this.health-=10;
            if(this.health<=0){
                this.ended=true;
                this.health=0;
            }
        },
        reset:function(){
            var input=confirm('Do You Want to Restart The Game');
            if(input){
                this.health=100;
                this.ended=false;
            }
        }
    },

    computed:{
        isEnded:function(){
            return this.ended;
        }
    }


})


