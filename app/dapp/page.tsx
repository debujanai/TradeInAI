import DappLayout from './layout';
import Trending from './trending';
import Form from './form';
import Head from 'next/head'; // Import Head from next/head for managing <head> content

export default function MyDappPage() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Your Page Title</title>
        {/* Add any other meta tags or title you need */}
      </Head>
      <DappLayout>
        <Trending />
        <Form />
      </DappLayout>
    </>
  );
}
