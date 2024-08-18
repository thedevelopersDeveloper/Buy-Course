let container = document.querySelector(".container");
		let inputFile = document.getElementById("input");
		let time = document.getElementById("time");
		let btn = document.getElementById("btn");
		let message = document.getElementById("message");
		let btn2 = document.getElementById("btn2");
		async function timer(blink){
			let timeVal = 30;
			time.style.display = "block"     
			time.innerHTML = timeVal;
			btn.style.display = "none";
			const timerInterval = setInterval(()=>{
				if(timeVal > 0 && timeVal <= 30){
					timeVal -= 1;
					time.innerHTML = timeVal;
				}
				else{
					clearInterval(timerInterval);
					clearInterval(blink);
					let button = `<input id="btn2" type="submit" value="Get the Links" />`;
					time.style.display = "none";
					btn.outerHTML = button;
					container.children.last.children.btn2.addEventListener("click",()=>{
						console.log("links");
					})
					message.innerHTML = "Verified.";
				}
			},1000)
		}
		
		function isFileSelected(){
			if(inputFile.value){
				const blink = setInterval(()=>{
					if(message.innerHTML.endsWith("...")){
						message.innerHTML = message.innerHTML.slice(0,12-3)
					}
					else{
						message.innerHTML += "."
					}
				},400)
				timer(blink);
				message.style.display = "block"
				message.style.color = "white"
				message.innerHTML = "Verifying"
			}
			else{
				message.style.display = "block"
				message.innerHTML = "Please select the screenshot of the payment."
			}
		}
		btn.addEventListener("click",()=>{
			isFileSelected();
		})