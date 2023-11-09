let webstore = new Vue({
    el:'#app',

    data:
    {
        siteName: 'After School Activities',

        subject:{
            title: "Math",
            location: "Dubai",
            image: "mathicon.png",
            price: 350 + "AED",
            space:10,               //User/Student View
            availableSpaces:10      //Inventory View
        }
    },

    methods:
    {

    },

    computed:
    {
        cartItemCount:  function() {
            return this.cartItemCount.length || '';
        },

        canAddToCart:   function() {
            return this.product.availableSpaces > this.cartItemCount;
        }
    }



});