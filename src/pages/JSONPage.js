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
                  <th scope="col">Nome</th>
                  <th scope="col">Specie</th>
                  <th scope="col">Pianeta</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="alieno in alieni" :key="alieno.nome">
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
  `
}

export default JSONPage;