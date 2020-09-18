import React, { useState, useEffect } from 'react'
import api from './services/api'

import './App.css'

import Header from './components/Header'

function App() {
    const [projects, setProjects] = useState([])
    //useState retorna um array com duas posições: 
    // 1 - Variável com seu valor inicial
    // 2 - Uma função para atualizar esse valor

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data)
            
        })
    }, [])
    //o useEffect recebe dois parâmetros:
    // 1 - a função que ele deve disparar
    // 2 - quando essa função deve ser disparada
    // no ARRAY DE DEPENDÊNCIAS - 
    //quando o que estiver dentro do array de dependências, for alterado, a função vai ser acionada
    //se estiver vazio, essa função vai ser disparada apenas uma vez

    function handleAddProject(){
        // projects.push(`New data${Date.now()}`)

        setProjects([...projects, `New data${Date.now()}`])

        console.log(projects)
    }

    return (
        <>
            <Header title="Projects"/>

            <ul>
                {projects.map(project => (
                    <li key={project.id}>{project.curso}</li>
                    //quando é feita uma iteração no react, que percorrido um vetor 
                    //o react precisa que seja identificado no primeiro elemento, 
                    //uma propriedade chamada key. Aí deverá ser informado a informação 
                    //que é unica dentro de cada dado no array 
                ))} 
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>


        </>
    )
}
export default App