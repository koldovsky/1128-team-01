function openTab(evt, tabName) {
  
    // Get all elements with class "gallery__tab-content" and hide them
    const tab_content = document.querySelectorAll(".gallery__tab-content");
    tab_content.forEach(tab => tab.style.display = "none");
  
    // Get all elements with class "gallery__tab-item--link" and remove the class "tab-item-active"
    const tab_links = document.querySelectorAll(".gallery__tab-item--link");
    tab_links.forEach(link => link.classList.remove("tab-item-active"))
  
    // Show the current tab, and add a "tab-item-active" class to the button that opened the tab
    const currentTab = document.querySelector(`.${tabName}`)
    if (currentTab) {
      currentTab.style.display = "grid";
    }

    evt.currentTarget.className += " tab-item-active";
}