import { useParams , Link } from "react-router-dom";
import { data } from '../data/product'
function Detail() {
    const { id } = useParams();
    const { name, img, price } = data.find(d => d.id == id)
    return (
        <>
            <h1 className="text-center font-bold text-6xl">Shoes Detail</h1>
            <div className="w-full h-auto bg-stone-500 grid grid-cols-2 px-[200px] gap-5 my-10">
                <div className="h-full">
                    <img src={img} className="w-full h-full object-contain" alt="" />
                </div>
                <div className="h-full">
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <h1 className="text-5xl font-bold">${price}</h1>
                    <Link to="/">Back</Link>
                </div>
            </div>
        </>
    );
}
export default Detail;