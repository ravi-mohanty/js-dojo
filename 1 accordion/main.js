const data = [
    {
        id: 1,
        question: "1 question",  // remember that this is object should be in inverted commas
        answer: "1"
    },
    {
        id: 2,
        question: "2 question",
        answer: "2"
    },
    {
        id: 3,
        question: "1 question",
        answer: "3"
    },
    {
        id: 4,
        question: "4 question",
        answer: "4"
    }
];

const accordionWrapper = document.querySelector('.accordion');       // dint forget to to put the "." as its class

function createAccordionData() {
    accordionWrapper.innerHTML = data.map(
        (dataItem) => `
    <div class="accordion-item">
    <div class="accordion-title">
    <h3>${dataItem.question}</h3>
    <i class="fa-solid fa-arrow-down"></i>
    </div>
    <div class="accordion_content">
    <p>${dataItem.answer}</p>
    </div>
    </div>
    `
).join(" ")               // when we dont use the join then it will put the default comma seperated
}
createAccordionData();

const getAccordionTitles = document.querySelectorAll(".accordion-title");
console.log(getAccordionTitles);

getAccordionTitles.forEach((currentItem) => {
  currentItem.addEventListener("click", (event) => {
    if (currentItem.classList.contains("active")) {
      currentItem.classList.remove("active");
    } else {
      let getAlredyAddedActiveClass = document.querySelectorAll(".active");     //watch carefully when we click on the accordion than we can see it is having the 
      getAlredyAddedActiveClass.forEach((currentActiveItem) => {            // active class than it will get removed if not there than it will get added 
        currentActiveItem.classList.remove("active");
      });
      currentItem.classList.add("active");
    }
  });
});

 
