let totalQty = $('#inputQty').val();
let gamePrice;

// bien global
let game1Price = $('#game1').data('price');
let game2Price = $('#game2').data('price');
let game3Price = $('#game3').data('price');
let game4Price = $('#game4').data('price');
let game5Price = $('#game5').data('price');



// bien global
let game1Qty = $('#game1').data('qty');
let game2Qty = $('#game2').data('qty');
let game3Qty = $('#game3').data('qty');
let game4Qty = $('#game4').data('qty');
let game5Qty = $('#game5').data('qty');



function purchase(){
    if (totalQty > 0){
        toastr.success('Thank for Purchase our product!');
        toastr.warning('Because of sale day, we glad to give you secret keyword: namtien. Let guess this keyword using for?');
        if (totalQty > 4){
            toastr.success('Wow. Thank for Purchase alot of our product!');
            toastr.warning('Because of sale day, and u did alot of purchase, we glad to give you vip secret keyword: showmore. Let guess this keyword using for?');
        }
    }
    else {
        toastr.error('There is nothing to make purchase!');
    }


}




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
function eachGamePrice(price,qty,productNumberClass) {
    gamePrice = (price * qty);
    $('.detailPriceGame'+productNumberClass).text(formatNum(gamePrice));
    return gamePrice;
}

//



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
            eachGamePrice(game1Price, game1Qty,1); // tinh tien game1
            totalPriceCart();
            break;
        case 2:
            let game2Price = $('#game2').data('price');
            game2Qty++;
            totalGameQty(); // so luong tong gio hang cap nhat
            $('.game2QtyInput').val(game2Qty); // o input trong cart cap nhat theo
            $('#detailGame2Qty').text(game2Qty); // hien thi cap nhat so luong index game1 chinh'
            eachGamePrice(game2Price, game2Qty,2); // tinh tien game2
            totalPriceCart();
            break;
        case 3:
            let game3Price = $('#game3').data('price');
            game3Qty++;
            totalGameQty(); // so luong tong gio hang cap nhat
            $('.game3QtyInput').val(game3Qty); // o input trong cart cap nhat theo
            $('#detailGame3Qty').text(game3Qty); // hien thi cap nhat so luong index game1 chinh'
            eachGamePrice(game3Price, game3Qty,3); // tinh tien game3
            totalPriceCart();
            break;
        case 4:
            let game4Price = $('#game4').data('price');
            game4Qty++;
            totalGameQty(); // so luong tong gio hang cap nhat
            $('.game4QtyInput').val(game4Qty); // o input trong cart cap nhat theo
            $('#detailGame4Qty').text(game4Qty); // hien thi cap nhat so luong index game1 chinh'
            eachGamePrice(game4Price, game4Qty,4); // tinh tien game 4
            totalPriceCart();
            break;
        case 5:
            let game5Price = $('#game5').data('price');
            game5Qty++;
            totalGameQty(); // so luong tong gio hang cap nhat
            $('.game5QtyInput').val(game5Qty); // o input trong cart cap nhat theo
            $('#detailGame5Qty').text(game5Qty); // hien thi cap nhat so luong index game1 chinh'
            eachGamePrice(game5Price, game5Qty,5); // tinh tien game 5
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

//function cong gameQty hien thi rieng
function getGameQty(gameQty,gameIdQtyDisplay) {
    $("#detailGame"+gameIdQtyDisplay+"Qty").text(gameQty);
}

// function click gio hang
function cartClick(gameQty,gameIdQtyDisplay,gamePrice,productNumber,productName){
    eachGamePrice(gamePrice,gameQty,productNumber);
    alertToastr(productName);
}

// render cart sau khi bay vao gio
function renderCart(productNumber,cartDeletionClass,productName,productImgSrc,gameQty){
    $('#showCart'+productNumber).html("<div class='container "+cartDeletionClass+"'>" +
        "<div class='row'>" +
        "<div class='col'>" +
        "<img src='cartItemImage/"+productImgSrc+"' class='img img-thumbnail img-cart'>" +
        "<br>"+
        "<span><b>"+productName+"</b></span>" +
        "</div>" +

        "<div class='col'>" +
        "<button onclick='upQtyButton("+productNumber+")' class=' btnGame1Up a'><i class=\"fas fa-arrow-up\"></i></button>" +

        "<input  type='number' readonly class='game"+productNumber+"QtyInput qtyInputCart'>" +

        "<button onclick='downQtyButton("+productNumber+")'  class=' btnGame1Down a'><i class=\"fas fa-arrow-down\"></i></button>" +
        "</div>" +
        "<div class='col'>" +
        "<span onclick='deleteCart("+productNumber+")'><i class='btn btn-danger fa fa-trash'></i></span>" +
        "</div>" +
        "</div>" +
        "</div>");


    $('.game'+productNumber+'QtyInput').val(gameQty);
    totalPriceCart();
}


// bat dau su kien click gio hang
$('#game1').click(function () {
    game1Qty++;
    getGameQty(game1Qty,1);
    cartClick(game1Qty,1,game1Price,1,'Nier AutoMata');
    renderCart(1,'cart1','NierAutoMata','nierGame.jpg',game1Qty);

});
$('#game2').click(function () {

    game2Qty++;
    getGameQty(game2Qty,2);
    cartClick(game2Qty,2,game2Price,2,'Castlevania: Lord of Shadow 2');
    renderCart(2,'cart2','Castlevania: Lord of Shadow 2','castlevania.jpeg',game2Qty);


});
$('#game3').click(function () {
    game3Qty++;
    getGameQty(game3Qty,3);
    cartClick(game3Qty,3,game3Price,3,'Death Stranding');
    renderCart(3,'cart3','Death Stranding','deathStranding.jpg',game3Qty);


});
$('#game4').click(function () {
    game4Qty++;
    getGameQty(game4Qty,4);
    cartClick(game4Qty,4,game4Price,4,'Cave Story +');
    renderCart(4,'cart4','Cave Story +','cavestory.jpg',game4Qty);


});
$('#game5').click(function () {
    game5Qty++;
    getGameQty(game5Qty,5);
    cartClick(game5Qty,5,game5Price,5,'Final Fantasy XII: Remake');
    renderCart(5,'cart5','Final Fantasy XII: Remake','ff7Remake.jpg',game5Qty);


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





