/** @format */

import { Link, useLocation } from 'react-router-dom';
import Chart from '../components/Chart';
import { productData } from '../dummyData';
import { Publish } from '@material-ui/icons';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { axiosInstance } from '../utils';

const Container = styled.div`
  flex: 4;
  padding: 1.25rem;
`;
const ProductTitleContainer = styled.div``;
const ProductTitle = styled.h1``;
const ProductAddButton = styled.button`
  width: 5rem;
  padding: 0.313rem;
  background-color: teal;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  &:hover {
    background-color: black;
    color: #00c3c3;
  }
`;
const ProductTop = styled.div`
  display: flex;
`;
const ProductTopLeft = styled.div`
  flex: 1;
`;

const ProductTopRight = styled.div`
  flex: 1;
  padding: 1.25rem;
  margin: 1.25rem;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const ProductInfoTop = styled.div`
  display: flex;
  align-items: center;
`;
const ProductInfoImage = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1.25rem;
`;
const ProductName = styled.span`
  font-weight: 600;
`;
const ProductInfoBottom = styled.div`
  margin-top: 0.625rem;
`;
const ProductInfoItem = styled.div`
  width: 9.375rem;
  display: flex;
  justify-content: space-between;
`;
const ProductInfoKey = styled.span`
  font-size: 1.2rem;
`;
const ProductInfoValue = styled.span`
  font-size: 1.2rem;
  font-weight: 300;
`;

const ProductBottom = styled.div`
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const ProductForm = styled.form`
  display: flex;
  justify-content: space-between;
`;
const ProductFormLeft = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 1.25rem;
    margin-bottom: 0.625rem;
    color: gray;
  }
  input {
    height: 2.5rem;
    margin-bottom: 0.625rem;
    border: none;
    padding: 5px;
    border-bottom: 1px solid gray;
  }
  select {
    margin-bottom: 0.625rem;
    height: 2.5rem;
  }
`;
const ProductFormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductUpload = styled.div`
  display: flex;
  align-items: center;
`;
const ProductUploadImg = styled.img`
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 0.625rem;
  object-fit: cover;
  margin-right: 1.25rem;
`;
const ProductButton = styled.button`
  border-radius: 5px;
  padding: 5px;
  background-color: teal;
  color: white;
  font-weight: 600;
  transition: all 0.3s ease;
  &:hover {
    background-color: black;
    color: #00c3c3;
  }
`;
const Product = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [productInfo, setProductInfo] = useState<any>({
    id: '',
    name: '',
    price: 0,
    img: { secure_url: '' },
    desc: '',
    color: [''],
    size: [''],
    quantity: 1,
  });
  const [name, setName] = useState<any>('');
  const [desc, setDesc] = useState<any>('');
  const [price, setPrice] = useState<any>();

  useEffect(() => {
    const getSingleProductDetails = async () => {
      try {
        const res = await axiosInstance.get(`/getSingleProduct/${id}`);
        setProductInfo(res.data.product);
      } catch (error: any) {
        console.log(error.message);
      }
    };
    getSingleProductDetails();
  }, [id]);

  const updateProductHandler = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.put(`/updateProduct/${id}`, {
        name: name,
        price: price,
        desc: desc,
      });
      setProductInfo(res.data.product);
      setName('');
      setDesc('');
      setPrice('');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <ProductTitleContainer className='flex items-center justify-between'>
        <ProductTitle className='text-3xl font-semibold'>Product</ProductTitle>
        <Link to='/newProduct'>
          <ProductAddButton>Create</ProductAddButton>
        </Link>
      </ProductTitleContainer>
      <ProductTop>
        <ProductTopLeft>
          <Chart
            data={productData}
            dataKey='Sales'
            title='Sales Performance'
            grid={undefined}
          />
        </ProductTopLeft>
        <ProductTopRight>
          <ProductInfoTop>
            <ProductInfoImage src={productInfo.img.secure_url} alt='' />
            <ProductName className='text-xl '>{productInfo.name}</ProductName>
          </ProductInfoTop>
          <ProductInfoBottom>
            <ProductInfoItem>
              <ProductInfoKey>id:</ProductInfoKey>
              <ProductInfoValue>{productInfo._id}</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>sales:</ProductInfoKey>
              <ProductInfoValue>3</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>active:</ProductInfoKey>
              <ProductInfoValue>yes</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>in stock:</ProductInfoKey>
              <ProductInfoValue>yes</ProductInfoValue>
            </ProductInfoItem>
          </ProductInfoBottom>
        </ProductTopRight>
      </ProductTop>
      <ProductBottom>
        <ProductForm>
          <ProductFormLeft>
            <label>Product Name</label>
            <input
              type='text'
              placeholder={productInfo.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Product Description</label>
            <input
              type='text'
              placeholder={productInfo.desc}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <label>Product Price</label>
            <input
              type='number'
              placeholder={productInfo.price}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </ProductFormLeft>
          <ProductFormRight>
            <ProductUpload>
              <ProductUploadImg src={productInfo.img.secure_url} />
              <label htmlFor='file'>
                <Publish className='cursor-pointer' />
              </label>
              <input type='file' id='file' style={{ display: 'none' }} />
            </ProductUpload>
            <ProductButton onClick={updateProductHandler}>Update</ProductButton>
          </ProductFormRight>
        </ProductForm>
      </ProductBottom>
    </Container>
  );
};

export default Product;
