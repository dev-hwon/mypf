import '../Pflist.css';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import useAsync from '../hooks/useAsync';
import reactStringReplace from 'react-string-replace';

async function getLists(params) {
    const response = await axios.get(
        `https://sheets.googleapis.com/v4/spreadsheets/1iARCqkYaPh4RVgzFd0jUDJ5f0X1-xhtYnUlZtRMcGsk/values/${params.name}?key=AIzaSyA-crA0klE95-_kJpv1W13YUOks5Tu7Bz0`
    );
    return response.data;
}

const Pflist = () => {
    const params = useParams();

    
    const [state] = useAsync(() => getLists(params), [params], true);
    const { loading, data: lists, error } = state;

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!lists) return null;

    const newArr = [];
    function pushArr(idx) {
        const newLists = {};
        for(let j=0; j<lists.values[0].length; j++) {
            newLists[lists.values[0][j]] = lists.values[idx][j]
        }
        newArr.push(newLists);
    }
    for(let i=1; i<lists.values.length; i++) {
        pushArr(i);
    }

    return (
        <div className="pflist">
            <ul className="col_wrap col_gap_16">
                {newArr.map(list => (
                    <li 
                        className="col col_xs_12 col_md_4 col_lg_3 col_sm_2"
                        key={list.id}
                        
                    >
                        <Link to="/">
                            <div className="label">{list.label}</div>
                            <div className="title">{list.title}</div>
                            <div className="summary tx_shortening_2">{list.summary}</div>
                            <div className="date">{list.date}</div>
                            <div className="image1"><img src={list.image1} alt={list.title}/></div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Pflist;
