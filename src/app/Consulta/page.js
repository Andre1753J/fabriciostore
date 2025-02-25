'use client'
import { useState, useEffect } from "react";
import styles from "./consulta.module.css";

export default function Consultas() {
    const [divPrincipal, setDivPrincipal] = useState(true);
    const [botao1, setBotao1] = useState(false);
    const [botao2, setBotao2] = useState(false);
    
    const [consultas, setConsultas] = useState([]);
    const [medicos, setMedicos] = useState([]);
    const [pacientes, setPacientes] = useState([]);
    
    const [filtroMedico, setFiltroMedico] = useState("");
    const [filtroPaciente, setFiltroPaciente] = useState("");

    useEffect(() => {
        const getConsultas = async () => {
            try {
                const response = await fetch('https://api-clinica-2a.onrender.com/consultas');
                if (!response.ok) throw new Error('Erro ao buscar dados das consultas');
                const data = await response.json();
                setConsultas(data);
            } catch (error) {
                console.error(error);
            }
        };
        getConsultas();
    }, []);

    useEffect(() => {
        if (botao1) {
            const getMedicos = async () => {
                try {
                    const response = await fetch('https://api-clinica-2a.onrender.com/medicos');
                    if (!response.ok) throw new Error('Erro ao buscar dados dos médicos');
                    const data = await response.json();
                    setMedicos(data);
                } catch (error) {
                    console.error(error);
                }
            };
            getMedicos();
        }
    }, [botao1]);

    useEffect(() => {
        if (botao2) {
            const getPacientes = async () => {
                try {
                    const response = await fetch('https://api-clinica-2a.onrender.com/pacientes');
                    if (!response.ok) throw new Error('Erro ao buscar dados dos pacientes');
                    const data = await response.json();
                    setPacientes(data);
                } catch (error) {
                    console.error(error);
                }
            };
            getPacientes();
        }
    }, [botao2]);

    const medicosFiltrados = filtroMedico 
        ? medicos.filter(medico => medico.nome.toLowerCase().includes(filtroMedico.toLowerCase())) 
        : medicos;
    
    const pacientesFiltrados = filtroPaciente 
        ? pacientes.filter(paciente => paciente.nome.toLowerCase().includes(filtroPaciente.toLowerCase())) 
        : pacientes;
    
    const mudarDiv = (numero) => {
        setDivPrincipal(false);
        setBotao1(numero === 1);
        setBotao2(numero === 2);
        if (numero === 3) setDivPrincipal(true);
    };

    return (
        <section className={styles.base}>
            <div className={styles.divDoButton}>
                <button className={styles.button} onClick={() => mudarDiv(1)}>Buscar médico</button>
                <button className={styles.button} onClick={() => mudarDiv(2)}>Buscar paciente</button>
                <button className={styles.button} onClick={() => mudarDiv(3)}>Voltar</button>
            </div>

            {botao1 && (
                <div className={styles.divsS}>
                    <p>Procure por um médico</p>
                    <input type="text" onChange={(e) => setFiltroMedico(e.target.value)} />
                    <table className={styles.consultaTabela}>
                        <thead>
                            <tr>
                                <th className={styles.th}>ID</th>
                                <th className={styles.th}>Nome</th>
                                <th className={styles.th}>Telefone</th>
                                <th className={styles.th}>Email</th>
                                <th className={styles.th}>Especialidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {medicosFiltrados.map(medico => (
                                <tr key={medico.id}>
                                    <td className={styles.td}>{medico.id}</td>
                                    <td className={styles.td}>{medico.nome}</td>
                                    <td className={styles.td}>{medico.telefone}</td>
                                    <td className={styles.td}>{medico.email}</td>
                                    <td className={styles.td}>{medico.especialidade}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {botao2 && (
                <div className={styles.divsS}>
                    <p>Procure por um paciente</p>
                    <input type="text" onChange={(e) => setFiltroPaciente(e.target.value)} />
                    <table className={styles.consultaTabela}>
                        <thead>
                            <tr>
                                <th className={styles.th}>ID</th>
                                <th className={styles.th}>Nome</th>
                                <th className={styles.th}>Telefone</th>
                                <th className={styles.th}>Email</th>
                                <th className={styles.th}>CPF</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pacientesFiltrados.map(paciente => (
                                <tr key={paciente.id}>
                                    <td className={styles.td}>{paciente.id}</td>
                                    <td className={styles.td}>{paciente.nome}</td>
                                    <td className={styles.td}>{paciente.telefone}</td>
                                    <td className={styles.td}>{paciente.email}</td>
                                    <td className={styles.td}>{paciente.cpf}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {divPrincipal && (
                <div className={styles.divPrincipal}>
                    <table className={styles.consultaTabela}>
                        <thead>
                            <tr>
                                <th className={styles.th}>ID</th>
                                <th className={styles.th}>Especialidade</th>
                                <th className={styles.th}>Médico</th>
                                <th className={styles.th}>Paciente</th>
                                <th className={styles.th}>Tipo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {consultas.map(c => (
                                <tr key={c.id}>
                                    <td className={styles.td}>{c.id}</td>
                                    <td className={styles.td}>{c.especialidade}</td>
                                    <td className={styles.td}>{c.medico}</td>
                                    <td className={styles.td}>{c.paciente}</td>
                                    <td className={styles.td}>{c.tipo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </section>
    );
}