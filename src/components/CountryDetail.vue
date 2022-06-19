<template>
     <h2>{{country.name}}:</h2>
        <ul class="list-group">
            <li class="list-group-item">
                {{country.id}}
                <span class="float-end">    
                    <button @click="setRating(1)"><img src="@/assets/like.png" class="like"></button>
                    <button @click="setRating(-1)"><img src="@/assets/like.png" class="rotate"></button>
                </span>
            </li>
            <li class="list-group-item">{{country.name}}</li>
            <li class="list-group-item">{{country.capital}}</li>
            <li class="list-group-item">{{country.details}}</li>
            <li class="list-group-item">€{{country.cost}}</li>
            <li class="list-group-item" v-if="isExpensive"><span class="badge alert-danger badge-pill">Expensive!</span></li>
            <li class="list-group-item" v-if="isOnSale"><span class="badge alert-success badge-pill">On Sale!</span></li>
            <li class="list-group-item"><img :src="getImgUrl(country.img)" class="img-fluid"></li>
            <li class="list-group-item">
                <span class="float-end badge alert-secondary badge-pill" v-if="country.rating !== 0">{{country.rating}}</span>
            </li>
        </ul>
</template>

<script>
import mixins from '@/mixins/mixins'

export default {
    name: 'CountryDetail',
    props: ['country'],
    mixins: [mixins],
    computed: {
        isExpensive() {
            return this.country.cost > 4000;
        },
        isOnSale() {
            return this.country.cost < 1000; 
        },
    },
    methods: {
        setRating(value){
            this.$emit('rating', value);
        },
        
    },
    emits: ['rating']
}
</script>

<style>
img {
    width: 350px;
}

.rotate{
    transform: rotateX(180deg);
}

.like, .rotate {
    width: 25px;
}
</style>