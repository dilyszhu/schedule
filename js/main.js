$(document).ready(function() {

  var config = {
    apiKey: "AIzaSyCi2Fp0Wu6uIDrql0loXugp_UhYdNtbGoI",
    authDomain: "week1-fa61d.firebaseapp.com",
    databaseURL: "https://week1-fa61d.firebaseio.com",
    storageBucket: "week1-fa61d.appspot.com",
    messagingSenderId: "670497692463"
  };
  firebase.initializeApp(config);

var database = firebase.database();

$('.shift').on('click', function(e){
  e.preventDefault();
  $(this).toggleClass('yes');
});

$('#hide').on('click', function(e){
  e.preventDefault();
  $('#results').toggleClass('hide');
});


$('.mmc').on('click', function(e){
  e.preventDefault();
  if ($(this).hasClass('early')){
    $('.one').addClass('yes');
  };
  if ($(this).hasClass('late')){
  $('.two').addClass('yes');
  };
  if ($(this).hasClass('mid')){
    $('.three').addClass('yes');
  };
  if ($(this).hasClass('clos')){
    $('.four').addClass('yes');
  };
});

$('.h2').on('click', function(e){
  e.preventDefault();
  if ($(this).hasClass('mon1')){
    $('#mon1').addClass('yes');
    $('#mon2').addClass('yes');
    $('#mon3').addClass('yes');
    $('#mon4').addClass('yes');

  };
  if ($(this).hasClass('tues1')){
    $('#tues1').addClass('yes');
    $('#tues2').addClass('yes');
    $('#tues3').addClass('yes');
    $('#tues4').addClass('yes');
  };
  if ($(this).hasClass('wed1')){
    $('#wed1').addClass('yes');
    $('#wed2').addClass('yes');
    $('#wed3').addClass('yes');
    $('#wed4').addClass('yes');
  };
  if ($(this).hasClass('thur1')){
    $('#thur1').addClass('yes');
    $('#thur2').addClass('yes');
    $('#thur3').addClass('yes');
    $('#thur4').addClass('yes');
  };
  if ($(this).hasClass('fri1')){
    $('#fri1').addClass('yes');
    $('#fri2').addClass('yes');
    $('#fri3').addClass('yes');
    $('#fri4').addClass('yes');
  };
  if ($(this).hasClass('sat1')){
    $('#sat1').addClass('yes');
    $('#sat2').addClass('yes');
    $('#sat3').addClass('yes');
  };
  if ($(this).hasClass('sun1')){
    $('#sun1').addClass('yes');
    $('#sun2').addClass('yes');
    $('#sun3').addClass('yes');
  };

});

  // var name=$('#name').val();

  //   var shiftsIcanWork = []

  //   $('.shift').click(function(e){
  //     e.preventDefault();
  //     shiftsIcanWork.push(this.id);
  //   });

  //   $('#submit').click(function(){
  //     for(var i=0; i<shiftsIcanWork.length; i++){
var shift1=0;
var shift2=0;

$('#comment-form').on('submit', function(e){
  // e.preventDefault();

  var shiftssReference = database.ref('shifts');
  shiftssReference.child('day1mon').update({
  shift1: $('#mmon1').html(),
  shift2: $('#mmon2').html(),
  shift3: $('#mmon3').html(),
  shift4: $('#mmon4').html(),
  })

  shiftssReference.child('day2tues').update({
  shift1: $('#ttues1').html(),
  shift2: $('#ttues2').html(),
  shift3: $('#ttues3').html(),
  shift4: $('#ttues4').html(),
  })

  shiftssReference.child('day3wed').update({
  shift1: $('#wwed1').html(),
  shift2: $('#wwed2').html(),
  shift3: $('#wwed3').html(),
  shift4: $('#wwed4').html(),
  })

  shiftssReference.child('day4thur').update({
  shift1: $('#tthur1').html(),
  shift2: $('#tthur2').html(),
  shift3: $('#tthur3').html(),
  shift4: $('#tthur4').html(),
  })

  shiftssReference.child('day5fri').update({
  shift1: $('#ffri1').html(),
  shift2: $('#ffri2').html(),
  shift3: $('#ffri3').html(),
  shift4: $('#ffri4').html(),
  })

  shiftssReference.child('day6sat').update({
  shift1: $('#ssat1').html(),
  shift2: $('#ssat2').html(),
  shift3: $('#ssat3').html(),
  })

  shiftssReference.child('day7sun').update({
  shift1: $('#ssun1').html(),
  shift2: $('#ssun2').html(),
  shift3: $('#ssun3').html(),
  })

 // database.ref('shifts').child('mon2').set({
 //  shift1: shift1,
 //  shift2: shift2,
 // })

//   database.ref('shifts').set({
//   day1mon: {shift1:shift1,shift2:shift1,shift3:shift1,shift4:shift1,},
//   day2tues: {shift1:shift1,shift2:shift1,shift3:shift1,shift4:shift1,},
//   day3wed: {shift1:shift1,shift2:shift1,shift3:shift1,shift4:shift1,},
//   day4thur: {shift1:shift1,shift2:shift1,shift3:shift1,shift4:shift1,},
//   day5fri: {shift1:shift1,shift2:shift1,shift3:shift1,shift4:shift1,},
//   day6sat: {shift1:shift1,shift2:shift1,shift3:shift1,},
//   day7sun: {shift1:shift1,shift2:shift1,shift3:shift1,},
// }); 


});




  //       // find this shift in the database
  //       // add this employee's name to that shift
  //     }
  //   });




 //    var rateSnapshot = snapshot.child('rateData');
 // if( rateSnapshot.val() === null ) {  // rateData key does not exist
 //    rateSnapshot.ref().set([5]);
 // } else {
 //    var rates = rateSnapshot.val(); //should be an array
 //    rates.push(1); //append new value to the array
 //    rateSnapshot.ref().set(rates);
 // }


$('#comment-form').on('submit', function(e){
  e.preventDefault();

  // $("#aval").html("AVAILABILITY ("+$('#date1').val()+"-"+$('#date2').val()+"):"+"<span id='div'></span>");
  $("#aval").html("YOU CANNOT WORK:"+"<span id='div'></span>");


  $("#div").text('');
  if ($('#mon1').hasClass('yes')){
    $("#div").append(" mon1")
  }
  if ($('#mon2').hasClass('yes')){
    $("#div").append(" mon2")
  }
  if ($('#mon3').hasClass('yes')){
    $("#div").append(" mon3")
  }
  if ($('#mon4').hasClass('yes')){
    $("#div").append(" mon4")
  }

  if ($('#tues1').hasClass('yes')){
    $("#div").append(" tues1")
  }
  if ($('#tues2').hasClass('yes')){
    $("#div").append(" tues2")
  }
  if ($('#tues3').hasClass('yes')){
    $("#div").append(" tues3")
  }
  if ($('#tues4').hasClass('yes')){
    $("#div").append(" tues4")
  }

  if ($('#wed1').hasClass('yes')){
    $("#div").append(" wed1")
  }
  if ($('#wed2').hasClass('yes')){
    $("#div").append(" wed2")
  }
  if ($('#wed3').hasClass('yes')){
    $("#div").append(" wed3")
  }
  if ($('#wed4').hasClass('yes')){
    $("#div").append(" wed4")
  }

  if ($('#thur1').hasClass('yes')){
    $("#div").append(" thur1")
  }
  if ($('#thur2').hasClass('yes')){
    $("#div").append(" thur2")
  }
  if ($('#thur3').hasClass('yes')){
    $("#div").append(" thur3")
  }
  if ($('#thur4').hasClass('yes')){
    $("#div").append(" thur4")
  }

  if ($('#fri1').hasClass('yes')){
    $("#div").append(" fri1")
  }
  if ($('#fri2').hasClass('yes')){
    $("#div").append(" fri2")
  }
  if ($('#fri3').hasClass('yes')){
    $("#div").append(" fri3")
  }
  if ($('#fri4').hasClass('yes')){
    $("#div").append(" fri4")
  }

  if ($('#sat1').hasClass('yes')){
    $("#div").append(" sat1")
  }
  if ($('#sat2').hasClass('yes')){
    $("#div").append(" sat2")
  }
  if ($('#sat3').hasClass('yes')){
    $("#div").append(" sat3")
  }

  if ($('#sun1').hasClass('yes')){
    $("#div").append(" sun1")
  }
  if ($('#sun2').hasClass('yes')){
    $("#div").append(" sun2")
  }
  if ($('#sun3').hasClass('yes')){
    $("#div").append(" sun3")
  }
  // $("#div").append(". "+$('#extra').val());

var comment=$('#div').text();
var extra=$('#extra').val();
var name=$('#name').val();
var idNumber;

// if (name=="Dilys") {idNumber="Dilys"}
// if (name=="Ryan") {idNumber="Ryan"}
// if (name=="Brandon") {idNumber="Brandon"}
// if (name=="Shane") {idNumber="Shane"}
// if (name=="Kate") {idNumber="Kate"}
// if (name=="Jane") {idNumber="Jane"}
// if (name=="Jenn") {idNumber="Jenn"}
// if (name=="Natalie") {idNumber="Natalie"}
// if (name=="Florrie") {idNumber="Florrie"}
// if (name=="Alexis") {idNumber="Alexis"}
// if (name=="Alex") {idNumber="Alex"}
// if (name=="Maxwell") {idNumber="Maxwell"}






var commentsReference = database.ref('comments');

commentsReference.push({
  name: name,
  text: comment,
  // name:idNumber,
  toconsider: extra,
});

});
//all 21 shifts should be listening. when you click on 

// function getShifts(){
//   database.ref('shifts').on('value',function(results){
//     // console.log(results.val());
//   var allShifts=results.val();
//   for (var item in allShifts)

//   }
// }
// getShifts();

// commentsReference.child('day6sat')


function getComments() {
    database.ref('comments').on('value', function (results) {
      // console.log(results.val());
      var allComments = results.val();

      for (var item in allComments) {

        var printComment = {
          text: allComments[item].text,
          name: allComments[item].name,
          id: allComments[item].id,
          commentId: item
        };

      if (printComment.text.includes("mon1")){
        $('#mmon1').append(printComment.name+" ")
      }
      if (printComment.text.includes("mon2")){
        $('#mmon2').append(printComment.name+" ")
      }
      if (printComment.text.includes("mon3")){
        $('#mmon3').append(printComment.name+" ")
      }
      if (printComment.text.includes("mon4")){
        $('#mmon4').append(printComment.name+" ")
      }
      if (printComment.text.includes("tues1")){
        $('#ttues1').append(printComment.name+" ")
      }
      if (printComment.text.includes("tues2")){
        $('#ttues2').append(printComment.name+" ")
      }
      if (printComment.text.includes("tues3")){
        $('#ttues3').append(printComment.name+" ")
      }
      if (printComment.text.includes("tues4")){
        $('#ttues4').append(printComment.name+" ")
      }
      if (printComment.text.includes("wed1")){
        $('#wwed1').append(printComment.name+" ")
      }
      if (printComment.text.includes("wed2")){
        $('#wwed2').append(printComment.name+" ")
      }
      if (printComment.text.includes("wed3")){
        $('#wwed3').append(printComment.name+" ")
      }
      if (printComment.text.includes("wed4")){
        $('#wwed4').append(printComment.name+" ")
      }
      if (printComment.text.includes("thur1")){
        $('#tthur1').append(printComment.name+" ")
      }
      if (printComment.text.includes("thur2")){
        $('#tthur2').append(printComment.name+" ")
      }
      if (printComment.text.includes("thur3")){
        $('#tthur3').append(printComment.name+" ")
      }
      if (printComment.text.includes("thur4")){
        $('#tthur4').append(printComment.name+" ")
      }
      if (printComment.text.includes("fri1")){
        $('#ffri1').append(printComment.name+" ")
      }
      if (printComment.text.includes("fri2")){
        $('#ffri2').append(printComment.name+" ")
      }
      if (printComment.text.includes("fri3")){
        $('#ffri3').append(printComment.name+" ")
      }
      if (printComment.text.includes("fri4")){
        $('#ffri4').append(printComment.name+" ")
      }
      if (printComment.text.includes("sat1")){
        $('#ssat1').append(printComment.name+" ")
      }
      if (printComment.text.includes("sat2")){
        $('#ssat2').append(printComment.name+" ")
      }
      if (printComment.text.includes("sat3")){
        $('#ssat3').append(printComment.name+" ")
      }
      if (printComment.text.includes("sun1")){
        $('#ssun1').append(printComment.name+" ")
      }
      if (printComment.text.includes("sun2")){
        $('#ssun2').append(printComment.name+" ")
      }
      if (printComment.text.includes("sun3")){
        $('#ssun3').append(printComment.name+" ")
      }

      




      }





      }
    )
  }

getComments();

//Separate not by user but by day. 




});
