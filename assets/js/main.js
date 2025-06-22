/*=============== PROJECTS CARDS ===============*/
const projects = [
  {
    image: "/Ritik-jain-Portfolio-latest/assets/img/ministryofmane.png",
    title: "Ministry Of Mane",
    Desc: "<b>WordPress (WooCommerce + Elementor)</b><br><br> Ministry of Mane is a sleek and modern e-commerce website built on WordPress, specifically tailored for a luxury haircare and styling brand. The website showcases a premium product line with high-conversion landing pages, smooth user experience, and mobile responsiveness.",
    Url: "https://ministryofmane.com/",
  },
  {
    image: "/Ritik-jain-Portfolio-latest/assets/img/arisecapital.png",
    title: "Arise Capital Investment",
    Desc: "<b>Wordpress</b><br><br>This modern, responsive website is built on WordPress, utilizing the Elementor page builder and Contact Form, Ultimate Elementor Addons and other plugins. It combines clean design with modular components for easy content updates via a CMS.Designed to serve institutional and HNW (high-net-worth) investors.",
    Url: "https://arisecapinvest.net/",
  },
  {
    image: "/Ritik-jain-Portfolio-latest/assets/img/gatsby.png",
    title: "Gatsby India",
    Desc: "<b>HTML CSS JAVASCRIPT</b><br><br>Targets style-conscious men across India, offering a curated range of grooming products—including hairstyling, beard care, and shaving essentials. The goal: inspire confidence and brand loyalty with visually engaging shopping experiences.It combines clean design, effective CTAs.",
    Url: "https://gatsbyindia.com/",
  },
  {
    image: "/Ritik-jain-Portfolio-latest/assets/img/bigcatadventures.png",
    title: "Big Cat Adventures",
    Desc: "<b>Wordpress</b><br><br>Big Cats Adventure – Ranthambore Safari Booking & Wildlife Exploration Platform. Built on WordPress, the site leverages a clean, theme-based architecture with likely Elementor (or similar) for content layout. The blog and gallery functionality suggests usage of standard WordPress post types.",
    Url: "https://bigcatsadventures.com/",
  },
  {
    image: "/Ritik-jain-Portfolio-latest/assets/img/alltimehealthclub.png",
    title: "All Time Health Club",
    Desc: "<b>Wordpress</b><br><br>All Time Health Club – Jaipur Fitness & Wellness Center. Serves fitness enthusiasts in Giriraj Nagar, Jaipur—focused on individuals seeking strength training, cardio, CrossFit, and aerobics in a premium gym environment.Built on WordPress (theme + Elementor/Visual Builder implied) with custom-posted services and integrated galleries.",
    Url: "https://alltimehealthclub.com/",
  },
   {
    image:"/Ritik-jain-Portfolio-latest/assets/img/velnourishpharma.png",
    title:"Vernourish Pharma",
    Desc:"Wordpress",
    Url:"https://velnourishpharma.com/",
  },
];

const project_items = document.querySelector(".project-items");

projects.forEach((project) => {
  const item = document.createElement("div");
  item.className = "project-item";
  item.innerHTML = `<img src="${project.image}" alt="${project.title}">
               <h3>${project.title}</h3>
         <p>${project.Desc}</p>
     
       <a href="${project.Url}" target="_blank"><i class="ri-link"></i>Visit Project</a></div>`;
  project_items.appendChild(item);
});

/*=============== Emails ===============*/
const form = document.getElementById('contact-form');
const successmsg = document.getElementById('successmsg');

const sendmail = (e)=>{
e.preventDefault()

emailjs.sendForm('service_ljk2e0r','template_iybd6v7', form, 'mXKdsbIf6z95_Dq1f')
.then(()=>{
  successmsg.textContent = "Message Send Successfully !"

  setTimeout(()=>{
    successmsg.textContent ="";
  },2000)
})
}

form.addEventListener('submit', sendmail)


/*=============== GSAP ===============*/
let tl = gsap.timeline();

gsap.from('.prefil, .about',{
  y:-1000,
  duration:2,
})
gsap.from('.skills',{
  x:-1000,
  duration:2,
})
gsap.from('.info',{
  scale:0.5,
  duration:2,
})
gsap.from('.nav',{
  x:200,
duration:2,
})
gsap.from('.sec-head1,.project-item', {
  y:100,
  duration:1,
  opacity:0,
  scrollTrigger:'.sec-head1, .project-item',
})
gsap.from('.sec-head2,.service-item', {
  y:100,
  duration:1,
  opacity:0,
  trigger:0.4,
  scrollTrigger:'.sec-head2,.service-item',
})
gsap.from('.sec-head3,.experience-item', {
  y:100,
  duration:1,
  opacity:0,
  scrollTrigger:'.sec-head3,.experience-item',
})
gsap.from('.sec-head4, #contact-form', {
  y:100,
  duration:1,
  opacity:0,
  scrollTrigger:'.sec-head4, #contact-form',
})
gsap.from('.sec-head5,.footer-icons', {
  y:100,
  duration:1,
  opacity:0,
  scrollTrigger:'.sec-head5,.footer-icons',
})