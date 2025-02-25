"use client"
import { useEffect, useState } from "react"
import styles from "./agendamento.module.css"

export default function Agendamento() {

    const [agendamento, setAgendamento] = useState([])
    const [pesquisa, setPesquisa] = useState(undefined)

    const fetchAgendamentos = async (pesquisa) => {
        const response = await fetch("https://api-clinica-2a.onrender.com/agendamentos");
        if (!response.ok) {
            throw new Error("Erro do cliente, sabe fazer nada tambem");
        } else {
            let data = await response.json();
            if (pesquisa == undefined) {
                setAgendamento(data);
            } else {
                data = data.filter(item => item.nome.toLowerCase().includes(pesquisa.toLowerCase()));
                setAgendamento(data);
            }
        }
    }

    useEffect(() => { fetchAgendamentos(pesquisa) }, [pesquisa]);

    return (
        <div className={styles.agendamentoConteiner}>
            <h1 className={styles.agendamentoTitulo}>Lista de Agendamentos</h1>
            <input placeholder="Agendamentos" onChange={(e) => setPesquisa(e.target.value)} ></input>
            <div className={styles.agendamentoCentralizado}>
                <table className={styles.agendamentoTabela}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>nome</th>
                            <th>data</th>
                            <th>hora</th>
                        </tr>
                    </thead>
                    <tbody>
                        {agendamento.map(a => (
                            <tr key={a.id}>
                                <td>{a.id}</td>
                                <td>{a.nome}</td>
                                <td>{a.data}</td>
                                <td>{a.hora}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}