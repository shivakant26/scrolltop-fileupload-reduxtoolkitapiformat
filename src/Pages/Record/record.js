import React from "react";
import { Container, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Header } from "../../Components/header";
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';

const Record = () => {
  const resp = useSelector((state) => state?.crudReducer?.data);
  console.log(123456,resp)
  return (
    <>
      <Header />
      <Container>
      <div className="gl-heading">
        <h2>All User List</h2>
      </div>
      <div className="tbl-section">
        {resp ? (
          <>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {resp.map((item, index) => {
                  console.log(item)
                  return (
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{item.fullname}</td>
                      <td>{item.email}</td>
                      <td>{item.password.split('').map(() => '*')}</td>
                      <td className="cell-image"><img src={item.file} alt="image" /></td>
                      <td>
                        <span><FaEdit /></span>
                        <span className="del-icon"><AiFillDelete /></span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </>
        ) : (
          "Empty Record"
        )}
      </div>
      </Container>
    </>
  );
};

export default Record;
