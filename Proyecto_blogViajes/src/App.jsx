//const { useEffect, useState } = React;
import React, { useEffect, useState } from 'react';

// Header.js 
function Header() {
    return (
        <header>
            <h1>Blog de Viajes</h1>
        </header>
    );
}

// Card.js 
function Card({ post }) {
    return (
        <div className="card" key={post.id}>
            <img src={post.img} alt={post.title} style={{width: '100%'}} />
            <div>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <p>Autor: {post.author}</p>
            </div>
        </div>
    );
}

function App() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false); // Nuevo estado para la carga
  
    useEffect(() => {
      setLoading(true); // Iniciar la carga
      //fetch('http://localhost:3800/post')
      fetch('http://44.202.104.77/api/22103/post')
        .then(response => response.json())
        .then(data => {
          setPosts(data);
          setLoading(false); // Terminar la carga cuando los datos son recibidos
        })
        .catch(error => {
          console.error('Error al cargar los datos de la API:', error);
          setLoading(false); // Terminar la carga también si hay un error
        });
    }, []);
  
    return (
      <div>
        <Header />
        {loading ? (
          <div>Loading...</div> // Aquí puedes reemplazar esto con tu componente de animación
        ) : (
          posts.map(post => <Card key={post.id} post={post} />)
        )}
      </div>
    );
  }

export default App;


