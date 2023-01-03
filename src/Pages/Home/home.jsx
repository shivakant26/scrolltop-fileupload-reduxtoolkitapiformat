import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../Components/header";
import { getAllData } from "../../Redux/Action/authAction";
import { FaArrowCircleUp } from 'react-icons/fa';

const Home = () => {
  const dispatch = useDispatch();
  const resp = useSelector((state) => state?.authReducer?.data);
  const [list, setList] = useState([]);
  useEffect(() => {
    dispatch(getAllData());
  }, []);
  useEffect(() => {
    if (resp.status === 200) {
      setList(resp?.data);
    }
  }, [resp]);

  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else{
      setVisible(false)
    }
  };
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);


  return (
    <div className="home-page">
    <Header />
    <Container>
      <h1>Home page</h1>
      
      {list ? (
        <>
          <Row>
            {list.map((item) => {
              return (
                <Card className="card">
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                </Card>
              );
            })}
          </Row>
        </>
      ) : (
        "Record Not Found"
      )}   
      </Container>
      <div className= { visible?"icon2" : "icon" }>
        <FaArrowCircleUp  onClick={scrollToTop} 
      />
      </div>
    </div>
  );
};

export default Home;
