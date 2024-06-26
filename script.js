const btnGenerar = document.getElementById('btnGenerar')
const btnSortear = document.getElementById('btnSortear')

btnGenerar.addEventListener('click', generarTicket)
btnSortear.addEventListener('click', generarGanador)

const tickets = []

function generarTicket() {
    const nameInput = document.getElementById('name')
    const name = nameInput.value

    const numRandom = Math.floor(Math.random() * 1000)
    console.log(numRandom)

    tickets.push({name, numRandom})
    console.log(tickets)

    const cajaTickets = document.getElementById('ticketCaja')
    const span = document.createElement('div')
    span.textContent = `Nombre: ${name}, Ticket: ${numRandom}`
    cajaTickets.appendChild(span)

}

function generarGanador() {
    if(tickets.length === 0){
        alert('No hay tickes xd')
    }
    const numElegido = Math.floor(Math.random() * tickets.length);
    const elegido = tickets[numElegido];

    const divGanador = document.getElementById('ganador')
    divGanador.innerHTML = `<h1>GANADOR!!!</h1> <p>${elegido.name} ${elegido.numRandom}</p>`
}
