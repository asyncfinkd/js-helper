let text = "Hello, World";

function slice(a,b, textParameter) {
	let SplitedText = textParameter.split("");
  let SortedMessage = "";
  for(let i = a; i < b; i++) {
  	SortedMessage += SplitedText[i];
	}
  return SortedMessage;
}

let a = slice(0,5,text);
console.log(a);
