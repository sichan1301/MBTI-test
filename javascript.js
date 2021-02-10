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
    question.style.display="block";
    document.body.style.backgroundImage = "url('questback-v.jpg')";
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
1: {"title":"만약 당신이 1번질문을 풀고있었는데 어쩌구 저쩌구 동해물과 백두산이",  "type":"EI", "button1":"E","button2":"I"},
2: {"title":"2번 질문",  "type":"EI", "button1":"E","button2":"I"},
3: {"title":"3번 질문",  "type":"EI", "button1":"E","button2":"I"},
4: {"title":"4번 질문",  "type":"SN", "button1":"S","button2":"N"},
5: {"title":"5번 질문",  "type":"SN", "button1":"S","button2":"N"},
6: {"title":"6번 질문",  "type":"SN", "button1":"S","button2":"N"},
7: {"title":"7번 질문",  "type":"TF", "button1":"T","button2":"F"},
8: {"title":"8번 질문",  "type":"TF", "button1":"T","button2":"F"},
9: {"title":"9번 질문",  "type":"TF", "button1":"T","button2":"F"},
10:{"title":"10번 질문", "type":"JP", "button1":"J","button2":"P"},
11:{"title":"11번 질문", "type":"JP", "button1":"J","button2":"P"},
12:{"title":"12번 질문", "type":"JP", "button1":"J","button2":"P"},
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
            $(".loading").fadeIn(1500);
        }, 1000);
        
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


