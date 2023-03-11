// import useInput from '../../../hooks/useInput';
import { useFormik } from "formik";

function ProductForm({ handleAddProduct }) {
    const formik = useFormik({
        initialValues: {
            productTitle: "",
            productPrice: "",
            type: "",
        },

        onSubmit: (values) => {
            const data = {
                productTitle: values.productTitle,
                productPrice: values.productPrice,
                type: values.type,
            }
    
            handleAddProduct(data);
        }
    });
    
    return ( 
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className='product-form'>
                    <div>
                        <label>Tên sản phẩm</label>
                        <input
                            type="text"
                            value={formik.values.productTitle}
                            onChange={formik.handleChange}
                            name="productTitle"
                        />
                    </div>
                    <div>
                        <label>Giá sản phẩm</label>
                        <input
                            type="text"
                            value={formik.values.productPrice}
                            onChange={formik.handleChange}
                            name="productPrice"
                        />
                    </div>
                    <div>
                        <label>Loại sản phẩm</label>
                        <div className='type-select'>
                            <select 
                                name="type"
                                style={{width: 75}} 
                                value={formik.values.type}
                                onChange={formik.handleChange}
                            >
                                <option value="MEN">Nam</option>
                                <option value="WOMEN">Nữ</option>
                            </select>
                        </div>
                    </div>
                    <button>Thêm sản phẩm</button>
                </div>
            </form>
        </>
     );
}

export default ProductForm;