new Vue({
el:"#app",
data:
{
name:'bilash',
x:0,
y:0
},
methods: {
    updateName(){
        this.name='mahamudul';
       },
       getCord(event){
this.x=event.clientX;
this.y=event.clientY;
       }
},
});