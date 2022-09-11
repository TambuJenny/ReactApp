import React, { useState,useEffect } from "react";

import "./style.css";

import { Card } from "../../Components/Card";

export function Home() {
  const [studentName, setStudentName] = useState();
  const [student, setStudent] = useState([]);
  const [dataGitHub, setDataGitHub] = useState({});
  let key = 0;

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      })
    };

    setStudent(preveState => [...preveState, newStudent]);
  }

  useEffect (()=>{
   fetch('https://api.github.com/users/tambujenny')
   .then (response => response.json())
   .then (data => 
    {
        setDataGitHub(data)
    })
  },[]);

  return (
    <div className="container">
    
      <header>
      <h1>Lista de Presença</h1>
      <div className="profilpicture">
          <strong>{dataGitHub.login}</strong>
         
          <img src={dataGitHub.avatar_url} alt="Foto de perfil"/>
        </div>
      </header>

      <input
        placeholder="Digite o teu nome..."
        onChange={e => setStudentName(e.target.value)}
      />
      <button onClick={handleAddStudent}>Adicionar</button>

      {student.map(student =>
        <Card key={key++} Name={student.name} Time={student.time} />
      )}
       <small>{dataGitHub.bio}</small>
    </div>
  );
}
