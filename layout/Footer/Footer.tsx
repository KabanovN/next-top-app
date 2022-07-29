import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
    return (
        <div {...props}>
            <div className={styles.wrapper}>
                <div className={styles.copyright}>
                    <span>
                        OwlTop © 2020 - {new Date().getFullYear()} Все права
                        защищены
                    </span>
                </div>
                <div className={styles.policy}>
                    <span className={styles.agreement}>
                        Пользовательское соглашение
                    </span>
                    <span className={styles.privacy}>
                        Политика конфиденциальности
                    </span>
                </div>
            </div>
        </div>
    );
};
