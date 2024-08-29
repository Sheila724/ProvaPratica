import blogFetch from '../axios/config';

// Função para buscar posts por ID
const getId = async (id) => {
  try {
    const response = await blogFetch.get(`/posts/${id}`); // Faz a requisição para a API com o ID
    const data = response.data; // Recebe os dados da resposta da requisição

    // Mapeia os dados para extrair os detalhes do post de cada objeto
    const formattedPost = {
      id: data.id, 
      title: data.body.title, 
      body: data.body.body, 
      userId: data.body.userId 
    };

    return formattedPost; // Retorna o post formatado

  } catch (error) {
    console.log("Erro ao buscar posts:", error); 
  }
};

export default getId;
