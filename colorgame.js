let colors=generateRandomColors(6);

let numSquares;
let squares=document.querySelectorAll('.square');
let messageDisplay=document.querySelector('#message');
let resetButton=document.querySelector('.button');
let easyButton=document.querySelector('#easyButton');
let hardButton=document.querySelector('#hardButton');
let colorDisplay= document.querySelector('#colorDisplay');
let h1=document.querySelector('h1');
let pickedColor=pickColor();
colorDisplay.textContent=pickedColor;

easyButton.addEventListener('click',function(){
	resetButton.textContent='Play Again?';
	this.classList.add('selected');
	hardButton.classList.remove('selected');
	numSquares=3;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(let i=0;i<squares.length;i++){
		if(colors[i]){
		squares[i].style.background=colors[i];
	}
	else{
		squares[i].style.display='none';
	}
}
	

});

hardButton.addEventListener('click',function(){
	resetButton.textContent='Play Again?';
	this.classList.add('selected');
	easyButton.classList.remove('selected');
	numSquares=6;
			colors= generateRandomColors(numSquares);
		pickedColor=pickColor();
		colorDisplay.textContent=pickedColor;
			for(let i=0;i<squares.length;i++){
	
		squares[i].style.background=colors[i];

		squares[i].style.display='block';
	
}

});

resetButton.addEventListener('click',function(){
	messageDisplay.textContent='';
	
	// easyButton.style.remove('selected');
	// hardButton.style.remove('selected');
	numSquares=6;
		this.textContent='Play Again?';
		// numSquares=6;
		colors= generateRandomColors(numSquares);
		pickedColor=pickColor();
		colorDisplay.textContent=pickedColor;

		for(let i=0;i<squares.length;i++){
				squares[i].style.background=colors[i];
				squares[i].style.display='block';
	squares[i].addEventListener('click',function(){
		let clickedColor=squares[i].style.background;
		
		if(clickedColor===pickedColor){
		colorDi(clickedColor);

		// h1.style.background=clickedColor;

	}else{ 
		squares[i].style.background='#232323';
		messageDisplay.textContent='Try Again';

	}
	});
		}



});


for(let i = 0;i<=squares.length;i++){
	squares[i].style.background=colors[i];
	squares[i].addEventListener('click',function(){
		let clickedColor=squares[i].style.background;
		
		if(clickedColor===pickedColor){
		colorDi(clickedColor);


		// h1.style.background=clickedColor;

	}else{ 
		squares[i].style.background='#232323';
		messageDisplay.textContent='Try Again';
	     }
	});

}	


function colorDi(color){
for(let i=0;i<=squares.length;i++){
	squares[i].style.background=color;
	messageDisplay.textContent='Correct';
	// h1.style.background=steelblue;
	resetButton.textContent='Play Again?';

}}

function pickColor(){
	let random= Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	let arr=[];
    for(let i=0;i<num;i++){
    	arr.push(randomColors());
    }
    return arr;

	
}

function randomColors(){
	let r= Math.floor(Math.random()*256);
	let g= Math.floor(Math.random()*256);
	let b= Math.floor(Math.random()*256);
    
	return 'rgb('+ r + ', ' + g + ', ' + b+ ')';

}

