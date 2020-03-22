
// You should implement your task here.

module.exports = function towelSort (matrix) {
 if(  !(Array.isArray(matrix) && matrix.length > 0) )
  return [];

  let flag = true;
 
  let sort_matrix = [];

 matrix.forEach(element => {
    
   if(flag == true){ 
    
   sort_matrix.push( ...element.sort(function(a, b) {
     return a - b;
    }));
   }
   else {
    sort_matrix.push( ...element.sort(function(a, b) {
        return b - a;
       }));
   }
  flag = !flag;
 });

  return sort_matrix;
}






