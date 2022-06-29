import Head from 'next/head';
import Image from 'next/image';
import { Button, Htag } from '../components';
// import styles from '../styles/Home.module.css';

export default function Home(): JSX.Element {
    return (
        <>
            <Htag tag='h1'>Text</Htag>
            <Button appearance='primary' arrow='right'>
                Button
            </Button>
            <Button appearance='ghost' arrow='down'>
                Button
            </Button>
        </>
    );
}
