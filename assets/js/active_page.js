export function updateActivePage() {
    var currentPage = window.location.pathname;
    var navigationBar = document.getElementById("navigationBar");
    var ul = navigationBar.getElementsByTagName("li");
    for (let index = 0; index < ul.length; index++) {
        var li = ul[index];
        li.classList.remove("active");
        var a = li.getElementsByTagName("a")[0];
        if (a.pathname.length > 0 && (currentPage.includes(a.pathname))) {
            li.classList.add("active");
            preventRedirect(a.id);
        }
    }
}

export function disableActivePage() {
    var navigationBar = document.getElementById("navigationBar");
    var ul = navigationBar.getElementsByTagName("li");
    for (let index = 0; index < ul.length; index++) {
        var li = ul[index];
        li.classList.remove("active");
    }
}

function preventRedirect(id) {
    document.addEventListener('click', function(event) {
        if (event.target.id == id) {
            event.preventDefault();
        }
    });
}