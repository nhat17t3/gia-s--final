import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { acceptInvitation, getListInvitationByTutor, refuseInvitation } from "../../../actions";
import Layout from "../../../components/Layout";
import Sidebar from "../../../components/SideBar";
import InvitationItem from "../InvitationItem";




ManageInvitation.propTypes = {};

function ManageInvitation(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [listinvite, setListinvite] = useState([]);

  const[a,setA]=useState(false);

  useEffect(() => {
    dispatch(getListInvitationByTutor());
  }, [a]);

  const invitations = useSelector((state) => state.invitations.listInvitationByTutor);

  const handleEditAcceptClick = async (invitation) => {
    console.log("Edit accept invitation: ", invitation);
    const accept = {
      idStudent: invitation.idStudent,
    };
    await dispatch(acceptInvitation(accept));
      history.push("/manageinvitation");
    // await AcceptInvitation(dispatch, editInvitation);
    setA(!a)
    
    // setTimeout(async () => {
    //   history.push("/manageinvitation");
    // }, 500);
  };

  const handleEditRefuseClick = async (invitation) => {
    console.log("Edit refuse invitation: ", invitation);
    const refuse = {
      idStudent: invitation.idStudent,
    };
    await dispatch(refuseInvitation(refuse));
    history.push("/manageinvitation");

    // await RefuseInvitation(dispatch, editInvitation);
    setA(!a)

    // setTimeout(async () => {
    //   history.push("/manageinvitation");
    // }, 500);
  };
  // const handleRemoveClick = async (invitation) => {
  //   console.log("delete: ", invitation);
  //   await DeleteInvitation(dispatch, invitation);
  // };

  return (
    <>
      <Layout>
        <div className="app__container">
          <div className="grid">
            <div className="grid__row app__content">
              <div className="grid__column-2" style={{ marginTop: "62px" }}>
                <Sidebar />
              </div>
              <div className="grid__column-10">
                <div className="notify">
                  <h2 className="notify__heading">Danh sách mời dạy</h2>
                  <div className="grid__row " style={{ margin: "auto 0" }}>
                    <div className="grid__column-2 notify-header__item ">
                      Thời gian
                    </div>
                    <div className="grid__column-5 notify-header__item">
                      Nội dung
                    </div>
                    <div className="grid__column-2 notify-header__item">
                      Liên hệ học sinh
                    </div>
                    <div className="grid__column-3 notify-header__item">
                      Hoạt động
                    </div>
                  </div>

                  {invitations.map((invitation) => (
                    <div className="notify-item" key={invitation.id}>
                      <InvitationItem
                        invitation={invitation}
                        onEditAcceptClick={handleEditAcceptClick}
                        onEditRefuseClick={handleEditRefuseClick}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default ManageInvitation;
