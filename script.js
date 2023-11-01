document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector(".loading-screen").style.display = "block";
    } else {
        document.querySelector(".loading-screen").style.display = "none";
    }
};



