// pages/[nomerId]/detail.js
import { useRouter } from 'next/router';

const DetailPage = () => {
  const router = useRouter();
  const { id, kostum, gambar, status } = router.query;

  return (
    <div>
      <h1>Detail Page</h1>
      <p>ID: {id}</p>
      <p>Kostum: {kostum}</p>
      <p>Status: {status}</p>
      <h1>contact</h1>
      <img src={gambar} alt={kostum} />
    </div>
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
