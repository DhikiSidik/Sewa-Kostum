// pages/[nomerId]/detail.js
import { useRouter } from 'next/router';
import RootLayout from '../../src/app/layout';

const DetailPage = ({ data }) => {
  return (
    <RootLayout>
      <div>
        <h1>Halaman Detail</h1>
        <p>Data: {data}</p>
      </div>
    </RootLayout>
  );
};


export async function getServerSideProps(context) {
  // This is similar to your DynamicPage, you can fetch data based on nomerId
  const { nomerId } = context.params;
  const data = `Detail Data for ID ${nomerId}`;

  return {
    props: {
      data,
    },
  };
}

export default DetailPage;
