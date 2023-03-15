 // selector



// const btnClicked = document.getElementById("button");
// btnClicked.addEventListener("click", ()=> {
//     const containerEl = document.getElementById("container");
//     const divEL  = document.createElement("div");
//     divEL.innerHTML = `
//     <h2>Welcome to Binar Academy</h2>
//     <p>hari ini kita belajar chapter DOM dan implementasinya</p>
// `
//     containerEl.appendChild(divEL);
// });


const nameInput = document.getElementById('name')
const ageInput = document.getElementById('age')
const genderInput = document.getElementById('gender')
const showName = document.getElementById('show-name');
const showAge = document.getElementById('show-age');

nameInput.addEventListener("input", (e)=> {
    showName.textContent = e.target.value;

})

ageInput.addEventListener('input', e=> {
    showAge.textContent  = e.target.value;
})