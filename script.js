// vm means view model.this is a naming convention.
const vm=Vue.createApp({
data() {
    return {
        firstName:'Sazzadur',
        lastName:"Rahman",
        link:'https://www.w3schools.com/html/html_attributes.asp',
        isButtonDisabled: false,
        inputPlaceholder: 'Enter your text',
        maxInputLength: 10,
        inputValue: '',
        raw_url:' <a href="https://www.w3schools.com/html/html_attributes.asp" target="_blank" style="text-decoration: none">w3schools</a>',
        age:20,
        nickName:'zitu',
        hobby:''
    }
},
// we used method because all the logic should be in js
//so instead of string literal we declared methods to show the fullName
//remember in arrow function $this will not work
methods: {
    fullName(){
        return  `${this.firstName.toUpperCase()} ${this.lastName.toUpperCase()}! your hobby is ${this.hobby}` 
    },
    increment(){
    return this.age++;
    },
    decrement(){
    return this.age--;
    },
    updateLastName(event){
    return this.lastName=event.target.value;
    } ,
    updateNickName(msg,event){
     
        console.log(msg);
    return this.nickName=event.target.value;
    },
    updateHobby(event){
     
    return this.hobby=event.target.value;
    }
  
},

}).mount('#app1');


//vm.data.firstName 
//We should access like the above but vue does some magic inside so that we have to write less code
//writing less code is a process called "proxy".

// setTimeout(()=>{
// vm.firstName='Sakibur'
// },2000)


// Vue.createApp({
// data() {
//     return {
//         firstName:'Sakibur',
//         lastName:"Rahman"
//     }
// },

// }).mount('#app2');