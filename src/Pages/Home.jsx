import Banner from "../components/Banner/Banner";
import Enhances from "../components/Enhance/Enhances";
import Healthy from "../components/Healthy/Healthy";
import Subscribe from "../components/Subscribe/Subscribe";
import Support from "../components/Support/Support";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Healthy></Healthy>
            <Enhances></Enhances>
            <Support></Support>
            <Subscribe></Subscribe>
            
        </div>
    );
};

export default Home;