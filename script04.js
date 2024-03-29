function elements (num){
	if (num == 1) {
		return "water"
	} else if (num == 2) {
		return "earth"
	} else if (num == 3) {
		return "fire"
	}else if (num == 4) {
		return "air"
	}else {
		alert("Congratulations!")
		return "You are the AVATAR"
	}
}

console.log(elements(Math.floor(Math.random() *5)));