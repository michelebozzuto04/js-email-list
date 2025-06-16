const listEl = document.getElementById("list")
const emails = [];

for (let i = 0; i < 10; i++) {
    fetch('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => response.json())
        .then(data => {
            const email = data.response;
            emails.push(email);
            liEl = document.createElement('li');
            liEl.innerText = data.response;
            listEl.appendChild(liEl);
        })
        .catch(error => {
            console.error(error);
        });
}

console.log(emails);
