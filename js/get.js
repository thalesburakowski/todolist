

fetchTodos = async () => {
    let res = await fetch('http://localhost:3000/todos')
    return await res.json()
}

let table = document.getElementById('table')

fetchTodos().then(data => {
    for (let element of data) {
        table.innerHTML += `<td>${element.title}</td>`
    }
})