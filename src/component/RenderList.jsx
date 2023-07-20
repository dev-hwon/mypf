import { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type : ${action.type}`);
  }
};
const RenderList = () => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  const params = useParams();
  const GOOGLESHEET = "https://sheets.googleapis.com/v4/spreadsheets";
  const SHEET_ID = "1iARCqkYaPh4RVgzFd0jUDJ5f0X1-xhtYnUlZtRMcGsk";
  const RANGE = params.name;
  const API_KEY = "AIzaSyA-crA0klE95-_kJpv1W13YUOks5Tu7Bz0";
  const API_URL = GOOGLESHEET + "/" + SHEET_ID + "/values/" + RANGE + "?key=" + API_KEY;

  const fetchLists = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.get(API_URL);
      dispatch({ type: "SUCCESS", data: response.data });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  useEffect(() => {
    fetchLists();
  }, []);

  const { loading, data: lists, error } = state;

  if (loading)
    return (
      <div>
        로딩중 ... <button onClick={fetchLists}>다시 불러오기</button>
      </div>
    );
  if (error)
    return (
      <div>
        에러가 발생했습니다. <button onClick={fetchLists}>다시 불러오기</button>
      </div>
    );
  if (!lists) return null;

  const newArr = [];
  function pushArr(idx) {
    const newLists = {};
    for (let j = 0; j < lists.values[0].length; j++) {
      newLists[lists.values[0][j]] = lists.values[idx][j];
    }
    newArr.push(newLists);
  }
  for (let i = 1; i < lists.values.length; i++) {
    pushArr(i);
  }

  return (
    <>
      <ul>
        {newArr.map((list) => (
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
      <button onClick={fetchLists}>다시 불러오기</button>
    </>
  );
};
export default RenderList;
