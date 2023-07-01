// vm means view model.this is a naming convention.
const vm=Vue.createApp({
data() {
    return {
        firstName:'Sazzadur',
        lastName:"Rahman"
    }
},
// we used method because all the logic should be in js
//so instead of string literal we declared methods to show the fullName
//remember in arrow function $this will not work
methods: {
    fullName(){
        return  `${this.firstName.toUpperCase()} ${this.lastName.toUpperCase()}` 
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