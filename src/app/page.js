import Image from 'next/image'
import dummyData from './data/dummy'
import ListKostum from './components/list-kostum'//<= untuk folder dummy sementara file masih dibikin

export default function Home() {
  return (
    <div className='grid md:grid-cols-5 sm: grid-cols-3 gap-4 px-4s'>
      {dummyData.map(item => {
        return (
          <div key={item.id}>
            <ListKostum id={item.id} gambar={item.gambar}  kostum={item.kostum} status = {item.status}/>
          </div>
        )
        })}
    
      

    </div>
  )
}

