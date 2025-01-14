import React from 'react';

interface LiveStream {
  id: number;
  title: string;
  description: string;
  streamUrl: string;
  thumbnail: string;
  participants: number;
  live: boolean;
}

// Lista de streams de Free Fire
const liveStreams: LiveStream[] = [
  {
    id: 1,
    title: 'Clyde Royale Championship - Temporada 1',
    description: 'Partida ao vivo com jogadores.',
    streamUrl: '', // Substitua pelo link de stream real
    thumbnail: 'https://i.ibb.co/8PcMYGD/BCB1-D862-A921-43-CB-9-DF4-357484321766.webp',
    participants: 0,
    live: false,
  }
];

export function LiveStreamingPage() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Transmissões ao Vivo - Free Fire</h1>
        <p style={styles.subtitle}>Assista aos melhores torneios ao vivo!</p>
      </header>
      <main style={styles.main}>
        <div style={styles.streamGrid}>
          {liveStreams.map((stream) => (
            <div key={stream.id} style={styles.streamCard}>
              <iframe
                src={stream.streamUrl}
                title={stream.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={styles.streamPlayer}
              ></iframe>
              <div style={styles.streamDetails}>
                <h2 style={styles.streamTitle}>{stream.title}</h2>
                <p style={styles.streamDescription}>{stream.description}</p>
                <p style={styles.streamParticipants}>
                  {stream.participants} espectadores assistindo agora
                </p>
                {stream.live && <span style={styles.liveBadge}>AO VIVO</span>}
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer style={styles.footer}>
        <p>© 2025 Camp Clyde Free fire. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

// Estilos inline
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#000000',
    color: '#fff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column' as const,
  },
  header: {
    backgroundColor: '#000000',
    padding: '1.5rem',
    textAlign: 'center' as const,
    borderBottom: '2px solid #e50914',
  },
  title: {
    fontSize: '2.5rem',
    margin: 0,
  },
  subtitle: {
    fontSize: '1.2rem',
    marginTop: '0.5rem',
    color: '#ccc',
  },
  main: {
    flex: 1,
    padding: '2rem',
  },
  streamGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
  },
  streamCard: {
    backgroundColor: '#000000',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  },
  streamPlayer: {
    width: '100%',
    height: '200px',
    border: 'none',
  },
  streamDetails: {
    padding: '1rem',
  },
  streamTitle: {
    fontSize: '1.25rem',
    marginBottom: '0.5rem',
    color: '#fff',
  },
  streamDescription: {
    fontSize: '0.9rem',
    marginBottom: '0.5rem',
    color: '#ccc',
  },
  streamParticipants: {
    fontSize: '0.85rem',
    marginBottom: '0.5rem',
    color: '#bbb',
  },
  liveBadge: {
    backgroundColor: '#e50914',
    color: '#fff',
    padding: '0.2rem 0.5rem',
    borderRadius: '4px',
    fontSize: '0.8rem',
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#000000',
    padding: '1rem',
    textAlign: 'center' as const,
  },
};
