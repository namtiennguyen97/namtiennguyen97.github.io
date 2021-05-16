/*Hàm Mở Form*/
function moForm() {
    let nierRing = $('#contactRing')[0];
    document.getElementById("myForm").style.display = "block";
    nierRing.play();

}
/*Hàm Đóng Form*/
function dongForm() {
    document.getElementById("myForm").style.display = "none";
}

$('#clientSendChat').click(function () {
    let mes = $('#chat').val();
    let randomAnswer = ['What happened?','Really?','Can you talk more clearly?','This is static web u know, there is no database to save your progress.','The heck? @@','Seem you re in troubled?','I know u just test, but pls respect me!','FUN FACT: You can make any purchase to unlock keyword for reward, then enter it over here...',
        'My github is namtiennguyen97, check it out!','Mercy! i just want to become a Laravel Fresher','As i told you, this is just static web!','Wanna to hear my story?','What do you need in my store?','Heh, all my code just like a trash, i knew it, but i still... feeling proud of it.'];
    let secretAnswer = 'Well congrats that you read my code and see how to display this/ Or u made the purchase. Here your reward! Check the image below. Beside, if u want, u can right click on image and select: Open Image in new window. I hope this will make u relax.';

    let randNum = Math.floor(Math.random() * 13);

    console.log(mes);
    if (mes){
        $('#appendChat').append("<div class='row'>" +
            "<img src='clientAva/clientAvatar.png' class=\"img img-thumbnail\" style=\"width: 50px;height: 50px\">" +
            "<textarea class='clientChat' readonly>"+mes+"</textarea>" +
            "</div>");

        $('#appendChat').append("<div class='row'>" +
            "<img src='avatar.jpg' class=\"img img-thumbnail\" style=\"width: 50px;height: 50px\">" +
            "<textarea class='adminChat' readonly>"+randomAnswer[randNum]+"</textarea>" +
            "</div>");
        var objDiv = document.getElementById("appendChat");
        objDiv.scrollTop = objDiv.scrollHeight;
    } else {
        toastr.error('Type some text to chat with us!');
    }
    //
    if (mes === 'namtien'){
        $('#appendChat').append("<div class='row'>" +
            "<img src=\"avatar.jpg\" class=\"img img-thumbnail\" style=\"width: 50px;height: 50px\">" +
            "<textarea class='adminChat' readonly>"+secretAnswer+"</textarea>" +
            "<img src='img/reward_2b_ass.jpg' style=\"width: 150px;height: 150px\">"+
            "<img src='img/reward_2b_2.gif' style=\"width: 150px;height: 150px\">"+

            "</div>");

        var objDiv = document.getElementById("appendChat");
        objDiv.scrollTop = objDiv.scrollHeight;
    }


    //

    if (mes === 'showmore'){
        $('#appendChat').append("<div class='row'>" +
            "<img src=\"avatar.jpg\" class=\"img img-thumbnail\" style=\"width: 50px;height: 50px\">" +
            "<textarea class='adminChat' readonly>"+secretAnswer+"</textarea>" +
            "<img src='img/moreExcited.jpg' style=\"width: 150px;height: 150px\">"+
            "<img src='img/moreExcited2.jpg' style=\"width: 150px;height: 150px\">"+

            "</div>");

        var objDiv = document.getElementById("appendChat");
        objDiv.scrollTop = objDiv.scrollHeight;
    }
});

