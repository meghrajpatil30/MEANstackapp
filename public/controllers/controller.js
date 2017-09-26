angular.module('myApp', []).controller('AppCtrl', function($scope,$http) {
   
   
   
   /* AppCtrl is the controller  
    * addcontact() and getcontact() are the functions 
      which calls $http.post() and $http.get() respectively
   */ 
   
    $scope.contact = {};
    /*post api 
    /contactl is the url and $scope.contact  contains data */

    $scope.addcontact = function (){
        $http.post('/contactl', $scope.contact).then(function(){

            /*this function handals success  
            *if success then it will call getcontact() and displays data */
            $scope.getContact();

        }).catch(function(){
            alert('Error');
        });

    }
    
    
    $scope.getContact = function () {
        //get api 
        $http.get('/contactl').then(successCallback).catch(errorCallback);

         function successCallback(response){
            $scope.contactl=response.data;
                console.log($scope.contactl);    /* displays data on console*/
               }
           function errorCallback(error){
                 console.log("error");
     
               }
    }
});
