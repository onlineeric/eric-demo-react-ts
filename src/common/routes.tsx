import React, { useEffect } from 'react';
import Dashboard from '../dashboard/Dashboard';
import LangChainPage from '../langChainPage/LangChainPage';
import Orders from '../orders/Orders';
import { Navigate } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { logOff } from '../store/loginSlice';
import SignIn from '../login/SignIn';
import Home from '../home/Home';
import Benchmark from '../benchmark/Benchmark';
import FineTuningPage from '../fineTuningPage/FineTuningPage';
import RagPage from '../ragPage/RagPage';

// Logoff component
const Logoff = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(logOff());
	}, []);

	return <div>Logging off...</div>;
};

export const authRoutes = [
	{ path: '/home', element: <Home />, title: 'Home' },
	{ path: '/benchmark', element: <Benchmark />, title: 'Benchmark' },
	{ path: '/langchaindemo', element: <LangChainPage />, title: 'LangChain Demo' },
	{ path: '/fineTuningDemo', element: <FineTuningPage />, title: 'Fine Tuning Demo' },
	{ path: '/ragDemo', element: <RagPage />, title: 'RAG Demo' },
	{ path: '/dashboard', element: <Dashboard />, title: 'Dashboard' },
	{ path: '/orders', element: <Orders />, title: 'Orders' },
	{ path: '/status', element: <div>status page</div>, title: 'Status' },
	{ path: '/logoff', element: <Logoff />, title: 'Login' },
	{ path: '*', element: <Navigate to="/home" replace /> },
];

export const notAuthRoutes = [
	{ path: '/login', element: <SignIn />, title: 'Login' },
	{ path: '/status', element: <div>status page</div>, title: 'Status' },
	{ path: '*', element: <Navigate to="/login" replace /> },
];

export const useAuthRoutesObjs = authRoutes.map(({ path, element }) => ({ path, element }));
export const useNotAuthRoutesObjs = notAuthRoutes.map(({ path, element }) => ({ path, element }));

export const authRouteTitles = Object.fromEntries(authRoutes.map(({ path, title }) => [path, title]));
export const notAuthRouteTitles = Object.fromEntries(notAuthRoutes.map(({ path, title }) => [path, title]));
