import blogFetch from '../axios/config';

// Função para atualizar um post
export const updatePost = async (id, updatedData) => {
  try {
    // Modifique a estrutura do dado a ser enviado no PUT
    const response = await blogFetch.put(`/posts/${id}`, {
      // Assumindo que `updatedData` contém as propriedades `title`, `price` e `images`
      title: updatedData.title,
      price: updatedData.price,
      images: updatedData.images
    });

    return response.data; 
  } catch (error) {
    console.error("Erro ao atualizar o post:", error); 
    throw error; 
  }
};

export default updatePost;
