import { handleNovoItem, clickEnter } from './Components/criaTarefa.js'
import { carregaTarefa } from './Components/carregaTarefa.js'
const novaTarefa = document.querySelector('[data-form-button]')
const txtTarefa = document.getElementById('txt-Tarefa')

novaTarefa.addEventListener('click', handleNovoItem)
txtTarefa.addEventListener('keypress', clickEnter)

carregaTarefa()