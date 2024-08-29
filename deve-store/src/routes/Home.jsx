import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getPosts from "../Api/get";
import '../style/Home.css'; // Certifique-se de ter os estilos corretos

const Home = () => {
    const [products, setProducts] = useState([]); // Renomeie para products para refletir que está lidando com produtos

    // Função para buscar produtos
    const fetchProducts = async () => {
        try {
            const productsData = await getPosts();
            // Ordena os produtos em ordem alfabética pelo título
            const sortedProducts = productsData.sort((a, b) =>
                a.title.localeCompare(b.title)
            );
            setProducts(sortedProducts);
        } catch (error) {
            console.log("Erro ao buscar produtos:", error);
        }
    };

    useEffect(() => {
        fetchProducts(); // Chama a função ao carregar a página
        document.title = 'Produtos'; // Atualiza o título da página
    }, []); // Array vazio garante que a função seja chamada apenas uma vez

    return (
        <div className="home">
            <h1>Produtos Disponíveis</h1>
            {products.length === 0 ? (
                <p>Carregando...</p>
            ) : (
                products.map(product => (
                    <div className='product' key={product.id}>
                        <h2>{product.title}</h2>
                        <img src={product.images} alt={product.title} />
                        <p>Preço: ${product.price}</p>
                        <div className="usabylit">
                            <Link to={`/update/${product.id}`} className="btn btn-update">Alterar produto</Link>
                            <Link to={`/delete/${product.id}`} className="btn btn-delete">Deletar produto</Link>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Home;


