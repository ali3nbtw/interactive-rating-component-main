let result = '';

function selectedRating(num) {
	const buttons = document.querySelectorAll('.btn-section button');

	console.log(buttons);
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].classList.remove('active');
	}
	const selectedRating = document.querySelector(`.button-rating${num}`);
	selectedRating.classList.add('active');
	return (result = num);
}

document.querySelector('.submit-btn').addEventListener('click', submiting);

function submiting() {
	if (!result) {
		return;
	} else {
		document.querySelector('.container').innerHTML = `
		<img src="images/illustration-thank-you.svg" alt="illustration-thank-you" class="illustration-thank-you">
	<div class="selected-message">
	  <p style="color: hsl(25, 97%, 53%);">You selected ${result} out of 5</p>
	</div>
	<h1>Thank you!</h1>
	<p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in
	  touch!</p>
	  `;
		document.querySelector('.container').style.alignItems = 'center';
		document.querySelector('.container').style.textAlign = 'center';
	}
}

// function selectedRating(num) {
// 	const selectedRating = document.querySelector(`.button-rating${num}`);

//    console.log(selectedRating)
// 	for (i = 0; i < 5; i++) {
// 		if (num === i) {
// 			selectedRating.style.backgroundColor = '#ffffff';
// 		} else {
// 			document.querySelector(`.button-rating${i + 1}`).style.backgroundColor = '#262f38';
// 		}
// 	}
// }
