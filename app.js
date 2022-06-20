new Vue({
el:"#app",
data:
{
name:'bilash'
},
methods: {
    update(){
        setTimeout(()=>{
            this.name='mahamudul'
        },2000)
    }
},
});