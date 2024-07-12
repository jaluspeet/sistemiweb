const JSONPage = {

  props: ['alieni'],

  template: `
    <div class="container">
      <div class="row">
        <div class="container col-lg-12 p-4">
          <div class="container article-box p-4">
            <table class="table table-responsive table-hover">
              <thead>
                <tr>
                  <th scope="col" @click="sortBy('nome')">Nome <span v-if="sortColumn === 'nome'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span></th>
                  <th scope="col" @click="sortBy('specie')">Specie <span v-if="sortColumn === 'specie'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span></th>
                  <th scope="col" @click="sortBy('pianeta')">Pianeta <span v-if="sortColumn === 'pianeta'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span></th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="alieno in sortedAlieni" :key="alieno.nome">
                  <td>{{ alieno.nome }}</td>
                  <td>{{ alieno.specie }}</td>
                  <td>{{ alieno.pianeta }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `,

  data() {
    return {
      sortColumn: '',
      sortDirection: 'asc'
    };
  },

  computed: {
    sortedAlieni() {
      return this.alieni.slice().sort((a, b) => {
        let modifier = this.sortDirection === 'asc' ? 1 : -1;
        if (this.sortColumn === 'nome') {
          return (a.nome > b.nome ? 1 : -1) * modifier;
        } else if (this.sortColumn === 'specie' || this.sortColumn === 'pianeta') {
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
}

export default JSONPage;
