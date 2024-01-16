function openTab(evt, tabName) {
    const tab_content = document.querySelectorAll(".gallery__tab-content");
    tab_content.forEach(tab => tab.style.display = "none");
  
    const tab_links = document.querySelectorAll(".gallery__tab-item--link");
    tab_links.forEach(link => link.classList.remove("tab-item-active"))
  
    const currentTab = document.querySelector(`.${tabName}`)
    if (currentTab) {
      currentTab.style.display = "grid";
    }

    evt.currentTarget.className += " tab-item-active";
}