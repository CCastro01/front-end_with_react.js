import React, { useState } from 'react'
import Header from './components/Header'


function App() {
    const [projects, setProjects] = useState(["Back-end", "Front-end"])

    //useState retorna um array com duas posições: 
    // 1 - Variável com seu valor inicial
    // 2 - Uma função para atualizar esse valor

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
                    <li key={project}>{project}</li>
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