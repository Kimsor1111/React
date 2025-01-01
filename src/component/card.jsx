import { Link } from "react-router-dom";
function Card({ id, name, img, price }) {
    return (
        <>
            {/* {products.map(({id , name , img , price}) => (
            <h1>Hello</h1>
        ))} */}
            <div className="h-[400px] ">
                <div className="w-full h-2/3">
                    <img src={img} className="w-full h-full object-cover" alt="" />
                </div>
                <div className="w-full h-1/3">
                    <h1 className="text-center font-bold text-xl">{name}</h1>
                    <h1 className="text-center font-bold text-xl">{price}</h1>
                    <div className="w-full h-[30px] flex justify-center items-center">
                        <Link to={id.toString()} className="bg-red-500 rounded">Detail</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;