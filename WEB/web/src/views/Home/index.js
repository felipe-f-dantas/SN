import React, {useState, useEffect } from "react";
import * as Style from './styles';
import api from '../../services/api'
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import FilterCard from "../../Components/FilterCard";
import TaskCard from "../../Components/TaskCard";


function Home() {
  const[filterActived, setFilterActived] = useState('all');
  const[tasks, setTasks] = useState([]);

  async function loadTasks(){
        await api.get(`/task/filter/${filterActived}/11:11:11:11:11:11`)
        .then(response => {
          setTasks(response.data)
          console.log(response.data)
        })
  }
    useEffect(()=>{
      loadTasks();
    },[filterActived])



  return  (
    <Style.Container>
        <Header/>
        <Style.FilterArea>
          <button type="button"  onClick={()=>setFilterActived("all")}>
              <FilterCard title="TODOS" actived={filterActived ==='all'}/>
          </button>
          <button type="button" onClick={()=>setFilterActived("today")}>
              <FilterCard title="HOJE"  actived={filterActived ==='today'} />
          </button>
          <button type="button" onClick={()=>setFilterActived("week")}> 
              <FilterCard title="SEMANA"actived={filterActived ==='week'} />
          </button>
          <button type="button" onClick={()=>setFilterActived("mouth")}>
             <FilterCard title="MES"   actived={filterActived ==='mouth'} />
          </button>
          <button type="button"  onClick={()=>setFilterActived("year")}>
              <FilterCard title="ANO"   actived={filterActived ==='year'}/>
          </button>
        </Style.FilterArea>
        
        <Style.Title>
          <h3>TAREFAS</h3>
        </Style.Title>

        <Style.Content>
          {
            tasks.map(tarefas =>(
            <TaskCard type={tarefas.type} title={tarefas.title} when={tarefas.when}/>
            ))
          }
        </Style.Content>
        <Footer/>
    </Style.Container>
       


  )
}

export default Home;
