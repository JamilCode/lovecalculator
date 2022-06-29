function calculateLove() {
	let yourName = document.getElementById("Yname").value;
	let loverName = document.getElementById("Lname").value;
	let loveScore = Math.floor(Math.random() * (80-50)) + 50;
	let result = document.getElementById("result");
	let finalResult = yourName + " and " + loverName + " are ";
	let comment = document.getElementById("comment");
	
	//Shayaries
	let shayari = document.getElementById("shayari");
	let diffShayari = ["Tum Dost Ban Ke Aise Aaye Zindagi Mein<br>" +
"Ki Hum Yeh Zamana Hi Bhool Gaye<br>" +
"Tumhein Yaad Aaye Na Aaye Humari Kabhi<br>" +
"Par Hum To Tumhein Bhulaana Hi Bhool Gaye", "Zindagi Ke Toofanon Ka Saahil Hai Dosti<br>" +
"Dil Ke Armaanon Ki Manzil Hai Dosti<br>" +
"Zindagi Bhi Ban Jayegi Apni To Jannat<br>" +
"Agar Maut Aane Tak Saath De Dosti", "Dushmano Se Mohabbat Hone Lagi Hai Mujhe<br>" +
"Jaise Jaise Dosto Ko Aazmata Ja Raha Hoon.", "Dost Hokar Bhi Maheeno Nahi Milta Mujhse<br>" +
"Uss Se Kehna Ki Kabhi Zakhm Lagaane Aaye", "Tanhai Si Thi Duniya Ki Bheed Mein<br>" +
"Socha Koi Apna Nahi Takdeer Mein<br>" +
"Ek Din Jab Dosti Ki Aap Se To Yoon Laga<br>" +
"Kuchh Khaas Tha Mere Haath Ki Lakeer Mein."];
	let specShayari = ["Zindagi Har Pal Kuchh Khaas Nahi Hoti<br>" + 
	"Phoolo Ki Khushboo Hamesha Paas Nahi Hoti<br>" +
	"Milna Humari Takdeer Mein Tha Varna<br>" +
	"Itni Pyari Dosti ittefaaq Nahi Hoti", "Tu Mujhe Chahe Na Chahe<br>" +
"Yeh Tere Bas Mein Toh Hai<br>" +
"Aur Main Tujhko Na Chahun<br>" +
"Yeh Mere Bas Mein Nahi.", "Mohabbat<br>" +
"Hamne Maana Zindagi Barbaad Kar Deti Hai<br>" +
"Yeh Kya Kam Hai Ki Marr Jane Pe Duniya Yaad Karti Hai.", "Khushiyan Kisi Ki Mohtaj Nahi Hoti<br>" +
"Dosti Yuhi Ittefaq Se Nahi Hoti<br>" +
"Kuch To Maainey Honge Is Pal Ke<br>" +
"Warna Yuhi Aapse Mulakat Nahi Hoti.", "Bekhudi Ki Zindagi Hum Jiya Nahi Karte<br>" +
"Jaam Dusro Se Cheen Kar Hum Piya Nahi Karte<br>" +
"Unko Mohabbat Hai To Aakar Izhaar Kare<br>" +
"Peecha Hum Kisi Ka Kiya Nahi Karte."];
	
	function diffComment() {
		let x =  Math.floor(Math.random() * 5);
		if(loveScore <= 60) {
			comment.innerHTML = "I think you deserve someone better than " + loverName +
			"<br>It's a <i>Kabhi Khushi Kabhie Gham</i> Jodi";
		}
		else if(loveScore <= 70) {
			comment.innerHTML = "Not that bad. But extra effort is required before propose";
		}
		else {
			comment.innerHTML = "Good going. There is a good chance that you both can be a couple"
		}
		shayari.innerHTML = diffShayari[x];
	}
	
	function specFun() {
		let specScore = Math.floor(Math.random()*(100-91)) + 90;
		let y = Math.floor(Math.random() * 5);
		shayari.innerHTML = specShayari[y];
		if(yourName.toLowerCase() == "jamil") {
			if(loverName.toLowerCase() == "ankita") {
				if(specScore <= 95) {
					comment.innerHTML = "You both are made for each other" +
					"<br>It's a <i>Dilwale Dulhaniya Le Jayenge</i> Jodi";
					result.innerHTML = finalResult + specScore + "% Lover";
				}
				else {
					comment.innerHTML = "WoW It's a" +
					"<br><i>Rab Ne Bana Di Jodi</i>" + "<br>Perfect Couple";
					result.innerHTML = finalResult + specScore + "% Lover";
				}
			}
			else {
				let specScore2 = Math.floor(Math.random()*(90-71)) + 70;
				if(specScore2 <= 80) {
					comment.innerHTML = "<i>Kuch to hua hai</i>" + 
					"<br><i>Kuch ho gaya hai</i>" +
					"<br>Am I Correct? &#128521;"
				}
				else {
					comment.innerHTML = "I can clearly see a bright future" + 
					"<br>It's a <i>Kuch Kuch Hota Hain</i> Jodi";
				}
				result.innerHTML = finalResult + specScore2 + "% Lover";
			}
			
		}
		else if(loverName.toLowerCase() == "jamil") {
			if(yourName.toLowerCase() == "ankita") {
				if(specScore <= 95) {
					comment.innerHTML = "You both are made for each other" +
					"<br>It's a <i>Dilwale Dulhaniya Le Jayenge</i> Jodi";
					result.innerHTML = finalResult + specScore + "% Lover";
				}
				else {
					comment.innerHTML = "WoW It's a" +
					"<br><i>Rab Ne Bana Di Jodi</i>" + "<br>Perfect Couple";
					result.innerHTML = finalResult + specScore + "% Lover";
				}
			}
			else {
				let specScore2 = Math.floor(Math.random()*(90-71)) + 70;
				if(specScore2 <= 80) {
					comment.innerHTML = "<i>Kuch to hua hai</i>" + 
					"<br><i>Kuch ho gaya hai</i>" +
					"<br>Am I Correct? &#128521;"
				}
				else {
					comment.innerHTML = "I can clearly see a bright future" + 
					"<br>It's a <i>Kuch Kuch Hota Hain</i> Jodi";
				}
				result.innerHTML = finalResult + specScore2 + "% Lover";
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
