"use client"
import { useEffect, useState } from "react"
import styles from "./paciente.module.css"

export default function Paciente() {

    const [paciente, setPaciente] = useState([])
    const [pesquisa, setPesquisa] = useState(undefined)

    const fetchPacientes = async (pesquisa) => {
        const response = await fetch("https://api-clinica-2a.onrender.com/pacientes");
        if (!response.ok) {
            throw new Error("Erro do cliente, sabe fazer nada tambem");
        } else {
            let data = await response.json();
            if (pesquisa == undefined) {
                setPaciente(data);
            } else {
                data = data.filter(item => item.nome.toLowerCase().includes(pesquisa.toLowerCase()));
                setPaciente(data);
            }
        }
    }

    useEffect(() => { fetchPacientes(pesquisa) }, [pesquisa]);

    return (
        <div className={styles.pacienteConteiner}>
            <h1 className={styles.pacienteTitulo}>Lista de Pacientes</h1>
            <input placeholder="Pacientes" onChange={(e) => setPesquisa(e.target.value)} ></input>
            <div className={styles.pacienteCentralizado}>
                <table className={styles.pacienteTabela}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Nome</th>
                            <th>Telefone</th>
                            <th>Email</th>
                            <th>CPF</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paciente.map(info => (
                            <tr key={info.id}>
                                <td>{info.id}</td>
                                <td>{info.nome}</td>
                                <td>{info.telefone}</td>
                                <td>{info.email}</td>
                                <td>{info.cpf}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}