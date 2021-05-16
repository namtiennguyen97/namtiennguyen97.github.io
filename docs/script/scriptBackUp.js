let totalQty = $('#inputQty').val();
let gamePrice;


let game1Price = $('#game1').data('price');
let game2Price = $('#game2').data('price');
let game3Price = $('#game3').data('price');
let game4Price = $('#game4').data('price');
let game5Price = $('#game5').data('price');




let game1Qty = $('#game1').data('qty');
let game2Qty = $('#game2').data('qty');
let game3Qty = $('#game3').data('qty');
let game4Qty = $('#game4').data('qty');
let game5Qty = $('#game5').data('qty');


$('.addCartBtn').click(function () {

    totalGameQty();
    $('.hiddenBody').hide();
});

// lay gia tri total Qty
function getTotalQty() {
    $('#totalQty').text(totalQty);
    if (totalQty === 0){
        $('.hiddenBody').show();
    }
}


//function cong totalQty
function totalGameQty() {
    totalQty++;
    $('#totalQty').text(totalQty);
}

function totalDownQty() {
    totalQty--;
    $('#totalQty').text(totalQty);
}

//detail price
function detailGamePrice(price, qty) {
    gamePrice = (price * qty);

    $('.detailPriceGame1').text(formatNum(gamePrice));
    return gamePrice;
}

function detailGame2Price(price, qty) {
    gamePrice = (price * qty);
    $('.detailPriceGame2').text(formatNum(gamePrice));
    return gamePrice;
}

function detailGame3Price(price, qty) {
    gamePrice = (price * qty);

    $('.detailPriceGame3').text(formatNum(gamePrice));
    return gamePrice;
}

function detailGame4Price(price, qty) {
    gamePrice = (price * qty);

    $('.detailPriceGame4').text(formatNum(gamePrice));
    return gamePrice;
}

function detailGame5Price(price, qty) {
    gamePrice = (price * qty);

    $('.detailPriceGame5').text(formatNum(gamePrice));
    return gamePrice;
}


function decreaseGamePrice(price) {
    //detailGamePrice();
    gamePrice -= price;

}


//tang so luong cart trong gio hang
function upQtyButton(num) {
    switch (num) {
        case 1:
            let game1Price = $('#game1').data('price');
            game1Qty++;
            totalGameQty(); // so luong tong gio hang cap nhat
            $('.game1QtyInput').val(game1Qty); // o input trong cart cap nhat theo
            $('#detailGame1Qty').text(game1Qty); // hien thi cap nhat so luong index game1 chinh'
            detailGamePrice(game1Price, game1Qty); // tinh tien game1
            totalPriceCart();
            break;
        case 2:
            let game2Price = $('#game2').data('price');
            game2Qty++;
            totalGameQty(); // so luong tong gio hang cap nhat
            $('.game2QtyInput').val(game2Qty); // o input trong cart cap nhat theo
            $('#detailGame2Qty').text(game2Qty); // hien thi cap nhat so luong index game1 chinh'
            detailGame2Price(game2Price, game2Qty); // tinh tien game1
            totalPriceCart();
            break;
        case 3:
            let game3Price = $('#game3').data('price');
            game3Qty++;
            totalGameQty(); // so luong tong gio hang cap nhat
            $('.game3QtyInput').val(game3Qty); // o input trong cart cap nhat theo
            $('#detailGame3Qty').text(game3Qty); // hien thi cap nhat so luong index game1 chinh'
            detailGame3Price(game3Price, game3Qty); // tinh tien game1
            totalPriceCart();
            break;
        case 4:
            let game4Price = $('#game4').data('price');
            game4Qty++;
            totalGameQty(); // so luong tong gio hang cap nhat
            $('.game4QtyInput').val(game4Qty); // o input trong cart cap nhat theo
            $('#detailGame4Qty').text(game4Qty); // hien thi cap nhat so luong index game1 chinh'
            detailGame4Price(game4Price, game4Qty); // tinh tien game1
            totalPriceCart();
            break;
        case 5:
            let game5Price = $('#game5').data('price');
            game5Qty++;
            totalGameQty(); // so luong tong gio hang cap nhat
            $('.game5QtyInput').val(game5Qty); // o input trong cart cap nhat theo
            $('#detailGame5Qty').text(game5Qty); // hien thi cap nhat so luong index game1 chinh'
            detailGame5Price(game5Price, game5Qty); // tinh tien game1
            totalPriceCart();
    }

}

//giam so luong cart trong gio hang
function downQtyButton(num) {
    switch (num) {
        case 1:
            let game1Price = $('#game1').data('price');
            game1Qty--;
            totalDownQty();
            $('.game1QtyInput').val(game1Qty);
            $('#detailGame1Qty').text(game1Qty);
            decreaseGamePrice(game1Price);
            $('.detailPriceGame1').text(gamePrice);
            totalPriceCart();
            break;
        case 2:
            let game2Price = $('#game2').data('price');
            game2Qty--;
            totalDownQty();
            $('.game2QtyInput').val(game2Qty);
            $('#detailGame2Qty').text(game2Qty);
            decreaseGamePrice(game2Price);
            $('.detailPriceGame2').text(gamePrice);
            totalPriceCart();
            break;
        case 3:
            let game3Price = $('#game3').data('price');
            game3Qty--;
            totalDownQty();
            $('.game3QtyInput').val(game3Qty);
            $('#detailGame3Qty').text(game3Qty);
            decreaseGamePrice(game3Price);
            $('.detailPriceGame3').text(gamePrice);
            totalPriceCart();
            break;
        case 4:
            let game4Price = $('#game4').data('price');
            game4Qty--;
            totalDownQty();
            $('.game4QtyInput').val(game4Qty);
            $('#detailGame4Qty').text(game4Qty);
            decreaseGamePrice(game4Price);
            $('.detailPriceGame4').text(gamePrice);
            totalPriceCart();
            break;
        case 5:
            let game5Price = $('#game5').data('price');
            game5Qty--;
            totalDownQty();
            $('.game5QtyInput').val(game5Qty);
            $('#detailGame5Qty').text(game5Qty);
            decreaseGamePrice(game5Price);
            $('.detailPriceGame5').text(gamePrice);
            totalPriceCart();
            break;
    }
}


function alertToastr(name) {
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-bottom-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };
    toastr.success(name + ' has been stored!');
}



// bat dau su kien click gio hang
$('#game1').click(function () {
    let game1Price = $(this).data('price');
    game1Qty++;
    $('#detailGame1Qty').text(game1Qty);
    detailGamePrice(game1Price, game1Qty);
    alertToastr($(this).data('name'));
    $('#showCart1').html("<div class='container cart1'>" +
        "<div class='row'>" +
        "<div class='col'>" +
        "<img src='../cartItemImage/nierGame.jpg' class='img img-thumbnail img-cart'>" +
        "<br>"+
        "<span><b>Nier Automata</b></span>" +
        "</div>" +

        "<div class='col'>" +
        "<button onclick='upQtyButton(1)' class=' btnGame1Up a'><i class=\"fas fa-arrow-up\"></i></button>" +

        "<input  type='number' readonly class='game1QtyInput qtyInputCart'>" +

        "<button onclick='downQtyButton(1)'  class=' btnGame1Down a'><i class=\"fas fa-arrow-down\"></i></button>" +
        "</div>" +
        "<div class='col'>" +
        "<span onclick='deleteCart(1)' data-id='1' class='deleteCart1'><i class='btn btn-danger fa fa-trash'></i></span>" +
        "</div>" +
        "</div>" +
        "</div>");

    $('.game1QtyInput').val(game1Qty);
    totalPriceCart();


});
$('#game2').click(function () {
    let game2Price = $(this).data('price');
    game2Qty++;
    $('#detailGame2Qty').text(game2Qty);
    detailGame2Price(game2Price, game2Qty);
    alertToastr($(this).data('name'));


    $('#showCart2').html("<div class='container cart2'>" +

        "<div class='row'>" +
        "<div class='col'>" +
        "<img src='../cartItemImage/castlevania.jpeg' class='img img-thumbnail img-cart'>" +
        "<br>"+
        "<span><b>Castlevania: LOS2</b></span>" +
        "</div>" +
        "<div class='col'>" +
        "<button onclick='upQtyButton(2)' class='btnGame1Up a'><i class=\"fas fa-arrow-up\"></i></button>" +

        "<input  type='number' readonly class='game2QtyInput qtyInputCart'>" +

        "<button onclick='downQtyButton(2)' class='btnGame1Down a'><i class=\"fas fa-arrow-down\"></i></button>" +
        "</div>" +

        "<div class='col'>" +
        "<span onclick='deleteCart(2)' data-id='2' class='deleteCart'><i class='btn btn-danger fa fa-trash'></i></span>" +
        "</div>" +
        "</div>" +
        "</div>");

    $('.game2QtyInput').val(game2Qty);
    totalPriceCart();

});
$('#game3').click(function () {
    let game3Price = $(this).data('price');
    game3Qty++;
    $('#detailGame3Qty').text(game3Qty);
    detailGame3Price(game3Price, game3Qty);
    alertToastr($(this).data('name'));

    $('#showCart3').html("<div class='container cart3'>" +
        "<div class='row'>" +
        "<div class='col'>" +
        "<img src='../cartItemImage/deathStranding.jpg' class='img img-thumbnail img-cart'>" +
        "<br>"+
        "<span><b>Death Stranding</b></span>" +
        "</div>" +
        "<div class='col'>" +
        "<button onclick='upQtyButton(3)' class='btnGame1Up a'><i class=\"fas fa-arrow-up\"></i></button>" +

        "<input  type='number' readonly class='game3QtyInput qtyInputCart'>" +

        "<button onclick='downQtyButton(3)' class='btnGame1Down a'><i class=\"fas fa-arrow-down\"></i></button>" +
        "</div>" +
        "<div class='col'>" +
        "<span onclick='deleteCart(3)' data-id='3' class='deleteCart'><i class='btn btn-danger fa fa-trash'></i></span>" +
        "<div>" +
        "</div>");

    $('.game3QtyInput').val(game3Qty);
    totalPriceCart();

});
$('#game4').click(function () {
    let game4Price = $(this).data('price');
    game4Qty++;
    $('#detailGame4Qty').text(game4Qty);
    detailGame4Price(game4Price, game4Qty);
    alertToastr($(this).data('name'));
    $('#showCart4').html("<div class='container cart4'>" +
        "<div class='row'>" +
        "<div class='col'>" +
        "<img src='../cartItemImage/cavestory.jpg' class='img img-thumbnail img-cart'>" +
        "<br>"+
        "<span><b>Cave Story +</b></span>" +
        "</div>" +
        "<div class='col'>" +
        "<button onclick='upQtyButton(4)' class='btnGame1Up a'><i class=\"fas fa-arrow-up\"></i></button>" +

        "<input  type='number' readonly class='game4QtyInput qtyInputCart'>" +

        "<button onclick='downQtyButton(4)' class='btnGame1Down a'><i class=\"fas fa-arrow-down\"></i></button>" +
        "</div>" +
        "<div class='col'>" +
        "<span onclick='deleteCart(4)' data-id='2' class='deleteCart'><i class='btn btn-danger fa fa-trash'></i></span>" +
        "</div>" +
        "</div>");

    $('.game4QtyInput').val(game4Qty);
    totalPriceCart();
});
$('#game5').click(function () {
    let game5Price = $(this).data('price');
    game5Qty++;
    $('#detailGame5Qty').text(game5Qty);
    detailGame5Price(game5Price, game5Qty);
    alertToastr($(this).data('name'));


    $('#showCart5').html("<div class='container cart5'>" +
        "<div class='row'>" +
        "<div class='col'>" +
        "<img src='../cartItemImage/ff7Remake.jpg' class='img img-thumbnail img-cart'>" +
        "<br>"+
        "<span><b>FF XII: Remake</b></span>" +
        "</div>" +
        "<div class='col'>" +
        "<button onclick='upQtyButton(5)' class='btnGame1Up a'><i class=\"fas fa-arrow-up\"></i></button>" +

        "<input  type='number' readonly class='game5QtyInput qtyInputCart'>" +

        "<button onclick='downQtyButton(5)' class='btnGame1Down a'><i class=\"fas fa-arrow-down\"></i></button>" +
        "</div>" +
        "<div class='col'>" +
        "<span onclick='deleteCart(5)' data-id='5' class='deleteCart'><i class='btn btn-danger fa fa-trash'></i></span>" +
        "</div>" +
        "</div>");
    $('.game5QtyInput').val(game5Qty);
    totalPriceCart();
});


// tinh lai tien va qty game 1 sau khi bi delete cart

function deleteCart(num) {
    switch (num) {
        case 1:
            totalQty -= game1Qty;
            game1Qty = 0;
            $('#detailGame1Qty').text(game1Qty);
            $('.cart1').remove();
            $('.detailPriceGame1').text(0);
            getTotalQty();
            toastr.warning('Your product has been removed!');
            totalPriceCart();
            break;
        case 2:
            totalQty -= game2Qty;
            game2Qty = 0;
            $('#detailGame2Qty').text(game2Qty);
            $('.cart2').remove();
            $('.detailPriceGame2').text(0);
            getTotalQty();
            toastr.warning('Your product has been removed!');
            totalPriceCart();
            break;
        case 3:
            totalQty -= game3Qty;
            game3Qty = 0;
            $('#detailGame3Qty').text(game3Qty);
            $('.cart3').remove();
            $('.detailPriceGame3').text(0);
            getTotalQty();
            toastr.warning('Your product has been removed!');
            totalPriceCart();
            break;
        case 4:
            totalQty -= game4Qty;
            game4Qty = 0;
            $('#detailGame4Qty').text(game4Qty);
            $('.cart4').remove();
            $('.detailPriceGame4').text(0);
            getTotalQty();
            toastr.warning('Your product has been removed!');
            totalPriceCart();
            break;
        case 5:
            totalQty -= game5Qty;
            game5Qty = 0;
            $('#detailGame5Qty').text(game5Qty);
            $('.cart5').remove();
            $('.detailPriceGame5').text(0);
            getTotalQty();
            toastr.warning('Your product has been removed!');
            totalPriceCart();
            break;


    }
}

//format number
function formatNum(number) {
    let formattedNumber = new Intl.NumberFormat();
    return formattedNumber.format(number);
}

//tinh tong tien trong cart
totalPriceCart();
function totalPriceCart() {
    let totalAllPrice = (game1Price * game1Qty) + (game2Price * game2Qty) + (game3Price * game3Qty) + (game4Price * game4Qty) + (game5Price * game5Qty);
    let formattedNumber = new Intl.NumberFormat();
    $('#totalPriceCart').text(formattedNumber.format(totalAllPrice));
}
