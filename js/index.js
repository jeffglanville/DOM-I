const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let myImg = document.getElementById("cta-img");
myImg.setAttribute('src', siteContent["cta"]["img-src"]);

let navLinks = document.querySelectorAll("nav a");
navLinks[0].text = siteContent["nav"]["nav-item-1"];
navLinks[1].text = siteContent["nav"]["nav-item-2"];
navLinks[2].text = siteContent["nav"]["nav-item-3"];
navLinks[3].text = siteContent["nav"]["nav-item-4"];
navLinks[4].text = siteContent["nav"]["nav-item-5"];
navLinks[5].text = siteContent["nav"]["nav-item-6"];

navLinks.forEach(element => {
  element.style.color = 'green';
})

const link = document.createElement("a");
link.textContent = "Facebook Clicker";
const faceBookLink = document.querySelector("nav");
faceBookLink.append(link);

link.style.color = "green";

const link1 = document.createElement("a");
link1.textContent = "Click LinkedIn";
const linkedInLink = document.querySelector("nav");
linkedInLink.prepend(link1);

link1.style.color = "green";


let heading = document.querySelector(".cta-text h1");
heading.textContent = siteContent.cta.h1;

heading.style.backgroundColor = "purple";
heading.style.color = 'gold';
heading.style.fontSize = "100px";




let firstButton = document.querySelector(".cta-text button");
firstButton.textContent = siteContent["cta"]["button"];

let mainHeaderH4 = document.querySelectorAll(".text-content h4");
mainHeaderH4[0].innerText = siteContent["main-content"]["features-h4"];
mainHeaderH4[1].innerText = siteContent["main-content"]["about-h4"];
mainHeaderH4[2].innerText = siteContent["main-content"]["services-h4"];
mainHeaderH4[3].innerText = siteContent["main-content"]["product-h4"];
mainHeaderH4[4].innerText = siteContent["main-content"]["vision-h4"];


let mainContentP = document.querySelectorAll(".text-content p");
mainContentP[0].innerHTML = siteContent["main-content"]["features-content"];
mainContentP[1].innerHTML = siteContent["main-content"]["about-content"];
mainContentP[2].innerHTML = siteContent["main-content"]["services-content"];
mainContentP[3].innerHTML = siteContent["main-content"]["product-content"];
mainContentP[4].innerHTML = siteContent["main-content"]["vision-content"];



let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let bottomContact = document.querySelector(".contact h4");
bottomContact.innerHTML = siteContent.contact["contact-h4"];

let contactP = document.querySelectorAll(".contact p");
contactP[0].innerHTML = siteContent.contact["address"];
contactP[1].innerHTML = siteContent.contact["phone"];
contactP[2].innerHTML = siteContent.contact["email"];

let footer1 = document.querySelector("footer p");
footer1.innerText = siteContent.footer.copyright;