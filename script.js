let main = document.querySelector(".main")
let place1 = document.querySelector(".place1")
let place2 = document.querySelector(".place2")
let place3 = document.querySelector(".place3")
let img1 = document.querySelector(".img-place1")
let img2 = document.querySelector(".img-place2")
let img3 = document.querySelector(".img-place3")
let img4 = document.querySelector(".img-place4")
let img5 = document.querySelector(".img-place5")
let game1 = document.querySelector(".game1")
let game2 = document.querySelector(".game2")
let game3 = document.querySelector(".game3")
let exit = document.querySelector(".exit")
let exit1 = document.querySelector(".exit1")
let exit2 = document.querySelector(".exit2")
let exit3 = document.querySelector(".exit3")
let item = document.querySelectorAll(".item")
let start = document.querySelector(".start")
let book = document.querySelector(".book")
let pencil = document.querySelector(".pencil")
let notebook = document.querySelector(".notebook")
let pen = document.querySelector(".pen")
let book1 = document.querySelector(".book1")
let pencil1 = document.querySelector(".pencil1")
let notebook1 = document.querySelector(".notebook1")
let pen1 = document.querySelector(".pen1")
let ch1 = document.querySelector(".box1")
let ch2 = document.querySelector(".box2")
let loc1 = false
let loc2 = false
let loc3 = false
let door = null
let house = 0
let player1 = true
let player2 = false
let i = 0
let n = 0
let b = 0 
let choise1 = 0
let choise2 = 0
let score = 0
let var1 = 0
let variant = document.querySelectorAll(".variant")
start.onclick = function(){
	start.style.display = "none"
	book1.style.display = "block"
	pencil1.style.display = "block"
	pen1.style.display = "block"
	notebook1.style.display = "block"
	document.querySelector(".sp").style.display = "block"
	document.querySelector(".spisok").style.display = "block"
	item[0].style.backgroundImage = "url(banan.png)"
	item[1].style.backgroundImage = "url(book-removebg-preview.png)"
	item[2].style.backgroundImage = "url(68-682374_egg-balancing-by-ofirma85-fnaf-puppet-pixel-art-removebg-preview.png)"
	item[3].style.backgroundImage = "url(pencil.png)"
	item[4].style.backgroundImage = "url(coffe.png)"
	item[5].style.backgroundImage = "url(gamepad.png)"
	item[6].style.backgroundImage = "url(sword.png)"
	item[7].style.backgroundImage = "url(notebook.png)"
	item[8].style.backgroundImage = "url(pen-removebg-preview.png)"
}
function random(){
	let num = Math.random() * 1700
	let num1 = Math.round(num)
	item[b].style.left = num1 + "px"
	b = b + 1
}
let int1 = setInterval(random, 3000)
item[0].onclick = function(){
	alert("Зачем тебе банан в школу?")
	place1.style.display = "none"
}
item[1].onclick = function(){
	book.innerHTML = "✓"
	item[1].style.display = "none"
	score = score + 1
}
item[2].onclick = function(){
	alert("Зачем тебе яйца в школу?")
	place1.style.display = "none"
}
item[3].onclick = function(){
	pencil.innerHTML = "✓"
	item[3].style.display = "none"
	score = score + 1
}
item[4].onclick = function(){
	alert("Зачем тебе коффе в школу?")
	place1.style.display = "none"
}
item[5].onclick = function(){
	alert("Зачем тебе геймпад в школу?")
	place1.style.display = "none"
}
item[6].onclick = function(){
	alert("Зачем тебе игрушечный меч в школу?")
	place1.style.display = "none"
}	
item[7].onclick = function(){
	notebook.innerHTML = "✓"
	item[7].style.display = "none"
	score = score + 1
}
item[8].onclick = function(){
	pen.innerHTML = "✓"
	item[8].style.display = "none"
	score = score + 1
	if(score == 4){
	house = 1
	clearInterval(int1)
	clearInterval(int2)
	alert("Ты готов к школе.")
	alert("Про себя: Пора выходить.")
		if(house == 1){
			exit.onclick = function(){
			place1.style.display = "none"
			main.style.display = "block"
		}
	}
}
}

function fall(){
	i = i + 1000
	item[n].style.top = i + "px"
	i = 0
	if(i > 1000){
		item[n].style.display = "none"
		n = n + 1
	}
	n = n + 1
}
let int2 = setInterval(fall, 3000)


img1.onclick = function(){
	main.style.display = "none"
	place2.style.display = "block"
}

img3.onclick = function(){
	loc1 = true
	place2.style.display = "none"
	game1.style.display = "block"
	alert("Ты встретился со своим лучшим другом в коридоре.")
	function dialogue(){
		alert("Друг: Привет, ты знал, что сегодня будет итоговая по биологии?")
		variant[0].style.display = "block"
		variant[1].style.display = "block"
		variant[0].onclick = function(){
			alert("Ты: Нет, не знал.")
			alert("Друг: Значит, ты не готов.")
			alert("Друг: Ладно, я знаю у кого есть ответы на тестовую часть, 4 у тебя уже точно будет.")
			alert("Ты: И у кого?")
			alert("Друг: У Степанюка.")
			variant[0].style.display = "none"
			variant[1].style.display = "none"
		}
		variant[1].onclick = function(){
			alert("Ты: Да, конечно.")
			alert("Друг: Не ври, по глазам вижу")
			alert("Друг: Ладно, я знаю у кого есть ответы на тестовую часть, 4 у тебя уже точно будет.")
			alert("Ты: И у кого?")
			alert("Друг: У Степанюка.")
			variant[0].style.display = "none"
			variant[1].style.display = "none"
		}
		
	}
	setTimeout(dialogue, 1000)
	alert("Ты должен победить Степанюка в камень, ножницы, бумага.")
	img4.onclick = function(){
		place2.style.display = "none"
		game2.style.display = "block"
	}
	img5.onclick = function(){
		place2.style.display = "none"
		game3.style.display = "block"
	}
	document.addEventListener("keydown", function(arg){
	if(player1 == true && player2 == false){
		if(arg.code == "KeyA"){
			player1 = false
		    player2 = true
		    choise1 = 0
			console.log("Камень")

		}
		if(arg.code == "KeyS"){
			player1 = false
		    player2 = true
		    choise1 = 1
			console.log("Ножницы")
		}
		if(arg.code == "KeyD"){
			player1 = false
			player2 = true
			choise1 = 2
			console.log("Бумага")
		}
		setTimeout(knb, 1000)
	}
	function knb(){
		let num2 = Math.random() * 2
		let num3 = Math.round(num2)
		if(num3 == 0){
			choise2 = 0
		}
		if(num3 == 1){
			choise2 = 1
		}
		if(num3 == 2){
			choise2 = 2
		}
		function show(){
			if(choise1 == 0){
				ch1.style.backgroundImage = "url()"
				ch1.style.backgroundSize = "100% 100%"
			}else if(choise1 == 1){
				ch1.style.backgroundImage = "url()"
				ch1.style.backgroundSize = "100% 100%"
			}else if(choise1 == 2){
				ch1.style.backgroundImage = "url()"
				ch1.style.backgroundSize = "100% 100%"
			}
			if(choise2 == 0){
				ch2.style.backgroundSize = "100% 100%"
				ch2.style.backgroundImage = "url(https://a.d-cd.net/d3c7061s-1920.jpg)"
			}else if(choise2 == 1){
				ch2.style.backgroundSize = "100% 100%"
				ch2.style.backgroundImage = "url(https://tdlorien.ru/upload/iblock/9d9/nf97x2sy5gjw6n2dpd7lcbi58ajfg1o4.jpg)"
			}else if(choise2 == 2){
				ch2.style.backgroundSize = "100% 100%"
				ch2.style.backgroundImage = "url(https://palitrashop.ru/image/cache/catalog/bumaga/3151-750x750.jpg)"
			}
		}
		setTimeout(show, 1000)		
	}

})
	
function finish(){
	if(choise1 == choise2){
		alert("Ничья!")
	}
	if(choise1 == 0 && choise2 == 1){
		alert("Первый игрок выиграл!")
	}
	if(choise1 == 0 && choise2 == 2){
		alert("Второй игрок выиграл!")
	}
	if(choise1 == 1 && choise2 == 0){
		alert("Второй игрок выиграл!")
	}
	if(choise1 == 1 && choise2 == 2){
		alert("Первый игрок выиграл!")
	}
	if(choise1 == 2 && choise2 == 0){
		alert("Первый игрок выиграл!")
	}
	if(choise1 == 2 && choise2 == 1){
		alert("Второй игрок выиграл!")
	}
	setTimeout(finish, 1000)
}
}
let yes = document.querySelectorAll(".yes")
let nope = document.querySelectorAll(".nope")
        yes[0].onclick = function(){
            alert("Правильно!")
            document.querySelector(".var").style.display = "none"
            document.querySelector(".var1").style.display = "block"
        }
        yes[1].onclick = function(){
            alert("Правильно!")
            document.querySelector(".var1").style.display = "none"
            document.querySelector(".var2").style.display = "block"
        }
        yes[2].onclick = function(){
            alert("Правильно!")
            document.querySelector(".var2").style.display = "none"
        }
        for (let i = 0;i < 9; i = i +1){
                nope[i].onclick = function(){
                    alert("Ты провалил тест!")
                }
            }
exit1.onclick = function(){
	game1.style.display = "none"
	place2.style.display = "block"
}
exit2.onclick = function(){
	game2.style.display = "none"
	place2.style.display = "block"
}
exit3.onclick = function(){
	game3.style.display = "none"
	place2.style.display = "block"
}



