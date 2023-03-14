// import ProductForm from './ProductForm';
import React, { useState } from 'react';
import ProductFormFormik from './ProductForm/ProductFormFormik';
import { Button, Modal } from 'antd';
import ManageProducts from './Products';
//test new branch

function Admin({handleAddProduct, products}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return ( 
        <div style={{padding: 50}}>
            <h3 style={{textAlign: 'center'}}>Danh sách sản phẩm</h3>
            <Button style={{marginBottom: 10}} type="primary" onClick={showModal}>Thêm sản phẩm</Button>
            <ManageProducts products={products}/>

            <Modal width={1000} title="Thêm sản phẩm" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                    Close
                    </Button>
                ]}
            >
                <ProductFormFormik handleAddProduct={handleAddProduct}/>
            </Modal>
            
        </div>
     );
}

export default Admin;