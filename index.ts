import { JSDOM } from "jsdom";

const fragment = JSDOM.fragment("<h1>Hello Bun!</h1>");

console.log(fragment.textContent);