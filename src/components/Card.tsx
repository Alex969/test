import './Card.css';

interface CardProps {
  header: string;
  body: string;
  impact: string;
  track: string | undefined;
}

const Card = (props: CardProps) => {

  return(
    <div className='card'>
      <h1 className='header'>{props.header}</h1>
      <h2 className='body'>{props.body}</h2>
      <h3 className='impact'>{props.impact}</h3>
      <h4 className='track'>{props.track}</h4>
    </div>
  )
}

export default Card; 