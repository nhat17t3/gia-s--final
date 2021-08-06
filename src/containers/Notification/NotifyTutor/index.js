import React from "react";
import { useHistory } from "react-router-dom";

function NotifyTutor(props) {
  const { suggestion } = props;
  const history = useHistory();

  const handleViewClick = async () => {
    const ViewUrl = `/postview/${suggestion.idPost}`;
    history.push(ViewUrl);
  };

  return (
    <>
      {suggestion.status == 0 ? null : (
        <div className="grid__row">
          <div className="grid__column-2 notify-item__one ">
            <div className="notify-item__time">20/5/2021</div>
          </div>
          <div className="grid__column-5 notify-item__content">
            {suggestion.status == 1 ? (
              <div className="notify-item__description">
                - Học sinh <span>{suggestion.nameStudent} </span> đã chấp nhận lời
                đề nghị dạy lớp (id-lớp: {suggestion.idPost}){" "}
                <span>{suggestion.titlePost}</span> của bạn
              </div>
            ) : null}
            {suggestion.status == 2 ? (
              <div className="notify-item__description">
                - Học sinh <span>{suggestion.nameStudent}</span> đã từ chối lời đề
                nghị dạy lớp (id-lớp : {suggestion.idPost})
                <span> {suggestion.titlePost}</span> của bạn
              </div>
            ) : null}
          </div>
          <div className="grid__column-2 notify-item__one">
            {suggestion.status == 1 ? (
              <div className="notify-item__time notify-item__description">
                {" "}
                <span>{suggestion.phoneNumberStudent}</span>
              </div>
            ) : null}
          </div>
          <div className="grid__column-3 notify-item__action">
            {suggestion.status == 1 ? (
              <a
                href
                className="btn  notify-item__view-link"
                onClick={handleViewClick}
              >
                Xem lại lớp
              </a>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}

export default NotifyTutor;
