const listEl = document.getElementById("list");
const buttonEl = document.getElementById("button");
const emails = [];

function fetchEmails(array, length) {
    for (let i = 0; i < length; i++) {
        fetch('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => response.json())
            .then(data => {
                const email = data.response;
                array.push(email);
                liEl = document.createElement('li');
                liEl.innerText = data.response;
                listEl.appendChild(liEl);
            })
            .catch(error => {
                return (error);
            });
    }
}

fetchEmails(emails, 10);

buttonEl.addEventListener('click', () => {
    emails.length = 0;
    listEl.innerHTML = '';
    fetchEmails(emails, 10);
})
