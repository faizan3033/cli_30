const containerDouble = document.querySelector(".container1");
const myButton = document.querySelector(".btn-list");
const add = document.querySelector(".container1 form");

//create add button
myButton.addEventListener("click", (e) => {
    if (containerDouble.innerHTML != "") {
        e.preventDefault();

        const myP = document.createElement("p");
        myP.innerHTML = containerDouble.innerHTML;
        add.appendChild(myP);
    }
    //for delete button
    const close = document.getElementsByClassName("close1");

    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener('click', () => {
            close[i].parentElement.style.opacity = 0;

            setTimeout(() => {
                close[i].parentElement.style.display = 'none';
                close[i].parentElement.remove();
            }, 500);
        })
    }
});