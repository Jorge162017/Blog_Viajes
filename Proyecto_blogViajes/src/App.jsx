//const { useEffect, useState } = React;
import React, { useEffect, useState } from 'react';

// Header.js
function Header() {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="#">BLOG DE VIAJES</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
            <button type="button" class="btn btn-light">Post</button>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <button class="btn btn-success" type="submit">Log In</button>
          </form>
        </div>
      </nav>
    </header>
  );
}

// Card.js
function Card({ post }) {
  const cardStyle = {
    backgroundColor: '#edede9',
    border: '1px solid #000', // Borde de 1 píxel sólido negro
    margin: '10px auto', // Espacio exterior superior e inferior de 10 píxeles, auto para los lados
    display: 'flex', // flexbox
    alignItems: 'center', // Alinear verticalmente al centro
    maxWidth: '800px', // Ancho máximo de 600 píxeles
    padding: '10px',
  };

  const imgStyle = {
    width: '50%', // Ancho de la imagen al 30% del contenedor
    marginRight: '10px', // Margen derecho de 10 píxeles para separar la imagen del contenido
  };

  return (
    <div className="card" style={cardStyle}>
      <h3 className="card-title">{post.title}</h3>
      <img src={post.img} alt={post.title} style={imgStyle} />
      <p className="card-text">{post.content}</p>
      <p className="card-author">Autor: {post.author}</p>
      <div>
        <a href="#" className="btn btn-primary mr-2">Update</a>
        <a href="#" className="btn btn-danger">Delete</a>
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
