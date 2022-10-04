import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchUsers } from '../../redux/actions/usersAction';
import ModalAddProd from '../../UI/ModalAddProd';
import ModalLog from '../../UI/ModalLog';
import ModalRegistration from '../../UI/ModalRegistration';
import OtherAllProducts from '../../UI/OtherAllProducts';
import StarUserRating from '../../UI/StarUserRating';
import Telega from '../../UI/Telega';

export default function UserProfile({
  setAddProdActive, addProdActive, regActive, setRegActive, logActive, setLogActive,
}) {
  const [btn, setBtn] = useState(false);
  const [num, setNum] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers(id));
  }, []);
  useEffect(() => {
    if (user && Number(id) === Number(user.id)) {
      navigate('/profile');
    }
  }, [user]);

  return (
    <>
      <>
        <div className="first-screen-profile">
          <div className="first-screen-profile__body">
            <div className="first-screen-profile__content">
              <div className="first-screen-profile__leftblock">
                <div className="first-screen-profile__leftblock-textarea">
                  <p />
                  <p>{users.f_name}</p>
                  <p>{users.l_name}</p>
                  <StarUserRating />
                </div>
                <div className="first-screen-profile__leftblock-skils">
                  <p>Свяжитесь с пользователем</p>
                </div>
                <div className="first-screen-profile__leftblock-form">
                  <button onClick={() => setBtn(true)} type="button">Напишите мне в Telegram</button>
                  <>
                    {num === true ? (
                      <button onClick={() => setNum(false)} type="button">Показать номер</button>
                    ) : (
                      <button onClick={() => setNum(true)} type="button">{users.phone}</button>
                    )}
                  </>
                </div>
              </div>
              <div className="first-screen-profile__rightblock">
                <div className="first-screen-profile__rightblock-photo">
                  <img src={`http://localhost:3001/images/${users.photo}`} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="stats" id="career">
          <div className="stats__body">
            <div className="stats__content">
              <div className="stats__block">
                <div className="stats__block-one">
                  <p>Все товары</p>
                </div>
                <div className="stats__block-two">
                  <p>Активные товары</p>
                </div>
                <div className="stats__block-four">
                  <p>Отзывы</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Telega btn={btn} setBtn={setBtn} name={users.f_name} telega={users.telegram} />
        {addProdActive === true ? (
          <ModalAddProd setAddProdActive={setAddProdActive} />
        ) : (
          <></>
        )}
        {regActive === true ? (
          <ModalRegistration setRegActive={setRegActive} />
        ) : (
          <></>
        )}
        {logActive === true ? (
          <ModalLog setLogActive={setLogActive} />
        ) : (
          <></>
        )}
      </>
      <div>
        <OtherAllProducts id={id} />
      </div>

    </>
  );
}
