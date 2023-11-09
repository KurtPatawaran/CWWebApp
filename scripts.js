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

        showCheckout(){ //If cart is empty, Prompt the user to choose a subject
            if (this.cart.length > 0) {
                this.showSubject = !this.showSubject;
            } else {
                alert('Add an item to the cart to proceed to checkout.');
            }
        },

        submitForm() {
            {alert('You Have Succesfully Applied :D')}
        }
    },

    computed:
    {
        cartItemCount: function () {
            return this.cart.length || 0; //This determines the number in the cart . Used in codnition such as Buy Now! in subject spaces
        },

        canAddToCart:   function() {
            return this.subject.availableSpaces > this.cart.length; //THis condition check if theres more available spaces than the cart, If true user can add to the cart
        },


    },
});