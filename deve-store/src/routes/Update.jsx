import '../style/Update.css';
import { Link, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import deletePost from "../Api/put";

const Uptade = () => {
  const { id } = useParams(); // Obtém o parâmetro `id` da URL
  const navigate = useNavigate()
  const [body, setBody] = useState([]);
  const [content, setContent] = useState('');

  // Função para buscar o título com base no ID
  const fetchTitle = async (id) => {
    try {
      const data = await getID(id); // Chama a função para obter o título pelo ID
      setBody(data); // Atualiza o estado body com os dados retornados
    } catch (error) {
      console.log("Erro ao buscar título:", error);
    }
  };

  //Função para realizar o uptade no conteudo
  const alterpost = async (e) => {
    e.preventDefault(); 
    try {
      const updatedData = {
        title: body.title, // dados padrão do body, não haverá alteração 
        body: content,
        userId: body.userId, // dados padrão do body, não haverá alteração 
      };
      await updatePost(id, updatedData);
      navigate('/')

    } catch (error) {
      console.log("Erro ao atualizar o post:", error);
    }

  };

  useEffect(() => {
    if (id) { // Certifica-se de que o `id` está disponível
      fetchTitle(id);
    }
  }, [id]); // id e a dependencia para o useEffect


  return (
    <div className='new-post'>
      <h2>Alterar Post</h2>
      <form onSubmit={alterpost}>
        <div className='form-control'>
          <h1>{body.title}</h1>
        </div>
        <div className='form-control'>
          <textarea
            name="content"
            id="content"
            placeholder='Digite o conteudo'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            defaultValue={body.body}
          ></textarea>
        </div>
        <div className='usabylit'>
        <input type="submit" value="Alterar " className='btn btn-criar' />
        <Link className='btn ' to={'/'}>Voltar</Link>
        </div>
       
      </form>

    </div>
  )
}

export default Uptade;