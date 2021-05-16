//option/mute/up sound theme script
let mainMenuSound = $('#mainMenuSound')[0];
let nierMail = $('#nierSound')[0];
let nierChoose = $('#nierChoose')[0];

$('.menuBar').mouseenter(function () {
    nierMail.play();

});



$('.menuBar').click(function () {
    nierChoose.play();
});

$('.setting').click(function () {
    $('#settingModal').modal('show');
});


// tat sound main theme
$('#mainMenuSoundSetting').click(function () {
    $('.themeSound').replaceWith(" <i  class=\"themeSoundMute btn btn-secondary fas fa-volume-mute\"></i>");
    // $('.themeSound').removeClass('fa-volume-up');
    // $('.themeSound').addClass('fa-volume-mute mainThemeMute');
    mainMenuSound.pause();
    mainMenuSound.currentTime = 0;
});

$('.settingContent').on('click','.themeSoundMute', function () {
    $('.themeSoundMute').replaceWith(" <i  class=\"themeSound btn btn-secondary fas fa-volume-up\"></i>")
    mainMenuSound.play();
    mainMenuSound.loop();
});

//tat effect sound move boi chuot/mouse
$('#effectSoundSetting').click(function () {
    $('.effectSound').replaceWith(" <i  class=\"effectSoundMute btn btn-secondary fas fa-volume-mute\"></i>");

    $('.menuBar').mouseenter(function () {
        nierMail.pause();
    });
});

$('.settingContent').on('click','.effectSoundMute', function () {
    $('.effectSoundMute').replaceWith(" <i  class=\"effectSound btn btn-secondary fas fa-volume-up\"></i>");
    $('.menuBar').mouseenter(function () {
        nierMail.play();
    });
})


//click effect
$('#clickSoundSetting').click(function () {
    $('.clickSound').replaceWith(" <i  class=\"clickSoundMute btn btn-secondary fas fa-volume-mute\"></i>");

    $('.menuBar').click(function () {
        nierChoose.pause();
    });
});
$('.settingContent').on('click','.clickSoundMute', function () {
    $('.clickSoundMute').replaceWith(" <i  class=\"clickSound btn btn-secondary fas fa-volume-up\"></i>");
    $('.menuBar').click(function () {
        nierChoose.play();
    });
})



// setting sound master- sound tong
$('#masterSoundSetting').click(function () {
    $('.masterSound').replaceWith(" <i  class=\"masterSoundMute btn btn-secondary fas fa-volume-mute\"></i>");
    $('.effectSound').replaceWith(" <i  class=\"effectSoundMute btn btn-secondary fas fa-volume-mute\"></i>");
    $('.themeSound').replaceWith(" <i  class=\"themeSoundMute btn btn-secondary fas fa-volume-mute\"></i>");
    $('.clickSound').replaceWith(" <i  class=\"clickSoundMute btn btn-secondary fas fa-volume-mute\"></i>");

    mainMenuSound.pause();
    mainMenuSound.currentTime = 0;
    $('.menuBar').mouseenter(function () {
        nierMail.pause();
    });
    $('.menuBar').click(function () {
        nierChoose.pause();
    });
});

$('.settingContent').on('click','.masterSoundMute', function () {
    $('.masterSoundMute').replaceWith(" <i  class=\"masterSound btn btn-secondary fas fa-volume-up\"></i>");
    $('.effectSoundMute').replaceWith(" <i  class=\"effectSound btn btn-secondary fas fa-volume-up\"></i>");
    $('.themeSoundMute').replaceWith(" <i  class=\"themeSound btn btn-secondary fas fa-volume-up\"></i>");
    $('.clickSoundMute').replaceWith(" <i  class=\"clickSound btn btn-secondary fas fa-volume-up\"></i>");
    $('.menuBar').mouseenter(function () {
        nierMail.play();
    });
    $('.menuBar').click(function () {
        nierChoose.play();
    });


    mainMenuSound.play();
    mainMenuSound.loop();

})
