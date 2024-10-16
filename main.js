const navMenu = document.getElementById("navMenu")
const openBtn = document.getElementById("openBtn")
const body = document.getElementById("body")
const features = document.querySelectorAll("#featuresList li hr")
const featureImg = document.querySelectorAll("#featureImg span")
const faqList = document.querySelectorAll("#faqList li p")
const email = document.getElementById("emailField")
const errorImg = document.getElementById("errorImg")
const errorMsg = document.getElementById("errorMsg")

const openMenu = () => {
    navMenu.classList.remove("hidden")
    openBtn.classList.add("hidden")
    body.classList.add("overflow-hidden")
}

const closeMenu = () => {
    navMenu.classList.add("hidden")
    openBtn.classList.remove("hidden")
    body.classList.remove("overflow-hidden")
}

const firstFeature = () => {
    features[0].classList.remove("hidden")
    features[1].classList.add("hidden")
    features[2].classList.add("hidden")

    features[0].classList.remove("md:hidden")
    features[1].classList.add("md:hidden")
    features[2].classList.add("md:hidden")

    featureImg[0].classList.remove("hidden")
    featureImg[1].classList.add("hidden")
    featureImg[2].classList.add("hidden")

    featureImg[0].classList.remove("md:hidden")
    featureImg[1].classList.add("md:hidden")
    featureImg[2].classList.add("md:hidden")
}

const secondFeature = () => {
    features[0].classList.add("hidden")
    features[1].classList.remove("hidden")
    features[2].classList.add("hidden")

    features[0].classList.add("md:hidden")
    features[1].classList.remove("md:hidden")
    features[2].classList.add("md:hidden")

    featureImg[0].classList.add("hidden")
    featureImg[1].classList.remove("hidden")
    featureImg[2].classList.add("hidden")

    featureImg[0].classList.add("md:hidden")
    featureImg[1].classList.remove("md:hidden")
    featureImg[2].classList.add("md:hidden")
}

const thirdFeature = () => {
    features[0].classList.add("hidden")
    features[1].classList.add("hidden")
    features[2].classList.remove("hidden")

    features[0].classList.add("md:hidden")
    features[1].classList.add("md:hidden")
    features[2].classList.remove("md:hidden")

    featureImg[0].classList.add("hidden")
    featureImg[1].classList.add("hidden")
    featureImg[2].classList.remove("hidden")

    featureImg[0].classList.add("md:hidden")
    featureImg[1].classList.add("md:hidden")
    featureImg[2].classList.remove("md:hidden")
}

const firstFaq = () => {
    faqList[0].classList.toggle("hidden")
}

const secondFaq = () => {
    faqList[1].classList.toggle("hidden")
}

const thirdFaq = () => {
    faqList[2].classList.toggle("hidden")
}

const fourthFaq = () => {
    faqList[3].classList.toggle("hidden")
}

const checkMail = () => {
    if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        email.classList.add("border-soft-red")
        errorImg.classList.remove("hidden")
        errorMsg.classList.remove("hidden")
    } else {
        errorImg.classList.add("hidden")
        errorMsg.classList.add("hidden")
        email.classList.remove("border-soft-red")
        email.classList.add("border-green-700")
    }
}
