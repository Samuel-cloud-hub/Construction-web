let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 10000);
}


const testimonials = [
    {
        name: "John Doe",
        photoUrl: "images/Untitled design (1).png",
        text: "This is simply unbelievable! I would be lost without YOU. The very best. Not able to tell you how happy I am.",
    },
    {
        name: "Bryan White",
        photoUrl: "images/Untitled design (2).png",
        text: "I would also like to say thank you to all your staff. Wow what great service, I love it! I am impressed me on multiple levels.",
    },
    {
        name: "Maino Kobi",
        photoUrl: "images/Untitled design (3).png",
        text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
    },
];

const imgEl = document.querySelector(".testimonials img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
    const { name, photoUrl, text } = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = text;
    idx++;
    if (idx === testimonials.length) {
        idx = 0;
    }
    setTimeout(() => {
        updateTestimonial();
    }, 10000);
  }