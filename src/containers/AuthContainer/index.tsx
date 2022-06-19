import { ReactNode } from 'react';
import { Content } from './Content';

import './styles.css';

type Props = {
  children?: ReactNode
};

export const Authentication = ({ children }: Props) => (
	<>
		<Content>{children}</Content>
	</>
);