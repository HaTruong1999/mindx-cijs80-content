import { useState } from 'react';

function ProductForm({ handleAddProduct }) {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [type, setType] = useState("MEN")

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            productTitle: title,
            productPrice: price,
            type: type,
        }

        handleAddProduct(data);
    }

    const handleInputTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleInputPriceChange = (event) => {
        setPrice(event.target.value);
    }

    const handleSelectTypeChange = (event) => {
        setType(event.target.value);
	}
    
    return ( 
        <>
        <form onSubmit={handleSubmit}>
            <div className='product-form'>
            <h3 style={{textAlign: 'center'}}>Thông tin sản phẩm</h3>

            <div>
                <label>Tên sản phẩm: </label>
                <input placeholder='Nhập tên sản phẩm' type="text" value={title} onChange={handleInputTitleChange} />
            </div>

            <div>
                <label>Giá sản phẩm: </label>
                <input type="text" placeholder='Nhập giá sản phẩm'  value={price} onChange={handleInputPriceChange} />
            </div>

            <div>
                <label>Loại sản phẩm: </label>
                <div className='type-select'>
                <select style={{width: 75}} value={type} onChange={handleSelectTypeChange}>
                    <option value="MEN">Nam</option>
                    <option value="WOMEN">Nữ</option>
                </select>
                </div>
                
            </div>
            <button type="submit">Thêm sản phẩm</button>
            </div>
		  </form>
        </>
     );
}

export default ProductForm;


   