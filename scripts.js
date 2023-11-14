let webstore = new Vue({
    el: '#app',

    data: {
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

    methods: {
        addToCart: function (subject) {
            this.cart.push(subject.id);
        },

        showCheckout() {
            if (this.cart.length > 0) {
                this.showSubject = !this.showSubject;
            } else {
                alert('Add a lesson to the cart to proceed to checkout.');
            }
        },

        submitForm() {
            alert('You Have Successfully Applied :D');
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

        canAddToCart: function (subject) {
            return subject.availableSpaces > this.cartCount(subject.id);
        },

        removeFromCart(id) {
            const index = this.cart.indexOf(id);
            if (index !== -1) {
                this.cart.splice(index, 1);
            }
        },

        getSubjectById(id) {
            return this.subjects.find(subject => subject.id === id);
        },

    },

    computed: {
        cartItemCount: function () {
            return this.cart.length || '';
        },

        sortedSubjects() {
            let subjectsArray = this.subjects.slice(0);
            function compare(a, b) {
                if (a.price > b.price)
                    return 1;
                if (a.price < b.price)
                    return -1;
                return 0;
            }
            return subjectsArray.sort(compare);
        },
    },
});