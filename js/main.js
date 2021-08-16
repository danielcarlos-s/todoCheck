import { handleNovoItem } from './Components/criaTarefa.js'
import { carregaTarefa } from './Components/carregaTarefa.js'
const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', handleNovoItem)

carregaTarefa()