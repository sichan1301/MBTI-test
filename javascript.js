function start(){
    document.body.style.backgroundColor = "rgb(252, 246, 214)";
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
    document.body.style.backgroundColor = "rgb(252, 246, 214)";
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
1: {"title":"내 플레이리스트를 더 많이 차지하고 있는 음악은?",  "type":"EI", "button1":"유행에 뒤쳐질 수는 없지!<br>모르는 사람 없는 핫한 유행곡!","button2":"이 노래 아는 사람 나밖에 없을 걸?<br> 숨겨진 명곡!"},
2: {"title":"시험 일주일 전, <br>공부하려고 했는데 친구가 <br>야 노래방 가자! 한다면?", "type":"JP", "button1":"아 노래방 겁나 땡기는데,,, <br>안돼. 오늘 여기까지 끝내야 돼.","button2":"아 공부해야 되는데,,, 갔다 와서<br>더 열심히 하지 뭐!! 놀자!!"},
3: {"title":"나는 한 번 들은 노래를",  "type":"SN", "button1":"잘 기억하는 편이다.","button2":"한 번 듣고 어떻게 기억해?"},
4: {"title":"노래를 들을 때",  "type":"SN", "button1":"가사를 잘 몰라도 <br>멜로디를 흥얼거린다.","button2":"가사를 꼭 찾아보는 편이다."},
5: {"title":"급하게 해야 할 일이 생겼다.", "type":"JP", "button1":"뭐부터 해야 되는지 계획부터 짠다.","button2":"뭐라도 시작부터 한다."},
6: {"title":"이 노래 진짜 좋다.<br>내 인생 곡을 찾았다면?",  "type":"EI", "button1":"야야 이 노래 들어봐!<br>여기저기 홍보하고 다닌다.","button2":"혼자 감탄하면서 반복재생 한다."},
7: {"title":"플레이리스트 좀 채워볼까",  "type":"SN", "button1":"늘 내가 좋아하는 장르나 가수의<br>노래를 선택한다.","button2":"종종 새로운 장르나 가수의<br>노래를 찾아 들어본다."},
8: {"title":"친구가 본인의 노래실력을 평가해달라고 음성 파일을 보내줬다.",  "type":"TF", "button1":"‘평가가 필요하겠지...’<br>잘 들어보고 솔직하게 말 해준다.","button2":"‘평가를 해달라고?’ 당황스럽다.<br>들어보기도 전부터 조심스럽다."},
9: {"title":"길을 가다가 얼굴만 아는 <br>동기를 마주쳤다.",  "type":"EI", "button1":"반갑게 인사하고 지나간다","button2":"통화하는 척 하거나<br>못 본 척 돌아간다."},
10: {"title":"친구가 “나 어제 중요한<br>시험 있었는데 떨어졌어.” 라고 연락이 왔다.<br>먼저 나오는 반응은?",  "type":"TF", "button1":"아 진짜? 무슨 시험이었는데?<br>오래 준비했어?","button2":"에구, 열심히 준비했을 텐데<br>아쉽겠다."},
11: {"title":"슬픈 이별노래를 들었다.<br>먼저 드는 생각은?",  "type":"TF", "button1":"어떻게 이런 가사를 썼을까?","button2":"흑... 너무 슬퍼ㅜㅠ"},
12:{"title":"길을 지나가다가 <br>내 취향의 노래를 들었다.", "type":"JP", "button1":"무슨 노래인지 바로 찾아본다.","button2":"‘이따 집 가서 찾아봐야지.’<br>하고 까먹는다."},
}

// var q ={
//     1: {"title":"내 플레이리스트를 더 많이 차지하고 있는 음악은?",  "type":"EI", "button1":"유행에 뒤쳐질 수는 없지!<br>모르는 사람 없는 핫한 유행곡!","button2":"이 노래 아는 사람 나밖에 없을 걸?<br>   숨겨진 명곡!"},
//     2: {"title":"이 노래 진짜 좋다.<br>내 인생 곡을 찾았다면?",  "type":"EI", "button1":"야야 이 노래 들어봐!<br>여기저기 홍보하고 다닌다.","button2":"혼자 감탄하면서 반복재생 한다."},
//     3: {"title":"길을 가다가 얼굴만 아는 <br>동기를 마주쳤다.",  "type":"EI", "button1":"반갑게 인사하고 지나간다","button2":"통화하는 척 하거나<br>못 본 척 돌아간다."},
//     4: {"title":"노래를 들을 때",  "type":"SN", "button1":"가사를 잘 몰라도 <br>멜로디를 흥얼거린다.","button2":"가사를 꼭 찾아보는 편이다."},
//     5: {"title":"플레이리스트 좀 채워볼까",  "type":"SN", "button1":"늘 내가 좋아하는 장르나 가수의<br>노래를 선택한다.","button2":"종종 새로운 장르나 가수의<br>노래를 찾아 들어본다."},
//     6: {"title":"나는 한 번 들은 노래를",  "type":"SN", "button1":"잘 기억하는 편이다.","button2":"한 번 듣고 어떻게 기억해?"},
//     7: {"title":"슬픈 이별노래를 들었다.<br>먼저 드는 생각은?",  "type":"TF", "button1":"어떻게 이런 가사를 썼을까?","button2":"흑... 너무 슬퍼ㅜㅠ"},
//     8: {"title":"친구가 자기 노래를 평가<br>해달라고 음성 파일을 보내줬다.",  "type":"TF", "button1":"‘평가가 필요하겠지...’<br>잘 들어보고 솔직하게 말 해준다.","button2":"‘평가를 해달라고?’ 당황스럽다.<br>들어보기도 전부터 조심스럽다."},
//     9: {"title":"친구가 “나 어제 중요한 시험 있었는데 떨어졌어.”<br>라고 연락이 왔다. 먼저 나오는 반응은?",  "type":"TF", "button1":"아 진짜? 무슨 시험이었는데?<br>오래 준비했어?","button2":"에구, 열심히 준비했을 텐데<br>아쉽겠다."},
//     10:{"title":"길을 지나가다가 <br>내 취향의 노래를 들었다.", "type":"JP", "button1":"무슨 노래인지 바로 찾아본다.","button2":"‘이따 집 가서 찾아봐야지.’<br>하고 까먹는다."},
//     11:{"title":"시험 일주일 전, <br>공부하려고 했는데 친구가 <br>야 노래방 가자! 한다면?", "type":"JP", "button1":"아 노래방 겁나 땡기는데,,, <br>안돼. 오늘 여기까지 끝내야 돼.","button2":"아 공부해야 되는데,,, <br>갔다 와서 더 열심히 하지 뭐!! 놀자!!"},
//     12:{"title":"급하게 해야 할 일이 생겼다.", "type":"JP", "button1":"뭐부터 해야 되는지 계획부터 짠다.","button2":"뭐라도 시작부터 한다."},
//     }

var result ={
    "ESTJ": {"genre":"락",      "subtitle":"",   "chemibox":"", "explain":"동해물과 백두산이 마르고 닳도록 하느님이 보우하사 ", "audio":"bgm/Shout (mp3cut.net).mp3"},
    "ESTP": {"genre":"힙합",    "subtitle":"",   "chemibox":"", "explain":"",     "audio":"bgm/시차 (We Are) (Feat (mp3cut.net).mp3"},
    "ESFJ": {"genre":"K-pop",   "subtitle":"",   "chemibox":"뉴에이지", "explain":"헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤헤",    "audio":"bgm/Dynamite (mp3cut.net).mp3"},
    "ESFP": {"genre":"트롯트",  "subtitle":"",   "chemibox":"", "explain":"",     "audio":"bgm/엄지 척 (mp3cut.net).mp3"},
    "ENTJ": {"genre":"EDM",     "subtitle":"",  "chemibox":"", "explain":"",     "audio":"bgm/Flashlight (Radio Edit).mp3"},
    "ENTP": {"genre":"펑크",    "subtitle":"",  "chemibox":"", "explain":"",    "audio":"bgm/Uptown Funk (Feat. Bruno Mars).mp3"},
    "ENFJ": {"genre":"뮤지컬",  "subtitle":"", "chemibox":"", "explain":"햇살은 따스하고 새들은 지저귀고 랄랄라~ 언제나 밝고 따스한 모습으로 어느 모임에서나 잘 녹아들고 사람들에게 행복과 희망을 심어주곤 하는 당신의 인생은 마치 한 편의 뮤지컬 같아요. 그래서인지 당신 주변엔 늘 당신에게 힘을 얻고 또 힘을 주는 사람들이 많아요. 카리스마 있는 리더십 보다는 긍정의 에너지로 사람들을 동기화 시킬 수 있는 부드러운 리더십을 가지고 있네요!", "audio":"bgm/슬플 땐 빨래를 해 (mp3cut.net).mp3"},
    "ENFP": {"genre":"재즈",    "subtitle":"",  "chemibox":"", "explain":"",     "audio":"bgm/It's All Right (mp3cut.net).mp3"},
    "ISTJ": {"genre":"클래식",  "subtitle":"",  "chemibox":"", "explain":"",     "audio":"bgm/모차르트  세레나데 제13번 '아이네 클라이네 나흐트무지크' G장조 K (mp3cut.net).mp3"},
    "ISTP": {"genre":"블루스",  "subtitle":"",  "chemibox":"", "explain":"",     "audio":"bgm/서울의 달 (mp3cut.net).mp3"},
    "ISFJ": {"genre":"발라드",   "subtitle":"섬세한 멜로디로 내 마음을 들었다 놨다",  "chemibox":"정시찬", "explain":"♬ <br>역동적이진 않지만 섬세한 감성과 따뜻한 마음씨로 많은 사람을 끌어당기는 매력의 소유자인 당신의 인생에는 발라드가 어울리겠어요. 타고난 섬세함으로 사소한 부분 까지 기억해주고, 알아채주는 당신에게 감동한 사람이 한 둘이 아니네요.<br>혼자 있는 걸 좋아하고 낯도 가리지만 정작 다른 사람들과 함께일 때는 은근 인싸 재질이에요. 대부분 무난한 성격으로 통하지만 친해질수록 당신만의 매력을 드러내는 볼매!<br>사려 깊고 성실한 당신은 다른 사람의 부탁을 잘 들어주는 편이예요. 하지만 정작 자신은 힘들고 어려운 일이 생기거나 서운한 일이 생겨도 잘 드러내지 못하고 속앓이를 해요. 사실 상처도 많이 받고 여린데 사람들이 잘 몰라주는 것 같아서 서러울 때도 있죠. 조금 더 솔직하게 나를 드러내도 당신 곁에 있는 사람은 당신을 더 꽉 안아줄 거예요.",     "audio":"bgm/정승환 - 1 - 너였다면 - 320k (mp3cut.net).mp3"},
    "ISFP": {"genre":"샹송",     "subtitle":"",  "chemibox":"", "explain":"",     "audio":"bgm/Le Festin (영화 '라따뚜이' 삽입곡) (mp3cut.net).mp3"},
    "INTP": {"genre":"인디",     "subtitle":"",   "chemibox":"", "explain":"",     "audio":"bgm/사람은 이상하고 사랑은 모르겠어 (mp3cut.net).mp3"},
    "INTJ": {"genre":"포크",     "subtitle":"",  "chemibox":"", "explain":"",     "audio":"bgm/너무 아픈 사랑은 사랑이 아니었음을 (mp3cut.net).mp3"},
    "INFJ": {"genre":"뉴에이지",  "subtitle":"", "chemibox":"", "explain":"",     "audio":"bgm/River Flows In You (mp3cut.net).mp3"},
    "INFP": {"genre":"R&B",      "subtitle":"",   "chemibox":"", "explain":"동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세", "audio":"bgm/Love (mp3cut.net).mp3"}
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
        document.body.style.backgroundColor = "rgb(252, 246, 214)";
        
        var mbti =""
        $('.EI').val()>1 ? mbti +="E" : mbti +="I";
        $('.SN').val()>1 ? mbti +="S" : mbti +="N";
        $('.TF').val()>1 ? mbti +="T" : mbti +="F";
        $('.JP').val()>1 ? mbti +="J" : mbti +="P";

        $('.chemibox').html(result[mbti]['chemibox']);
        $('.genre').html(result[mbti]['genre']);
        $('.explain').html(result[mbti]['explain']);
        $('.subtitle').html(result[mbti]['subtitle']);   

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


