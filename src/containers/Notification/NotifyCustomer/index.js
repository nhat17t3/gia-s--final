import React from "react";
import { useHistory } from "react-router-dom";

function NotifyCustomer(props) {
  const { invitation } = props;
  const history = useHistory();

  const handleViewClick = async () => {
    const ViewUrl = `/tutorview/${invitation.idTutor}`;
    history.push(ViewUrl);
  };

  return (
    <>
    {invitation.status == 0 ? null :( <div className="grid__row">
        <div className="grid__column-2 notify-item__one ">
          <div className="notify-item__time">20/5/2021</div>
        </div>
        <div className="grid__column-5 notify-item__content">
          {invitation.status == 1 ? (
            <div className="notify-item__description">
              - Gia sư <span>{invitation.nameTutor}</span>  đã chấp nhận lời mời dạy của bạn
            </div>
          ) : null}
          {invitation.status == 2 ? (
            <div className="notify-item__description">
             - Gia sư <span>{invitation.nameTutor}</span>  đã từ chối lời mời dạy của bạn
            </div>
          ) : null}
        </div>
        <div className="grid__column-2 notify-item__one">
        {invitation.status == 1 ? (
          <div className="notify-item__time notify-item__description"> <span>{invitation.phoneNumberTutor}</span></div>
           ) : null}
        </div>
        <div className="grid__column-3 notify-item__action">
        {invitation.status == 1 ? (
          <a href className="btn  notify-item__view-link" onClick={handleViewClick}>
            Xem lại gia sư
          </a>
           ) : null}
        </div>
      </div>) }
      
    </>
  );
}

export default NotifyCustomer;
