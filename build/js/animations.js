const handleMove = (card, e) => {
	const { offsetWidth: width, offsetHeight: height } = card
	const { offsetX: x, offsetY: y } = e
	const moveX = (x / width) * 30 - 10
	const moveY = (y / height) * 20 - 10
	card.style.transform = `rotateX(${-moveY}deg) rotateY(${moveX}deg)`
}

const resetStyle = (card) => {
	card.style.transform = `rotateX(0deg) rotateY(0deg)`
}

function tiltEfect() {
	document.addEventListener('DOMContentLoaded', () => {
		const $cards = document.querySelectorAll('.main__card')
		$cards.forEach((card) => {
			card.addEventListener('mousemove', (e) => handleMove(card, e))
			card.addEventListener('mouseleave', () => resetStyle(card))
		})
	})
}

tiltEfect()
