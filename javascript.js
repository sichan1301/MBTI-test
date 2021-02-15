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
    "ESTJ": {"genre":"락",      "subtitle":"어디서나 위풍당당 모두를 압도하는",   "chemibox":"", "explain":"동해물과 백두산이 마르고 닳도록 하느님이 보우하사 ","sub_explain":"", "audio":"bgm/Shout (mp3cut.net).mp3"},
    "ESTP": {"genre":"힙합",    "subtitle":"폼생폼사 멋쟁이 반항아",   "chemibox":"", "explain":"",  "sub_explain":"",   "audio":"bgm/시차 (We Are) (Feat (mp3cut.net).mp3"},
    "ESFJ": {"genre":"K-pop",   "subtitle":"어디서나 사랑받는 센스쟁이",   "chemibox":"뉴에이지", "explain":"", "sub_explain":"",   "audio":"bgm/Dynamite (mp3cut.net).mp3"},
    "ESFP": {"genre":"트롯트",  "subtitle":"분위기는 내가 책임질게!",   "chemibox":"", "explain":"",  "sub_explain":"",   "audio":"bgm/엄지 척 (mp3cut.net).mp3"},
    "ENTJ": {"genre":"EDM",     "subtitle":"모두 내 리듬에 맞춰 춤 춰!",  "chemibox":"", "explain":"넘치는 카리스마로 많은 사람을 이끌고 나아가는 당신은 클럽에 있는 모든 사람을 강력한 리듬으로 춤추게 하는 EDM 같은 사람이네요! 타고난 리더인 당신은 불도저 같은 추진력과 결정력, 그리고 얼어붙을 것 같이 냉철한 판단력으로 당신이 속한 조직을 이끌어 가는군요! 마냥 딱딱하고 냉철한 사람인 것 같아 보이지만 다른 이들의 장점을 찾아 그들을 진심으로 응원하고 도와주는 따뜻한 마음을 가지고 있기도 해요.",   "sub_explain":"당신의 강한 추진력과 냉철한 판단력은 당신이나 당신이 속한 조직을 빠르게 발전시키곤 해요. 하지만 종종 추진력이 너무 과열되어 나와 다른 사람의 감정을 살피지 못할 때가 있어요. 항상 발전해 나가려는 자세도 멋있지만 가끔은 한 템포 쉬면서 나와 내 주변 사람들을 살피고 잠시 쉬어갈 시간을 준다면 더더욱 훌륭한 리더가 될 수 있을 거예요!",  "audio":"bgm/Flashlight (Radio Edit).mp3"},
    "ENTP": {"genre":"펑크",    "subtitle":"Why so serious? 일단 즐겨!",  "chemibox":"", "explain":"",  "sub_explain":"당신의 거침없는 입담과 솔직한 표현은 사람들을 즐겁게 하고, 토론이나 논쟁에서 빛을 발하지만  의도치 않게 다른 사람의 감정을 상하게 하기도 해요. 말투가 거친 편이라고 하는데 내 속내는 그렇지 않아서 속상해요. 난 기억도 안 나는데 상대방이 “나 그때 속상했어.”라고 해서 당황스러울 때도 있죠. 나와 표현법이 다른 상대방과의 타협점을 찾는다면 좀 더 끈끈한 관계를 이어갈 수 있을 거예요.",  "audio":"bgm/Uptown Funk (Feat. Bruno Mars).mp3"},
    "ENFJ": {"genre":"뮤지컬",  "subtitle":"나와 함께 손잡고 노래하자! ", "chemibox":"", "explain":"언제나 밝고 따스한 모습으로 어느 모임에서나 잘 녹아들고 사람들에게 행복과 희망을 심어주곤 하는 당신의 인생은 마치 한 편의 뮤지컬 같아요. 그래서인지 당신 주변엔 늘 당신에게 힘을 얻고 또 힘을 주는 사람들이 많아요. 카리스마 있는 리더십보다는 긍정의 에너지로 사람들을 동기화시킬 수 있는 부드러운 리더십을 가지고 있네요!", "sub_explain":"다른 사람들에게 에너지를 주는 만큼 당신도 주변의 영향을 많이 받는 편이에요. 그러다 보니 같이 어울리는 사람들에게 잘 동화되죠. 좋은 에너지뿐만 아니라 나쁜 에너지까지도 가리지 않고 다 흡수해버리는 편이라 가끔 좀 피곤하긴 해요. 다른 사람은 좋지만 정작 나 스스로는 지치고 있을지 모르니 한 박자 쉬어가며 나를 달래주기로 해요:)", "audio":"bgm/슬플 땐 빨래를 해 (mp3cut.net).mp3"},
    "ENFP": {"genre":"재즈",    "subtitle":"정해진 악보보단 내 마음이<br>가는 대로 연주하고 싶어",  "chemibox":"", "explain":"‘자유로운 영혼’이라는 단어는 당신을 위해 만들어진 단어가 아닐까요? 어디로 튈지 모르는 즉흥의 아이콘인 당신의 인생은 화려한 재즈 연주를 떠오르게 하네요! 밝고 긍정적인 에너지만 뿜뿜하는 것 같아 보이지만 사실 당신은 보기보다 복잡하고 생각이 많은 사람이에요. 사람들과 함께하기를 좋아하지만, 자신만의 시간도 꼭 가지고 싶은 당신은 외향인과 내향인 그 어느 사이 뇌향인…?",   "sub_explain":"새로운 시도를 마다하지 않고 하고 싶은 게 생기면 꼭 하고 마는 열정맨 이지만 하고 싶은 게 너~무 많아서 몸이 열 개라도 모자랄 때가 있네요! 벌여 놓은 일이 많아 끝까지 마무리를 못 지을 때가 있어 멘탈이 흔들리기도 해요. 뭐든 잘 해내는 당신이니까 급하게 생각 말고 천천히 하나씩 도장 깨기 하기로 해요!",  "audio":"bgm/It's All Right (mp3cut.net).mp3"},
    "ISTJ": {"genre":"클래식",  "subtitle":"기본에 충실한 <br>그래서 더 빛나는 모범생",  "chemibox":"", "explain":"차분하고 신중한 당신, 당신 머리 속에는 다 계획이 있군요. ‘사람이 기본에 충실해야지’라고 생각하는 당신에겐 클래식이 어울리겠어요. 어떤 일을 맡으면 원칙대로, 계획대로 책임감 있고 진득하게 주어진 일을 완벽하게 해내는 당신은 어떠한 조직에서든 없어서는 안 될 존재네요! 항상 진지하고 철저한 모습에 누군가는 “너 재미 없어.”라고 할지 모르겠지만 그건 당신과 친하지 않아서 그런 거예요. 당신의 철벽을 뚫고 들어오긴 쉽지 않지만 한 번 그 벽이 허물어지면 세상 능글쟁이, 장난꾸러기예요.",   "sub_explain":"당신의 원칙적이고 철저한 성격은 당신 자신에게 가장 많이 향해 있어요. 그래서 스스로 매우 엄격하고 항상 자신을 통제하려는 성향이 강하죠. 그 덕에 당신은 무슨 일을 하든 완벽하고, 어느 조직에서든 좋은 성과를 내지만 가끔 자신에게 너무 가혹해요. 가끔은 계획과 책임감으로 꼭꼭 묶어 두었던 나를 느슨하게 풀어주고 잠시 훌쩍 떠나보는 건 어때요?",  "audio":"bgm/모차르트  세레나데 제13번 '아이네 클라이네 나흐트무지크' G장조 K (mp3cut.net).mp3"},
    "ISTP": {"genre":"블루스",  "subtitle":"",  "chemibox":"", "explain":"",  "sub_explain":"",    "audio":"bgm/서울의 달 (mp3cut.net).mp3"},
    "ISFJ": {"genre":"발라드",   "subtitle":"섬세한 멜로디로 <br>내 마음을 들었다 놨다",  "chemibox":"IIII", "explain":"역동적이진 않지만 섬세한 감성과 따뜻한 마음씨로 많은 사람을 끌어당기는 매력의 소유자인 당신의 인생에는 발라드가 어울리겠어요. 타고난 섬세함으로 사소한 부분까지 기억해주고, 알아 채주는 당신에게 감동한 사람이 한둘이 아니네요.",  "sub_explain":"혼자 있는 걸 좋아하고 낯도 가리지만 정작 다른 사람들과 함께일 때는 은근 인싸 재질이에요. 대부분 무난한 성격으로 통하지만 친해질수록 당신만의 매력을 드러내는 볼매! 사려 깊고 성실한 당신은 다른 사람의 부탁을 잘 들어주는 편이에요. 하지만 정작 자신은 힘들고 어려운 일이 생기거나 서운한 일이 생겨도 잘 드러내지 못하고 속앓이를 해요. 사실 상처도 많이 받고 여린데 사람들이 잘 몰라주는 것 같아서 서러울 때도 있죠. 조금 더 솔직하게 나를 드러내도 당신 곁에 있는 사람은 당신을 더 꽉 안아줄 거예요.",   "audio":"bgm/정승환 - 1 - 너였다면 - 320k (mp3cut.net).mp3"},
    "ISFP": {"genre":"샹송",     "subtitle":"반짝이는 파리의 밤을 느껴볼까",  "chemibox":"", "explain":"세심하고 따뜻한 당신은 주변 사람들을 잘 챙기고 편안하게 해주지만 어디로 튈지 모르는 자유로운 영혼의 소유자이기도 하네요. 반짝이는 불빛들과 자유로움의 도시, 파리의 밤거리에서 흘러나올 것 같은 샹송이 잘 어울리는 사람이에요. 창의적이고 감수성도 풍부하지만 겉으로 표현은 잘 안 해요. 혼자 상상하고 느끼며 만족하는 조용한 예술가네요. 따뜻하고 다정하기도 하면서 자신만의 감수성을 가진 매력쟁이 당신! 본인은 모르는데 인기 되게 많아요!",  "sub_explain":"감수성이 풍부하고 세심한 당신은 다른 사람의 감정을 잘 살펴 주위 사람들을 편안하게 해주지만 정작 자신은 모든 사람의 감정을 살피느라 편안하지 못해요. 그러다 한 번이라도 갈등이 생긴다면 해결하기보단 피해가고 싶은 마음이 커지곤 하죠. 나의 마음을 솔직하게 털어놓는 것이 쉽진 않지만 한 번 이야기 하고 나면 마음이 한결 가벼울 거예요!",   "audio":"bgm/Le Festin (영화 '라따뚜이' 삽입곡) (mp3cut.net).mp3"},
    "INTP": {"genre":"인디",     "subtitle":"난 조용히 나만의 길을 간다<br>자발적 아웃사이더",   "chemibox":"", "explain":"",   "sub_explain":"",  "audio":"bgm/사람은 이상하고 사랑은 모르겠어 (mp3cut.net).mp3"},
    "INTJ": {"genre":"포크",     "subtitle":"차가워 보이지만 <br>들어보면 따뜻할 걸?",  "chemibox":"", "explain":"주관이 뚜렷하고 다른 사람들에게 쉽게 휩쓸리지 않아 언뜻 세상 혼자 사는 냉혈한 같아 보이지만, 마음속엔 뜨거운 열정과 유토피아가 있는 당신은 외로운 통기타 하나로 세상을 노래한 포크 송과 닮았네요. 내성적이라 겉으로 드러나진 않지만 길을 가다 당신 쪽으로 걸어오는 강아지를 보면 전방 200m부터 내적 미소 짓고 있진 않나요? 어딘가 한 번 꽂히면 보통 사람들은 범접할 수 없는 수준까지 파고드는 당신은 집념의 사나이! 혼자 있는 것을 좋아하지만 당신을 이해해주는 사람에겐 마음의 문이 열려 수다스러운 모습을 보이기도 하네요!",  "sub_explain":"철저하고 계획적인 당신은 어떠한 일을 시작하기 전에 최악의 상황까지 고려하여 전략을 짜곤 해요. 그 덕에 당신의 전략은 쉽게 실패하지 않고 누구보다 효율적인 일 처리를 할 수 있게 되지만 종종 지나친 치밀함 때문에 하려는 일에 브레이크가 걸리거나 비관적인 태도를 갖게 되기도 하네요. 가끔은 계산기를 내려놓고 내 마음의 소리에 귀를 기울여보는 건 어때요?",   "audio":"bgm/너무 아픈 사랑은 사랑이 아니었음을 (mp3cut.net).mp3"},
    "INFJ": {"genre":"뉴에이지",  "subtitle":"나도 나를 모르겠어! 신비주의", "chemibox":"", "explain":"다정다감하고 따뜻한 당신이지만 심해처럼 깊은 당신을 사람들은 속을 알 수 없다고 이야기하기도 하네요. 신비로운 요정 세계에 살 것 같은 당신에겐 뉴에이지 음악이 어울리겠어요. 마냥 부드러워 보이는 당신이지만 옳다고 생각하는 가치를 위해 끊임없이 싸울 수 있는 당신은 누구보다 강인하네요. 섬세하고 예리한 당신은 눈치도 빨라 다른 사람의 생각과 마음을 잘 읽어내곤 하지만 너무 감정이입이 잘 되는 바람에 힘들기도 해요.",   "sub_explain":"이상적인 세상을 꿈꾸고 당신의 신념을 지키는 것에 절대 게으름을 피우지 않는 당신은 주변에 긍정적인 영향을 주는 사람이 되고자 항상 노력하네요. 당신 덕에 세상은 아직 살만한 곳 일지도 모르겠어요. 하지만 다른 사람을 도우려다 정작 자신을 돌아보지 못하는 경우가 있네요. 내가 행복하고 건강해야 다른 이들도 도울 수 있다는 거 알죠?",  "audio":"bgm/River Flows In You (mp3cut.net).mp3"},
    "INFP": {"genre":"R&B",      "subtitle":"",   "chemibox":"", "explain":"", "sub_explain":"", "audio":"bgm/Love (mp3cut.net).mp3"}
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
        $('.sub_explain').html(result[mbti]['sub_explain']);
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

function restart(){
    location.reload();
}

function init(){
    start();
}

init();


