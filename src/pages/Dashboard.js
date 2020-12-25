import React from 'react';
import { Info, Repos, User, Search, Navbar, DetailedRepos } from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';
const Dashboard = () => {
  const {isloading} = React.useContext(GithubContext);
  if(isloading){
    return (<main>
      <Navbar />
      <Search />
      <img src= {loadingImage} className='loading-img' alt="loading"/>
    </main>);
  }
  return (
    <main>
      <Navbar></Navbar>
      <Search />
      <Info />
      <User />
      <Repos />
      <DetailedRepos />
    </main>
  );
};

export default Dashboard;
