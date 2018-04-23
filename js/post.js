
let adicionar = document.getElementById('add')

adicionar.addEventListener('click', () => {
    let table = document.getElementById('table')
    
    let field = document.getElementById('campo').value
    
    let data = {
        "userId": 1,
        "title": field,
        "completed": false
    }

    fetch('http://localhost:3000/todos', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-type':'application/json;charset=utf-8'
        }).then(table.innerHTML += `<td class="lembrete">${data.title}</td>`)
    })

})