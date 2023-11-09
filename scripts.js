let webstore = new Vue({
    el:'#app',

    data:
    {
        siteName: 'After School Activities',
        showSubject: true,

        order: {
            firstName: '',
            lastName: '',
            contactNum: '',
            
        },

        subject:{
            id: 1001,
            title: "Math",
            location: "Dubai",
            image: "mathIcon.png",
            price: 350 + "AED",
            space:10,               //User Student View
            availableSpaces:10,      //Inventory View
        },
        cart:[],
    },

    methods:
    {
        addToCart:function () {
            this.cart.push(this.subject.id);    //console.log(this.cart)
            this.subject.space--;
        },

        showCheckout(){
            this.showSubject = !this.showSubject;
        },

        submitForm() {
            {alert('You Have Succesfully Applied :D')}
        }
    },

    computed:
    {
        // cartItemCount:  function() {
        //     return this.cartItemCount.length || '';
        // },

        canAddToCart:   function() {
            return this.subject.availableSpaces > this.cart.length;
        },
    },
});