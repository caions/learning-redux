import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
};

export function Content({children}:Props) {
	return <main className="content container-fluid">{children}</main>;
}

