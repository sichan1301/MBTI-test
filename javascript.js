function start(){
    const question = document.querySelector('.question');
    question.style.display="none";
}

function startsection(){
    const start = document.querySelector('.start');
    start.style.display="none";
    questionsection();
}

function questionsection(){
    const question = document.querySelector('.question');
    question.style.display="block";
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
1: {"title":"1번 질문",  "type":"EI", "button1":"E","button2":"I"},
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

function next(){

    if(num==13){
        var mbti =""
        $('.EI').val()>1 ? mbti +="E" : mbti +="I";
        $('.SN').val()>1 ? mbti +="S" : mbti +="N";
        $('.TF').val()>1 ? mbti +="T" : mbti +="F";
        $('.JP').val()>1 ? mbti +="J" : mbti +="P";
        alert(mbti);
    }
    else{
        $('.progress-bar').attr('style','width: calc(100/12*' + num +'%');
        $('.question-text').html(q[num]['title']);
        $('.makeshift').val(q[num]['type']);
        $('.button1').html(q[num]['button1']);
        $('.button2').html(q[num]['button2']);
        num++;
    }
}
// $('.button1').click(function(){
//     var type = $('.makeshift').val();
//     var preValue = $("."+type).val();
//     $("."+type).val(parseInt(preValue)+1);
//     next();
// });

// $('.button2').click(function(){
//     next();
// });

// var num =1;

// var q ={
//     1: {"title":"1번 질문",  "type":"EI", "button1":"E","button2":"I"},
//     2: {"title":"2번 질문",  "type":"EI", "button1":"E","button2":"I"},
//     3: {"title":"3번 질문",  "type":"EI", "button1":"E","button2":"I"},
//     4: {"title":"4번 질문",  "type":"SN", "button1":"S","button2":"N"},
//     5: {"title":"5번 질문",  "type":"SN", "button1":"S","button2":"N"},
//     6: {"title":"6번 질문",  "type":"SN", "button1":"S","button2":"N"},
//     7: {"title":"7번 질문",  "type":"TF", "button1":"T","button2":"F"},
//     8: {"title":"8번 질문",  "type":"TF", "button1":"T","button2":"F"},
//     9: {"title":"9번 질문",  "type":"TF", "button1":"T","button2":"F"},
//     10:{"title":"10번 질문", "type":"JP", "button1":"J","button2":"P"},
//     11:{"title":"11번 질문", "type":"JP", "button1":"J","button2":"P"},
//     12:{"title":"12번 질문", "type":"JP", "button1":"J","button2":"P"},
// }
// function next(){
//     if(num==13){
//         var mbti =""
//         $('.EI').val()>1 ? mbti +="E" : mbti +="I";
//         $('.SN').val()>1 ? mbti +="S" : mbti +="N";
//         $('.TF').val()>1 ? mbti +="T" : mbti +="F";
//         $('.JP').val()>1 ? mbti +="J" : mbti +="P";
//         alert(mbti);
//     }
//     else{
//         $('.progress-bar').attr('style','width: calc(100/12*' + num +'%');
//         $('.question-text').html(q[num]['title']);
//         $('.makeshift').val(q[num]['type']);
//         $('.button1').html(q[num]['button1']);
//         $('.button2').html(q[num]['button2']);
//         num++;
//     }
// };



function init(){
    start();
}

init();


