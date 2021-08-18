const concluirTarefa = (atualiza, id) => {
    const tarefaCadastradas = JSON.parse(localStorage.getItem('tarefas'))

    tarefaCadastradas[id].concluida = !tarefaCadastradas[id].concluida
    localStorage.setItem('tarefas', JSON.stringify(tarefaCadastradas))

    atualiza()
}

const BotaoConclui = (atualiza, id) => { 
    const botaoConclui = document.createElement('button')  
    
    botaoConclui.classList.add('bt-concluir')
    botaoConclui.innerText = 'concluir'

    botaoConclui.addEventListener('click', () => concluirTarefa(atualiza, id))

    return botaoConclui
}


export default BotaoConclui