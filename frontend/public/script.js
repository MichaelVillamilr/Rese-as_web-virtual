
document.getElementById('form-resena').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const comentario = document.getElementById('comentario').value;
    //const url_back="https://backend-x5tx.onrender.com";
    
    const resena = { nombre, email, comentario }; 
  
    try {
      const response = await fetch('http://localhost:3000/usuarios', {
      
      //const response = await fetch(`${url_back}resena/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(resena),
      });
      const data = await response.json();
      alert('Usuario creado: ' + JSON.stringify(data));
      
    } catch (err) {
      console.error('Error creando usuario:', err);
    }
  });
 