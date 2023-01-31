import axios from 'axios';
import { useParams } from 'react-router-dom';
import useAsync from '../hooks/useAsync';
import reactStringReplace from 'react-string-replace';

async function getLists(params) {
    // const GOOGLESHEET = "https://sheets.googleapis.com/v4/spreadsheets"
    // const SHEET_ID = "1iARCqkYaPh4RVgzFd0jUDJ5f0X1-xhtYnUlZtRMcGsk"
    // const RANGE =  'enuri'
    // const API_KEY = "AIzaSyA-crA0klE95-_kJpv1W13YUOks5Tu7Bz0"
    // const API_URL = GOOGLESHEET + "/" + SHEET_ID + "/values/" + RANGE + "?key=" + API_KEY
    const response = await axios.get(
        `https://sheets.googleapis.com/v4/spreadsheets/1iARCqkYaPh4RVgzFd0jUDJ5f0X1-xhtYnUlZtRMcGsk/values/${params.name}?key=AIzaSyA-crA0klE95-_kJpv1W13YUOks5Tu7Bz0`
    );
    
    return response.data;
}

const Pflist = ({params}) => {
    const params = useParams();
    const [state] = useAsync(() => getLists(params), [params]);
    
    const { loading, data :lists, error } = state;

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!lists) return <button onClick={refetch}>불러오기</button>;

    console.log(lists);
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
            <ul>
                {newArr.map(list => (
                    <li key={list.id}>
                        <div className="date">{list.date}</div>
                        <div className="image1">{list.image1}</div>
                        <div className="image2">{list.image2}</div>
                        <div className="image3">{list.image3}</div>
                        <div className="label">{list.label}</div>
                        <div className="summary">{list.summary}</div>
                        <div className="title">{list.title}</div>
                    </li>
                ))}
            </ul>
            <button onClick={refetch}>다시 불러오기</button>
        </div>
    )
}
export default Pflist;