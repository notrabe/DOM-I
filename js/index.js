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
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

// CREATE SELECTORS //

const container = document.querySelector('.container')
const nav = document.querySelector('nav')
const navItemOne = nav.querySelector('a')
const navItemTwo = navItemOne.nextElementSibling
const navItemThree = navItemTwo.nextElementSibling
const navItemFour = navItemThree.nextElementSibling
const navItemFive = navItemFour.nextElementSibling
const navItemSix = navItemFive.nextElementSibling
const logo = document.querySelector('#logo-img')
const cta = document.querySelector('.cta')
const ctaText = document.querySelector('.cta-text h1')
const ctaButton = cta.querySelector('button')
const ctaImg = cta.querySelector('img')
const mainContent = document.querySelector('.main-content')
const topContent = document.querySelectorAll('.top-content')
const features = topContent[0]
const featuresHeading = features.querySelector('.text-content h4')
const featuresContent = features.querySelector('.text-content p')
// const about = topContent[1]
// const aboutHeading = about.querySelector('.text-content h4')
// const aboutContent = about.querySelector('.text-content p')
const middleImg = mainContent.querySelector('img')
const contact = document.querySelectorAll('.contact')
const contactHeading = contact.querySelector('h4')
const address = contact[1]
const footer = document.querySelector('footer')

// UPDATE THE HTML //

navItemOne.textContent = siteContent.nav["navz-item-1"]
navItemTwo.textContent = siteContent.nav["nav-item-2"]
navItemThree.textContent = siteContent.nav["nav-item-3"]
navItemFour.textContent = siteContent.nav["nav-item-4"]
navItemFive.textContent = siteContent.nav["nav-item-5"]
navItemSix.textContent = siteContent.nav["nav-item-6"]
logo.src = 'img/logo.png'

ctaText.textContent = 'DOM is Awesome'
ctaButton.textContent = siteContent.cta["button"]
ctaImg.src = 'img/header-img.png'

featuresHeading.textContent = siteContent["main-content"]["features-h4"]
featuresContent.textContent = siteContent['main-content']['features-content']
// aboutHeading.textContent = siteContent['main-content']['about-h4']
// aboutContent.textContent = siteContent['main-content']['about-content']
middleImg.src = 'img/mid-page-accent.jpg'

contactHeading.textContent = siteContent['contact']['contact-h4']
address.textContent = siteContent['contact']['address']
