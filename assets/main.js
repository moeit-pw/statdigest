function main() {

	if(qGet.get("v")) {
		v=qGet.get("v");
	} else {
		v = "Summary";
	}

	fetch(
		"tpls/" + v + ".tpl"
	).then(
		function (response) {
			// The API call was successful!
			if (response.ok) {
				return response.text();
			} else {
				return Promise.reject(response);
			}
		}
	).then(
		function (data) {
			document.getElementById("page").innerHTML = v;
			document.getElementById("content").innerHTML = data;
		}
	).catch(
		function (err) {
			document.getElementById("content").innerHTML = "<br /><br />E R R O R!";
		}
	);

}