document.getElementById('submit').addEventListener('click', function () {
	var growth_id = document.getElementById('growth');
	var weight_id = document.getElementById('weight');
	var growth_value = growth_id.value/100;
	var weight_value = weight_id.value;
	var index = Math.round((weight_value / (growth_value * growth_value) * 100)) / 100;
	if (isNaN(index)) {
		document.getElementById('result_output').innerHTML = 'Заповніть поля';
	} else {
		document.getElementById('result_output').innerHTML = index;
	}
	
	[].forEach.call(document.getElementsByClassName('result'), function(element) {
		if (element.classList.contains('active')) {
		element.classList.remove('active');
		} 
	});
	index = Math.round(index * 10) / 10;
	if (index < 18.5) {
		document.getElementById('result_1').classList.add('active');
	}
	else if (index > 18.5 && index < 24.9) {
		document.getElementById('result_2').classList.add('active');
	}
	else if (index > 25 && index < 29.9) {
		document.getElementById('result_3').classList.add('active');
	}
	else if (index > 30 && index < 34.9) {
		document.getElementById('result_4').classList.add('active');
	}
	else if (index > 35 && index < 39.9) {
		document.getElementById('result_5').classList.add('active');
	}
	else if (index > 40) {
		document.getElementById('result_6').classList.add('active');
	}
});