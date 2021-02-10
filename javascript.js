function start(){
    const question = document.querySelector('.question');
    question.style.display="none";
    const loading = document.querySelector('.loading');
    loading.style.display="none";
    const resultmain = document.querySelector('.result');
    resultmain.style.display="none";
}

function startsection(){
    const start = document.querySelector('.start');
    start.style.display="none";
    questionsection();
}

function questionsection(){
    const question = document.querySelector('.question');
    $('.question').show();
    // document.body.style.backgroundImage = "url('questback-v.jpg')";
    // document.body.style.backgroundRepeat = "no-repeat";
    // document.body.style.backgroundSize = "38% 90%";
    // document.body.style.backgroundPosition = "center center";


    quest();
}

function quest(){   
    const makeshift = document.querySelector('.makeshift').value; // EI
    const preValue = document.querySelector('.'+makeshift).value;
    $("."+makeshift).val(parseInt(preValue)+1);
    next();
}

var num =1;

var q ={
1: {"title":"내 플레이리스트를 더 많이 차지하고 있는 음악은?",  "type":"EI", "button1":"유행에 뒤쳐질 수는 없지!<br>모르는 사람 없는 핫한 유행곡!","button2":"이 노래 아는 사람 나밖에 없을 걸? 숨겨진 명곡!"},
2: {"title":"이 노래 진짜 좋다.<br>내 인생 곡을 찾았다면?",  "type":"EI", "button1":"야야 이 노래 들어봐!<br>여기저기 홍보하고 다닌다.","button2":"혼자 감탄하면서 반복재생 한다."},
3: {"title":"길을 가다가 얼굴만 아는 동기를 마주쳤다.",  "type":"EI", "button1":"반갑게 인사하고 지나간다","button2":"통화하는 척 하거나 못 본 척 돌아간다."},
4: {"title":"노래를 들을 때",  "type":"SN", "button1":"가사를 잘 몰라도 <br>멜로디를 흥얼거린다.","button2":"가사를 꼭 찾아보는 편이다."},
5: {"title":"플레이리스트 좀 채워볼까",  "type":"SN", "button1":"늘 내가 좋아하는 장르나<br>ㅍ가수의 노래를 선택한다.","button2":"종종 새로운 장르나<br>가수의 노래를 찾아 들어본다."},
6: {"title":"나는 한 번 들은 노래를",  "type":"SN", "button1":"잘 기억하는 편이다.","button2":"한 번 듣고 어떻게 기억해?"},
7: {"title":"슬픈 이별노래를 들었다 먼저 드는 생각은?",  "type":"TF", "button1":"흑... 너무 슬퍼ㅜㅠ","button2":"어떻게 이런 가사를 썼을까?"},
8: {"title":"친구가 자기 노래를 <br>평가해달라고 음성 파일을 보내줬다.",  "type":"TF", "button1":"‘평가를 해달라고?’ 당황스럽다.<br>들어보기도 전부터 조심스럽다.","button2":"‘평가가 필요하겠지...’<br>잘 들어보고 솔직하게 말 해준다."},
9: {"title":"친구가 “나 어제 중요한 시험 있었는데 떨어졌어.”<br>라고 연락이 왔다. 먼저 나오는 반응은?",  "type":"TF", "button1":"에구,<br>열심히 준비했을 텐데 아쉽겠다.","button2":"아 진짜? 무슨 시험이었는데?<br>오래 준비했어?"},
10:{"title":"길을 지나가다가 <br>내 취향의 노래를 들었다.", "type":"JP", "button1":"무슨 노래인지 바로 찾아본다.","button2":"‘이따 집 가서 찾아봐야지.’<br>하고 까먹는다."},
11:{"title":"시험 일주일 전, <br>공부하려고 했는데 친구가 <br>야 노래방 가자! 한다면?", "type":"JP", "button1":"아 노래방 겁나 땡기는데,,, <br>안돼. 오늘 여기까지 끝내야 돼.","button2":"아 공부해야 되는데,,, <br>갔다 와서 더 열심히 하지 뭐!! 놀자!!"},
12:{"title":"급하게 해야 할 할 일이 생겼다.", "type":"JP", "button1":"뭐부터 해야 되는지 계획부터 짠다.","button2":"뭐라도 시작부터 한다."},
}

var result ={
    "ESTJ": {"genre":"락",       "explain":"",   "img":".jpg",  "audio":"bgm/Shout (mp3cut.net).mp3"},
    "ESTP": {"genre":"힙합",     "explain":"",   "img":".jpg",  "audio":"bgm/.mp3"},
    "ESFJ": {"genre":"케이팝",   "explain":"",   "img": ".jpg", "audio":"bgm/Dynamite (mp3cut.net).mp3"},
    "ESFP": {"genre":"트롯트",   "explain":"",   "img":".jpg",  "audio":"bgm/엄지 척 (mp3cut.net).mp3"},
    "ENTJ": {"genre":"EDM",      "explain":"",   "img":".jpg",  "audio":"bgm/Flashlight (Radio Edit).mp3"},
    "ENTP": {"genre":"펑크",     "explain":"",   "img":".jpg",  "audio":"bgm/Uptown Funk (Feat. Bruno Mars).mp3"},
    "ENFJ": {"genre":"디스코",   "explain":"",   "img":".jpg",  "audio":"bgm/.mp3"},
    "ENFP": {"genre":"재즈",     "explain":"",   "img":".jpg",  "audio":"bgm/It's All Right (mp3cut.net).mp3"},
    "ISTJ": {"genre":"클래식",   "explain":"",   "img":".jpg",  "audio":"bgm/.mp3"},
    "ISTP": {"genre":"블루스",   "explain":"",   "img":".jpg",  "audio":"bgm/서울의 달 (mp3cut.net).mp3"},
    "ISFJ": {"genre":"발라드",   "explain":"",   "img":".jpg",  "audio":"bgm/정승환 - 1 - 너였다면 - 320k (mp3cut.net).mp3"},
    "ISFP": {"genre":"샹송",     "explain":"",   "img":".jpg",  "audio":"bgm/Le Festin (영화 '라따뚜이' 삽입곡) (mp3cut.net).mp3"},
    "INTP": {"genre":"인디",     "explain":"",   "img":".jpg",  "audio":"bgm/사람은 이상하고 사랑은 모르겠어 (mp3cut.net).mp3"},
    "INTJ": {"genre":"포크",     "explain":"",   "img":".jpg",  "audio":"bgm/너무 아픈 사랑은 사랑이 아니었음을 (mp3cut.net).mp3"},
    "INFJ": {"genre":"뉴에이지", "explain":"",   "img":".jpg",  "audio":"bgm/River Flows In You (mp3cut.net).mp3"},
    "INFP": {"genre":"R&B",      "explain":"",   "img":".jpg",  "audio":"bgm/.mp3"}
}

function next(){

    if(num==13){
        const question = document.querySelector('.question');
        question.style.display="none";
        setTimeout(function(){
            $(".loading").fadeIn(500);
        }, 500);
        
        setTimeout(function(){
            $(".loading").fadeOut(1000);
            $('.result').fadeIn(5000);
        }, 4500);

        
        var mbti =""
        $('.EI').val()>1 ? mbti +="E" : mbti +="I";
        $('.SN').val()>1 ? mbti +="S" : mbti +="N";
        $('.TF').val()>1 ? mbti +="T" : mbti +="F";
        $('.JP').val()>1 ? mbti +="J" : mbti +="P";

        $('.img').attr("src",result[mbti]['img']);
        $('.genre').html(result[mbti]['genre']);
        $('.expalin').html(result[mbti]['explain']);

        setTimeout(function(){
        $('.audio').attr("src",result[mbti]['audio']);
        },5500);
    }



    else{
        $('.progress-bar').attr('style','width: calc(100/12*' + num +'%');
     // $('.question').attr('style','background-img:url) 건드려볼것
        $('.question-text').html(q[num]['title']);
        $('.makeshift').val(q[num]['type']);
        $('.button1').html(q[num]['button1']);
        $('.button2').html(q[num]['button2']);
        num++;
    }
}

function loading(){
    const question = document.querySelector('.question');
    question.style.display="none";
}



function init(){
    start();
}

init();


