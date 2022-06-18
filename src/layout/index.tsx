import { ReactNode } from 'react';

import { Header } from './Header';
import { Content } from './Content';
import { Footer } from './Footer';

import './styles.css';

type Props = {
  children?: ReactNode
};

export const Layout = ({ children }: Props) => (
	<>
		<Header />
		<Content>{children}</Content>
		<Footer />
	</>
);