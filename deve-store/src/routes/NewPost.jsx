import React from 'react'
import '../style/NewPost.css'
import blogFetch from '../axios/config'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';


const NewPost = () => {
  const navigate = useNavigate()

  const [title, setTitle] = useState()

  const [body, setBody] = useState()

  const createPost = async(e) => {
    e.preventDefault(); // Evitando que a pagina se recarregue no envio dos dados
    
    const posts = {title,body, userId:1}

    await blogFetch.post('/posts',{
      body:posts
      
    })
    navigate('/')
  }

  return (
    <div className='new-post'>
      <h2>Inserir novo Post</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className='form-control'>
          <label htmlFor='title'>Titulo:</label>
          <input
            type="text"
            name='title'
            id='title'
            placeholder='Digite o Titulo'
            onChange={(e)=> setTitle(e.target.value)} />
        </div>
        <div className='form-control'>
          <label htmlFor='body'>Conteudo:</label>
          <textarea name="body" 
          id="body" 
          placeholder='Digite o conteudo'
          onChange={(e)=> setBody(e.target.value)}
          ></textarea>
        </div>
        <div className='usabylit'>
        <input type="submit" value="Criar Post" className='btn btn-criar' />
        <Link className='btn' to={'/'}>Voltar</Link>
        </div>
      
        
      </form>

    </div>
  )
}

export default NewPost
