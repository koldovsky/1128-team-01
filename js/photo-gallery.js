function openTab(evt, tabName) {
    var i, tab_content, tab_links, tab_unique_name;
  
    // Get all elements with class "gallery__tab-content" and hide them
    tab_content = document.getElementsByClassName("gallery__tab-content");
    for (i = 0; i < tab_content.length; i++) {
      tab_content[i].style.display = "none";
    }
  
    // Get all elements with class "gallery__tab-item--link" and remove the class "tab-item-active"
    tab_links = document.getElementsByClassName("gallery__tab-item--link");
    for (i = 0; i < tab_links.length; i++) {
      tab_links[i].className = tab_links[i].className.replace(" tab-item-active", "");
    }
  
    // Show the current tab, and add a "tab-item-active" class to the button that opened the tab
    for (i = 0; i < tab_content.length; i++) {
        var tab_unique_name = tab_content[i].classList;
        if (tab_unique_name.contains(tabName)) {
            tab_content[i].style.display = "grid";
        }
    }
    evt.currentTarget.className += " tab-item-active";
}