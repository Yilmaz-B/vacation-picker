<template>
    <div class="container">
        <h1>{{header}}</h1>
        <p>Teller= {{counter}}</p>
        <button v-on:click="counter++">+</button>
        <button v-on:click="counter--">-</button>
        <p>Teller 2= {{count}}</p>
        <button @click="increment()" class="btn btn-success">+</button>
        <button @click="decrement()" class="btn btn-danger">-</button>
        <ul class="list-group">
            <li class="list-group-item" v-for="country in countryData.countries" v-bind:key="country.id">
                {{country.id}} - {{country.name}}
            </li>
        </ul>
    </div>
</template>

<script>
import countryData from '@/data/countryData'

export default {
    name: 'VacationPicker',
    data(){
        return {
            countryData,
            header: 'Vue Vacation Picker',
            counter: 0,
            count: 0,
        }
    },
    methods: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        }
    }
};

</script>

<style scoped>

</style>