const tag = document.getElementsByClassName('demo');

console.log(tag);

const demo = Array.from(tag);

demo.forEach((dom) => {
    console.log(dom);
})
