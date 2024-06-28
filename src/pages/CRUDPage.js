const CRUDPage = {
  template: `
  <div class="container">
    <div class="row m-4">
      <div class="container table-responsive col-md-7 article-box">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col" @click="sortBy('name')">Nome <span v-if="sortColumn === 'name'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span></th>
              <th scope="col" @click="sortBy('gusto')">Gusto <span v-if="sortColumn === 'gusto'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span></th>
              <th scope="col" @click="sortBy('freschezza')">Freschezza <span v-if="sortColumn === 'freschezza'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span></th>
              <th scope="col">Azioni</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(fruit, index) in sortedFruits" :key="index">
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
              <td>
                <button @click="deleteFruit(index)" class="button-crud btn btn-danger">ELIMINA</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="container col-md-4 mt-4">
        <section class="article-box">
          <h2 class="text-adaptive">Aggiungi frutto</h2>
          <label class="text-adaptive">Nome:</label>
          <input v-model="newFruit.name" class="form-control"/>
          <label class="text-adaptive">Gusto:</label>
          <input v-model="newFruit.gusto" type="number" class="form-control"/>
          <label class="text-adaptive">Freschezza:</label>
          <input v-model="newFruit.freschezza" type="number" class="form-control"/>
          <button @click="addFruit" class="button-crud mt-4">AGGIUNGI</button>
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
      ],
      selectedFruit: null,
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
    deleteFruit(index) {
      this.fruits.splice(index, 1);
    }
  }
};

export default CRUDPage;

