const button = document.getElementById("button");
const sum = document.getElementById("sum");
const workerName = document.getElementById("name");
const workerPosition = document.getElementById("position");

function setName() {
    sum.innerHTML = `${workerName.value} - ${workerPosition.value}`;
}

button.onclick = () => window.print();

workerName.onkeyup = setName;
workerPosition.onkeyup = setName;