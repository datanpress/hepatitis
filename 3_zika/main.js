
var lang = getParameterByName('lang');

if(lang=='en'){
  var f = "2_en.svg";
}else{
  var f = "2.svg";
}



d3.xml(f , "image/svg+xml", function(error, xml) {
  if (error) throw error;
  document.body.appendChild(xml.documentElement);
  //translate

  // d3.select('.title').text(iJS._("Principales vacunas candidatas contra el zika"));
  // d3.select('.legend.malaria').text(iJS._("Malaria"));
  // d3.select('.legend.tuberculosis').text(iJS._("Tuberculosis"));
  // d3.select('.legend.ebola').text(iJS._("Ébola"));
  // d3.select('.country.guinea').text(iJS._("Guinea"));
  // d3.select('.country.sierra_leona').text(iJS._("Sierra Leona"));
  // d3.select('.country.liberia').text(iJS._("Liberia"));


  d3.selectAll('.r1, .r2, .r3, .r4, .r5, .r6, .r7, .r8, .r9, .r10').on('mouseover',function(){
    var c=d3.select(this).attr('class');
    d3.selectAll('.'+c).classed('active',true)
  })
  d3.selectAll('.r1, .r2, .r3, .r4, .r5, .r6, .r7, .r8, .r9, .r10').on('mouseout',function(){
    // var c=d3.select(this).attr('class');
    d3.selectAll('.active').classed('active',false)
  })


});
