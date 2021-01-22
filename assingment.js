// 1. Kilometer to Meter

function kilometerToMeter(num){
    var meter= num*1000;
    if(num<1){
      return "distance can not be negative!";
    }
    return meter;
}
var result= kilometerToMeter(-1);
console.log(result); 



 // 2. budget calculator

 function budgetCalculator(watch, mobile, laptop){
    if (watch < 1 || mobile < 1 || laptop < 1) {
        return "price can not be a negative number";
    }
     else{
        var watchCost= watch*50;
        var mobileCost =mobile*100;
        var laptopCost =laptop*500;
        var totalCost= watchCost+ mobileCost + laptopCost;
     }
     return totalCost;
 }
 var totalBudget= budgetCalculator(10, 5, 10);
 console.log(totalBudget);



// 3. Hotel Cost

function hotelCost(day){
    var cost=0;
    if(day<=10){
        cost =day*100;
    }
    else if(day<=20){
        var firtsTenDays =10*100;
        var remaning = day-10;
        var secondTenDays = remaning * 80;
        cost = firtsTenDays + secondTenDays;
    }
    else if(day>20){
        var firtsTenDays =10*100;
        var secondTenDays= 10*80;
        var remaning = day-20;
        var remainingDays = remaning *100;
        cost = firtsTenDays + secondTenDays + remainingDays;
    }
    else if(isNaN(undefined)){
        return "this is not an integer number!";
    }
    return cost;
}
var costPerDay= hotelCost("string"); 
console.log(costPerDay);



// 4. mega friend

  var largeString = ["sonaly", "justin", "elf", "doli"];

  function megaFriend(arr) {
  var longest = arr[0];

    if(arr.length === 0 || arr.length === undefined){
      return "this array is empty or null!";
   }
   for (i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
        longest = arr[i];
    }
}
  return longest;
}
console.log(megaFriend(largeString));
