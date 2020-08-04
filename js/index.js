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
const nav = document.querySelector('header nav')
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
const topContent = document.querySelector('.top-content')
const features = document.querySelector('.text-content:nth-of-type(1)')
const featuresHeading = features.querySelector('h4')
const featuresContent = features.querySelector('p')
const about = document.querySelector('.text-content:nth-of-type(2)')
const aboutHeading = about.querySelector('h4')
const aboutContent = about.querySelector('p')
const middleImg = mainContent.querySelector('img')
const bottomContent = document.querySelector('.bottom-content')
const services = document.querySelector('.bottom-content .text-content:nth-of-type(1)')
const servicesHeading = services.querySelector('h4')
const servicesContent = services.querySelector('p')
const product = document.querySelector('.bottom-content .text-content:nth-of-type(2)')
const productHeading = product.querySelector('h4')
const productContent  = product.querySelector('p')
const vision = document.querySelector('.bottom-content .text-content:nth-of-type(3)')
const visionHeading = vision.querySelector('h4')
const visionContent = vision.querySelector('p')
const contactHeading = document.querySelector('.contact h4')
const address = document.querySelector('.contact p')
const phone = document.querySelector('.contact p:nth-of-type(2)')
const email = document.querySelector('.contact p:nth-of-type(3)')
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
aboutHeading.textContent = siteContent['main-content']['about-h4']
aboutContent.textContent = siteContent['main-content']['about-content']
middleImg.src = 'img/mid-page-accent.jpg'
servicesHeading.textContent = siteContent["main-content"]["services-h4"]
servicesContent.textContent = siteContent["main-content"]["services-content"]
productHeading.textContent = siteContent["main-content"]["product-h4"]
productContent.textContent  = siteContent["main-content"]["product-content"]
visionHeading.textContent = siteContent["main-content"]["vision-h4"]
visionContent.textContent = siteContent["main-content"]["vision-content"]

contactHeading.textContent = siteContent['contact']['contact-h4']
address.textContent = siteContent['contact']['address']
phone.textContent = siteContent['contact']['phone'] 
email.textContent = siteContent['contact']['email'] 



navItemOne.style.color = 'green'
navItemTwo.style.color = 'green'
navItemThree.style.color = 'green'
navItemFour.style.color = 'green'
navItemFive.style.color = 'green'
navItemSix.style.color = 'green'

const newLink1 = document.createElement('a')
newLink1.textContent = 'FAQ'
newLink1.href = '#'
nav.appendChild(newLink1)
const newLink2 = document.createElement('a')
newLink2.textContent = 'Support'
newLink2.href = '#'
nav.prepend(newLink2)

newLink1.style.color = 'green'
newLink2.style.color = 'green'

