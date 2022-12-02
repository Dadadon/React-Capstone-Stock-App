import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { AiOutlineLogin } from 'react-icons/ai';
import { useDispatch } from "react-redux";
import { RetrieveStocksInfo } from './redux/Stock/stock';

const CardItem =(item) => {
  const { name, rank, id, symbol } = item;
    const dispatch = useDispatch();
  const handleClick = (id2) => {
    dispatch(RetrieveStocksInfo(id2));
  }
  return (
    <Card text="dark" className='w-50 pe-2 pt-1 text-end' 
    >
      <Link to={`/crypto/${id}`}><AiOutlineLogin className='text-dark fs-3' onClick={() =>handleClick(id)}/></Link>
      <h1 className='ps-3 text-start text-muted fw-bold'>{symbol}</h1>
    <Card.Body>
      <Card.Title><h1>{name}</h1></Card.Title>
      <Card.Text><h3>Rank: {rank}</h3>  
      </Card.Text>
    </Card.Body>
</Card>
  )
   
}

export default CardItem;