import Head from 'next/head';
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>React meetups</title>
        <meta name='description' content='react meetup app...' />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    'mongodb+srv://abdullagarbo:LUOFfp6OCTyVRKSH@meetup.fu4ic.mongodb.net/?retryWrites=true&w=majority&appName=Meetup'
  );

  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
      })),
    },
    revalidate: 3600,
  };
}
