async function generateUsers() {
    const userNumbers = document.getElementById('userNumbers').value;

    let resposta = await fetch('https://randomuser.me/api/?results=' + userNumbers);
    let usuario = await resposta.json();

    usuario.results.map(usuario => {

        for (let index = 0; index < 1; index++) {
            output += `
            <div class="container">
                <div class="card mt-4 bg-light">
                <ul class="list-group">
                <li class="list-group-item"><h2>Name: ${usuario.name.first}</h2></li>
                <li class="list-group-item"><img src="${usuario.picture.large}"></li>
                <li class="list-group-item">Age: ${usuario.dob.age}</li>
                <li class="list-group-item">Email: ${usuario.email}</li>
                <li class="list-group-item">Gender: ${usuario.gender}</li>
                <li class="list-group-item">City: ${usuario.location.city}</li>
                <li class="list-group-item">Country: ${usuario.location.country}</li>
                <li class="list-group-item">PostCode: ${usuario.location.postcode}</li>
                </ul>
                </div>
            </div>
            `;
        };

    });

    document.getElementById('output').innerHTML = output;

}

function clearData() {
    output = ''
    document.getElementById('output').innerHTML = '';
}