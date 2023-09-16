import './home.scss';
import Info from '../info/Info';
import data from '../../data';
import {Link, useParams} from "react-router-dom";
import Header from '../header/Header';
import FrequentlyAskedQuestions from '../frequentlyAskedQuestions/FrequentlyAskedQuestions';


const Home = () => {
    const param = useParams();
    
    return(
        <div>
            <Header />
            {
            param.url === "faq" ?
            <FrequentlyAskedQuestions />
            :
            !param.url ? 
            <Info data={data[0]}/>
            :
            <div>
            {data.filter((item)=>{
                return item.url === param.url;
            })
            .map((item,i)=>{
                return <Info key={i} data={item}/>
            })
            }
            </div>
            }
            <Link to="/faq">
                <div className='faqLogo'></div>
            </Link>
        </div>
    )
}

export default Home;