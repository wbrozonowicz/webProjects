var app = angular.module('myApplication', []);
 

app.controller('myController', function($scope) {
  $scope.myText = "";
  $scope.btnText="About";
  $scope.screenText="0";
  var counted = false;
  var partValue="";
  var valueA;
  var valueB;
  var result=0;
  var operation="??";
  var dotPossible = true;
  var dotInside = false;
 
  $scope.doC = function(){
    var isText = $scope.screenText;
    valueA=0;
    valueB=0;
    result=0;
    partValue=0;
    operation="??";
    counted=false;
    isText="";
    $scope.screenText=0;
    dotPossible=true;
    dotInside = false;
  }

  $scope.NumberOnScreen = function(inNo){ 
    if (counted==true){
 $scope.doC();
    }
    var isText = $scope.screenText;
    if (isText=='0'){
      isText="";
    }
  
    $scope.screenText=isText+inNo;
    partValue=partValue+inNo;
    dotPossible=true;
      }
    
      $scope.doOperation = function(sign){
        var isText = $scope.screenText;

        if (counted==true){
          isText = valueA;
          counted=false;
        }
        if (operation=="??"){ 
        valueA=parseFloat(isText);
        partValue="";
        $scope.screenText=isText+sign;
        operation=sign;
        dotPossible=false;
        dotInside=false;
        } else {
          alert("Click on button '=', then add next number.");
        }
          }

          $scope.doCount = function(){
            var resultToShow;
            if (counted==false){
            var isText = $scope.screenText;
            valueB = parseFloat(partValue);
            if ((operation=="??") || (valueB==0)){
              alert("Choose operation first");
            } else {
            if (operation=='+'){
              result = valueA+valueB;
            }
            if (operation=='-'){
              result = valueA-valueB;
            }
            if (operation=='*'){
              result = valueA*valueB;
            }
            if (operation=='/'){
              result = valueA/valueB;
            }
            if (((result*10)%10)>0){
              resultToShow = result.toFixed(3);
            } else {
              resultToShow = result;
            }
            $scope.screenText = isText+'='+resultToShow;
            dotPossible=false;
            dotInside=false;
            counted=true;
            operation="??";
            valueA=result;
          }
          }
          }

    $scope.dot = function(){
      if ((dotPossible==true)&&(dotInside==false)){
      var isText = $scope.screenText;
      $scope.screenText = isText+'.';
      partValue=partValue+'.';
      dotPossible=false;
      dotInside=true;
      }
    }

    
  

  $scope.showTip = function () {
    var inText = $scope.myText;
    var inBtnText = $scope.btnText;

    if (inText==""){
    $scope.myText="Simple calculator created in AngularJS. Author: Wojciech Brożonowicz";
    $scope.btnText ="Hide this info";
    }
    else {
    $scope.myText="";
  $scope.btnText="About";

    }
    };


});