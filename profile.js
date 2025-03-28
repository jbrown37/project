function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
}
n
function openTab(event, tabName) {
    var tabs = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");

    var buttons = document.getElementsByClassName("tab-link");
    for (var j = 0; j < buttons.length; j++) {
        buttons[j].classList.remove("active");
    }
    event.currentTarget.classList.add("active");
}
