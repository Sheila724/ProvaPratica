
import blogFetch from '../axios/config';


// Função para deletar um post
export const deletePost = async (id) => {
    try {
      // Faz a requisição DELETE para a API
      await blogFetch.delete(`/posts/${id}`);
      
      
    } catch (error) {
      console.error(`Erro ao deletar o post ${id}:`, error);
    }
  };
  
  export default deletePost;