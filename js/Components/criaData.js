import { Tarefa } from "./criaTarefa.js"

export const criaData = (data) => {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'))||[]

    const dataMoment = moment(data, 'DD/MM/YYYY')
    const dataTopo = document.createElement('li')
    const conteudo = `<p class="content-data">${dataMoment.format('DD/MM/YYYY')}</p>`

    dataTopo.innerHTML = conteudo

    tarefas.forEach((tarefa => {
        dataTopo.appendChild(tarefa(tarefa))
    }))

    return dataTopo
}