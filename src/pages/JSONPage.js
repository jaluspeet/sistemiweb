const JSONPage = {
  template: `
  <div class="container">
    <div class="row">
      <div class="container col-lg-12 article-box p-4">
        <table class="table table-responsive table-hover">
          <thead>
            <tr>
              <th scope="col" @click="sortBy('nome')">Nome <span v-if="sortColumn === 'nome'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span></th>
              <th scope="col" @click="sortBy('specie')">Specie <span v-if="sortColumn === 'specie'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span></th>
              <th scope="col" @click="sortBy('pianeta')">Pianeta <span v-if="sortColumn === 'pianeta'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span></th>
              <th scope="col">Descrizione</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="alieno in sortedAlieni" :key="alieno.nome">
              <td>{{ alieno.nome }}</td>
              <td>{{ alieno.specie }}</td>
              <td>{{ alieno.pianeta }}</td>
              <td>{{ alieno.descrizione }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  `,
  data() {
    return {
      alieni: [],
      sortColumn: '',
      sortDirection: 'asc'
    };
  },
  computed: {
    sortedAlieni() {
      return this.alieni.slice().sort((a, b) => {
        let modifier = this.sortDirection === 'asc' ? 1 : -1;
        if (this.sortColumn === 'nome' || this.sortColumn === 'specie' || this.sortColumn === 'pianeta') {
          return (a[this.sortColumn] > b[this.sortColumn] ? 1 : -1) * modifier;
        }
        return 0;
      });
    }
  },
  methods: {
    sortBy(column) {
      if (this.sortColumn === column) {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortColumn = column;
        this.sortDirection = 'asc';
      }
    }
  },
  created() {
    fetch('/data/alieni.json')
      .then(response => response.json())
      .then(data => {
        this.alieni = data;
      });
  }
};

export default JSONPage;

