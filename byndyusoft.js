let result = 0;
function getMin(arr){
  
  
  
  if(arr == !Array | Infinity){   //Проверяем на пустоту и бесконечность
    return 0;
  }

  else if(arr.some(isNaN)){     //Проверяем, что массив из чисел
    return 0;
  }



  else{ 
    let arrLen = arr.length;
    let minEl = arr[0];
    for (var i = 0; i < arrLen; i++) {
        if (minEl > arr[i]) {
            minEl = arr[i];
        }
    }
    console.log('Наименьший элемент массива: ' + minEl);
    if (result == 0){
        result += minEl;
        for( var n = 0; n < arr.length; n++){ 
            if ( arr[n] === minEl) {
            arr.splice(n, 1); 
            }
        }
        getMin(arr); 
      
    } else{
      result += minEl; 
      return result;  
    }
  }

}
getMin([4, 0, 3, 19, 492, -10, 1]);
console.log("Результат: " + result);