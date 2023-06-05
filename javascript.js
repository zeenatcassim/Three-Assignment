const mainNavigation = document.getElementById("top-nav-bar");
mainNavigation.addEventListener("click", function getNavigation () {
    if (mainNavigation.className === "main-nav"){
        mainNavigation.className += "responsive";
    }else{
        mainNavigation.className = "main-nav";
    }})
