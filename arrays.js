var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(array,element){
  array2 = [];
  array2.unshift(element,...array);
  return array2;
}
function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element);
  return array;
}
function addElementToEndOfArray(array,element){
  array2 = [];
  array2.push(...array,element);
  return array2
}
function destructivelyAddElementToEndOfArray(array,element){
  array.push(element);
  return array
}
function accessElementInArray(array,index){
   return array[index];
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}
function removeElementFromEndOfArray(array){
  return array.slice(0,array.length - 1);
}
function destructivelyRemoveElementFromBeginningOfArray(array){
   array.shift();
   return array;
}
function removeElementFromBeginningOfArray(array){
  return  array.slice(1);
}
