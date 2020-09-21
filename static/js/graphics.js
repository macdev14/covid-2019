let bgcolor = "#317dff";
let ctx = [];
let myChart = [];
let char = [];
const graphs = async () => {
  await fetch("https://covid19-brazil-api.now.sh/api/report/v1")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data);
      data.data.map((val, i) => {
        valid = [];
        const vals = Object.values(val);
        switch (i) {
          case 0:
            let bgcolor = "#317dff";
        }
        valid = vals.filter((e) => typeof e === "number" && e);
        console.log(valid);
        ctx[i] = document.getElementById(i.toString()).getContext("2d");
        char[i] = {
          type: "bar",
          data: {
            labels: ["Suspeitos", "Casos", "Mortes", "Negativos"],
            datasets: [
              {
                label: "",
                data: valid,
                backgroundColor: [
                  "rgba(255, 99, 132, 0)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 0)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          },
        };
        char[i].data.datasets.data = valid;
        myChart[i] = new Chart(
          document.getElementById(i.toString()).getContext("2d"),
          char[i]
        );

        /* this.setState(state =>({
          
         charts: [...state.charts, <Chart className="chart" key={i} state={vals[2]} uf={vals[1]} labels={['Casos', 'Mortes', 'Suspeitos', 'Negativos']} info={valid} bgcolor={bgcolor}/>],
         
     }));*/
      });
    });
};

graphs();
