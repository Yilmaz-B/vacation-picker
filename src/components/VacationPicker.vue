<template>
    <div class="container">
        
        <ul class="list-group">
            <li class="list-group-item" @click="selectCountry(index)" v-for="(country, index) in countryData.countries" v-bind:key="country.id">
                {{country.id}} - {{country.name}}
            </li>
            <li class="list-group-item" @click="goBack()"><button>Back</button></li>
        </ul><br><br><br>
        <h2>{{selectedCountry.name}}:</h2>
        <ul class="list-group">
            <li class="list-group-item">{{selectedCountry.id}}</li>
            <li class="list-group-item">{{selectedCountry.name}}</li>
            <li class="list-group-item">{{selectedCountry.capital}}</li>
            <li class="list-group-item">{{selectedCountry.details}}</li>
            <li class="list-group-item">€{{selectedCountry.cost}}</li>
            <li class="list-group-item" v-if="isExpensive"><span class="badge alert-danger badge-pill">Expensive!</span></li>
            <li class="list-group-item" v-if="isOnSale"><span class="badge alert-success badge-pill">On Sale!</span></li>
            <li class="list-group-item"><img :src="getImgUrl(selectedCountry.img)" :alt="selectedCountry.img" class="img-fluid"></li>
        </ul>
        <h2>Other Countries:</h2>
        <input type="text" v-model="newCountry" @keyup.enter="addCountry(newCountry)" class="form-control-lg" placeholder="New country...">
        <button @click="addCountry(newCountry)" class="btn btn-info">Add Country</button>
        <ul class="list-group">
            <li class="list-group-item" v-for="(country, index) in newCountries" :key="index">{{country}}</li>
            <h3>{{newCountry}}</h3>
        </ul><br><br><br>
    </div>
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
            selectedCountryIndex: 2,
            newCountry: '',
            newCountries: [],
            filteredCountries: []
        }
    },
    methods: {
        selectCountry(index) {
            this.selectedCountryIndex = index;
        },
        addCountry(){
            this.newCountries.push(this.newCountry);
            this.newCountry;
        },
        filterCountries(){
            this.filteredCountries = this.countryData.countries.filter(country => country.cost < this.selectedCost);
            console.log(this.countryData.countries.filter.country.cost);
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
        },
        isOnSale() {
            return this.countryData.countries[this.selectedCountryIndex].cost < 1000; 
        },
        goBack() {
            return this.countryData.countries[this.selectedCountryIndex].id - 1;
        }
    }
};

</script>

<style>
img {
    width: 500px;
}
</style>
