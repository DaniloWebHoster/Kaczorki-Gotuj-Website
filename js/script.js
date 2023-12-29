const langs = document.querySelector(".lang"), //Grabs the container with our Language Elements form html.
    link = document.querySelectorAll("a"), //Grabs the links within our container with our Language Elements form html.
    title = document.querySelector(".description"); //Grabs main page desciption.

let lang = localStorage.getItem("lang") || "english";
let index = parseInt(localStorage.getItem("langIndex")) || 0;

const data = {
  english: 
  {
    "description": "Welcome to Kazorki Gotunja. Our website is all to do with catering. Here you can find a wide variety food from Dishes to Special Ocasion Cakes and many more! If your interested in learning more please explore our webpage and for any inquires for ordering food please refer to our contacts page. Through these links you can find even more products we offer. Thank you very much for your visit to the site and enjoy everything we have to offer!"
  },
  dutch: 
  {
    "description": "Welkom bij Kazorki Gotunja. Onze website heeft alles te maken met catering. Hier vindt u een grote verscheidenheid aan gerechten, van gerechten tot taarten voor speciale gelegenheden en nog veel meer! Als u meer wilt weten, bezoek dan onze webpagina en voor vragen over het bestellen van eten kunt u onze contactpagina raadplegen. Via deze links kunt u nog meer producten vinden die wij aanbieden. Hartelijk dank voor uw bezoek aan de site en geniet van alles wat we te bieden hebben!"
  },
  polish: 
  {
    "description": "Witamy w Kazorkach Gotunja. Nasza strona internetowa poświęcona jest wyłącznie cateringowi. Tutaj znajdziesz szeroki wybór potraw, od dań po ciasta na specjalne okazje i wiele więcej! Jeśli chcesz dowiedzieć się więcej, odwiedź naszą stronę internetową, a w przypadku jakichkolwiek pytań dotyczących zamawiania jedzenia, odwiedź naszą stronę kontaktową. Dzięki tym linkom możesz znaleźć jeszcze więcej oferowanych przez nas produktów. Dziękujemy bardzo za wizytę na stronie i cieszenie się wszystkim, co mamy do zaoferowania!"
  }
}

if(lang==="english"){
    langs.querySelector(".active").classList.remove("active");
    link[0].classList.add("active");
    changeLang("english",title,descr)
} else{
    langs.querySelector(".active").classList.remove("active");
    link[index].classList.add("active");
    changeLang(lang,title,descr)
}

link.forEach((el,i)=>el.addEventListener("click", ()=>{
    langs.querySelector(".active").classList.remove("active");
    el.classList.add("active");
    const attr = el.dataset.lang;
    lang = attr;
    index = i;
    if(lang!=="english") changeLang(lang,title,descr)
    else changeLang("english",title,descr);
    localStorage.setItem("lang", attr);
    localStorage.setItem("langIndex",i);
}))

function changeLang(lang,title,descr){
    title.textContent = data[lang].title
    descr.textContent = data[lang].description
}