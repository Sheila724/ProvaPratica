import blogFetch from '../axios/config';

// Função para atualizar um post
export const updatePost = async (id, updatedData) => {
  try {
    // Modifique a estrutura do dado a ser enviado no PUT
    const response = await blogFetch.put(`/posts/${id}`, {
      id: id, // Inclui o ID no nível superior
      body: {  // Coloca o conteúdo dentro da chave "body"
        title: updatedData.title,
        body: updatedData.body,
        userId: updatedData.userId
      }
    });

    return response.data; 
  } catch (error) {
    console.error("Erro ao atualizar o post:", error); 
    throw error; 
  }
};

export default updatePost;