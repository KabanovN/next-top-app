import { NavProps } from './Nav.props';

export const Nav = ({ ...props }: NavProps): JSX.Element => {
    return <div {...props}>Nav</div>;
};
