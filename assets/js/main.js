/*=============== Locomotive JS ===============*/
const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
});

/*=============== PROJECTS CARDS ===============*/
const projects = [
  {
    image: "/Ritik-jain-Portfolio-latest/assets/img/ministryofmane.png",
    title: "Ministry Of Mane",
    Desc: "This project is created with the wordpress",
    Url: "https://ministryofmane.com/",
  },
  {
    image: "/Ritik-jain-Portfolio-latest/assets/img/arisecapital.png",
    title: "Arise Capital Investment",
    Desc: "This project is created with the wordpress",
    Url: "https://arisecapinvest.net/",
  },
  {
    image: "/Ritik-jain-Portfolio-latest/assets/img/gatsby.png",
    title: "Gatsby India",
    Desc: "This project is created with the wordpress",
    Url: "https://gatsbyindia.com/",
  },
  {
    image: "/Ritik-jain-Portfolio-latest/assets/img/bigcatadventures.png",
    title: "Big Cat Adventures",
    Desc: "This project is created with the wordpress",
    Url: "https://bigcatsadventures.com/",
  },
  {
    image: "/Ritik-jain-Portfolio-latest/assets/img/alltimehealthclub.png",
    title: "All Time Health Club",
    Desc: "This project is created with the wordpress",
    Url: "https://alltimehealthclub.com/",
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

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
