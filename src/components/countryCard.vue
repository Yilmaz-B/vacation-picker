<template>
	<div class="card map">
		<div class="d-flex w-100 countryCardTop">
			<div class="countryCardName">
				<h4 class="card-title p-2">
					<strong> {{ selectedCountry.name }}</strong>
				</h4>
			</div>
			<div class="cardIcon">
				<router-link to="/">
					<button type="button" class="x-font btn-close"></button>
				</router-link>
			</div>
		</div>
		<img :src="Img(selectedCountry.img)" class="card-img-center" alt="..." />
		<div class="card-body">
			<p class="card-text text-center">
				Details: {{ selectedCountry.details }}
			</p>
			<p class="card-text text-center">
				Capital: <strong>{{ selectedCountry.capital }}</strong>
			</p>
			<p class="text-center card-text">
				Price: €{{ selectedCountry.cost}}
			</p>
			<p class="card-text text-center" v-if="isExpensive"><span class="badge alert-danger badge-pill">Expensive!</span></p>
            <p class="card-text text-center" v-if="isOnSale"><span class="badge alert-success badge-pill">On Sale!</span></p>
			<button class="btn likeBtn p-0 card-text"
				@click="this.store.$state[selectedCountry.name]++">
				Like!
			</button>
			<button class="btn likeBtn p-0 card-text dislike"
				@click="this.store.$state[selectedCountry.name]--">
				Dislike!
			</button>
		</div>
	</div>
</template>
<script>
	// import vacationList from "./vacationList.vue";
	import { vacationMixin } from "@/mixins/vactionMixin";

	export default {
		mixins: [vacationMixin],
		name: "countryCard",
		computed: {
			routeId() {
				return this.$route.params.id;
			},

			selectedCountry() {
				return this.country.countries.find(
					(index) => index.name === this.routeId
				);
			},
			isExpensive() {
            return this.selectedCountry.cost > 2000;
			},
			isOnSale() {
				return this.selectedCountry.cost < 1000; 
			},
		},
	};
</script>
<style scoped>
	.map {
		width: 50rem !important;
	}
	img {
		height: 27rem !important;
	}
	.x-font {
		font-size: 1.2rem !important;
		margin-right: 0.9rem !important;
	}
	.countryCardTop {
		display: flex !important;
		align-items: baseline !important;
		justify-content: center !important;
		position: relative;
	}
	.cardIcon {
		padding-right: 0.2rem !important;
		position: absolute !important;
		right: 1rem;
		top: 20%;
	}

	.cardIcon:hover, .likeBtn:hover {
		cursor: pointer;
		transform: scale(1.2);
		font-weight: bolder !important;
		transition: 0.2s ease;
		color: red !important;
	}

	.dislike {
		margin-left: 15px;
	}

	.others {
		
	}
</style>
