import Head from 'next/head';

type MetaDataProps = {
  title: string;
  description?: string;
};

const MetaData = (props: MetaDataProps) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name='description' content={props.description} />
      {/* <link rel='icon' href='/favicon.png' /> */}
    </Head>
  );
};

export default MetaData;
