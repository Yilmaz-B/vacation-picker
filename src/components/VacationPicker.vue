<template>
    <div class="container">
        <h1>{{header}}</h1>
        <!-- <p>Teller= {{counter}}</p>
        <button v-on:click="counter++">+</button>
        <button v-on:click="counter--">-</button>
        <p>Teller 2= {{count}}</p>
        <button @click="increment()" class="btn btn-success">+</button>
        <button @click="decrement()" class="btn btn-danger">-</button> -->
        <ul class="list-group">
            <li class="list-group-item"  @click="cCountry(country)" v-for="country in countryData.countries" v-bind:key="country.id">
                {{country.id}} - {{country.name}}
            </li>
            <li v-for="name in name" v-bind:key="name">{{name}} + {{hoi}} = {{name + hoi}}</li>
            <li><button :disabled="isDisabled">Disable test button</button></li>
            <li><select name="list" id="list" v-for="numbers in number[0]" v-bind:key="numbers.index">
                    <option value="1" v-bind="number.index">1</option>
                    <option value="2" v-bind="number.index">2</option>
                    <option value="3" v-bind="number.index">3</option>
                </select></li>
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
            name: 1,
            hoi: 2,
            isDisabled: true,
            number: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        }
    },
    methods: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        },
        cCountry(country) {
            alert(`You selected: ${country.name}`)
        },
    }
};

</script>

<style scoped>

</style>