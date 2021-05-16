




let english = ['bat','dog','cat','fish','worm','rat','snake'];
let vn = ['dơi','chó','mèo','cá','sâu','chuột','rắn'];

function trans() {
    let word = document.getElementById('search').value;

    for (let  i = 0; i < english.length; i ++){

        //anh-viet
        if (word === english[i]){
            word = vn[i];
            $('#result').removeClass('text-danger');
            $('#result').addClass('text-success');
            document.getElementById('result').innerHTML ="TRANSLATED to VN: "+ word;
            break;
        }

        else {
            $('#result').removeClass('text-success');
            $('#result').addClass('text-danger');
            document.getElementById('result').innerHTML = "Please enter some word you already knew!";
        }

        //viet-anh

        if (word === vn[i]){
            word = english[i];
            $('#result').removeClass('text-danger');
            $('#result').addClass('text-success');
            document.getElementById('result').innerHTML ="TRANSLATED to English: "+ word;
            break;
        } else {
            $('#result').removeClass('text-success');
            $('#result').addClass('text-danger');
            document.getElementById('result').innerHTML = "Please enter some word you already knew!";
        }
    }
}


