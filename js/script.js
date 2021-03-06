window.addEventListener("load", function(){

    // 헤더 검색 폼
    const searchForm = document.querySelector(".search-form"),
          searchBtn = document.querySelector("#search_btn");
    
    searchBtn.addEventListener("click", () =>{
        searchForm.classList.toggle("active");
        loginForm.classList.remove("active");
        shoppingCart.classList.remove("active");
        navBar.classList.remove("active");
    });

    // 장바구니
    const shoppingCart = document.querySelector(".shopping-cart"),
          cartBtn = document.querySelector("#cart_btn");
    
    cartBtn.addEventListener("click", () =>{
        shoppingCart.classList.toggle("active");
        loginForm.classList.remove("active");
        searchForm.classList.remove("active");
        navBar.classList.remove("active");
    });

    // 로그인 폼
    const loginForm = document.querySelector(".login-form"),
          loginBtn = document.querySelector("#login_btn");
    
    loginBtn.addEventListener("click", () =>{
        loginForm.classList.toggle("active");
        shoppingCart.classList.remove("active");
        searchForm.classList.remove("active");
        navBar.classList.remove("active");
    });

    // 메뉴 버튼
    const navBar = document.querySelector("header > nav"),
          menuBtn = document.querySelector("#menu_btn");
    
    menuBtn.addEventListener("click", () =>{
        navBar.classList.toggle("active");
        loginForm.classList.remove("active");
        shoppingCart.classList.remove("active");
        searchForm.classList.remove("active");
    });

    window.addEventListener("scroll", function(){
        navBar.classList.remove("active");
        loginForm.classList.remove("active");
        shoppingCart.classList.remove("active");
        searchForm.classList.remove("active");
    })

    // 슬라이더
    const slides = document.querySelectorAll(".slide");
    const nextSlide = document.getElementById("next");
    const prevSlide = document.getElementById("prev");

    let slideIdx = 0;

    function next(){
        slides[slideIdx].classList.remove("active");
        slideIdx = (slideIdx + 1) % slides.length;      
        slides[slideIdx].classList.add("active");
    }

    function prev(){
        slides[slideIdx].classList.remove("active");
        slideIdx = (slideIdx - 1 + slides.length) % slides.length;        
        slides[slideIdx].classList.add("active");
    }
    nextSlide.addEventListener("click", next);
    prevSlide.addEventListener("click", prev);

})