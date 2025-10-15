
let header = document.createElement("header");
header.innerHTML= ` <header>


        <div class="upper-bar">
            <ul>
                <li>العربية</li>
                <li>Francais</li>
                <li>English</li>           
            </ul>
            <div class="login-con">
            <button class="login">
                SIGN UP | LOGIN
            </button>
            </div>
        </div>



        <nav>
            <div class="logo-con">
                <img class="logo" src="/assets/media/images/logo.png">
            </div>


            <ul>
                <li><a href="/index.html">Home</a></li>
                <li><a href="/pages/adopt.html">Adopt</a></li>
                <li><a href="/pages/market.html">Market</a> </li>
                <li><a href="/pages/find-sitters.html">Find Sitters</a></li>
                <li><a href="/pages/lost-pets.html">Lost Pets</a></li>
                <li><a href="/pages/pet-care-guide.html">Pet Care Guide</a></li>
            </ul>
        </nav>



        <div></div>
    </header>
`;

document.body.appendChild(header);



let ls = document.querySelectorAll("nav li");

ls.forEach(li => {
  li.addEventListener("mouseenter", () => {
    ls.forEach(item => item.style.opacity = "0.4"); 
    li.style.opacity = "1"; 
    li.style.transform = "scale(1.1)"; 
    li.style.cursor = "pointer";
  });

  li.addEventListener("mouseleave", () => {
    ls.forEach(item => {
      item.style.opacity = "1";
      item.style.transform = "scale(1)";
      item.style.cursor = "auto";
    });
  });
});

