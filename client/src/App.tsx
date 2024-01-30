import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Drill from './components/Drill';
import MainMenu from './components/MainMenu';
import TitleBar from './components/TitleBar';
import styles from './App.module.css';

const App: React.FC = () => {
  return (
		<Router>
			<div className={styles.container}>
				<Link to='/' className={styles.titleLink}><TitleBar title='mentat' /></Link>
				<Routes>
					<Route path='/' element={<MainMenu />} />
					<Route path='/exercise1' element={<Drill drillId='exercise1' />} />
					<Route path='/exercise2' element={<Drill drillId='exercise2' />} />
					<Route path='/exercise3' element={<Drill drillId='exercise3' />} />
				</Routes>
			</div>
		</Router>
  );
};

export default App;

