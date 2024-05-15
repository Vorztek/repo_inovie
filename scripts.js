// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    const filiales = [
        { name: 'Labosud', url: 'https://s117.hexalis.net:2000/', imageUrl: 'images/Labosud.png' },
        { name: 'Biomédilab', url: 'https://3027122.hexalis.net:2000/', imageUrl: 'images/Biomedilab.png' },
    ];

    const filialeList = document.getElementById('filialeList');
    const searchInput = document.getElementById('searchInput');

    function displayFiliales(filiales) {
        filialeList.innerHTML = '';
        filiales.forEach(filiale => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            const img = document.createElement('img');
            const span = document.createElement('span');

            a.href = filiale.url;
            img.src = filiale.imageUrl;
            img.alt = filiale.name;
            span.textContent = filiale.name;

            a.appendChild(img);
            a.appendChild(span);
            li.appendChild(a);
            filialeList.appendChild(li);
        });
    }

    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredFiliales = filiales.filter(filiale =>
            filiale.name.toLowerCase().includes(searchTerm)
        );
        displayFiliales(filteredFiliales);
    });

    displayFiliales(filiales);
});
