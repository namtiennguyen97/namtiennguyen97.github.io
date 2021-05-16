let totalData = 3;

$('#totalData').text(totalData);

let soundsServer = $('#confirmDataSound')[0];
$('#confirmData4').click(function () {
    soundsServer.play();
});

$('#confirmData5').click(function () {
    soundsServer.play();
});
$('#confirmData6').click(function () {
    soundsServer.play();
});




// mac dinh card nay hide
$('.cardData4').hide();
$('.cardData5').hide();
$('.cardData6').hide();
$('#createNew5').hide();
$('#createNew6').hide();


//

//update thong tin
$('.glitch--style-4 .glitch__img').click(function () {
    $('#createHumanData4').modal('show');
});

$('.glitch--style-5 .glitch__img').click(function () {
    $('#createHumanData5').modal('show');
});

$('.glitch--style-6 .glitch__img').click(function () {
    $('#createHumanData6').modal('show');
});


$('.cardData1').click(function () {
    toastr.error('You dont have enough authorize to update/delete this!');
});
$('.cardData2').click(function () {
    toastr.error('You dont have enough authorize to update/delete this!');
});
$('.cardData3').click(function () {
    toastr.error('You dont have enough authorize to update/delete this!');
});



//delete data

let deleteSound = $('#deleteSound')[0];

function deleteData(num){
    totalData--;
    $('#totalData').text(totalData);
   $('.cardData'+num).remove();
   toastr.warning('Your data has been destroyed!');
}
//delete tong
$('.dataDeletion').click(function () {
    let id = $(this).data('id');
    $('#confirmDelete').modal('show');

   $('#confirmDeletion').on('click', function () {
       soundsServer.play();
       deleteData(id);
       deleteSound.play();
       $('#confirmDelete').modal('hide');
   });

});





//end of update


//function validate cac o input

let validateSound = $("#validateSound")[0];
function maxTextName(value,id){
    if (value.length >8){
        toastr.error('Name can not make more 8 character!');
        $('#'+id).val('');
        validateSound.play();
    }
}
function maxTextShortDes(value,id){
    if (value.length >13){
        toastr.error('Short Desc can not make more 13 character!');
        $('#'+id).val('');
        validateSound.play();
    }
}
function maxTextDes(value,id){
    if (value.length >16){
        toastr.error('Desc can not make more 16 character!');
        $('#'+id).val('');
        validateSound.play();
    }
}

// end of validate


let createSound = $('#createSound')[0];


// su kien cho data number 4
$('#createNew4').click(function () {
    $('#createHumanData4').modal('show');
});

//preview img 4
let loadFile4 = function(event) {
    let output = document.getElementById('previewImgOutput4');
    output.src = URL.createObjectURL(event.target.files[0]);

    output.onload = function() {
        URL.revokeObjectURL(output.src) // free memory
        // $('.glitch--style-3 .glitch__img').css('background-image','url('+URL.revokeObjectURL(output.src)+')');
    }
};

// day image vao khung man hinh chinh
$('#showImg4').change(function () {
    let file = this.files[0];

    let reader = new FileReader();
    reader.onloadend = function () {
        $('.glitch--style-4 .glitch__img').css('background-image', 'url("' + reader.result + '")');
    };
    if (file) {
        reader.readAsDataURL(file);
    } else {

    }
});

$('#confirmData4').click(function () {
    let nameData = $('#nameData4').val();
    let sD = $('#shortDesData4').val();
    let d = $('#desData4').val();
    if( document.getElementById("showImg4").files.length == 0 || !nameData || !sD || !d){
        toastr.error('There is an error detected! You have to fill all information. Try again!');
        validateSound.play();
    }
    else {
        totalData = 4;
        $('.cardName4').text('ID: ' +nameData);
        $('.cardPrice4').text('Desc: ' +sD);
        $('.cardDes4').text('Info: ' +d);
        $('.cardData4').show();
        $('#createNew4').remove();
        $('#totalData').text(totalData);
        $('#createNew5').show();
        $('#createHumanData4').modal('hide');
        createSound.play();
        toastr.info('Your Data No.5 has been created!');
    }
});






//show modal data 5
$('#createNew5').click(function () {
    $('#createHumanData5').modal('show');
});
//preview img 5
let loadFile5 = function(event) {
    let output = document.getElementById('previewImgOutput5');
    output.src = URL.createObjectURL(event.target.files[0]);

    output.onload = function() {
        URL.revokeObjectURL(output.src) // free memory
    }
};


// day image vao khung man hinh chinh
$('#showImg5').change(function () {
    let file = this.files[0];

    let reader = new FileReader();
    reader.onloadend = function () {
        $('.glitch--style-5 .glitch__img').css('background-image', 'url("' + reader.result + '")');
    };
    if (file) {
        reader.readAsDataURL(file);
    } else {

    }
});


$('#confirmData5').click(function () {
    let nameData = $('#nameData5').val();
    let sD = $('#shortDesData5').val();
    let d = $('#desData5').val();
    if( document.getElementById("showImg5").files.length == 0 || !nameData || !sD || !d){
        toastr.error('There is an error detected! You have to fill all information. Try again!');
        validateSound.play();
    }
    else {
        totalData=5;
        $('.cardName5').text('ID: ' +nameData);
        $('.cardPrice5').text('Desc: ' +sD);
        $('.cardDes5').text('Info: ' +d);
        $('.cardData5').show();
        $('#createNew5').remove();
        $('#createNew6').show();
        $('#totalData').text(totalData);
        createSound.play();
        $('#createHumanData5').modal('hide');
        toastr.info('Your Data No.4 has been created!');
    }
});



//show modal data 6
$('#createNew6').click(function () {
    $('#createHumanData6').modal('show');
});
//preview img 6
let loadFile6 = function(event) {
    let output = document.getElementById('previewImgOutput6');
    output.src = URL.createObjectURL(event.target.files[0]);

    output.onload = function() {
        URL.revokeObjectURL(output.src) // free memory
    }
};


// day image vao khung man hinh chinh
$('#showImg6').change(function () {
    let file = this.files[0];

    let reader = new FileReader();
    reader.onloadend = function () {
        $('.glitch--style-6 .glitch__img').css('background-image', 'url("' + reader.result + '")');
    };
    if (file) {
        reader.readAsDataURL(file);
    } else {

    }
});


$('#confirmData6').click(function () {
    let nameData = $('#nameData6').val();
    let sD = $('#shortDesData6').val();
    let d = $('#desData6').val();
    if( document.getElementById("showImg6").files.length == 0 || !nameData || !sD || !d){
        toastr.error('There is an error detected! You have to fill all information. Try again!');
        validateSound.play();
    }
    else {
        totalData=6;
        $('.cardName6').text('ID: ' +nameData);
        $('.cardPrice6').text('Desc: ' +sD);
        $('.cardDes6').text('Info: ' +d);
        $('.cardData6').show();
        $('#createNew6').remove();
        $('#createNew4').remove();
        $('#totalData').text(totalData);
        createSound.play();
        $('#createHumanData6').modal('hide');
        toastr.info('Your Data No.6 has been created!');
    }
});





//sound
$('#dataMenuSound').hide();
$('#dataMenuHome').hide();

$('#ss').on('click','#dataMenu',function () {
    $('#dataMenuHome').show();
    $('#dataMenuSound').show();
    $('#dataMenu').replaceWith("<a href=\"javascript:\" id=\"dataMenuUp\" class=\"menuDataSS\"><i class=\"fas fa-angle-double-down \"></i></a>");
});


$('#ss').on('click','#dataMenuUp', function () {
    $('#dataMenuUp').replaceWith("<a href=\"javascript:\" id=\"dataMenu\" class=\"menuDataSS\"><i class=\"fas fa-angle-double-up \"></i></a>");
    $('#dataMenuHome').hide();
    $('#dataMenuSound').hide();
    $('#dataMenuSoundUp').hide();
});

$('#sss').on('click','#dataMenuSound', function () {
    $('#dataMenuSound').replaceWith("<a href=\"javascript:\" id=\"dataMenuSoundUp\" class=\"dataMenuSound\"><i class=\"fas fa-volume-mute\"></i></a>");
    soundsServer.pause();
    soundsServer.currentTime = 0;
});
$('#sss').on('click','#dataMenuSoundUp', function () {
    $('#dataMenuSoundUp').replaceWith("<a href=\"javascript:\" id=\"dataMenuSound\" class=\"dataMenuSound\"><i class=\"fas fa-volume-up\"></i></a>");
});



//sound
//menu bar

let soundsSV = $('#soundSv')[0];
$('#dataMenuSound').hide();
$('#dataMenuHome').hide();
$('#ss').on('click','#dataMenu',function () {
    $('#dataMenu').replaceWith("<a href=\"javascript:\" id=\"dataMenuUp\" class=\"menuDataSS\"><i class=\"fas fa-angle-double-down \"></i></a>");
    $('#dataMenuHome').show();
    $('#dataMenuSound').show();
    $('#dataMenuSoundUp').show();
});


$('#ss').on('click','#dataMenuUp', function () {
    $('#dataMenuUp').replaceWith("<a href=\"javascript:\" id=\"dataMenu\" class=\"menuDataSS\"><i class=\"fas fa-angle-double-up \"></i></a>");
    $('#dataMenuHome').hide();
    $('#dataMenuSound').hide();
    $('#dataMenuSoundUp').hide();
});

$('#sss').on('click','.dataMenuSound', function () {
    $('#dataMenuSound').replaceWith("<a href=\"javascript:\" id=\"dataMenuSoundUp\" class=\"dataMenuSound\"><i class=\"fas fa-volume-mute\"></i></a>");
    soundsSV.pause();
    soundsSV.currentTime = 0;
});
$('#sss').on('click','#dataMenuSoundUp', function () {
    $('#dataMenuSoundUp').replaceWith("<a href=\"javascript:\" id=\"dataMenuSound\" class=\"dataMenuSound\"><i class=\"fas fa-volume-up\"></i></a>");
    soundsSV.play();
    soundsSV.loop();
});
