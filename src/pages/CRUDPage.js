const CRUDPage = {

  // il JSON viene passato come prop da main.js
  props: ['state'],

  template: `
    <div class="container">
      <div class="row">
        <div class="container col-lg-6 p-4">
          <div class="container article-box p-4">
            <table class="table table-responsive table-hover">
              
              <thead>
                <tr>
                  <th scope="col"><input type="checkbox" @click="selectAllFruits"/></th>
                  <th scope="col" @click="sortBy('name')">Nome <span v-if="sortColumn === 'name'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span></th>
                  <th scope="col" @click="sortBy('gusto')">Gusto <span v-if="sortColumn === 'gusto'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span></th>
                  <th scope="col" @click="sortBy('freschezza')">Freschezza <span v-if="sortColumn === 'freschezza'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span></th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="(fruit, index) in sortedFruits" :key="index">
                  <td><input type="checkbox" :value="fruit" v-model="selectedFruits" /></td>

                  <td @click="editField(index, 'name')">
                    <span v-if="!isEditing(index, 'name')">{{ fruit.name }}</span>
                    <input v-else v-model="fruit.name" @blur="stopEditing" />
                  </td>

                  <td @click="editField(index, 'gusto')">
                    <span v-if="!isEditing(index, 'gusto')">{{ fruit.gusto }}</span>
                    <input v-else type="number" v-model="fruit.gusto" @blur="stopEditing" />
                  </td>

                  <td @click="editField(index, 'freschezza')">
                    <span v-if="!isEditing(index, 'freschezza')">{{ fruit.freschezza }}</span>
                    <input v-else type="number" v-model="fruit.freschezza" @blur="stopEditing" />
                  </td>
                </tr>
              </tbody>

            </table>
          </div>
        </div>

        <div class="container col-lg-6 p-4">
  
          <section class="container article-box p-4">
            <h2 class="text-adaptive">Aggiungi / Elimina</h2>

            <label class="text-adaptive">Nome:</label>
            <input v-model="newFruit.name" class="form-control"/>

            <label class="text-adaptive">Gusto:</label>
            <input v-model="newFruit.gusto" type="number" class="form-control"/>

            <label class="text-adaptive">Freschezza:</label>
            <input v-model="newFruit.freschezza" type="number" class="form-control"/>

            <div class="button-group mt-4">
              <button @click="addFruit" class="button-crud p-2">AGGIUNGI</button>
              <button @click="deleteSelectedFruits" class="button-crud p-2">ELIMINA</button>
              <button @click="togglePixiFrutta" class="button-crud p-2 mt-2">NINJA</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  `,

  data() {
    return {
      selectedFruits: [],
      newFruit: {
        name: '',
        gusto: '',
        freschezza: ''
      },
      editingIndex: null,
      editingField: null,
      sortColumn: '',
      sortDirection: 'asc'
    };
  },

  computed: {

    // Ordina i frutti in base alla colonna selezionata
    sortedFruits() {
      return this.state.fruits.slice().sort((a, b) => {
        let modifier = this.sortDirection === 'asc' ? 1 : -1;
        if (this.sortColumn === 'name') {
          return (a.name > b.name ? 1 : -1) * modifier;
        } else if (this.sortColumn === 'gusto' || this.sortColumn === 'freschezza') {
          return (a[this.sortColumn] - b[this.sortColumn]) * modifier;
        }
        return 0;
      });
    }
  },

  methods: {

    // Inizia la modifica di un campo
    editField(index, field) {
      this.editingIndex = index;
      this.editingField = field;
    },
    isEditing(index, field) {
      return this.editingIndex === index && this.editingField === field;
    },

    // Interrompe la modifica di un campo
    stopEditing() {
      this.editingIndex = null;
      this.editingField = null;
    },

    // Ordina i frutti in base alla colonna selezionata
    sortBy(column) {
      if (this.sortColumn === column) {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortColumn = column;
        this.sortDirection = 'asc';
      }
    },

    // Aggiunge un nuovo frutto
    addFruit() {
      if (this.newFruit.name && this.newFruit.gusto && this.newFruit.freschezza) {
        this.state.fruits.push({
          name: this.newFruit.name,
          gusto: this.newFruit.gusto,
          freschezza: this.newFruit.freschezza
        });
        this.newFruit.name = '';
        this.newFruit.gusto = '';
        this.newFruit.freschezza = '';
      }
    },

    // Elimina i frutti selezionati
    deleteSelectedFruits() {
      this.state.fruits = this.state.fruits.filter(fruit => !this.selectedFruits.includes(fruit));
      this.selectedFruits = [];
    },

    // Seleziona o deseleziona tutti i frutti
    selectAllFruits(event) {
      if (event.target.checked) {
        this.selectedFruits = this.state.fruits.slice();
      } else {
        this.selectedFruits = [];
      }
    },

   // Mostra o nasconde il canvas ninja
   togglePixiFrutta() {
      const pixiFruttaDiv = document.getElementById('pixi-frutta');
      if (pixiFruttaDiv.style.display === 'none') {
        pixiFruttaDiv.style.display = 'block';
      } else {
        pixiFruttaDiv.style.display = 'none';
      }
    }
  },
};

export default CRUDPage;
