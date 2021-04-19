const sections = document.querySelectorAll('section');
const cards = document.querySelectorAll('.card');

const navbar = document.createDocumentFragment();

for (let i = 0; i < sections.length; i++) {
    /* get the data atturibute value to use it for the section name */
    const cesName = sections[i].getAttribute('data-nav');
    /* neLi for New<li> */
    const neLi = document.createElement('li');

    // neLi.classList.add('activelist');

    /*neA for New<a> */
    const neA = document.createElement('a');
    /* <a href = '#' + the section's id */
    neA.href = '#' + sections[i].getAttribute('id');
    /*here i add text that contain the section name */
    neA.innerText = cesName;
    /* appending the a tage to the li tage */
    neLi.appendChild(neA);
    /*appending all that we creat to the navbar */
    navbar.appendChild(neLi);
}

/* for the smoothnes */
const links = document.querySelectorAll('a');
for (let i = 0; i < links.length; i++) {

    links[i].addEventListener('click', () => {
        sections[i].scrollIntoView({ behavior: "smooth" });
    })
}

/**clone the elements that we creat to use it in diffirent places */
let sidbar = navbar.cloneNode(true);

const target = document.querySelector('.list');
target.appendChild(navbar);
/*add the li to the side bar */
const targetwo = document.querySelector('.sidbar');
targetwo.appendChild(sidbar);

/*varible for selecting list items */
const listOne = target.querySelectorAll('li');
const listTwo = targetwo.querySelectorAll('li');

/*the active handler */
document.addEventListener('scroll', () => {
    for (let i = 0; i < cards.length; i++) {
        /*while scrolling dowen */
        if (cards[i].getBoundingClientRect().top < window.innerHeight - 350) {
            cards[i].classList.add('Active');
            /*activat the list when the section is in the view port */
            listOne[i].classList.add('activelist');
            listTwo[i].classList.add('activelist');
        }
        /*while scrolling up */
        if (cards[i].getBoundingClientRect().bottom < 260 || cards[i].getBoundingClientRect().bottom > 840) {
            cards[i].classList.remove('Active');

            listOne[i].classList.remove('activelist');
            listTwo[i].classList.remove('activelist');
        }
    }

});

/*add a click listener to each list item to be active on click */
listTwo.forEach((link) => {
    link.addEventListener('click', () => {
        /*first remove all the class from the item  */
        for (let i = 0; i < listTwo.length; i++) {
            listTwo[i].classList.remove('activelist');
        }
        /*add the active class to the one which clicked */
        link.classList.add('activelist')

    })
})

