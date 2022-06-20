new Vue({
el:"#app",
data:
{
name:'bilash',
x:0,
y:0
},
methods: {
    updateName(newName,event){
        this.name=newName;
        console.log(event)
       },
       getCord(event){
this.x=event.clientX;
this.y=event.clientY;
       },
       submitFrom(){
        console.log('form submitted');
       }
},
});