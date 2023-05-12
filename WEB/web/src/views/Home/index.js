import React, {useState, useEffect } from "react";
import * as Style from './styles';
import api from '../../services/api'
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import FilterCard from "../../Components/FilterCard";
import TaskCard from "../../Components/TaskCard";
import { Link, Redirect} from "react-router-dom";
import isConected from "../../utils/isConected";





function Home() {
  const[filterActived, setFilterActived] = useState('all');
  const[tasks, setTasks] = useState([]);
  const [redirect, setRedirect] = useState(false);

  async function loadTasks(){
        await api.get(`/task/filter/${filterActived}/${isConected}`)
        .then(response => {
          setTasks(response.data)
        })
  }

  function Notification(){
    setFilterActived('late')

  }
    useEffect(()=>{
      loadTasks();
      if(!isConected){
        setRedirect(true);
      }
       },[filterActived, loadTasks])




  return  (
    <Style.Container>
        { redirect && <Redirect to ="/qrcode"/>}
        <Header clickNotification={Notification}/>
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
          <h3>{filterActived === 'late' ? 'TAREFAS ATRASADAS' : 'TAREFAS'}</h3>
        </Style.Title>

        <Style.Content>
          {
            tasks.map(tarefas =>(
              <Link to={`/task/${tarefas._id}`}>
            <TaskCard type={tarefas.type} title={tarefas.title} when={tarefas.when} done={tarefas.done}/>
              </Link>
            ))
          }
        </Style.Content>
        <Footer/>
    </Style.Container>
       


  )
}

export default Home;
