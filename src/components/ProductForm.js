import useInput from '../hooks/useInput'

function ProductForm({ handleAddProduct }) {
    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            productTitle: inputTitle.value,
            productPrice: inputPrice.value,
            type: inputType.value,
        }

        handleAddProduct(data);
    }

    const inputTitle = useInput('');
    const inputPrice = useInput('');
    const inputType = useInput('');
    
    return ( 
        <>
        <form onSubmit={handleSubmit}>
            <div className='product-form'>
            <h3 style={{textAlign: 'center'}}>Thông tin sản phẩm</h3>

            <div>
                <label>Tên sản phẩm: </label>
                <input placeholder='Nhập tên sản phẩm' type="text" value={inputTitle.value} onChange={inputTitle.onChange} />
            </div>

            <div>
                <label>Giá sản phẩm: </label>
                <input type="text" placeholder='Nhập giá sản phẩm'  value={inputPrice.value} onChange={inputPrice.onChange} />
            </div>

            <div>
                <label>Loại sản phẩm: </label>
                <div className='type-select'>
                <select style={{width: 75}} value={inputType.value} onChange={inputType.onChange}>
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