import { isWebp } from "./modules/webp";

isWebp();

function hello(compiler: string) {
	console.log(`Hello from ${compiler}`);
}

hello("TypeScript");

let text: Element = document.querySelector(".text");

if (text != null)
	text.textContent = "Привет, это typeScript шаблон. Пользуйся!";