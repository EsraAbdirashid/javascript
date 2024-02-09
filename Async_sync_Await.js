const p = document.querySelector("p");
const span = document.querySelector("span");
const pre = document.querySelector("pre");
const div = document.querySelector('div')
const getData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((user) => {
        const markup = `<p>userId:${user.id}</p>  <pre> Title: ${user.title}</pre> <span>Body:${user.body} </span> `;
        div.insertAdjacentHTML("beforeend", markup);
      });
    });
};
getData();
