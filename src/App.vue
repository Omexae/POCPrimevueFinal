<template>
    <div>
        <ScrollPanel class="custom">
          <Chart type="bar" :data="basicData" id="chart" :options="options" @click="addData"/>
          <Chart ref="primeChart" type="pie" :data="chartData" id="chart" :options="options" />
          <Chart type="line" :data="LineData" id="chart" :options="options" />
          <Chart type="polarArea" :data="PolarData" id="chart" :options="options" />   
          <Chart type="radar" :data="RadarData" id="chart" :options="options" />
          <Chart type="bar" :data="BarData" id="chart" :options="options" />
          <Button icon="pi pi-minus" @click="tryMagisoft"  />
          <Button class="pi pi-replay" @click="getJsonData" />
        </ScrollPanel>
      </div>
</template>

<script>
import DataJson from "./data.json";             //
import testdataJson from "./testdata.json"      // Lignes permettant d'importer les données venant de fichier JSON
import testdataMGJson from "./testdataMG.json"  // 


export default {
  data(){
    return{
      msg: "5448",
      TestDataMG: testdataMGJson, //
      TestData: testdataJson,     // Créér des variables JavaScript qui contiennent les données importées est nécéssaire
      JsonData : DataJson,        // pour pouvoir les exploiter ensuite
      basicData: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				datasets: [
					{
						label: 'My First dataset',
						backgroundColor: '#42A5F5',
						data: [65, 59, 80, 81, 56, 55, 40],
					},
					{
						label: 'My Second dataset',
						backgroundColor: '#9CCC65',
						data: [28, 48, 40, 19, 86, 27, 90]
					}
				]
			},
      chartData: {
                labels: ['A','B','C'],
                datasets: [
                    {
                        data: DataJson,
                        backgroundColor: ["#42A5F5","#66BB6A","#FFA726"],
                        hoverBackgroundColor: ["#64B5F6","#81C784","#FFB74D"]
                    }
                ]
            },
      LineData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'First Dataset',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        borderColor: '#42A5F5',
                        tension: .4
                    },
                    {
                        label: 'Second Dataset',
                        data: [28, 48, 40, 19, 86, 27, 90],
                        fill: false,
                        borderColor: '#FFA726',
                        tension: .4
                    }
                ]
            },
      PolarData: {
                datasets: [{
                    data: [11,16,7,3,14],
                    backgroundColor: ["#42A5F5","#66BB6A","#FFA726","#26C6DA","#7E57C2"],
                    label: 'My dataset'
                }],
                labels: ["Blue","Green","Yellow","Cyan","Purple"]
            },
      RadarData: {
                labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
                datasets: [
                    {
                        label: 'My First dataset',
                        backgroundColor: 'rgba(179,181,198,0.2)',
                        borderColor: 'rgba(179,181,198,1)',
                        pointBackgroundColor: 'rgba(179,181,198,1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(179,181,198,1)',
                        data: [65, 59, 90, 81, 56, 55, 40]
                    },
                    {
                        label: 'My Second dataset',
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        pointBackgroundColor: 'rgba(255,99,132,1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(255,99,132,1)',
                        data: [28, 48, 40, 19, 96, 27, 100]
                    }
                ]
            },
      BarData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    type: 'line',
                    label: 'Dataset 1',
                    borderColor: '#42A5F5',
                    borderWidth: 2,
                    fill: false,
                    data: [50,25,12,48,56,76,42]
                }, {
                    type: 'bar',
                    label: 'Dataset 2',                                                                                                               
                    backgroundColor: '#66BB6A',
                    data: [21,84,24,75,37,65,34],
                    borderColor: 'white',
                    borderWidth: 2
                }, {
                    type: 'bar',
                    label: 'Dataset 3',
                    backgroundColor: '#FFA726',
                    data: [41,52,24,74,23,21,32]
                }]
            },
      options:{
        responsive: true,
        hoverMode:'index',
        maintainAspectRatio : true,
        autoPadding : false,
      }
    }
  },
  methods:{
    addData(){
      /*Permet de créer un nouveau graphe à la place du premier graphe du site en utlisant des données venant des fichiers JSON
      Se déclenche lorsqu'on clique sur le premier graphe*/
      this.basicData = {
        labels:['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
        datasets:[
          {
            label:'Premier dataset',
            backgroundColor: 'green',
            data: this.TestData,
          },
          {
            label:'Deuxième dataset',
            backgroundColor: 'purple',
            data: this.TestDataMG,
          },
        ],
      };
      try{
        CefSharp.PostMessage("Bar chart changed");
      }
      catch{
        console.log("Won't bring up any message if you are not in Magisoft")
      }
    },
    tryMagisoft(){
      /*Permet d'envoyer un message vers Magisoft
      Il y un bug logiciel : ne peux envoyer que le premier caractère du message*/
      try{
        CefSharp.PostMessage(this.msg.toString());
          }
      catch{
        console.log("Won't bring up any message if you are not in Magisoft")
          }
      
    },
    getJsonData(){
      /*Création d'un nouveau graphe en utilisant des données venant d'un fichier JSON
      Se déclenche lorsqu'on clique sur le bouton "replay" tout en bas de la page
      Vient modifier le deuxième graphe du site, mais ne change rien en réalité car les données JSON sont les mêmes que celles déja utilisées
      La fonction ne sert que de modèle*/
      this.chartData = {
        labels: ['A','B','C'],
        datasets: [
          {
            data: this.JsonData, 
            backgroundColor: ["#42A5F5","#66BB6A","#FFA726"],
            hoverBackgroundColor: ["#64B5F6","#81C784","#FFB74D"]
          }
        ],
      };
      try{
        CefSharp.PostMessage("Circle chart changed");
      }
      catch{
      console.log("Won't bring up any message if you are not in Magisoft")
      }
   }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  background-color:whitesmoke ;
  text-align: center;
}
#btn{
  text-align: center;
  background-color: rgb(129, 6, 129);
  color: rgb(9, 170, 9);
}
#RseBtn{
  background-color: rgb(129, 6, 129);
  color: rgb(9, 170, 9);
  width: 2rem;
  height: 1rem;
}
#charts{
  text-align:center;
  background-color: blanchedalmond;
}
#chart{
  padding-bottom: 10rem;
}
#charts.p-chart{
  max-width: 100vw;
  width: 100vw;
}
.custom .p-scrollpanel-wrapper {
    border-right: 9px solid #f4f4f4;
}
.custom .p-scrollpanel-bar {
    background-color: #1976d2;
    opacity: 1;
    transition: background-color .3s;
}
.custom .p-scrollpanel-bar:hover {
    background-color: #135ba1;
}
.custom {
  align-content: center;
  text-align: center;
  width: 100vw;
  height: 100vh;
}
</style>
