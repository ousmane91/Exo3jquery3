var condition = 67;
var tentative = 0;
console.log(condition);
//fonction pour activer le bouton
$('#btn1').click(function(){
  if($('#test').val() > condition){
    alert('Plus petit');
    tentative++;
  } else if ($('#test').val() < condition) {
    alert('Plus grand');
    tentative++;
  } else if ($('#test').val() == condition) {
    tentative++;
    alert('Correcte, tu as trouvé en ' + tentative + ' tentatives !');
  }

});
