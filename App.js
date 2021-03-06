import React from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
function App() {
 let productInfo ={title:"Product List",baskaBisey:"bisey"}
 let categoryInfo ={title:"Category List"}
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="6">
            <CategoryList info={categoryInfo} />
          </Col>
          <Col xs="6">
            <ProductList info={productInfo}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
