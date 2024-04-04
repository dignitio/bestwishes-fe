/* eslint-disable object-shorthand */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { AddItemsSchema } from "Schemas";
import { motion } from "framer-motion";
import { Form, Formik } from "formik";
import CustomInput from "components/CustomFormInputs/CustomInput";
import CustomPriceInput from "components/CustomFormInputs/CustomPriceInput";
import Button from "components/Button";
import { ReactComponent as UploadIcon } from "../../assets/icons/picture-upload.svg";

const initialValues = {
  items: [{ img: "", itemName: "", price: "" }],
};

function AddItemModal({ wishlistLength }) {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={AddItemsSchema} onSubmit={onSubmit}>
      {({ values, setFieldValue }) => (
        <Form style={{ zIndex: 10 }} className="!z-50">
          <div className="flex flex-col gap-4 mb-4">
            <div className="max-h-96 overflow-y-auto">
              {values.items.map((item, index) => (
                <div key={index} className="w-full py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <fieldset
                    className={`relative h-full max-h-[340px] flex flex-col justify-end items-start border-2 border-solid border-[#1E1B1A] rounded-lg  cursor-pointer rounded-5 bg-white mt-1`}
                  >
                    {item.img ? (
                      <img
                        src={URL.createObjectURL(item.img)}
                        className="w-full h-full object-cover"
                        alt="Cover pic"
                      />
                    ) : (
                      <div className="relative w-full h-full">
                        <input
                          id={`items.${index}.img`}
                          type="file"
                          accept="image/*"
                          className="opacity-0 w-full h-full z-30"
                          onChange={(event) => {
                            const file = event.currentTarget.files[0];
                            setFieldValue(`items.${index}.img`, file);
                          }}
                        />
                        <label
                          htmlFor={`items.${index}.img`}
                          className="absolute inset-0 flex justify-start items-center self-end mb-4 ml-6"
                        >
                          <UploadIcon size={60} />
                          <p className="ml-2">Upload Cover Image</p>
                        </label>
                      </div>
                    )}
                  </fieldset>
                  <div className="flex flex-col gap-2">
                    <CustomInput
                      key={`items.${index}.itemName`}
                      label="Item Name"
                      name={`items.${index}.itemName`}
                      onChange={(e) => setFieldValue(`items.${index}.itemName`, e.target.value)}
                      type="text"
                      placeholder="Click here to enter item name"
                    />
                    <CustomPriceInput
                      key={`items.${index}.price`}
                      label="Price"
                      name={`items.${index}.price`}
                      type="number"
                      placeholder="click here to enter price"
                    />
                    {index === 0 &&
                      (values.items[0].itemName ||
                        values.items[0].img ||
                        values.items[0].price) && (
                        <motion.button
                          whileHover={{ scale: 0.95 }}
                          whileTap={{ scale: 0.8 }}
                          onClick={() => {
                            if (values.items.length > 1) {
                              setFieldValue(`items`, values.items.slice(1));
                            } else {
                              setFieldValue(`items.0`, { img: "", itemName: "", price: "" });
                            }
                          }}
                          type="button"
                          className="bg-removeButton text-white mt-[28px] h-10 rounded py-0 px-8 border"
                        >
                          Remove Item
                        </motion.button>
                      )}
                    {index > 0 && (
                      <motion.button
                        whileHover={{ scale: 0.95 }}
                        whileTap={{ scale: 0.8 }}
                        onClick={() => {
                          if (values.items.length === 1) {
                            const newItem = { img: "", itemName: "", price: "" };
                            setFieldValue("items", [...values.items.slice(0, index), newItem]);
                          } else {
                            setFieldValue(
                              "items",
                              values.items.filter((_, i) => i !== index),
                            );
                          }
                        }}
                        type="button"
                        className=" bg-removeButton text-white mt-[28px] h-10 rounded py-0 px-8 border"
                      >
                        Remove Item
                      </motion.button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {wishlistLength + values.items.length >= 10 ? (
              <p className="text-red-500 mt-4">You have reached the maximum limit of 10 items.</p>
            ) : (
              <motion.div
                whileHover={{ scale: 0.95 }}
                className="bg-white text-primary font-bold text-xl mt-10 border border-gray-700 flex justify-center items-center hover:cursor-pointer"
                onClick={() => {
                  const newItem = { img: "", itemName: "", price: "" };
                  setFieldValue(`items.${values.items.length}`, newItem);
                }}
              >
                Add more Items
              </motion.div>
            )}
            {values.items.length >= 1 && (
              <div className="flex justify-between">
                <button className="bg-white h-10 rounded py-0 px-8 text-primary mt-[28px] border border-primary hover:bg-primary hover:text-white">
                  Save to Draft
                </button>
                <Button
                  type="submit"
                  className="bg-primary text-white mt-[28px] border border-gray-700"
                >
                  Save Item
                </Button>
              </div>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default AddItemModal;
