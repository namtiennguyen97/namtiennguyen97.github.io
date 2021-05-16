let guideTip = ['Ps Shopping project: Add product into Cart, calculate your purchase money or something more!',
'All project is javascript/jquery, there is no database-backend to save your progress!',
'Bunker Server: CRUD data with style gaming- broken bunker.','All theme/ost i used for this project is depend on game style-Nier!',
'Worm Game- classic snake game. Go there and enjoy gameplay and ost 8-bit.','Opening Dictionary: or u can call Two-way dictionary itself, you can create new word data there!',
'Setting? It for turn on/off all theme/click/hover sounds. Or u can make detail option!','Credit: Just show project manager, and tipping about this project. Actually this is small project about Javascipt!',
'Fun fact: Once you make purchase in Ps Shopping(Shopping project in Main menu), You can take Secret word that will put in chatbox. And see the result Hehehe.',
'Tôi ngu khoản set vị trí css lắm, nên đừng vào web này bằng điện thoại không mọi thứ sẽ loạn đấy!','I m fucking noob in css position, so please DONT access this website on Mobile, all things will go crazy!'];


$('.glitch__img').click(function () {
    let randGuide = Math.floor(Math.random() * 11);
    $('#guideMsgIndex').text(guideTip[randGuide]);
});


