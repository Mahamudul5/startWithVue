new Vue({
el:"#app",
data:{
 userName:"Mahamudul",
 age:16,
 allowedAge:20

},
methods:{
changeUserName(){
    return this.userName==="hhhs" ? true:false
}

}
});