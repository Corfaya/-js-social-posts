const posts = [
  {
    id: 1,
    content:"Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/300?image=171",
    author: {
      name: "Phil Mangione",
      image: "https://unsplash.it/300/300?image=15",
    },
    likes: 80,
    created: "2021-06-25",
  },
  {
    id: 2,
    content:"Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=112",
    author: {
      name: "Sofia Perlari",
      image: "https://unsplash.it/300/300?image=10",
    },
    likes: 120,
    created: "2021-09-03",
  },
  {
    id: 3,
    content:"Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=234",
    author: {
      name: "Chiara Passaro",
      image: "https://unsplash.it/300/300?image=20",
    },
    likes: 78,
    created: "2021-05-15",
  },
  {
    id: 4,
    content:"Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=24",
    author: {
      name: "Luca Formicola",
      image: null,
    },
    likes: 56,
    created: "2021-04-03",
  },
  {
    id: 5,
    content:"Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=534",
    author: {
      name: "Alessandro Sainato",
      image: "https://unsplash.it/300/300?image=29",
    },
    likes: 95,
    created: "2021-03-05",
  },
]

const container = document.getElementById("container");

posts.forEach((el) => {
  //destrutturazione
  let { id, content, media, author, likes, created } = el;
  let { name, image } = author;
  // BONUS 1: ita data dd-mm-yyyy
  let split_date = created.split("-"); // every string divided and added into a new array ("-" deleted)
  let date = `${split_date[2]}/${split_date[1]}/${split_date[0]}`; // day, month, year
  // END BONUS 1

  container.innerHTML += `<div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        ${image != null ? profilePhoto(author) : defaultPhoto(author)}      
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${name}</div>
                        <div class="post-meta__time">${date}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${content}</div>
            <div class="post__image">
                <img src="${media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#${id}" data-postid="${id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`;
});

//Milestone 2
const likeBtn = document.querySelectorAll(".js-like-button");
console.log(likeBtn);
let arr = [];

likeBtn.forEach((el) => {
  el.addEventListener("click", function (e) {
    e.preventDefault()
    const data_id = el.getAttribute("data-postid"); //returning data-postid's value
    console.log(data_id)
    const counter = document.getElementById(`like-counter-${data_id}`)
    let likes = parseInt(counter.innerText)

    if (el.classList.contains("like-button--liked")) { //BONUS 3
      el.classList.remove("like-button--liked")
      likes -= 1
      counter.innerHTML = likes
    } else {
      arr.push(data_id)
      el.classList.add("like-button--liked")
      likes += 1
      counter.innerHTML = likes
    }
  });
});

// BONUS 2 (container.innerHTML in for loop changed)
// function profile img recovery
function profilePhoto(author) {
  let { name } = author;
  return `<img  class="profile-pic"  src="${author.image}" alt="${name}">`;
}


// function profile img creation
function defaultPhoto(author) {
  let { name } = author;
  //author's name and surname first letters:::
  let nameAndSurname = name.split(" "); // name and surname in new array
  let firstLetterName = nameAndSurname[0].charAt(0);
  let firstLetterSurname = nameAndSurname[1].charAt(0);
  let firstLetters = firstLetterName + firstLetterSurname;
  return `<div class="profile-pic-default">
    <span>${firstLetters}</span>
    </div>`;
}
// END BONUS 2