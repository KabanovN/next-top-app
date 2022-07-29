import { FunctionComponent } from 'react';
import { LayoutProps } from './Layout.props';
import { Header } from './Header/Header';
import { Nav } from './Nav/Nav';
import { Footer } from './Footer/Footer';
import styles from './Layout.module.css';

function Layout({ children }: LayoutProps): JSX.Element {
    return (
        <div className={styles.container}>
            <section className={styles.sidebar}>
                <Header />
                <Nav className={styles.nav} />
            </section>
            <main className={styles.main}>
                <section>{children}</section>
            </main>
            <Footer className={styles.footer} />
        </div>
    );
}

export const withLayout = <T extends Record<string, unknown>>(
    Component: FunctionComponent<T>
) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};
