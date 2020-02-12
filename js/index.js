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
logo.setAttribute('src', siteContent["nav"]["img-src"])
let navbar = document.querySelectorAll('a');
navbar[0].textContent = siteContent["nav"]["nav-item-1"];
navbar[1].textContent = siteContent["nav"]["nav-item-2"];
navbar[2].textContent = siteContent["nav"]["nav-item-3"];
navbar[3].textContent = siteContent["nav"]["nav-item-4"];
navbar[4].textContent = siteContent["nav"]["nav-item-5"];
navbar[5].textContent = siteContent["nav"]["nav-item-6"];

let ctah1 = document.querySelector('h1');
ctah1.textContent = siteContent["cta"]["h1"];
let ctabutton = document.querySelector('button');
ctabutton.textContent = siteContent["cta"]["button"];
let ctaimg = document.getElementById("cta-img");
ctaimg.setAttribute('src', siteContent["cta"]["img-src"])

let h4s = document.querySelectorAll('h4');
h4s[0].textContent = siteContent["main-content"]["features-h4"];
h4s[1].textContent = siteContent["main-content"]["about-h4"];
h4s[2].textContent = siteContent["main-content"]["services-h4"];
h4s[3].textContent = siteContent["main-content"]["product-h4"];
h4s[4].textContent = siteContent["main-content"]["vision-h4"];
h4s[5].textContent = siteContent["contact"]["contact-h4"];

let contentps = document.querySelectorAll('p');
contentps[0].textContent = siteContent["main-content"]["features-content"];
contentps[1].textContent = siteContent["main-content"]["about-content"];
contentps[2].textContent = siteContent["main-content"]["services-content"];
contentps[3].textContent = siteContent["main-content"]["product-content"];
contentps[4].textContent = siteContent["main-content"]["vision-content"];
contentps[5].textContent = siteContent["contact"]['address'];
contentps[6].textContent = siteContent["contact"]["phone"];
contentps[7].textContent = siteContent["contact"]["email"];
contentps[8].textContent = siteContent["footer"]['copyright'];

let middleimg = document.getElementById('middle-img');
middleimg.setAttribute('src', siteContent["main-content"]["middle-img-src"])