
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
  fills: {
    defaultFill: "#CCC",
    diferenciado: "#f59c00",
    generica: "#af9959",
    voluntaria: "#d7ae1c"
  },
  data: {
    USA: { fillKey: "diferenciado" },
    ESP: { fillKey: "diferenciado" },
    FRA: { fillKey: "diferenciado" },
    GBR: { fillKey: "diferenciado" },
    EGY: { fillKey: "diferenciado" },
    IND: { fillKey: "diferenciado" },
    BGD: { fillKey: "voluntaria" },
    AFG: { fillKey: "generica" },
    NPL: { fillKey: "generica" },
    MMR: { fillKey: "generica" },
    VNM: { fillKey: "generica" },
    MDG: { fillKey: "generica" },
    LSO: { fillKey: "generica" },
    MOZ: { fillKey: "generica" },
    AGO: { fillKey: "generica" },
    ZMB: { fillKey: "generica" },
    MWI: { fillKey: "generica" },
    TZA: { fillKey: "generica" },
    UGA: { fillKey: "generica" },
    COD: { fillKey: "generica" },
    SSD: { fillKey: "generica" },
    SDN: { fillKey: "generica" },
    TCD: { fillKey: "generica" },
    CAF: { fillKey: "generica" },
    NER: { fillKey: "generica" },
    BEN: { fillKey: "generica" },
    LBR: { fillKey: "generica" },
    SLE: { fillKey: "generica" },
    TGO: { fillKey: "generica" },
    BFA: { fillKey: "generica" },
    MLI: { fillKey: "generica" },
    MRT: { fillKey: "generica" },
    SEN: { fillKey: "generica" },
    GNB: { fillKey: "generica" },
    GIN: { fillKey: "generica" },
    GMB: { fillKey: "generica" },
    YEM: { fillKey: "generica" },
    GNQ: { fillKey: "generica" }
  }
});


basic.bubbles([
  {
    name: 'Not a bomb, but centered on Brazil',
    radius: 5,
    centered: 'VUT',
    country: 'USA',
    yeild: 0,
    fillKey: 'generica',
    date: '1954-03-01'
  },
  {
    radius: 5,
    name: 'Kiribati',
    fillKey: 'generica',
    latitude: -3.3704,
    longitude: 168.7340
  },{
    radius: 5,
    name: 'Solomon Islands',
    fillKey: 'generica',
    latitude: -9.6457,
    longitude: 160.1562
  },{
    radius: 5,
    name: 'Haiti',
    fillKey: 'generica',
    latitude: 18.9712,
    longitude: -72.2853
  }
]);