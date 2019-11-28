import React from 'react';
import './App.css';

const App= ()=>
{
  return(
  <PersonList />
  );

}
const PersonList=()=>
{
  const people=[
    {
      img:22,
      name:"John",
      job:"developer"
    },
    {
      img:34,
      name:"bob",
      job:"designer"
    },
    {
      img:56,
      name:"John",
      job:"artist"
    }


  ]
  return(
    <section>
      <Person people={people[0]} />
      <Person people={people[1]}>
        Hello ia m fyne what about u
      </Person>
      <Person people={people[2]}/>
    </section>
    );
}
const Person =(props)=>
{
  const {img,name,job,childern}=props.people
  const {children}=props
  const url=`https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;

  return <div className="person">
    <img src={url} alt=" " />
    <div>
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </div>


  </div>
}



export default App;
