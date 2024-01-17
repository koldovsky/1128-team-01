function openTab(event) {
  const tabName = event.currentTarget.dataset.tab;
  const tabContent = document.querySelectorAll(".gallery__tab-content");
  tabContent.forEach(tab => tab.style.display = "none");
  
  const tabLinks = document.querySelectorAll(".gallery__tab-item--link");
  tabLinks.forEach(link => link.classList.remove("tab-item-active"));
  
  const currentTab = document.querySelector(`.${tabName}`);
  currentTab.style.display = "grid";

  event.currentTarget.classList.add("tab-item-active");
}

document.addEventListener("partialsLoaded", function() {
  const tabNavBtns = document.querySelectorAll(".gallery__tab-item--link");
  tabNavBtns.forEach(btn => {
    btn.addEventListener('click', openTab);
  });
})