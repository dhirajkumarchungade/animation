const projects = [
    {
        name: "todo",
        image: "https://images.unsplash.com/photo-1679764414964-fb51b9d35f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        url: "https://www.google.com/",
        desc: "lorem"
    },
    {
        name: "Game",
        image: "https://images.unsplash.com/photo-1679764414964-fb51b9d35f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        url: "https://www.google.com/",
        desc: "lorem"
    },
    {
        name: "Money",
        image: "https://images.unsplash.com/photo-1679764414964-fb51b9d35f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        url: "https://www.google.com/",
        desc: "lorem"
    },
    {
        name: "Red Bus",
        image: "https://images.unsplash.com/photo-1679764414964-fb51b9d35f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        url: "https://www.google.com/",
        desc: "lorem"
    },
]

let str = ""
for (const item of projects) {
    str += `
    <div class="card">
            <img src="${item.image}" alt="">
           <div class="card-body"> 
           <h1>${item.name}</h1>
           <p>${item.desc}</p>
           <a href="${item.url}">Visit</a>
           </div>
        </div>
    `
}


document.getElementById("projects").innerHTML = str

gsap.registerPlugin(ScrollTrigger)

gsap.from(".card", {
    scrollTrigger: {
        trigger: ".card",
        scrub: 1,
        end: "+=200",
    },
    scale: 0,
    rotation: 360,
    stagger: 0.5
})