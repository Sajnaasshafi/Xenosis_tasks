import React, { useState } from 'react';
import JobList from './Components/joblist';
import Header from './Components/Header/Header'
import JobItem from './Components/jobitem';
import data from "./data"


function App() {
   
    const joblist = data.map((item) => {
      return <JobList key={item.id} {...item} />;
  });



    return (
        <div className="app">
            <Header/>
            <section style={{marginTop:'5px', flexDirection:'center'}}><JobItem/></section>
            <section className="cards-list">{joblist}</section>
        </div>
    );
}

export default App;
