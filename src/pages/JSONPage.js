const JSONPage = {
    template: `
    <div class="container article-box mt-3">
        <h1>Alieni Ben 10 presenti nell'Omnitrix</h1>
        <div style="overflow-x:auto">
            <table class="table table-dark custom-table">
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
    `,
    data() {
        return {
            alieni: [
                {
                    nome: "Four Arms",
                    specie: "Tetramand",
                    pianeta: "Khronos",
                    descrizione: "Four Arms è un alieno umanoide con quattro braccia. È molto forte e resistente, e può anche allungare e contorcere le sue braccia a piacimento."
                },
                {
                    nome: "Heatblast",
                    specie: "Pyronite",
                    pianeta: "Pyros",
                    descrizione: "Heatblast è un alieno simile a una statua di lava che può controllare il fuoco e creare palle di fuoco. È anche in grado di volare e resistere a temperature estreme."
                },
                {
                    nome: "XLR8",
                    specie: "Kineceleran",
                    pianeta: "Kinetix",
                    descrizione: "XLR8 è un alieno simile a un gatto che può correre a velocità incredibili e saltare grandi distanze. È anche in grado di accelerare o rallentare il tempo."
                },
                {
                    nome: "Diamondhead",
                    specie: "Petrosapien",
                    pianeta: "Petropia",
                    descrizione: "Diamondhead è un alieno con un corpo composto da cristalli organici. Può manipolare e crescere cristalli dal suo corpo."
                },
                {
                    nome: "Grey Matter",
                    specie: "Galvan",
                    pianeta: "Galvan Prime",
                    descrizione: "Grey Matter è un alieno piccolo ma incredibilmente intelligente. È un esperto in tecnologia e meccanica."
                },
                {
                    nome: "Ripjaws",
                    specie: "Piscciss Volann",
                    pianeta: "Piscciss",
                    descrizione: "Ripjaws è un alieno acquatico con potenti mascelle e una coda simile a quella di un pesce. È estremamente veloce nell'acqua."
                },
                {
                    nome: "Stinkfly",
                    specie: "Lepidopterran",
                    pianeta: "Lepidopterra",
                    descrizione: "Stinkfly è un alieno insettoide che può volare e sparare liquidi appiccicosi dai suoi occhi."
                },
                {
                    nome: "Upgrade",
                    specie: "Galvanic Mechamorph",
                    pianeta: "Galvan B",
                    descrizione: "Upgrade è un alieno composto da nano-tecnologia vivente. Può fondersi con qualsiasi tecnologia e migliorarla."
                },
                {
                    nome: "Ghostfreak",
                    specie: "Ectonurite",
                    pianeta: "Anur Phaetos",
                    descrizione: "Ghostfreak è un alieno fantasmagorico che può diventare invisibile e intangibile, oltre a possedere altri."
                },
                {
                    nome: "Wildmutt",
                    specie: "Vulpimancer",
                    pianeta: "Vulpin",
                    descrizione: "Wildmutt è un alieno bestiale privo di occhi ma dotato di sensi acuti. È molto forte e agile."
                }
            ]
        };
    }
};

export default JSONPage;
