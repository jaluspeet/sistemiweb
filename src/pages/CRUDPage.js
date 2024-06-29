const CRUDPage = {
  template: `
  <div class="container">
    <div class="row p-4">
      
      <div class="container table-responsive col-7 article-box p-4">
        <table class="table table-hover">
      
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

      <div class="container col-4 p-4">
        <section class="article-box">
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
          </div>
        </section>
      </div>
    
    </div>
  </div>
  `,
  data() {
    return {
      fruits: [],
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
    sortedFruits() {
      return this.fruits.slice().sort((a, b) => {
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
    editField(index, field) {
      this.editingIndex = index;
      this.editingField = field;
    },
    isEditing(index, field) {
      return this.editingIndex === index && this.editingField === field;
    },
    stopEditing() {
      this.editingIndex = null;
      this.editingField = null;
    },
    sortBy(column) {
      if (this.sortColumn === column) {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortColumn = column;
        this.sortDirection = 'asc';
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
    deleteSelectedFruits() {
      this.fruits = this.fruits.filter(fruit => !this.selectedFruits.includes(fruit));
      this.selectedFruits = [];
    },
    selectAllFruits(event) {
      if (event.target.checked) {
        this.selectedFruits = this.fruits.slice();
      } else {
        this.selectedFruits = [];
      }
    }
  },
  created() {
    fetch('/data/frutta.json')
      .then(response => response.json())
      .then(data => {
        this.fruits = data;
      });
  }
};

export default CRUDPage;

