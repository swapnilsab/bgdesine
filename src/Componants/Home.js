
import Body from "./Body"

const Home = () => {

    return (

        <div >
            <div className="flex justify-center mt-28">
                <span className="text-white">Welcome to BG Design Systems</span>
            </div>

            <div className="flex justify-center">
                <span className="text-white ">For</span>

            </div>

            <div className="flex justify-center">
                <h1 className="text-white text-7xl ">Innovative Technological</h1>

            </div>
            <div className="flex justify-center">
                <h1 className="text-white text-7xl ">Solutions</h1>

            </div>

            <div className="flex justify-center mt-8 ">
                <button className="w-auto h-12 bg-black text-white p-2 rounded-md ">Discover More</button>
            </div>
            <div className="mt-40">

                <Body/>
            </div>
        </div>

    )
}

export default Home