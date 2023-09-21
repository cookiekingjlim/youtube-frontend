import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getCategories, addVideo } from "../api/video";
import { useState,useEffect } from "react";


const Header = styled.h1`
    font-size: 1.8rem;
    font-weight: bold;
    padding: 20px 0;

`;

const Create = () => {

    const [categories,setCategories] = useState([]);
    const [title, setTitle]  = useState("");
    const [desc, setDesc] = useState();
    const [video, setVideo] = useState(null);
    const [image, setImage] = useState(null);
    const [select, setSelect] = useState(1);

    // 비동기 처리
    const categoryAPI = async () => {
        const result = await getCategories();
        setCategories(result.data);
    };
    useEffect(() => {
        categoryAPI();
    }, []);

    const onClick = () => {
      console.log(title);
      console.log(desc);
      console.log(image);
      console.log(video);
      console.log(select);

      const formData = new FormData();  // 폼데이터 하나 생성
      formData.append("title", title);
      formData.append("desc", desc);
      formData.append("image", image);
      formData.append("video", video);
      formData.append("categoryCode", parseInt(select));

      addVideo(formData); // 저장 눌렀을 때 저 값들을 보내야함
    };

    const onUploadImage = (e) => {
      // console.log(e.target.files[0]);
      setImage(e.target.files[0]);  // 이미지 접근완
    }

    const onUploadVideo = (e) => {
      // console.log(e.target.files);
      setVideo(e.target.files[0]);
    }

    const onChangeCategory = (e) => {
      setSelect(e.currentTarget.value); 
    }


    return <Container>
        <Header>동영상 업로드</Header>
        <Form>
      <Form.Group className="mb-3">
        <Form.Label>제목</Form.Label>
        <Form.Control 
          type="text"
          value={title} 
          onChange={(e) => setTitle(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>내용</Form.Label>
        <Form.Control as="textarea" rows={3} value={desc} onChange={(e) => setDesc(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>썸네일 이미지</Form.Label>

        {/*  위와 달리 여기서 직접 변경불가 */}
        <Form.Control type="file" onChange={onUploadImage}/> 
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>동영상 파일</Form.Label>
        <Form.Control type="file" onChange={onUploadVideo} />
      </Form.Group>
      {/* 바뀌는 게 있으면 value 지정 */}
      <Form.Select onChange={onChangeCategory} value={select}>
        {categories.map((category) => (
            <option value={category.categoryCode} key={category.categoryCode}>
                {category.categoryName}
            </option>
        ))}
    </Form.Select>
    <Button variant="danger" style={{marginTop: "20px"}} onClick={onClick} >저장</Button>{' '}
    </Form>

    </Container>;
};
export default Create;