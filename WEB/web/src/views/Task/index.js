import React, {useState, useEffect } from "react";
import * as Style from './styles';
import api from '../../services/api'
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import TypeIcons from '../../utils/typeIcons'
import {format} from 'date-fns'


function Task({match}) {
    const [lateCount, setLateCount] = useState();
    const [type, setType] = useState();
    const [id, setID] = useState();
    const [done, setDone] = useState(false);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    const [macaddress, setMacaddress] = useState('11:11:11:11:11:11');


 
async function lateVerify(){
  await api.get(`/task/filter/late/11:11:11:11:11:11`)
  .then(response => {
    setLateCount(response.data.length)
  })
}



async function loadTaskMongo(){
  await api.get(`/task/${match.params.id}`)
  .then(response =>{
      setType(response.data.type)
      setTitle(response.data.title)
      setDescription(response.data.description)
      setDate(format(new Date(response.data.when),'yyyy-MM-dd'))
      setHour(format(new Date(response.data.when),'HH:mm'))
  })
  }


async function save(){

  await api.post('/task',{
    macaddress,
    type,
    title,
    description,
    when:`${date}T${hour}:00.000`
  }).then( ()=>
    alert('TAREFA CADASTRADA COM SUCESSO!')
  )
} 

useEffect(()=>{
  lateVerify();
  loadTaskMongo();
},[])

  return  (

    <Style.Container>
        <Header lateCount={lateCount} clickNotification={Notification}/>
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
            <button type="button">Excluir</button>

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
