function calculateLove() {
	let yourName = document.getElementById("Yname").value;
	let loverName = document.getElementById("Lname").value;
	let loveScore = Math.floor(Math.random() * (80-50)) + 50;
	let result = document.getElementById("result");
	let finalResult = yourName + " and " + loverName + " are ";
	let comment = document.getElementById("comment");
	
	function diffComment() {
		if(loveScore <= 60) {
			comment.innerHTML = "I think you deserve someone better than " + loverName;
		}
		else if(loveScore <= 70) {
			comment.innerHTML = "Not that bad. But extra effort is required before propose";
		}
		else {
			comment.innerHTML = "Good going. There is a good chance that you both can be a couple"
		}
	}
	function shayari() {
		document.getElementById("shayari").innerHTML = "Aag Suraj Mein Hoti Hai,<br>Jalna Zameen Ko Padta Hai,<br>Mohabbat Nigahein Karti Hai,<br>Tadapna Dil Ko Padta Hai";
	}
	function specFun() {
		let specComment = "WoW, It's a <b>Rab Ne Bana Di Jodi<b><br> You both are made for each other"
		let specScore = Math.floor(Math.random()*(100-91)) + 90;
		if(yourName.toLowerCase() == "jamil") {
			if(loverName.toLowerCase() == "ankita" || loverName.toLowerCase() == "swagata") {
				comment.innerHTML = specComment;
				result.innerHTML = finalResult + specScore + "% Lover";
				shayari();
			}
			else {
				diffComment();
			result.innerHTML = finalResult + loveScore + "% Lover";
			}
		}
		else if(loverName.toLowerCase() == "jamil") {
			if(yourName.toLowerCase() == "ankita" || yourName.toLowerCase() == "swagata") {
				comment.innerHTML = specComment;
				result.innerHTML = finalResult + specScore + "% Lover";
				shayari();
			}
			else {
			diffComment();
			result.innerHTML = finalResult + loveScore + "% Lover";
			}
		}
		else {
			diffComment();
			result.innerHTML = finalResult + loveScore + "% Lover";
		}
	}
	if(yourName == "" || loverName == "") {
			alert("invalid name");
		}
	else{
		if(yourName.toLowerCase() == "jamil" || loverName.toLowerCase() == "jamil") {
			specFun();
		}
		else {
			diffComment();
			result.innerHTML = finalResult + loveScore + "% Lover";
		}
	}
}