
new Vue({
    el:'#app',
    data: {
        health:100,
        ended:false,
        src:'images/bag.png'
    },
    methods:{
        punch:function(){
            this.health-=10;
            if(this.health<=0){
                this.ended=true;
                this.health=0;
                this.src='images/bag-burst.png';
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


