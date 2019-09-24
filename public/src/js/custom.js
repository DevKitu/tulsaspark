
var lhost = $(location).attr('host');        //returns host
var lhostname = $(location).attr('hostname');    // returns hostname
var lpath = $(location).attr('path');        // returns path
var lpathname = $(location).attr('pathname');  // index.php
var lhref = $(location).attr('href');        // returns href
var lport = $(location).attr('port');        // returns port
var lprot = $(location).attr('protocol');    // returns protocol

console.log('Host: ', lhost);
console.log('Host Name: ', lhostname);
console.log('Path: ', lpath);
console.log('Path Name: ', lpathname);
console.log('href: ', lhref);
console.log('Port: ', lport);
console.log('Protocol: ', lprot);

var dataTest;

let albumAccordion = function (data) {
  console.log('data to process: ', data.currentNavData);
  var newData= "";
  
  $.map(data.currentNavData, function (item,index) {
    newData += item;
  console.log('item ',item);
  console.log('index ',index);
  $('.navDetailsLi').html(
      
      '<li class="nav-item">'+
        '<a class="nav-link " href="twpt" id="yourElementId">' + item.name +'</a>'+
      '</li>'
    
  );
});   


console.log('items newD ',newData);
};


// ----

var populateList = function(items){
  var str = '';
  console.log('data to prcess: ', items);

  for(var i = 0; i < items.length; i++){
      str += '<li class="nav-item">' +
                  '<a class="nav-link " href=" '+items[i].href+ '" id="yourElementId">' + items[i].name + '</a>'+
              '</li>';
      console.log('Each to prcess: ', items[i].name);
  } 
  return str;
}
//---

let getservices = function (data) {

  $("#serviceBImage").attr("src",data.serviceData.imageSrc);

  $('.serviceBTitle').text(
             data.serviceData.name 
  );
  $('.serviceBDescription').html(
           data.serviceData.description 
  );
  $('.serviceBFooter').html(
    data.serviceData.footer 
  );
console.log('items newD ',newData);

};


// ----
var listEl = document.getElementById('navDetailsLi');

 $(document).ready(function(){
/*
    $.getJSON("../static/src/json/nav.json", function(data) {
        console.log('Data: ', data);
        // console.log('Id: ', essay_id);
        dataTest = data;
       });

  */  

  //--- Load TWPT data
    $('#navItemTwpt').mouseover(function(){
      //$('#navItemTwpt').click(); 
     //$( ".navDetails" ).show( "click" );

      $.ajax({
        url: "/twpt",
        method: "GET",
        //data: currentNavData, 
        dataType: 'json', // ** ensure you add this line **
        success: function (data) {
           // console.log('all data: ', data);
           // albumAccordion(data);
         //  listEl.innerHTML = populateList(data.currentNavData);
           
        },
        error: function (x, y, z) {
            console.log('x', x);
            console.log('y', y);
            console.log('z', z);
        }
    });
    });
    


 //--- Load TWP data
    $('#navItemTwp').click(function(){

      $.ajax({
        url: "/twp",
        method: "GET",
        //data: currentNavData, 
        dataType: 'json', // ** ensure you add this line **
        success: function (data) {
           // console.log('all data: ', data);
           // albumAccordion(data);
          // listEl.innerHTML = populateList(data.currentNavData);
        },
        error: function (x, y, z) {
            console.log('x', x);
            console.log('y', y);
            console.log('z', z);
        }
    });    

});

//--- Load TBAS data
$('#navItemTbas').click(function(){

  $.ajax({
    url: "/tbas",
    method: "GET",
    //data: currentNavData, 
    dataType: 'json', // ** ensure you add this line **
    success: function (data) {
       // console.log('all data: ', data);
        //albumAccordion(data);
       // listEl.innerHTML = populateList(data.currentNavData);
    },
    error: function (x, y, z) {
        console.log('x', x);
        console.log('y', y);
        console.log('z', z);
    }
});

});

//--- Load TWPT services data Business section 01
$('#serviceB').click(function(e){
  e.preventDefault();
  $.ajax({
    url: "/twpt/services/business",
    method: "GET",
    dataType: 'json', // ** ensure you add this line **
    success: function (data) {
       getservices(data);
    },
    error: function (x, y, z) {
        console.log('x', x);
        console.log('y', y);
        console.log('z', z);
    }
});

/* End if Click function */
});


//--- Load TWPT services data Business section 01
$('#serviceB01').click(function(e){
  e.preventDefault();
  $.ajax({
    url: "/twpt/services/business/one",
    method: "GET",
    dataType: 'json', // ** ensure you add this line **
    success: function (data) {
       getservices(data);
    },
    error: function (x, y, z) {
        console.log('x', x);
        console.log('y', y);
        console.log('z', z);
    }
});

/* End if Click function */
});

//--- Load TWPT services data Business section 01
$('#serviceB02').click(function(e){
  e.preventDefault();
  $.ajax({
    url: "/twpt/services/business/two",
    method: "GET",
    dataType: 'json', // ** ensure you add this line **
    success: function (data) {
                                getservices(data);
    },
    error: function (x, y, z) {
        console.log('x', x);
        console.log('y', y);
        console.log('z', z);
    }
});

/* End if Click function */
});

//--- Load TWPT services data Business section 01
$('#serviceB03').click(function(e){
  e.preventDefault();
  $.ajax({
    url: "/twpt/services/business/three",
    method: "GET",
    dataType: 'json', // ** ensure you add this line **
    success: function (data) {
                                getservices(data);
    },
    error: function (x, y, z) {
        console.log('x', x);
        console.log('y', y);
        console.log('z', z);
    }
});

/* End if Click function */
});


/* End of Ready Function */
});
  
