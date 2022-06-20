<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-6">
                <ul class="list-group">
                    <h2>Pick your next vacation</h2>
                    <li class="list-group-item" @click="selectCountry(index)" v-for="(country, index) in countryData.countries" v-bind:key="country.id">
                    {{country.id}} - {{country.name}}
                    </li>
                </ul><br>
                <h2>Add Country:</h2>
                <input type="text" v-model="newCountry" @keyup.enter="addCountry(newCountry)" class="form-control-lg" placeholder="New country...">
                <button @click="addCountry(newCountry)" class="btn btn-info">Add Country</button>
                <ul class="list-group">
                    <li class="list-group-item" v-for="(country, index) in newCountries" :key="index">{{country}}</li>
                    <h3>{{newCountry}}</h3>
                </ul>
                <ul class="list-group">
                    <h2>Destinations cheaper than:</h2>
                        <select class="form-control-lg" v-model="selectedCost" @change="filterCountries()">
                            <option v-for="(cost, index) in costs" :key="index" :value="cost">{{cost}}</option>
                        </select>
                    <li class="list-group-item" v-for="(country, index) in filteredCountries" :key="index">{{country.name}} (EUR: {{country.cost}})</li>
                </ul>
            </div>
            <div class="col-sm-6">
                <CollapsibleSection>
                <CountryDetail v-if="selectedCountry" @rating="onRating($event)" :country="selectedCountry" />
                </CollapsibleSection>
            </div>
        </div>
    </div>
</template>

<script>
import countryData from '@/data/countryData';
import CountryDetail from '@/components/CountryDetail';
import CollapsibleSection from "@/components/CollapsibleSection";

export default {
    name: 'VacationPicker',
    components: {CountryDetail},
    data(){
        return {
            CollapsibleSection,
            CountryDetail,
            countryData,
            header: 'Vue Vacation Picker',
            selectedCountryIndex: 0,
            newCountry: '',
            newCountries: [],
            selectedCost: 1000,
            costs: [1000, 2000, 3000, 4000, 5000],
            filteredCountries: [],
        }
    },
    methods: {
        selectCountry(index) {
            this.selectedCountryIndex = index;
            console.warn('click')
        },
        addCountry(){
            this.newCountries.push(this.newCountry);
            this.newCountry;
        },
        filterCountries(){
            this.filteredCountries = this.countryData.countries
            .filter(country => country.cost < this.selectedCost);
        },
        onRating(rating){
            this.countryData.countries[this.selectedCountryIndex].rating += rating;
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
    }
};

</script>

<style>
img {
    width: 500px;
}

.list-group{
    margin-top: 50px;
}
</style>
