window.onload = function () {
	var btn = document.getElementsByClassName('btn')[0];
	var hiddenPage = document.getElementsByClassName('hiddenPage')[0];
	btn.onclick = function () {
		hiddenPage.style.display = 'block';
	}

	hiddenPage.onclick = function () {
		hiddenPage.style.display = 'none'
	}
}