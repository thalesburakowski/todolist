let input = document.getElementById('regex')

input.addEventListener('input', () => {
    let lembretes = document.querySelectorAll(".lembrete")
    if (input.value.length > 0) {
        console.log(input.value.length)
        for (let i = 0; i < lembretes.length; i++) {
            let lembrete = lembretes[i]
            let titulo = lembrete.textContent;
            let expressao = RegExp(input.value, "i")

            if (!expressao.test(titulo)) {
                lembrete.classList.add("invisible")
            } else {
                lembrete.classList.remove("invisible")
            }
        }
    } else {
        for (let i = 0; i < lembretes.length; i++) {
            let lembrete = lembretes[i]
            lembrete.classList.remove('invisible')
        }
    }
})

