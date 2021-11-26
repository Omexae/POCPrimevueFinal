<template>
  <div class="p-d-block" id="Welcometext">
    <!--<InputText v-model="text"/>
    <Button label="Greet" icon="pi pi-user" @click="greet" id="btn"></Button>
    {{text}}-->
    <Toast />
    Click on the header corresponding to the KPI you want to get informations about !
  </div>
  <TabView scrollable>
    <TabPanel header="Sample">
      <div v-if="hidden" id="charts">
        <div class="p-d-flex" >
          <Chart type="bar" :data="basicData" id="chart" :options="options" :width="375" :height="250" class="p-d-flex"/>
          <Chart ref="primeChart" type="pie" :data="chartData" id="chart" :width="375" :height="250" :options="options" class="p-d-flex"/>
          <Chart type="line" :data="LineData" id="chart" :options="options" :width="375" :height="250" class="p-d-flex"/>
          <div class="p-d-block">
            <Button label ="TestAnotherSet" v-bind:badge="RSEdata" icon="pi pi-chart-bar" id="RseBtn" class="p-d-block" @click="changeInterface"></Button>
            <Button label ="Test1" v-bind:badge="RSEdata1" icon="pi pi-percentage" id="RseBtn" class="p-d-block"></Button>
        </div>
        </div>
        <div class="p-d-flex">
          <Chart type="polarArea" :data="PolarData" id="chart" :width="375" :height="250" :options="options" class="p-d-inline"/>
          <Chart type="radar" :data="RadarData" id="chart" :width="375" :height="250" :options="options" class="p-d-inline"/>
          <Chart type="bar" :data="BarData" id="chart" :width="375" :height="250" :options="options" class="p-d-inline"/>
          <div class="p-d-block">
            <Button label ="Test2" v-bind:badge="RSEdata2" icon="pi pi-key" id="RseBtn" class="p-d-block" ></Button>
            <Button label ="TestingDataFromMagisoft" v-bind:badge="RSEdata3" icon="pi pi-heart" id="RseBtn" class="p-d-block" @click="addData"></Button>
          </div>
        </div>
      </div>
      <div v-if="!hidden">
        Bring up new interface here with charts and all
        <Button label ="TestAnotherSet" v-bind:badge="RSEdata" icon="pi pi-chart-bar" id="RseBtn" class="p-d-block" @click="changeInterfaceBack"></Button>
      </div>
      <img id="logo" src="./assets/okteologo.png"/>
      <img id="logo" src="./assets/magisoftlogo.jpg"/>
    </TabPanel>
    <TabPanel header="Espace de démonstration" >
      Ceci est un espace qui présente différents components de PrimeVue. Il en existe d'autres, mais ici sont sélectionnés les plus susceptibles d'être utiles.
      <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="p-d-flex"/>
      <Knob v-model="value" />
      <Knob v-model="valueR" readonly="true"/>
      <Knob v-model="value" valueColor="Green" rangeColor="Purple"/>
      <Listbox v-model="selectedCity" :options="cities" optionLabel="name" />
      <SelectButton v-model="selectedCity" :options="cities" optionLabel="code" />
    </TabPanel>
      <TabPanel header="Affichage de côté">
      <div class="p-d-block" :style="{ backgroundImage: `url(${backgimg})`}" style="width: 79%; height: 650px">
        <ScrollPanel style="width: 15%; height: 700px; paddingTop: 60px; paddingBottom: 150px" class="custom">
          <Chart type="bar" :data="basicData" id="chart" :options="options" :width="140" :height="250" @click="addData" class="p-d-flex"/>
          <Chart ref="primeChart" type="pie" :data="chartData" id="chart" :width="140" :height="250" :options="options" class="p-d-flex"/>
          <Chart type="line" :data="LineData" id="chart" :width="140" :height="250" :options="options" class="p-d-flex"/>
          <Chart type="polarArea" :data="PolarData" id="chart" :width="140" :height="250" :options="options" class="p-d-flex"/>
          <Chart type="radar" :data="RadarData" id="chart" :width="140" :height="250" :options="options" class="p-d-flex"/>
          <Chart type="bar" :data="BarData" id="chart" :width="140" :height="250" :options="options" class="p-d-flex"/>
          <Button icon="pi pi-plus" @click="visibleFull = true"  class="p-d-block"/>
        </ScrollPanel>
        <Sidebar v-model:visible="visibleFull" position="full">
          <div class="p-d-flex" v-if="SideBarHidden" id="charts" >
            <Chart type="bar" :data="basicData" id="chart" :options="options" :width="375" :height="250" class="p-d-flex"/>
            <Chart ref="primeChart" type="pie" :data="chartData" id="chart" :width="375" :height="250" :options="options" class="p-d-flex"/>
            <Chart type="line" :data="LineData" id="chart" :width="375" :height="250" :options="options" class="p-d-flex"/>
            <div class="p-d-block">
              <Button label ="TestAnotherSet" v-bind:badge="RSEdata" icon="pi pi-chart-bar" id="RseBtn" class="p-d-block" @click="changeInterfaceSidebar"></Button>
              <Button label ="Test1" v-bind:badge="RSEdata1" icon="pi pi-percentage" id="RseBtn" class="p-d-block"></Button>
            </div>
          </div>
          <div class="p-d-flex" v-if="SideBarHidden" id="charts">
            <Chart type="polarArea" :data="PolarData" id="chart" :width="375" :height="250" :options="options" class="p-d-inline"/>
            <Chart type="radar" :data="RadarData" id="chart" :width="375" :height="250" :options="options" class="p-d-inline"/>
            <Chart type="bar" :data="BarData" id="chart" :width="375" :height="250" :options="options" class="p-d-inline"/>
            <div class="p-d-block">
              <Button label ="Test2" v-bind:badge="RSEdata2" icon="pi pi-key" id="RseBtn" class="p-d-block" ></Button>
              <Button label ="TestingDataFromMagisoft" v-bind:badge="RSEdata3" icon="pi pi-heart" id="RseBtn" class="p-d-block" @click="addData"></Button>
            </div>
          </div>
          <div v-if="!SideBarHidden">
              <Button label ="TestAnotherSet" v-bind:badge="RSEdata" icon="pi pi-chart-bar" id="RseBtn" class="p-d-block" @click="changeInterfaceBackSidebar"></Button>
          </div>
        </Sidebar>
      </div>
    </TabPanel>
    <TabPanel header="KPI2">
      Another tab that can be filled with graphs
    </TabPanel>
    <TabPanel header="KPI3">
      Another tab that can be filled with graphs
    </TabPanel>
    <TabPanel header="KPI4">
      Another tab that can be filled with graphs
    </TabPanel>
    <TabPanel header="KPI5">
      Another tab that can be filled with graphs
    </TabPanel>
    <TabPanel header="KPI6">
      Another tab that can be filled with graphs
    </TabPanel>
    <TabPanel header="KPI7">
      Another tab that can be filled with graphs
    </TabPanel>
    <TabPanel header="KPI8">
      Another tab that can be filled with graphs
    </TabPanel>
    <TabPanel header="KPI9">
      Another tab that can be filled with graphs
    </TabPanel>
    <TabPanel header="KPI10">
      Another tab that can be filled with graphs
    </TabPanel>
    <TabPanel header="KPI11">
      Another tab that can be filled with graphs
    </TabPanel>
    <TabPanel header="KPI12">
      Another tab that can be filled with graphs
    </TabPanel>
    <TabPanel header="KPI13">
      Another tab that can be filled with graphs
    </TabPanel>
    <TabPanel header="KPI14">
      Another tab that can be filled with graphs
    </TabPanel>
    <TabPanel header="KPI15">
      Another tab that can be filled with graphs
    </TabPanel>
    <TabPanel header="KPI16">
      Another tab that can be filled with graphs
    </TabPanel>
    <TabPanel header="KPI17">
      Another tab that can be filled with graphs
    </TabPanel>
    <TabPanel header="KPI18">
      Another tab that can be filled with graphs
    </TabPanel>
    <TabPanel header="KPI19">
      Another tab that can be filled with graphs
    </TabPanel>
    <TabPanel header="KPI20">
      Another tab that can be filled with graphs
    </TabPanel>
    <TabPanel header="KPI21">
      Another tab that can be filled with graphs
    </TabPanel>
  </TabView>
  
</template>

<script>

import { ref } from 'vue'
import backgimg from './assets/magisoft_rognee.png'

export default {
  data(){
    return{
      backgimg,
      visibleFull: false,
      value:0,
      SideBarHidden: true,
      valueR:50,
      selectedCity: null,
		  cities: [
			  {name: 'New York', code: 'NY'},
			  {name: 'Rome', code: 'RM'},
			  {name: 'London', code: 'LDN'},
			  {name: 'Istanbul', code: 'IST'},
			  {name: 'Paris', code: 'PRS'}
		  ],
      primeChart: ref(),
      text: null,
      RSEdata: "15",
      RSEdata1: "5",
      RSEdata2: "25",
      RSEdata3: "184951",
      hidden: true,
      TestData: [65, 59, 80, 81, 56, 55, 2],
      data1: 65,
      dataCollection: null,
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
                        data: [300, 50, 100],
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
                labels: ["Red","Green","Yellow","Grey","Blue"]
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
                    },{
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
        responsive: false,
        hoverMode:'index',
      }
      
    }
  },
  methods:{
    greet(){
      this.$toast.add({severity :'info', summary:'Hello', detail: this.text, life: 3000});
    },
    changeInterface(){
      this.hidden = false;
      this.$toast.add({severity :'info', summary:'On click', detail: 'Interface changed', life: 3000});
    },
    addData(){
      this.basicData = {
        labels:['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
        datasets:[
          {
            label:'Premier dataset',
            backgroundColor: 'green',
            data: this.TestData,
          },
          {
            label:'Premier dataset',
            backgroundColor: 'purple',
            data: [65, 59, 80, 81, 56, 55, 150],
          },
        ],
      };
      this.$toast.add({severity :'info', summary:'On click', detail: 'Data from first chart changed dynamically, can use with data recorded from magisoft', life: 10000});
    },
    changeInterfaceBack(){
      this.hidden = true;
      this.$toast.add({severity :'info', summary:'On click', detail: 'Interface changed', life: 3000});
    },
    changeInterfaceSidebar(){
      this.SideBarHidden = false;
      this.$toast.add({severity :'info', summary:'On click', detail: 'Interface changed', life: 3000});
    },
    changeInterfaceBackSidebar(){
      this.SideBarHidden = true;
      this.$toast.add({severity :'info', summary:'On click', detail: 'Interface changed', life: 3000});
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
  margin-top: 15px;
  background-color:whitesmoke ;
  text-align: center;
/*Ligne de test qui permet de vérifier si la sidebar se scale avec la taille de l'app ou la taille de l'écran
  Résultat : elle se scale sur la taille de l'écran
  width:25%;*/
}
#btn{
  text-align: center;
  background-color: rgb(129, 6, 129);
  color: rgb(9, 170, 9);
}
#chart{
  padding-right: 50px;
}
#RseBtn{
  background-color: rgb(129, 6, 129);
  color: rgb(9, 170, 9);
  width: 200px;
  height: 100px;
}
#charts{
  text-align:right;
  background-color: blanchedalmond;
}
#Welcometext{
  font-family: 'Times New Roman', Times, serif;
  font-size: 25px;
  color: purple;
  background-color: rgb(9, 170, 9);
  font-weight: bold;
}
#logo{
  width: 300px;
  max-width: 100%;
  height: auto;
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
</style>
