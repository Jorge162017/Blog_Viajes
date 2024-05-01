import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



// Header.js
function Header() { 
const navigate = useNavigate();
const [title, setTitle] = useState('');
const [imageAddress, setImageAddress] = useState('');
const [description, setDescription] = useState('');
const [author, setAuthor] = useState('');
const logOut = () => {
    localStorage.removeItem('token');
    navigate('/');
 
  }

  const handleInputChange = (e, setter) => setter(e.target.value);

  const handleCreatePost = async (e) => {
    e.preventDefault(); // Evitar recargar la página
    try {
      const response = await fetch('http://44.202.104.77/api/22103/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Suponiendo que necesitas un token de autorización
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          title: title,
          img: imageAddress,
          content: description,
          author: author
        }),
      });

      if (response.ok) {
        console.log("Post creado con éxito");
        // Recargar los posts o manejar la actualización del estado global si es necesario
      } else {
        console.error("Error al crear post", response.statusText);
      }
    } catch (error) {
      console.error("Error en la red al crear post", error);
    }
  };
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <h1 className="navbar-brand" href="#">BLOG DE VIAJES</h1>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal3" data-bs-whatever="@getbootstrap">New Post +</button>
            <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">New Post</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleCreatePost}>
                <div className="mb-3">
                  <label htmlFor="title" className="col-form-label">Title:</label>
                  <input type="text" className="form-control" id="title" value={title} onChange={(e) => handleInputChange(e, setTitle)}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="image-address" className="col-form-label">Image Address:</label>
                  <input type="text" className="form-control" id="image-address" value={imageAddress} onChange={(e) => handleInputChange(e, setImageAddress)}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="col-form-label">Description:</label>
                  <textarea className="form-control" id="description" value={description} onChange={(e) => handleInputChange(e, setDescription)}></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="image-address" className="col-form-label">Author:</label>
                  <input type="text" className="form-control" id="image-address" value={author} onChange={(e) => handleInputChange(e, setAuthor)}/>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary">Post</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <Link to="/" className="nav-link">
            <button onClick={logOut} className="btn btn-danger" type="submit">Log Out</button>
            </Link>
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

  // Para Eliminar un Post
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [postIdToDelete, setPostIdToDelete] = useState(null);
      
      
    const handleDeletePost = postId => {
    console.log("Estableciendo postIdToDelete a:", postId);
    setPostIdToDelete(postId);
    setShowDeleteModal(true); // Controlar la visibilidad del modal con estado
    };

    const closeDeleteModal = () => setShowDeleteModal(false);

    const confirmDeletePost = () => {
    fetch(`http://44.202.104.77/api/22103/post/${postIdToDelete}`, {
        method: 'DELETE'
    })
    .then(response => {
        console.log('Respuesta de la solicitud DELETE:', response);
        if (response.ok) {
        // Lógica para remover el post de la lista aquí
        closeDeleteModal();
        } else {
        console.error('Error al eliminar el post:', response.statusText);
        }
    })
    .catch(error => {
        console.error('Error al eliminar el post:', error);
    });
    };
    
    // Para Actualizar un Post
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [currentPost, setCurrentPost] = useState(null);
  
    const handleUpdatePost = (post) => {
        console.log("Estableciendo post actual a:", post);
        setCurrentPost(post); // Asegúrate de pasar el objeto post completo aquí
        setShowUpdateModal(true);
      };
      
  
    const closeUpdateModal = () => setShowUpdateModal(false);
  
    const handleInputChange = (e, field) => {
        setCurrentPost(prevState => ({...prevState, [field]: e.target.value}));
      };
  
      const submitUpdate = async () => {
        try {
          const response = await fetch(`http://44.202.104.77/api/22103/post/${currentPost.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
              title: currentPost.title,
              img: currentPost.img,
              content: currentPost.content,
              author: currentPost.author
            }),
          });
      
          if (response.ok) {
            console.log("Post actualizado con éxito");
            closeUpdateModal();
          } else {
            const errorData = await response.json(); // Esto te puede dar más detalles sobre el error
            console.error("Error al actualizar post", errorData);
          }
        } catch (error) {
          console.error("Error en la red al actualizar post", error);
        }
      };
      
      
  return (
    <div className="card" style={cardStyle}>
      <h3 className="card-title">{post.title}</h3>
      <img src={post.img} alt={post.title} style={imgStyle} />
      <p className="card-text">{post.content}</p>
      <p className="card-author">Autor: {post.author}</p>
      <div>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap" style={{margin:'0 20px 0  0'}} onClick={() => handleUpdatePost(post)} >Update</button>
        {showUpdateModal && (
          <div className="modal fade show" style={{ display: "block" }} aria-modal="true" role="dialog">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Update Post</h5>
                  <button type="button" className="btn-close" onClick={closeUpdateModal}></button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label className="col-form-label">Title:</label>
                      <input type="text" className="form-control" value={currentPost.title} onChange={e => handleInputChange(e, 'title')}/>
                    </div>
                    <div className="mb-3">
                      <label className="col-form-label">Image address:</label>
                      <input type="text" className="form-control" value={currentPost.img} onChange={e => handleInputChange(e, 'img')}/>
                    </div>
                    <div className="mb-3">
                      <label className="col-form-label">Description:</label>
                      <textarea className="form-control" value={currentPost.content} onChange={e => handleInputChange(e, 'content')}></textarea>
                    </div>
                    <div className="mb-3">
                      <label className="col-form-label">Author:</label>
                      <input type="text" className="form-control" value={currentPost.author} onChange={e => handleInputChange(e, 'author')}/>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={closeUpdateModal}>Close</button>
                  <button type="button" className="btn btn-primary" onClick={submitUpdate}>Update</button>
                </div>
              </div>
            </div>
          </div>
        )}
        <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal2" onClick={() => handleDeletePost(post.id)}>Delete</button>
        {showDeleteModal && (
        <div className="modal fade show" style={{ display: "block" }} aria-modal="true" role="dialog">
            <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title">Delete Post</h5>
                <button type="button" className="btn-close" onClick={closeDeleteModal}></button>
                </div>
                <div className="modal-body">
                Are you sure you want to delete this post?
                </div>
                <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeDeleteModal}>Back</button>
                <button type="button" className="btn btn-danger" onClick={confirmDeletePost}>Delete</button>
                </div>
            </div>
            </div>
        </div> )}
      </div>
    </div>
  );
}


function Home() {
    
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

export default Home;
