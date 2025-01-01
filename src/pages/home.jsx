import Card from "../component/card";
import { data } from './../data/product'
function Home() {
    return (
        <>
            <h1 className="text-center font-bold text-6xl mt-4">Product Heading</h1>
            <div className="w-full bg-slate-300 h-auto mt-10 flex justify-center">
                <div className="w-[900px] h-full grid md:grid-cols-3 gap-5 grid-cols-2">
                    {data.map(({ id, name, img, price }) => (
                        <Card key={id} id={id} name={name} img={img} price={price} />
                    ))}
                </div>
            </div>
            {/* <Card products={data}/> */}
        </>
    )
}
export default Home;