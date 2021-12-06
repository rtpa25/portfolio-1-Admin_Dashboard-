/** @format */

import { useRef, useState } from 'react';
import styled from 'styled-components';
import { axiosInstance } from '../utils';

const Container = styled.div`
  flex: 4;
  margin-left: 5rem;
`;
const AddProductTitle = styled.h1``;
const AddProductForm = styled.form`
  margin-top: 10px;
`;
const AddProductItem = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  label {
    color: gray;
    font-weight: 600;
    margin-bottom: 10px;
  }
  input {
    padding: 10px;
    border: 1px solid gray;
  }
  select {
    padding: 10px;
  }
`;

const AddProductButton = styled.button`
  border-radius: 5px;
  padding: 1rem;
  width: 10rem;
  background-color: teal;
  color: white;
  margin-top: 1.25rem;
  font-weight: 600;
  font-size: 1.25rem;
  text-transform: uppercase;
  transition: all 0.3s ease;
  &:hover {
    background-color: black;
    color: #00c3c3;
  }
`;

const NewProduct = () => {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<number>();
  const [desc, setDesc] = useState<string>('');
  const [preview, setPreview] = useState<string>('');
  const categoryRef = useRef<any>();
  const sizeRef = useRef<any>();
  const colorRef = useRef<any>();

  const createProductHandler = async (e: React.MouseEvent) => {
    e.preventDefault();
    const categoryString = categoryRef.current.value;
    const categoryArray = categoryString.trim().split(',');
    const sizeString = sizeRef.current.value;
    const sizeArray = sizeString.trim().split(',');
    const colorString = colorRef.current.value;
    const colorArray = colorString.trim().split(',');
    try {
      const res = await axiosInstance.post('/addProduct', {
        name: name,
        desc: desc,
        price: price,
        categories: categoryArray,
        size: sizeArray,
        color: colorArray,
        img: preview,
      });
      alert(res.status);
    } catch (error: any) {
      alert(error.message);
    }
  };

  const previewFile = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreview(reader.result as string);
      console.log(preview);
    };
  };

  return (
    <Container>
      <AddProductTitle>New Product</AddProductTitle>
      <AddProductForm className='flex flex-col flex-wrap'>
        <AddProductItem>
          <label>Image</label>
          <input
            type='file'
            onChange={(e) => previewFile(e.target.files![0])}
          />
        </AddProductItem>
        <AddProductItem>
          <label>Name</label>
          <input
            type='text'
            placeholder='Apple Airpods'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </AddProductItem>
        <AddProductItem>
          <label>Price</label>
          <input
            type='number'
            placeholder='123'
            value={price}
            onChange={(e) => setPrice(e.target.valueAsNumber)}
          />
        </AddProductItem>
        <AddProductItem>
          <label>Desc</label>
          <input
            type='text'
            placeholder='these are fancy airpods'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </AddProductItem>
        <AddProductItem>
          <label>Category</label>
          <input
            type='text'
            placeholder='write categories separeted with a coma'
            ref={categoryRef}
          />
          <label>Size</label>
          <input
            type='text'
            placeholder='write sizes separeted with a coma'
            ref={sizeRef}
          />
          <label>Color</label>
          <input
            type='text'
            placeholder='write colors separeted with a coma'
            ref={colorRef}
          />
        </AddProductItem>
        <AddProductButton onClick={createProductHandler}>
          Create
        </AddProductButton>
      </AddProductForm>
    </Container>
  );
};

export default NewProduct;
