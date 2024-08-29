import '../style/DeleteSucess.css';
import { Link, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import deletePost from "../api/delete";

const DeleteSucess = () => {
    const { id } = useParams(); 
    const navigate = useNavigate(); // Hook para navegação programática

    // Função para remover o post
    const removepost = async (id) => {
        try {
            await deletePost(id);
            navigate('/'); // Navega de volta para a página inicial após a exclusão
        } catch (error) {
            console.log(error);
        }
    };

    // Exibe uma mensagem se não houver ID
    if (!id) {
        return (
            <div className="post-delete">
                <h2>Não há post a ser deletado!</h2>
                <Link to="/" className="btn">Voltar</Link>
            </div>
        );
    }

    return (
        <div className="post-delete">
            <h2>Confirme a exclusão do post</h2>
            <div className="botoes">
                <button onClick={() => removepost(id)} className="btn btn-delete">Deletar</button>
                <Link to="/" className="btn">Voltar</Link>
            </div>
        </div>
    );
};

export default DeleteSucess;
