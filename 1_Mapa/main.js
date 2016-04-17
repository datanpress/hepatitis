
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
                             .center([0, 0])
                             .scale(100)
                             .translate([element.offsetWidth / 2, element.offsetHeight / 2]);

      var path =  d3.geo.path()
              .projection(projection);

      return {path: path, projection: projection};
  },
  fills: {
    defaultFill: "#CCC",
    diferenciado: "#01b0e9",
    generica: "#008dab",
    voluntaria: "#019bc9"
  },
  data: {
    USA: { fillKey: "diferenciado" },
    ESP: { fillKey: "diferenciado" },
    FRA: { fillKey: "diferenciado" },
    IRL: { fillKey: "diferenciado" },
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
    GNQ: { fillKey: "generica" }
  }
});

