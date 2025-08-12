const API_URL = 'http://localhost:3000/api';

async function loadClients() {
    const res = await fetch('${API_URL}/clients');
    const data = await res.json();
    document.querySelector('#app').innerHTML = `
        <h1>Clientes</h1>
        <button onclick="loadTotalPaid()">Total Paid</button>
        <ul>
            ${data.map(c => <li>${c.first_name} ${c.last_name}</li>).join('')}
        </ul>`;
}

window.loadTotalPaid = async function() {
    const res = await fetch('${API_URL}/queries/total-paid');
    const data = await res.json();
    alert(JSON.stringify(data, null, 2));
}

loadClients();