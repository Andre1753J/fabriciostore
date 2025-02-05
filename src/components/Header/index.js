"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
    const [listOpen, setListOpen] = useState(false);

    const openList = () => {
        setListOpen(!listOpen);
    };

    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.list}>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link onMouseOver={openList} href='/'>Medico </Link>
                        <ul>
                            <li>
                                <Link href='/'>Listar </Link>
                            </li>
                            <li>
                                <Link href='/'>Listar2 </Link>
                            </li>
                            <li>
                                <Link href='/'>Listar3 </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href='/'>Pacientes </Link>
                    </li>
                    <li>
                        <Link href='/'>Agendamento </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}