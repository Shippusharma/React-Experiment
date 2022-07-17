import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../features/user/userSlice';

const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  console.log('redux-toolkit', users);
  return <div>Users {users.length}</div>;
};

export default Users;
