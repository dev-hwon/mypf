import "../Pflist.css";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import pflist from "../db/pf_list.json";
import Modal from "../component/Modal";
import useAsync from "../hooks/useAsync";
// import axios from 'axios';

function getLists(params) {
  return pflist.pflist[0][params.name];
}

const Pflist = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const openModal = (e) => {
    setModalVisible(true);
    setImgUrl(e.target.value);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const params = useParams();
  const [state] = useAsync(() => getLists(params), [params], true);
  const { loading, data: lists, error } = state;
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!lists) return null;

  return (
    <div className="pflist">
      <ul className="col_wrap col_gap_16">
        {lists.map((list, index) => (
          <li className="col col_xs_6 col_sm_4 col_md_3 col_lg_2" key={index}>
            <div className="list_item">
              <div className="item__label">{list.label}</div>
              <div className="item__title">{list.title}</div>
              <div className="item__summary tx_shortening_2">
                {list.summary}
              </div>
              <div className="item__date">{list.date}</div>
              <div className="item__image">
                <img src={"/mypf" + list.img_url} alt="" />
              </div>
              <div className="item__cover">
                {!list.link ? (
                  <button
                    onClick={openModal}
                    className="common_btn btn_sm btn_default bt__detail_view"
                    value={list.detailImg_url}
                  >
                    자세히보기
                  </button>
                ) : (
                  <>
                    {list.detailImg_url && (
                      <button
                        onClick={openModal}
                        className="common_btn btn_sm btn_default bt__detail_view"
                        value={list.detailImg_url}
                      >
                        자세히보기
                      </button>
                    )}
                    <a
                      href={list.url}
                      target="_blank"
                      className="common_btn btn_sm btn_default bt__detail_page"
                    >
                      이동
                    </a>
                  </>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
      {modalVisible && (
        <Modal
          visible={modalVisible}
          closable={true}
          maskClosable={true}
          onClose={closeModal}
        >
          <img src={"/mypf" + imgUrl} alt="" />
        </Modal>
      )}
    </div>
  );
};
export default Pflist;
