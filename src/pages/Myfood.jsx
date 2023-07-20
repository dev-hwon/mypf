import React from "react";
import "../Dic.css";
import foodlist from "../db/my_food.json";
import { useState } from "react";

export default function Myfood() {
  const [locals, setLocals] = useState("busan");

  return (
    <>
      <div className="">동구, 수영구, 해운대구, 기장군 위주로 작성됨</div>
      <ul className="col_wrap col_gap_16">
        {foodlist.foodlist.map((datas, idx) =>
          datas[locals].map((c, idx) => (
            <div className="col col_xs_6 col_sm_4 col_md_3 col_lg_2" key={idx}>
              <div className="d_local">{c.local}</div>
              <div className="d_name">{c.name}</div>
              <div className="d_food_type">{c.food_type}</div>
              <div className="d_address">{c.address}</div>
              <div className="d_address_old">{c.address_old}</div>
              <div className="d_working_time">{c.working_time}</div>
              <div className="d_phon">{c.phon}</div>
              <div className="d_main_food">{c.main_food}</div>
              <div className="d_desc">{c.desc}</div>
            </div>
          ))
        )}
      </ul>
    </>
  );
}
