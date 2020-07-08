function main() {

}

function set_page() {

	if(qGet.get("v")) {
		v=qGet.get("v");
	} else {
		v = "Summary";
	}

	let arr = get_file(v);

	if(arr[0]) {
		document.getElementById("page").innerHTML = v;
		document.getElementById("content").innerHTML = data;
	} else {
		if(v == "Summary" && !arr[0]) {
			alert("Aborted! Summary file is missing.");
		} else {

		}	
	}

}

function get_file(filename) {
	let ret, status, data_to_return;

	fetch(
		"tpls/" + filename + ".tpl"
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
			status = true;
			data_to_return = data;
		}
	).catch(
		function (err) {
			status = false;
			data_to_return = null;
		}
	);

	ret = [status, data_to_return];
	return ret;

}
