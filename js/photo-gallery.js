function openTab(event) {
  const tabName = event.currentTarget.dataset.tab;
  const tab_content = document.querySelectorAll(".gallery__tab-content");
  tab_content.forEach(tab => tab.style.display = "none");
  
  const tab_links = document.querySelectorAll(".gallery__tab-item--link");
  tab_links.forEach(link => link.classList.remove("tab-item-active"));
  
  const currentTab = document.querySelector(`.${tabName}`);
  currentTab.style.display = "grid";

  event.currentTarget.classList.add("tab-item-active");
}

document.addEventListener("partialsLoaded", function() {
  const tab_nav_btns = document.querySelectorAll(".gallery__tab-item--link");
  tab_nav_btns.forEach(btn => {
    btn.addEventListener('click', openTab);
  });
})