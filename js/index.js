// add & remove style
var tags = ["tag-all", "tag-design", "tag-research", "tag-development"];

function addStyle(element) {
    document.getElementById(element).classList.add("nav-active");
}

function removeClicked(item) {
    if (document.getElementById(item).classList.contains("nav-active") == true) {
        document.getElementById(item).classList.remove("nav-active");
    }
}

var tagAll = document.getElementById("tag-all");

tagAll.onclick = function () {
    console.log((document.getElementById(item).classList.contains("nav-active")));
    // tags.forEach(removeClicked);
    // addStyle("tag-all");
    // document.getElementsByClassName("project-design").style.display = "flex";
    // document.getElementsByClassName("project-development").style.display = "flex";
}
document.getElementById("tag-design").onclick = function () {
    tags.forEach(removeClicked);
    addStyle("tag-design");

    document.getElementsByClassName("project-design").style.display = "flex";
    document.getElementsByClassName("project-development").style.display = "none";
}
document.getElementById("tag-development").onclick = function () {
    tags.forEach(removeClicked);
    addStyle("tag-development");

    document.getElementsByClassName("project-design").style.display = "none";
    document.getElementsByClassName("project-development").style.display = "flex";
}