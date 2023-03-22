import React, {useState} from "react";
import * as Style from './styles';
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import FilterCard from "../../Components/FilterCard";
function Home() {
  const[filterActived, setFilterActived] = useState();
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
        <Footer/>
    </Style.Container>
  )
}

export default Home;
