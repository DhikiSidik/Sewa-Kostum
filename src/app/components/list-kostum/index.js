import Image from "next/image";
import Link from "next/link";

const listKostum = ({ id, kostum, gambar, status }) => {
    return (
        <div className="list_kostum_css">
            <div className="kartu_kostum">
                <Link href={`/${id}`}>
                    <Image src={gambar} width={300} height={300} />
                    <p className="font-bold p-4">{kostum}</p>
                    <p>status: {status}</p>
                    <button >lihat</button>
                </Link>
            </div>

        </div>
    )
}

export default listKostum