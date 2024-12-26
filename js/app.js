const people = [
    {
        name: 'Pritom',
        age: 26,
        id: 1,
        job: 'developer',
        contact: {
            city: 'natrokona',
            phone: 344556,
            mail: 'pritom@gmail.com'
        }
    },

    {
        name: 'Anando',
        age: 26,
        id: 2,
        job: 'photographer',
        contact: {
            city: 'natrokona',
            phone: 344555,
            mail: 'anando@gmail.com'
        }
    },

    {
        name: 'Ovi',
        age: 26,
        id: 3,
        job: 'biker',
        contact: {
            city: 'natrokona',
            phone: 344554,
            mail: 'ovi@gmail.com'
        }
    },
];

const peopleName = document.getElementById('name-list-container');
const infoContainer = document.getElementById('info-container');

const renderPeopleList = (p) => {
    p.map((person) => {
        const li = document.createElement('li');
        li.innerText = person.name;
        li.classList.add('cursor-pointer', 'text-blue-600', 'font-bold', 'text-xl');
        peopleName.appendChild(li)
        li.addEventListener('click', () => {
            handlePersonClick(person.id);
            const info = `
            <h2 class="font-bold">Name: ${person.name}</h2>
            <p> Age: ${person.age} </p>
            <p> Job: ${person.job} </p>
            <p> City: ${person?.contact?.city} </p>
            <p> Phone: ${person?.contact?.phone} </p>
            <p> Mail: ${person?.contact?.mail} </p>
            <p> Married: ${person?.contact?.status || 'N/A'} </p>
            `;

            infoContainer.innerHTML = info;

        });
    });
};

const handlePersonClick = (id) => {
    const person = people.find((p) => p.id == id)
};

renderPeopleList(people);