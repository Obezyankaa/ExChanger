import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/actions/usersAction';
import UpdateForm from '../../UI/UpdateForm';

export default function Settings() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);
  useEffect(() => {
    dispatch(fetchUsers(user.id));
    dispatch(fetchUsers(user.id));
  }, []);
  return (
    <>
      <div className="first-screen-profile" style={{ height: '100vh' }}>
        <div className="first-screen-profile__body">
          <div className="first-screen-profile__content">
            <UpdateForm />
            <div className="first-screen-profile__rightblock">
              <div className="first-screen-profile__rightblock-photo">
                <img src={`http://localhost:3001/images/${user.photo}`} alt="" style={{ marginTop: '20%', marginRight: '50%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
