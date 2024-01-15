// Khai bao DOM
const searchBtn = document.querySelector("#search-btn")
const searchModal = document.querySelector("#search-modal")
const closeModal = document.querySelector("#btn-close")
const modalBody = document.querySelector("#modal-body")
const searchInput = document.querySelector("#search-input")

// Du lieu
const articles = [
  "Localisation and Translation on the Web",
  "Comparing Node JavaScript to JavaScript in the Browser",
  "Responsible JavaScript",
  "JavaScript Operator Lookup"
]
const content_articles = [
  "Our comprehensive guide to CSS flexbox layout. This complete guide explains everything about flexbox, focusing on all the different possible properties for the parent element (the flex container) and the child elements (the flex items). It also includes history, demos, patterns, and a browser support javascript.",
  "Our comprehensive guide to CSS grid, focusing on all the settings both for the grid parent container and the grid child elements.",
  "Four techniques are explored on accomplishing a full page background image that conforms to our exceptions: no white space, scales as needed, retains aspect ratio, centered, and more.",
  "that Node JavaScript is a great way to write server-side code and capitalize on your JavaScript experience ... can get pretty far writing JavaScript UI without being asynchronous JavaScript geniuses."
]

// Sự kiện
searchBtn.addEventListener('click', function() {
  searchModal.classList.add("d-block")
})

closeModal.addEventListener('click', function()
{
    searchModal.classList.remove("d-block")
})
searchInput.addEventListener("keydown", function(event) {
  if (event.keyCode == 13) {
    filter(event.target.value)
  }
})
searchInput.addEventListener("input", function (event) {
  highlightSearchResults(event.target.value);
})


// Phuong thuc
// Render
function render(articles, content_articles) {
  let str = "";
  for (let i = 0; i < articles.length; i++) {
    str += `<h3>${articles[i]}</h3><p>${content_articles[i]}</p>`;
  }
  modalBody.innerHTML = str;
}

render(articles,content_articles)

// Filter
function filter(str) {
  const newArray = articles.filter(function (article, index) {
    return article.includes(str) || content_articles[index].includes(str);
  });
  render(newArray, content_articles.filter((_, index) => newArray.includes(articles[index])));
}
function highlightSearchResults(keyword) {
  const newArray = articles.filter(function (article, index) {
    return article.includes(keyword) || content_articles[index].includes(keyword);
  });

  renderWithHighlight(newArray, keyword);
}
function renderWithHighlight(articles, keyword) {
  let str = "";
  const highlightColor = "#FF7A18"; // Đổi màu sắc tùy ý, ví dụ: đỏ

  for (let i = 0; i < articles.length; i++) {
    const highlightedTitle = highlightKeyword(articles[i], keyword, highlightColor);
    const highlightedContent = highlightKeyword(content_articles[i], keyword, highlightColor);

    str += `<h3>${highlightedTitle}</h3><p>${highlightedContent}</p>`;
  }

  modalBody.innerHTML = str;
}
function highlightKeyword(text, keyword, color) {
  const regex = new RegExp(keyword, "gi");
  return text.replace(regex, (match) => `<span style="color:${color}">${match}</span>`);
}
