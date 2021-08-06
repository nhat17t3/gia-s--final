import PropTypes from "prop-types";
import React from "react";

InvitationItem.propTypes = {
  invitation: PropTypes.object,
  onEditAcceptClick: PropTypes.func,
  onEditRefuseClick: PropTypes.func,
};

InvitationItem.defaultProps = {
  invitation: {},
  onEditAcceptClick: null,
  onEditRefuseClick: null,
};

function InvitationItem(props) {
  const { invitation, onEditRefuseClick, onEditAcceptClick } = props;

  const handleEditAcceptClick = () => {
    if (onEditAcceptClick) onEditAcceptClick(invitation);
  };

  const handleEditRefuseClick = () => {
    if (onEditRefuseClick) onEditRefuseClick(invitation);
  };

  return (
    <>
      <div className="grid__row">
        <div className="grid__column-2 notify-item__one ">
          <div className="notify-item__time">20/5/2021</div>
        </div>
        <div className="grid__column-5 notify-item__content">
          <div className="notify-item__description">
            - Học sinh <span>{invitation.nameStudent}</span> đã mời bạn làm gia
            sư
          </div>
        </div>
        <div className="grid__column-2 notify-item__one ">
          <div className="notify-item__time">
            {invitation.phoneNumberStudent}
          </div>
        </div>
        {/* <div className="grid__column-3 notify-item__action">
          <a
            href
            className= {invitation.status == 1?"btn  notify-item__accept-link  disabled" :"btn  notify-item__accept-link"} 
            onClick={handleEditAcceptClick}
          >
            Chấp nhận
          </a>
          <a
            href
            className= {invitation.status == 2?"btn  notify-item__refuse-link  disabled" :"btn  notify-item__refuse-link"} 
            onClick={handleEditRefuseClick}
          >
            Từ chối
          </a>
         
        </div> */}
        {invitation.status == 0 ? (
          <div className="grid__column-3 notify-item__action">
            <a
              href
              className="btn  notify-item__accept-link"
              onClick={handleEditAcceptClick}
            >
              Chấp nhận
            </a>
            <a
              href
              className="btn  notify-item__refuse-link"
              onClick={handleEditRefuseClick}
            >
              Từ chối
            </a>
          </div>
        ) : invitation.status == 1 ? (
          <div className="grid__column-3 notify-item__action">
            <a href className="btn  notify-item__accept-link disabled">
              Đã chấp nhận
            </a>
          </div>
        ) : (
          <div className="grid__column-3 notify-item__action">
            <a href className="btn  notify-item__refuse-link disabled">
              Đã từ chối
            </a>
          </div>
        )}
      </div>
    </>
  );
}

export default InvitationItem;
