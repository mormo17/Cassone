function openNav(x) {
    document.getElementById("leftNavigation").style.width = "250px";
    document.getElementById("burgerMenuIcon").style.visibility='hidden';
    document.getElementById("closebtn").style.visibility='visible';
    let todoes = document.getElementById("todoes");
    let offsetLeft = todoes.offsetLeft;
    todoes.style.left = 100;
  }

  function closeNav(){
    document.getElementById("leftNavigation").style.width = "0";
    document.getElementById("burgerMenuIcon").style.visibility='visible';
    document.getElementById("closebtn").style.visibility='hidden';
    let todoes = document.getElementById("todoes");
    todoes.style.left = 0;
  }