function Card({ post }) {
  const cardStyle = {
    backgroundColor: '#edede9',
    border: '1px solid #000', // Borde de 1 píxel sólido negro
    margin: '10px auto', // Espacio exterior superior e inferior de 10 píxeles, auto para los lados
    display: 'flex', //  flexbox
    alignItems: 'center', // Alinear verticalmente al centro
    maxWidth: '800px', // Ancho máximo de 600 píxeles
    padding: '10px',
  };

  const imgStyle = {
    width: '30%', // Ancho de la imagen al 30% del contenedor
    marginRight: '10px', // Margen derecho de 10 píxeles para separar la imagen del contenido
  };

  return (
    <div className="card" style={cardStyle}>
      <img src={post.img} alt={post.title} style={imgStyle} />
      <div>
        <h3 className="card-title">{post.title}</h3>
        <p className="card-text">{post.content}</p>
        <p className="card-author">Autor: {post.author}</p>
        <a href="#" className="btn btn-primary mr-2">Update</a>
        <a href="#" className="btn btn-primary">Delete</a>
      </div>
    </div>
  );
}






