import React from 'react';
import featuredGameIcon from '../Images/blackops.jpg';  // Replace with actual game image path
import featuredAppIcon from '../Images/LibreOffice.png';  // Replace with actual app image path
const Featured = () => {
    const game = {
        name: 'Vietnam BlackOps',
        description: "We're in Vietnam!",
        icon: featuredGameIcon,
        link: 'https://download948.mediafire.com/ybbsc6m6yypgOVqISF-QsLTMkMm4fiqdqGMTsIDmmTI-CplUg1Z1pc7-fMusyxn2vYURaFlyd3zeQUz4gHB7BvtpL91G0Ls_rG4VJAK7cxbdHAsG0UTYk_zTvn4piroI8JOKKZghAysHCeuEuJMp1V8QdRIFBNaXe0RA-6du3okB/ciuynl3m3k2k8ek/Vietnam_Black_Ops_Win_ROM_EN.zip'  
    };

    const app = {
        name: 'LibreOffice',
        description: 'Office for free',
        icon: featuredAppIcon,
        link: 'https://download.documentfoundation.org/libreoffice/stable/24.8.1/win/x86_64/LibreOffice_24.8.1_Win_x86-64.msi'  // Replace with actual PC app download link
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>Featured Game</h2>
                <img src={game.icon} alt={game.name} style={styles.image} />
                <h3 style={styles.name}>{game.name}</h3>
                <p style={styles.description}>{game.description}</p>
                <a href={game.link} target="_blank" rel="noopener noreferrer" style={styles.link}>Download Now</a>
            </div>
            <div style={styles.card}>
                <h2 style={styles.title}>Featured App</h2>
                <img src={app.icon} alt={app.name} style={styles.image} />
                <h3 style={styles.name}>{app.name}</h3>
                <p style={styles.description}>{app.description}</p>
                <a href={app.link} target="_blank" rel="noopener noreferrer" style={styles.link}>Download Now</a>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        margin: '20px 0',
    },
    card: {
        maxWidth: '400px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        textAlign: 'center',
        backgroundColor: '#fff',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
        backgroundImage: 'linear-gradient(135deg, #f3f4f6, #e2e4e6)',
        cursor: 'pointer',
        width: '400px'
    },
    cardHover: {
        transform: 'translateY(-10px)',
        boxShadow: '0 15px 25px rgba(0, 0, 0, 0.3)',
    },
    title: {
        fontSize: '24px',
        marginBottom: '15px',
        color: '#333',
    },
    image: {
        width: '120px',
        height: '120px',
        objectFit: 'cover',
        marginBottom: '15px',
        borderRadius: '50%',
        border: '4px solid #007bff',
    },
    name: {
        fontSize: '22px',
        marginBottom: '10px',
        fontWeight: 'bold',
        color: '#007bff',
    },
    description: {
        fontSize: '16px',
        marginBottom: '15px',
        color: '#555',
    },
    link: {
        color: '#fff',
        backgroundColor: '#007bff',
        padding: '10px 20px',
        borderRadius: '5px',
        textDecoration: 'none',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease',
    },
    linkHover: {
        backgroundColor: '#0056b3',
    }
};

export default Featured;