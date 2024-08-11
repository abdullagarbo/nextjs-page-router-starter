import classes from './MeetupDetails.module.css';

export default function MeetupDetails(props) {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt='first meetup' />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>Location: {props.address}</p>
    </section>
  );
}
