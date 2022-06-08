<template>
    <div class="container">
        
        <ul class="list-group">
            <li class="list-group-item" @click="selectCountry(index)" v-for="(country, index) in countryData.countries" v-bind:key="country.id">
                {{country.id}} - {{country.name}}
            </li><br><br><br>
        </ul>
        <h2>Other Countries:</h2>
        <input type="text" v-model="newCountry" @keyup.enter="addCountry(newCountry)" class="form-control-lg" placeholder="New country...">
        <button @click="addCountry(newCountry)" class="btn btn-info">Add Country</button>
        <ul class="list-group">
            <li class="list-group-item" v-for="(country, index) in newCountries" :key="index">{{country}}</li>
            <h3>{{newCountry}}</h3>
        </ul><br><br><br>
        
        <h2>Destinations cheaper than:</h2>
        <select class="form-control-lg" v-model="selectedCost" @change="filterCountries()">
            <option v-for="(cost, index) in costs" :key="index" value="cost">{{cost}}</option>
        </select>
        <ul class="list-group">
            <li v-for="(country, index) in filteredCountries" :key="index" class="list-group-item">{{country.name}} (EUR: {{country.cost}})</li>
        </ul><br><br><br>

        <h2>Selected:</h2>
        <ul class="list-group">
            <li class="list-group-item">{{selectedCountry.id}}</li>
            <li class="list-group-item">{{selectedCountry.name}}</li>
            <li class="list-group-item">{{selectedCountry.capital}}</li>
            <li class="list-group-item">{{selectedCountry.details}}</li>
            <li class="list-group-item" v-if="isExpensive"><span class="badge alert-danger badge-pill">Expensive!</span></li>
            <li class="list-group-item"><img :src="getImgUrl(selectedCountry.img)" :alt="selectedCountry.img" class="img-fluid"></li>
        </ul>
    </div>




    <!-- <h1>{{header}}</h1>
        <p>Teller= {{counter}}</p>
        <button v-on:click="counter++">+</button>
        <button v-on:click="counter--">-</button>
        <p>Teller 2= {{count}}</p>
        <button @click="increment()" class="btn btn-success">+</button>
        <button @click="decrement()" class="btn btn-danger">-</button> -->
        <!-- <li v-for="num1 in number1" v-bind:key="num1">{{num1}} + {{number2}} = {{num1 + number2}}</li>
            <li v-text="msg"></li>
            <li v-html="msg"></li>
            <li><button v-bind:disabled="isDisabled">Disable test button</button></li>
            <li><select name="list" id="list" v-for="numbers in number[0]" v-bind:key="numbers">
                    <option :value="number" v-bind="number.index">1</option>
                    <option :value="number" v-bind="number.index">2</option>
                    <option :value="number" v-bind="number.index">3</option>
                    <option :value="number" v-bind="number.index">4</option>
                    <option :value="number" v-bind="number.index">5</option>
                    <option :value="number" v-bind="number.index">6</option>
                    <option :value="number" v-bind="number.index">7</option>
                    <option :value="number" v-bind="number.index">8</option>
                    <option :value="number" v-bind="number.index">9</option>
                    <option :value="number" v-bind="number.index">10</option>
                </select></li> -->
</template>

<script>
import countryData from '@/data/countryData'
import mixins from '@/mixins/mixins'

export default {
    name: 'VacationPicker',
    mixins: [mixins],
    data(){
        return {
            countryData,
            header: 'Vue Vacation Picker',
            counter: 0,
            count: 0,
            number1: 1,
            number2: 2,
            isDisabled: true,
            number: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            msg: '<h2>Hallo</h2>',
            selectedCountryIndex: 2,
            newCountry: '',
            newCountries: [],
            selectedCost: 1000,
            costs: [1000, 2000, 3000, 4000, 5000, 6000],
            filteredCountries: []
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
        selectCountry(index) {
            this.selectedCountryIndex = index;
        },
        addCountry(){
            this.newCountries.push(this.newCountry);
            this.newCountry;
        },
        filterCountries(){
            this.filteredCountries = this.countryData.countries
            .filter(country => country.cost < this.selectedCost);
        }
    },
    computed: {
        selectedCountry() {
            console.log('selectedCountry aangeroepen');
            return {
                // spread operator
                id: this.countryData.countries[this.selectedCountryIndex].id,
                name: this.countryData.countries[this.selectedCountryIndex].name,
                capital: this.countryData.countries[this.selectedCountryIndex].capital,
                cost: this.countryData.countries[this.selectedCountryIndex].cost,
                details: this.countryData.countries[this.selectedCountryIndex].details,
                img: this.countryData.countries[this.selectedCountryIndex].img,
            }
        },
        isExpensive() {
            return this.countryData.countries[this.selectedCountryIndex].cost > 4000;
        }
    }
};

</script>

<style>
img {
    width: 500px;
}
</style>