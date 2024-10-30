import React from 'react';
import './PerfilUser.css';
import user from './assets/user.jpeg';
import perderpeso from './assets/perderpeso.jpg';
import especial from './assets/especial.jpeg';

const PerfilUser = () => {
    const handleObjectiveClick = () => {
        // Adicione a lógica para o clique no objetivo aqui
        console.log("Objetivo clicado");
    };

    const handleDietClick = () => {
        // Adicione a lógica para o clique na dieta especial aqui
        console.log("Dieta especial clicada");
    };

    const handleIngestaoClick = () => {
        // Adicione a lógica para o clique na dieta especial aqui
        console.log("Dieta especial clicada");
    };

    return (
        <div className="profile-container">
            <div className="profile-header">
                <img
                    src={user} 
                    alt="Foto de perfil"
                    className="profile-image"
                />
                <div className="profile-info">
                    <h2 className="profile-name">Raquel Massae</h2>
                    <p className="profile-email">raquelmassae@gmail.com</p>
                    <p className="profile-age-weight-height">19 anos. 50 kg, 1,51 cm.</p>
                </div>
            </div>

            <div className="daily-tip">
                <p>Dica do dia ;) <span>Comer com atenção plena melhora a digestão.</span></p>
            </div>

            <div className="diets-section">
                <div className="diet-objectives">
                    <button className="diet-card" onClick={handleObjectiveClick}>
                        <p>Meu objetivo</p>
                        <img src={perderpeso} alt="Objetivo" />
                    </button>
                    <button className="diet-card" onClick={handleDietClick}>
                        <p>Minha dieta especial</p>
                        <img src={especial} alt="Especial" />
                    </button>
                </div>
            </div>

            <div className="weight-section">
                <div className="weight-card">
                    <p>Peso Atual</p>

                </div>
                <div className="weight-card">
                    <p>Meta de peso</p>
    
                </div>
                <button className="weight-card-i" onClick={handleIngestaoClick}>
                    <p>Ingestão Diária</p>
                </button>
            </div>
        </div>
    );
};

export default PerfilUser;