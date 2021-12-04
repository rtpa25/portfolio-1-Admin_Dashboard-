/** @format */

import { DeleteOutline } from '@material-ui/icons';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { axiosInstance } from '../utils';

const Container = styled.div`
  flex: 4;
`;
const ProductListItem = styled.div`
  display: flex;
  align-items: center;
`;

const EditButton = styled.button`
  padding: 0.75rem;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
  margin-right: 1.25rem;
  transition: all 0.3s ease;
  &:hover {
    background-color: #fff;
    color: #3bb077;
  }
`;

const DeleteButton = styled(DeleteOutline)`
  color: #7e0000;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: red;
  }
`;

const UserList = () => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getAllUsers = async () => {
      const res = await axiosInstance.get('/getAllUsers');
      setData(res.data.users);
      setIsLoading(false);
    };
    getAllUsers();
    if (data.length === 0) {
      setIsLoading(true);
    }
  }, [data.length]);

  const handleDelete = async (id: string) => {
    //Order of the two lines is important
    await axiosInstance.delete(`/deleteUser/${id}`);
    setData(data.filter((item) => item?._id !== id));
  };

  const columns: GridColDef[] = [
    { field: '_id', headerName: 'ID', width: 180 },
    {
      field: 'user',
      headerName: 'user',
      width: 200,
      renderCell: (params) => {
        return (
          <ProductListItem className='productListItem'>
            {params.row.username}
          </ProductListItem>
        );
      },
    },
    {
      field: 'email',
      headerName: 'Email',
      type: 'string',
      width: 200,
    },

    {
      field: 'action',
      headerName: 'Action',
      width: 180,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/user/' + params.row._id}>
              <EditButton className='userListEdit'>Edit</EditButton>
            </Link>
            <div
              onClick={() => {
                handleDelete(params.row._id);
              }}>
              <DeleteButton />
            </div>
          </>
        );
      },
    },
  ];

  return (
    <Container>
      {isLoading ? (
        <span>Loading....</span>
      ) : (
        <DataGrid
          getRowId={(row) => row._id}
          rows={data}
          columns={columns}
          checkboxSelection
          disableSelectionOnClick
        />
      )}
    </Container>
  );
};

export default UserList;
