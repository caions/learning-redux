import { ReactNode } from 'react';
import { Content } from './Content';
import { Footer } from './Footer';
import { Header } from './Header';


import './styles.css';

type Props = {
  children?: ReactNode
};

export const DashBoard = ({ children }: Props) => (
	<>
		<Header />
		<Content>{children}</Content>
		<Footer />
	</>
);