
Vue.component('node', {
    data: function () {
        return {
            open: false
        };
    },
    props: ['id', 'name', 'children'],
    computed: {
        classes: function () {
            return {
                node: true,
                open: this.open,
                leaf: this.children.length === 0
            }
        },
        openStatus: function () {
            return this.children.length > 0 && this.open;
        }
    },
    template: '#node_template'
});

Vue.component('tree', {
    data: function () {
        return {
        };
    },
    props: ['id', 'data'],
    template: '#tree_template'
});



var vm = new Vue({
    el: '#app',
    data: {
        data: null
    },
    created: function () {
        this.$http.get('./data.json')
            .then(function (res) {
                this.data = res.body;
            }, function (error) {
                console.log(error)
            });
    }
});
