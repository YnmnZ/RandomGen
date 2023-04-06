let resultDecider = 0;

let input = document.getElementById("input");
let button = document.getElementById("button");
let output = document.getElementById("output");
let main = document.getElementById("main");
let divider = document.getElementById("divider");

const resultArray = [["大吉! Great Fortune! Miracles will happen!", 10],
["吉! Good Luck! Wait for good things to happen!", 35],
["小吉! Lucky! Things will work out fine! Don't worry!", 70],
["凶! Unlucky! Think twice before you act!",95],
["大凶! Bad Fortune! Stay strong and you will get through it!", 100]]
//GF 1~10, GL 11~35, L 36~70, UL 71~95, BF 96~100

function generate(randomN,array){
	let currentInput = input.value;
	randomN = Math.floor((Math.random() * 100) + 1);
	for (var i = 0; i < array.length; i++) {
		if (randomN < array[i][1]) {
			return(currentInput + ", your fortune of the day is... " + array[i][0]);
		};
	};
}

function restyle(){
	let rM=Math.random() * 255;
	let gM=Math.random() * 255;
	let bM=Math.random() * 255;
	let rD=Math.random() * 255;
	let gD=Math.random() * 255;
	let bD=Math.random() * 255;
	let mainColor = "rgb(" + rM + "," + gM + "," + bM + ")";
	let dividerColor = "rgb(" + rD + "," + gD + "," + bD + ")";
	main.style.backgroundColor = mainColor;
	divider.style.backgroundColor = dividerColor;
}

button.addEventListener("click", function(){
	// console.log(input.value)
		output.innerText = generate(resultDecider,resultArray);
		restyle();
});

console.log(generate(resultDecider,resultArray));