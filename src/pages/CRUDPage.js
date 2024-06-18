const CRUDPage = {
	template: `
	<div class="container">
		<div class="row m-4">
			<div class="container table-responsive col-md-11 article-box">
				<table class="table table-striped table-hover">
					<thead>
						<tr>
							<th scope="col">Nome</th>
							<th scope="col">Gusto</th>
							<th scope="col">Freschezza</th>
							<th scope="col">Azioni</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(fruit, index) in fruits" :key="index">
							<td>{{ fruit.name }}</td>
							<td>{{ fruit.gusto }}</td>
							<td>{{ fruit.freschezza }}</td>
							<td>
								<button @click="deleteFruit(index)" class="button-crud btn btn-danger">Elimina</button>
								<button @click="selectFruit(index)" class="button-crud btn btn-primary">Modifica</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<div class="row m-4">
			<div class="container col-md-6">
				<section class="article-box">
					<h2 class="text-adaptive">Modifica frutto</h2>
					<div v-if="selectedFruit !== null">
						<label class="text-adaptive">Nome:</label>
						<input v-model="selectedFruit.name" class="form-control"/>
						<label class="text-adaptive">Gusto:</label>
						<input v-model="selectedFruit.gusto" type="number" class="form-control"/>
						<label class="text-adaptive">Freschezza:</label>
						<input v-model="selectedFruit.freschezza" type="number" class="form-control"/>
						<button @click="updateFruit" class="button-crud btn btn-success mt-2">Aggiorna</button>
					</div>
					<div v-else>
						<p class="text-adaptive">Seleziona un frutto per modificarlo.</p>
					</div>
				</section>
			</div>

			<div class="container col-md-6">
				<section class="article-box">
					<h2 class="text-adaptive">Aggiungi frutto</h2>
					<label class="text-adaptive">Nome:</label>
					<input v-model="newFruit.name" class="form-control"/>
					<label class="text-adaptive">Gusto:</label>
					<input v-model="newFruit.gusto" type="number" class="form-control"/>
					<label class="text-adaptive">Freschezza:</label>
					<input v-model="newFruit.freschezza" type="number" class="form-control"/>
					<button @click="addFruit" class="button-crud btn btn-primary mt-2">Aggiungi</button>
				</section>
			</div>
		</div>
	</div>
  `,
	data() {
		return {
			fruits: [
				{ name: 'banana', gusto: 70, freschezza: 30 },
				{ name: 'mela', gusto: 60, freschezza: 80 },
				{ name: 'ananas', gusto: 65, freschezza: 70 },
				{ name: 'pesca', gusto: 80, freschezza: 50 },
				{ name: 'pera', gusto: 45, freschezza: 45 },
				{ name: 'kiwi', gusto: 70, freschezza: 50 },
				{ name: 'albicocca', gusto: 55, freschezza: 60 },
				{ name: 'prugna', gusto: 65, freschezza: 60 },
				{ name: 'fragola', gusto: 80, freschezza: 55 },
				{ name: 'pompelmo', gusto: 50, freschezza: 65 },
				{ name: 'arancia', gusto: 70, freschezza: 80 },
				{ name: 'mandarino', gusto: 60, freschezza: 80 },
				{ name: 'clementino', gusto: 65, freschezza: 70 },
				{ name: 'limone', gusto: 30, freschezza: 95 },
				{ name: 'susina', gusto: 70, freschezza: 65 },
				{ name: 'giuggiola', gusto: 60, freschezza: 15 },
				{ name: 'melone', gusto: 70, freschezza: 60 },
				{ name: 'caco', gusto: 60, freschezza: 30 },
			],
			selectedFruit: null,
			newFruit: {
				name: '',
				gusto: '',
				freschezza: ''
			}
		};
	},
	methods: {
		selectFruit(index) {
			this.selectedFruit = { ...this.fruits[index], index };
		},
		updateFruit() {
			if (this.selectedFruit !== null && this.selectedFruit.index !== undefined) {
				this.fruits[this.selectedFruit.index] = {
					name: this.selectedFruit.name,
					gusto: this.selectedFruit.gusto,
					freschezza: this.selectedFruit.freschezza
			  	};

				this.fruits = [...this.fruits];
				this.selectedFruit = null;
			}
		},
		addFruit() {
			if (this.newFruit.name && this.newFruit.gusto && this.newFruit.freschezza) {
				this.fruits.push({
					name: this.newFruit.name,
					gusto: this.newFruit.gusto,
					freschezza: this.newFruit.freschezza
				});
					this.newFruit.name = '';
					this.newFruit.gusto = '';
					this.newFruit.freschezza = '';
			}
		},
		deleteFruit(index) {
			this.fruits.splice(index, 1);
		}
	}
};

export default CRUDPage;

