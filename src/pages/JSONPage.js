const JSONPage = {
    template: `
    <div class="container">
        <div class="row m-4">
            <div class="container table-responsive col-md-11 article-box">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Specie</th>
                            <th scope="col">Pianeta</th>
                            <th scope="col">Descrizione</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="alieno in alieni" :key="alieno.nome">
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
            alieni: [
                {
                    nome: "Four Arms",
                    specie: "Tetramand",
                    pianeta: "Khronos",
                    descrizione: "Alieno umanoide con quattro braccia, molto forte e resistente."
                },
                {
                    nome: "Heatblast",
                    specie: "Pyronite",
                    pianeta: "Pyros",
                    descrizione: "Alieno simile a una statua di lava, controlla il fuoco e vola."
                },
                {
                    nome: "XLR8",
                    specie: "Kineceleran",
                    pianeta: "Kinetix",
                    descrizione: "Alieno simile a un gatto, corre velocemente e manipola il tempo."
                },
                {
                    nome: "Diamondhead",
                    specie: "Petrosapien",
                    pianeta: "Petropia",
                    descrizione: "Alieno composto da cristalli organici, manipola e cresce cristalli."
                },
                {
                    nome: "Grey Matter",
                    specie: "Galvan",
                    pianeta: "Galvan Prime",
                    descrizione: "Alieno piccolo ma incredibilmente intelligente, esperto in tecnologia."
                },
                {
                    nome: "Ripjaws",
                    specie: "Piscciss Volann",
                    pianeta: "Piscciss",
                    descrizione: "Alieno acquatico con mascelle potenti, veloce nell'acqua."
                },
                {
                    nome: "Stinkfly",
                    specie: "Lepidopterran",
                    pianeta: "Lepidopterra",
                    descrizione: "Alieno insettoide che vola e spara liquidi appiccicosi."
                },
                {
                    nome: "Upgrade",
                    specie: "Galvanic Mechamorph",
                    pianeta: "Galvan B",
                    descrizione: "Alieno composto da nano-tecnologia, fonde e migliora la tecnologia."
                },
                {
                    nome: "Ghostfreak",
                    specie: "Ectonurite",
                    pianeta: "Anur Phaetos",
                    descrizione: "Alieno fantasmagorico invisibile e intangibile."
                },
                {
                    nome: "Wildmutt",
                    specie: "Vulpimancer",
                    pianeta: "Vulpin",
                    descrizione: "Alieno bestiale privo di occhi, forte e agile."
                }
            ]
        };
    }
};

export default JSONPage;
