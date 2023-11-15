let webstore = new Vue({
    el: '#app',

    data: {
        siteName: 'After School Activities - Enroll Now!',
        showSubject: true,
        order: {
            firstName: '',
            lastName: '',
            contactNum: '',
        },
        subjects: subjects || [],
        cart: [],
        sortOrder: '',
        searchQuery: '',
    },

    methods: {
        addToCart: function (subject) {
            this.cart.push(subject.id);
        },

        showCheckout1() {
            if (this.cart.length > 0) {
                this.showSubject = !this.showSubject;
            } else {
                alert('Add a lesson to the cart to proceed to checkout.');
            }
        },

        showCheckout2() {
            this.showSubject = !this.showSubject;
        },

        submitForm() {

            if (this.cart.length === 0) {
                this.showSubject = !this.showSubject;
                alert('Please add a lesson to the cart to place the order.');
            } else if (!this.order.firstName || !this.order.lastName || !this.order.contactNum) {
                alert('Please enter all required details before placing the order.');
            } else {
                this.showSubject = !this.showSubject;
                alert('You Have Successfully Applied :D');
                this.cart.length = 0;
                this.order.firstName = '';
                this.order.lastName = '';
                this.order.contactNum = '';
            }
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

        sortSubjects: function (order) {
            this.sortOrder = order;
        },
        
        clearSearch(){
            this.searchQuery= '';
        }

    },

    computed: {
        filteredSubjects: function () {
            let subjectsArray = this.subjects.slice(0);
    
            
        
        if (this.searchQuery) {
            const query = this.searchQuery.toLowerCase();
            subjectsArray = subjectsArray.filter(subject => subject.title.toLowerCase().includes(query) ||  subject.location.toLowerCase().includes(query));
            }

            function compareSubject(a, b) {
                const subjectA = a.title.toUpperCase();
                const subjectB = b.title.toUpperCase();
    
                if (subjectA > subjectB) return 1;
                if (subjectA < subjectB) return -1;
                return 0;
            }
    
            function compareLocation(a, b) {
                const locationA = a.location.toUpperCase();
                const locationB = b.location.toUpperCase();
    
                if (locationA > locationB) return 1;
                if (locationA < locationB) return -1;
                return 0;
            }
    
            function comparePrice(a, b) {
                return parseFloat(a.price) - parseFloat(b.price);
            }
    
            function compareSpaces(a, b) {
                return a.availableSpaces - b.availableSpaces;
            }
    
            if (this.sortOrder === 'ascSubject') {
                return subjectsArray.sort(compareSubject);
            } else if (this.sortOrder === 'descSubject') {
                return subjectsArray.sort((a, b) => -compareSubject(a, b));
            } else if (this.sortOrder === 'ascLocation') {
                return subjectsArray.sort(compareLocation);
            } else if (this.sortOrder === 'descLocation') {
                return subjectsArray.sort((a, b) => -compareLocation(a, b));
            } else if (this.sortOrder === 'ascPrice') {
                return subjectsArray.sort(comparePrice);
            } else if (this.sortOrder === 'descPrice') {
                return subjectsArray.sort((a, b) => -comparePrice(a, b));
            } else if (this.sortOrder === 'ascSpaces') {
                return subjectsArray.sort(compareSpaces);
            } else if (this.sortOrder === 'descSpaces') {
                return subjectsArray.sort((a, b) => -compareSpaces(a, b));
            }
    
            return subjectsArray;
        },
    },
});
