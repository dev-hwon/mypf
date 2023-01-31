import React, { useCallback } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";


const RenderList = (props) => {
    const { data, params } = props;
    const newArr = [];
    function pushArr(idx) {
        const lists = {};
        for(let j=0; j<data[0].length; j++) {
            lists[data[0][j]] = data[idx][j]
        }
        newArr.push(lists);
    }
    for(let i=1; i<data.length; i++) {
        pushArr(i);
    }
    const list = newArr.map((list, index) => (
        <li key={index}>
            <div className="pflist_no">{index + 1}</div>
            <div className="pflist_title">{newArr[index].title}</div>
            <div className="pflist_summary">{newArr[index].summary}</div>
            <div className="pflist_date">{newArr[index].date}</div>
            <div className="pflist_url">{newArr[index].url}</div>
            <div className="pflist_img1">{newArr[index].image1}</div>
            <div className="pflist_img2">{newArr[index].image2}</div>
            <div className="pflist_img3">{newArr[index].image3}</div>
        </li>
    ))
    return list
}
const Pflist = () => {
    const params = useParams();
    const GOOGLESHEET = "https://sheets.googleapis.com/v4/spreadsheets"
    const SHEET_ID = "1iARCqkYaPh4RVgzFd0jUDJ5f0X1-xhtYnUlZtRMcGsk"
    const RANGE = params.name
    const API_KEY = "AIzaSyA-crA0klE95-_kJpv1W13YUOks5Tu7Bz0"
    const API_URL = GOOGLESHEET + "/" + SHEET_ID + "/values/" + RANGE + "?key=" + API_KEY
    
    let lists = useFetch(API_URL);
    
    console.log(lists);

    return (
        <div className="pflist">
            <ul>
                <RenderList 
                    data={lists.values} 
                    params={params} 
                ></RenderList>
            </ul> 
        </div>
    )
}
export default Pflist;