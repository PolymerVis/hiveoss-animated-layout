var hydrolysis = require('hydrolysis');
var fs = require('fs');
hydrolysis.Analyzer.analyze('./hiveoss-animated-layout.html')
    .then(function(analyzer) {
      console.log( JSON.stringify(analyzer.elements, null, '  '));
      return analyzer.elements;
    })
    .then(function(d){
    });