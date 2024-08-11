import Head from 'next/head';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

export default function NewMeetupPage() {
  async function addMeetupHandler(meetup) {
    try {
      fetch('/api/new-meetup', {
        method: 'POST',
        body: JSON.stringify(meetup),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(function (response) {
        console.log(response);
        return response.json();
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Head>
        <title>Add new meetup</title>
        <meta name='Add meetup' content='Add your own meetup' />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}
