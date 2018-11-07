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
  var dotPossible = false;
  var dotInside = false;
  $scope.NumberOnScreen = function(inNo){
    var isText = $scope.screenText;
    if (counted==true){
valueA=0;
valueB=0;
result=0;
partValue=0;
operation="??";
counted=false;
isText="";

    }
    if (isText=='0'){
      isText="";
    }
    $scope.screenText=isText+inNo;
    partValue=partValue+inNo;
    dotPossible=true;
      }
    
      $scope.doOperation = function(sign){
        if (operation=="??"){ 
        var isText = $scope.screenText;
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
            if (counted==false){
            var isText = $scope.screenText;
            valueB = parseFloat(partValue);
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
            $scope.screenText = isText+'='+result;
            dotPossible=false;
            dotInside=false;
            counted=true;
            operation="??";
            valueA=result;
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