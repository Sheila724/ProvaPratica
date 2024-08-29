import blogFetch from '../axios/config';

// Função para buscar produtos
const getProducts = async () => {
  try {
    const response = await blogFetch.get('/products'); // Faz a requisição para a API
    return response.data; // Retorna os dados da resposta da requisição

  } catch (error) {
    console.log("Erro ao buscar produtos:", error);
    return [];
  }
};

export default getProducts;
