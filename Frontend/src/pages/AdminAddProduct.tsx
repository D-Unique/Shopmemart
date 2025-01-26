import React, { useState } from "react";
import "../styles/pages/AdminAddProduct.css";
import readFileAsDataURL from "../util/readFileAsDataURL";
import {src} from "../Enums";



function AdminAddProduct() {
  const [dataurl, setDataurl] = useState<string | ArrayBuffer | null>();
  
  // callback function to get the data URL
  function getdataurl(dataURL: string | ArrayBuffer | null) {
    setDataurl(dataURL);
  }
  
  const [formData, setFormData] = useState({
    pname: "",
    pdesc: "",
    pprice: "",
    pcategory: "",
    pimage: "",
    pcountInStock: "",
    prating: "",
  });

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // For file input, set the file object
    if (e.target.type === "file" && e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        [name]: e.target.files ? e.target.files[0] : null, // Store the file object
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
    

  const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    const url = 'http://localhost:3000/api/v1/product/create';
    const newformData = new FormData();
    newformData.append("pname", formData.pname);
    newformData.append("pdesc", formData.pdesc);
    newformData.append("pprice", formData.pprice);
    newformData.append("pcategory", formData.pcategory);
    newformData.append("pimage", dataurl as string);
    newformData.append("pcountInStock", formData.pcountInStock);
    newformData.append("prating", formData.prating);
    console.log(newformData.get("pname"));
    try {
      const response = await fetch(url, {
        method: "POST",
        body: newformData,
      })
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error(error);
    }
    
    readFileAsDataURL(formData.pimage, getdataurl);
  };

  return (
    <>
    <form onSubmit={handlesubmit} className="admin-add-product">
      <input
        type="text"
        placeholder="Product Name"
        value={formData.pname}
        name="pname"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Product Description"
        value={formData.pdesc}
        name="pdesc"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Product Price"
        value={formData.pprice}
        name="pprice"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Product Category"
        value={formData.pcategory}
        name="pcategory"
        onChange={handleChange}
      />
      <input
        type="file"
        placeholder="Product Image"
        name="pimage"
        id="file-upload"
        accept=".jpeg, .png, .jpg"
              onChange={handleChange}
              required
      />
      <input
        type="text"
        placeholder="Count in Stock"
        value={formData.pcountInStock}
        name="pcountInStock"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Rating"
        value={formData.prating}
        name="prating"
        onChange={handleChange}
      />
      <input type="submit" value="Add Product" />
      </form>
      </>
    
  );
}

export default AdminAddProduct;
