import cn from 'classnames';
import { TagProps } from './Tag.props';
import styles from './Tag.module.css';

export const Tag = ({
    children,
    color = 'ghost',
    size = 's',
    href,
    className,
    ...props
}: TagProps): JSX.Element => {
    return (
        <div
            className={cn(styles.tag, className, {
                [styles.s]: size === 's',
                [styles.m]: size === 'm',
                [styles.ghost]: color === 'ghost',
                [styles.primary]: color === 'primary',
                [styles.red]: color === 'red',
                [styles.green]: color === 'green',
                [styles.gray]: color === 'gray',
            })}
            {...props}>
            {href ? <a href={href}>{children}</a> : <>{children}</>}
        </div>
    );
};
