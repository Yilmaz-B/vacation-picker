export default {
    methods: {
        getImgUrl(img) {
            console.log(img);
            return require('../assets/countries/' + img);
        }
    },
    created(){
        console.log('Components lifecycle hook created() called');
    }
}