
let adicionar = document.getElementById('add')
var count = 0

adicionar.addEventListener('click', () => {
    event.preventDefault()
    let field = document.getElementById('campo').value
    console.log(field);
    
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
        })
    }).then(console.log(data))

})