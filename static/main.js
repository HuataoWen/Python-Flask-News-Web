function topNews() {
    // Change class
    document.getElementById("searchNews").classList.remove("active");
    document.getElementById("topNews").classList.add("active");

    // Get top news
}

function searchNews() {
    // Change class
    document.getElementById("topNews").classList.remove("active");
    document.getElementById("searchNews").classList.add("active");

    // Get user search
}


function show(param_div_id) {
    document.getElementById('main_place').innerHTML = document.getElementById(param_div_id).innerHTML;
}
