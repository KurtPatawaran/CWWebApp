let webstore = new Vue({
    el: '#app',

    data:
    {
        siteName: 'After School Activities',
        showSubject: true,

        order: {
            firstName: '',
            lastName: '',
            contactNum: '',

        },


        subjects: subjects,
        cart: [],
    },

    methods:
    {
        addToCart: function (subject) {
            this.cart.push(subject.id);    //console.log(this.cart)
            this.subject.space--;
        },



        showCheckout() { //If cart is empty, Prompt the user to choose a subject
            // if (this.cart.length > 0) {
            this.showSubject = !this.showSubject;
            // } else {
            //     alert('Add an item to the cart to proceed to checkout.');
            // }
        },

        submitForm() {
            { alert('You Have Succesfully Applied :D') }
        },

        cartCount(id) {
            let count = 0;
            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i] === id) {
                    count++
                }
            }
            return count;
        },

        // getSubjects() {
        //     if (typeof subjects !== "undefined") {
        //         this.subject = subjects;
        //     }
        // },

    },

    computed:
    {
        cartItemCount: function () {
            return this.cart.length || ''; //This determines the number in the cart . Used in codnition such as Buy Now! in subject spaces
        },

        // canAddToCart:   function() {
        //     return this.subject.availableSpaces > this.cart.length; //THis condition check if theres more available spaces than the cart, If true user can add to the cart
        // },

        sortedSubjects() {
            let subjectsArray = this.subjects.slice(0);
            function compare(a, b) {
                if (a.price > b.price)
                    return 1;
                if (a.price < b.price)
                    return -1;
                return 0;
            }
            return subjectArray.sort(compare);
        }

    },


});