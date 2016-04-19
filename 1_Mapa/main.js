
/*var lang = getParameterByName('lang');
if(lang!=null && lang!=""){
  //set the locale in which the messages will be translated
  iJS.i18n.setlocale(lang) ;
  //add domain where to find messages data
  iJS.i18n.bindtextdomain(lang, "../locale", "po") ;
  //Always do this after a `setlocale` or a `bindtextdomain` call.
  iJS.i18n.try_load_lang() ; //will load and parse messages data from the setting catalog.
}

//d3.select('.title').text(iJS._("Las cifras de la enfermedad del Chagas"));

*/

var basic = new Datamap({
  element: document.getElementById("mapa"),
  setProjection: function(element, options) {
      var projection = d3.geo.ginzburg5()
                             .center([0, 15])
                             .scale(140)
                             .translate([element.offsetWidth / 2, element.offsetHeight / 2]);

      var path =  d3.geo.path()
              .projection(projection);

      return {path: path, projection: projection};
  },
  geographyConfig: {
    borderWidth: 0.5,
    highlightOnHover: false,
    popupOnHover: true,
    popupTemplate: function(geography, data) { //this function should just return a string
      if (data!=null){
        if(data.fillKey=='diferenciado'){
          if(geography.properties.name=='United States of America'){
            return '<div class="hoverinfo"><strong>Precio diferenciado:</strong> 84.000$</div>';  
          }else if(geography.properties.name=='Spain'){
            return '<div class="hoverinfo"><strong>Precio diferenciado:</strong>: 25.000$</div>';  
          }else if(geography.properties.name=='France'){
            return '<div class="hoverinfo"><strong>Precio diferenciado:</strong>: 61.00$</div>';  
          }else if(geography.properties.name=='United Kingdom'){
            return '<div class="hoverinfo"><strong>Precio diferenciado:</strong>: 54.000$</div>';  
          }else if(geography.properties.name=='Egypt'){
            return '<div class="hoverinfo"><strong>Precio diferenciado:</strong>: 900$</div>';  
          }else if(geography.properties.name=='India'){
            return '<div class="hoverinfo"><strong>Precio diferenciado:</strong>: 900$</div>';  
          }else{
            console.log(geography.properties.name)
            return '<div class="hoverinfo"><strong>Precio diferenciado:</strong></div>';  
          }
        }else if(data.fillKey=='generica'){
          return '<div class="hoverinfo"><strong>Competencia genérica:</strong> 840$</div>';
        }else if(data.fillKey=='voluntaria'){
          return '<div class="hoverinfo"><strong>Licencia voluntaria:</strong> 2.000$</div>';
        }
      }
    },
  },
  fills: {
    defaultFill: "#CCC",
    diferenciado: "#f59c00",
    generica: "#d7ae1c",
    voluntaria: "#af9959"
  },
  data: {
    USA: { fillKey: "diferenciado" },
    ESP: { fillKey: "diferenciado" },
    FRA: { fillKey: "diferenciado" },
    GBR: { fillKey: "diferenciado" },
    EGY: { fillKey: "diferenciado" },
    IND: { fillKey: "diferenciado" },
    BGD: { fillKey: "generica" },
    AFG: { fillKey: "voluntaria" },
    NPL: { fillKey: "voluntaria" },
    MMR: { fillKey: "voluntaria" },
    VNM: { fillKey: "voluntaria" },
    MDG: { fillKey: "voluntaria" },
    LSO: { fillKey: "voluntaria" },
    MOZ: { fillKey: "voluntaria" },
    AGO: { fillKey: "voluntaria" },
    ZMB: { fillKey: "voluntaria" },
    MWI: { fillKey: "voluntaria" },
    TZA: { fillKey: "voluntaria" },
    UGA: { fillKey: "voluntaria" },
    COD: { fillKey: "voluntaria" },
    SSD: { fillKey: "voluntaria" },
    SDN: { fillKey: "voluntaria" },
    TCD: { fillKey: "voluntaria" },
    CAF: { fillKey: "voluntaria" },
    NER: { fillKey: "voluntaria" },
    BEN: { fillKey: "voluntaria" },
    LBR: { fillKey: "voluntaria" },
    SLE: { fillKey: "voluntaria" },
    TGO: { fillKey: "voluntaria" },
    BFA: { fillKey: "voluntaria" },
    MLI: { fillKey: "voluntaria" },
    MRT: { fillKey: "voluntaria" },
    SEN: { fillKey: "voluntaria" },
    GNB: { fillKey: "voluntaria" },
    GIN: { fillKey: "voluntaria" },
    GMB: { fillKey: "voluntaria" },
    YEM: { fillKey: "voluntaria" },
    BTN: { fillKey: "voluntaria" },
    LAO: { fillKey: "voluntaria" },
    KHM: { fillKey: "voluntaria" },
    TLS: { fillKey: "voluntaria" },
    GNQ: { fillKey: "voluntaria" }
  }
});


basic.bubbles([
  {
    name: 'Vanuatu',
    radius: 5,
    centered: 'VUT',
    country: 'USA',
    yeild: 0,
    fillKey: 'voluntaria',
    date: '1954-03-01'
  },
  {
    name: 'Tuvalu',
    radius: 5,
    fillKey: 'voluntaria',
    latitude: -7.1095,
    longitude: 177.6493
  },
  {
    radius: 5,
    name: 'Kiribati',
    fillKey: 'voluntaria',
    latitude: -3.3704,
    longitude: 168.7340
  },{
    radius: 5,
    name: 'Solomon Islands',
    fillKey: 'voluntaria',
    latitude: -9.6457,
    longitude: 160.1562
  },{
    radius: 5,
    name: 'Haiti',
    fillKey: 'voluntaria',
    latitude: 18.9712,
    longitude: -72.2853
  }
]);