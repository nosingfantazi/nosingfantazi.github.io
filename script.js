var question = ['Громадянин України може бути позбавлений громадянства:',

'До особистих прав і свобод людини і громадянина належать',

'Право на життя – це:',

'Згідно Конституції, медичні, наукові та інші досліди над людьми:',

'У разі нагальної необхідності запобігти злочинові чи його попередити, уповноважені на те законом органи, можуть застосовувати тримання особи під вартою як тимчасовий запобіжний захід протягом:',

'Можливості людини і громадянина, що характеризують її участь у виробництві матеріальних благ – це:',

'Згідно з Конституцією України, ті, хто працюють, мають право на страйк для захисту своїх:',

'Право на пенсію за віком мають :',

'Хто за Конституцією України здійснює парламентський контроль за дотриманням конституційних прав і свобод людини і громадянина?',

'Які конституційні обов`язки належить виконувати громадянам України?',

'Дієздатність особи настає',

'До першого покоління прав людини входять',

'Термін розгляду заяв з питань громадянства не повинен перевищувати:',

'Чи є Україна стороною Конвенції про захист прав людини і основоположних свобод?',

'Яке з перелічених прав не захищене Конвенцією про захист прав людини і основоположних свобод?'];




var answer = [' за вчинення тяжкого злочину','за державну зраду','при довготривалому проживанні за межами України','не може бути позбавлений громадянства',

'право на свободу слова і думку','право на освіту','право на повагу до його гідності','право на недоторканість життя',

'політичне право','невід`ємне право','економічне право',' соціальне право',

'дозволені','заборонені','можуть проводитися лише для вирішення особливих проблем, що мають значення для всього людства','можуть проводитися за вільною згодою людини',

'3 години','12 годин',' 24 години','72 години',

'особисті права','економічні права','екологічні права','соціальні права', 

'соціальних інтересів','соціальних прав ',' політичних інтересів','особистих прав і свобод', 

'чоловіки після досягнення 60 років і при стажі роботи не менше 30 років','жінки після досягнення 55 років і при стажі роботи не менше 25 років','чоловіки після досягнення 60 років і при стажі роботи не менше 25 років','чоловіки після досягнення 60 років і при стажі роботи не менше 20 років',

'Верховний Комісар Верховної Ради України з прав людини','Президент України','Уповноважений Верховної Ради України з прав людини','Голова Верховної Ради України',

'шанувати державні символи України','дотримуватися Конституції та законів України','сповідати будь-яку релігію','не заподіювати шкоди природі та культурній спадщині',

'з 16 років','з 16 років а в окремих визначених законом випадках з 14 років','з 14 років','з 18 років', 

'особисті і економічні','політичні і економіч','всі перечислені','особисті і політичні', 

'6 місяців','8 місяців','4 місяці','1 місяць', 

'Україна готується до підписанняцієї Конвенції','Україна підписала Конвенцію, але її не ратифікувала','Україна є стороною Конвенції','Україна припинила членство в Конвенції',

'Право на життя','Право на шлюб','Право на достатній життєвий рівень','Право на справедливий суд'];

var key = [3, 0, 1, 3, 3, 1, 0, 2, 2, 1, 0, 3, 1, 2, 2];

var level = 0;

var name = 'name';	
var username = readCookie(name);

if (username != null) 
{	
	$('.start').css('display', 'none');
	$('.reStart').css('display', 'block');
	$('.hellow').text('С возвращением, ' + username + '!');

	$('#startGame').click(function(){
	
		$('.reStart').css('display', 'none');
		setTimeout(timer,1000);

	});
}

function show(level) {

	$('.question').text( question[level] );
	$('label[for=answer1]').text( answer[level*4+0] );
	$('label[for=answer2]').text( answer[level*4+1] );
	$('label[for=answer3]').text( answer[level*4+2] );
	$('label[for=answer4]').text( answer[level*4+3] );

}

var resultConst = [];		
show(level);
var tr = $('tr'); 
$(tr[tr.length - (level + 1)]).css('background','#FF0');

$('.btn').click(function(){

	

	if( $('input[name=answer]:checked').val() == key[level] )
	{
		level++;
		show(level);
	}
	else{gameOwer()}
	
	$('input').prop('checked', false);
	$(tr.css('background-color','#42FF00'));
	$(tr.removeClass('result'));
	$(tr[tr.length - (level + 1)]).css('background','#FF0');
	$(tr[tr.length - (level)]).css('color','#42FF00');
	$(tr[tr.length - (level)]).addClass('result');
	$('label').css('color', '#fff');

	if (level == 5 || level == 10 || level == 15) 
	{
		 resultConst.push($(tr[tr.length - (level)]).addClass('resultConst'));
	}
})

Math.rand = function(min, max){
	return Math.round(Math.random() * (max-min) + min);
}

var inputLabel = document.getElementsByTagName('label');
$('.round50').click(function(){
var inputAnswer = document.getElementsByName('answer');
var exp = [];	
var count = 0;
	while(count < 2) {
		var index = Math.rand(0,3);
		if (exp.indexOf(index) == -1 && $(inputAnswer[index]).val() != key[level] ) 
		{
			$(inputLabel[index]).css('color', 'red');
			count++;
			exp.push(index);
		}
	}
		$(this).off('click');
		$(this).css('background', 'red');
})
	 

$('.round').click(function(){
		
		$(inputLabel[Math.rand(0,3)]).css('color', '#06FA06'),
		$(this).off('click');
		$(this).css('background', 'red');
		
})

var result = $('.result'); 
$('.roundEnd').click(function(){

	end();

})


function end() {

	$('.end').css('display', 'block');

	if (tr.hasClass('result')) 
	{
		var tdResult = $("tr.result").children();
		var tdText = tdResult[1].textContent;	
		$('.showResult').text('ВЫ ВЫИГРАЛИ: ' + tdText + ' гривень');
	}
}

function gameOwer() {

	$('.end').css('display', 'block');

	if (tr.hasClass('resultConst')) 
	{
		var tdResult1 = $(resultConst[resultConst.length - 1]).children();
		var tdText1 = tdResult1[1].textContent;
		$('.showResult').text('ВЫ ВЫИГРАЛИ: ' + tdText1 + ' гривень');
	}
}


$('form').submit(function(e){ 

		e.preventDefault()
	
});

$('#start').click(function(){

	if ($('#user').val() != '') 
	{
		$('.start').css('display', 'none');
		
	}
	else
	{
		$('#user').css('background', '#f30')
	}	

	var value = $('#user').val();

	createCookie(name, value, 1);

});

function createCookie(name, value, days) {
    if (days) 
    {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 *1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else 
    {
        var expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {

    var nameEQ = name + "=";
    var ca = document.cookie.split(';');

    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
        	var value = c.substring(nameEQ.length,c.length);
            return value.split(",");
        }
    }
    return null;
}