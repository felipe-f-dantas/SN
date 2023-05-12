import React, {useState, useEffect } from "react";
import * as Style from './styles';
import api from '../../services/api'
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import TypeIcons from '../../utils/typeIcons'
import {format} from 'date-fns'
import { Redirect } from "react-router-dom";
import isConected from "../../utils/isConected";

function Task({match}) {
    const [redirect, setRedirect] = useState(false);
    const [type, setType] = useState();
    const [id, setID] = useState();
    const [done, setDone] = useState(false);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();


 

async function loadTaskMongo(){
  await api.get(`/task/${match.params.id}`)
  .then(response =>{
      setType(response.data.type)
      setDone(response.data.done)
      setTitle(response.data.title)
      setDescription(response.data.description)
      setDate(format(new Date(response.data.when),'yyyy-MM-dd'))
      setHour(format(new Date(response.data.when),'HH:mm'))
  })
  }


async function save(){
  //validacao dos campos

  if(!title)
  return alert("Voce precisa informar o titulo da tarefa")
  else if(!description)
  return alert("Voce precisa informar a descricao da tarefa")
  else if(!type)
  return alert("Voce precisa selecionar o tipo da tarefa")
  else if(!date)
  return alert("Voce precisa informar a data da tarefa")
  else if(!hour)
  return alert("Voce precisa informar a hora da tarefa")



  if(match.params.id){

    await api.put(`/task/${match.params.id}`,{
      macaddress: isConected,
      done,
      type,
      title,
      description,
      when:`${date}T${hour}:00.000`
    }).then( ()=>
      setRedirect(true)
    )

  }else{

  
  await api.post('/task',{
    macaddress: isConected,
    type,
    title,
    description,
    when:`${date}T${hour}:00.000`
  }).then(()=>
  setRedirect(true)
  )
} 
}

async function remove(){

  const resposta = window.confirm("Deseja realmente remover a tarefa?")
  if(resposta === true ){
    await api.delete(`/task/${match.params.id}`).then(()=> setRedirect(true))
  }

}

useEffect(()=>{
  if(!isConected){
    setRedirect(true)
  }
  loadTaskMongo();
},[])

  return  (

    <Style.Container>
      {redirect && <Redirect to="/"/>}
        <Header/>
        <Style.Form>
          <Style.TypeIcons>
            {
              TypeIcons.map((icon,index) =>(
               index > 0 && 
               <button type="button" onClick={()=> setType(index)}>

               <img src={icon} alt="Tipo da Tarefa" className={type && type !== index && 'inative'}/>
               </button>
              ))
            }

          </Style.TypeIcons>

          <Style.Input>
            <span>Titulo</span>
            <input type="text" placeholder="Digite o Titulo da Tarefa..." onChange={e => setTitle(e.target.value)} value={title}/>
            <span>Descricao</span>
            <textarea onChange={e => setDescription(e.target.value)} value={description}/>
            <span>Data</span>
            <input type="date" onChange={e => setDate(e.target.value)} value={date}/>
            <span>Hora</span>
            <input type="time" onChange={e => setHour(e.target.value)} value={hour}/>
            <Style.Options>
            <div>
              <input type="checkbox" checked={done} onChange={()=> setDone(!done)}/>
              <span>Concluido</span>
            </div>
            {match.params.id && <button type="button" onClick={remove}>Excluir</button>}

            </Style.Options>
           <Style.Save>
            <button type="button" onClick={save}>Salvar</button>
           </Style.Save>

          </Style.Input>
          
        </Style.Form>
        <Footer/>
    </Style.Container>
       


  )
}

export default Task;
