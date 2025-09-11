function ImageModal({ uploadedPictures }) {
  return (
    <div className="flex flex-col gap-[20px]">
      {/* <div className="flex flex-col gap-[20px] md:px-3">
        <p className="text-[14px] md:text-[24px] text-justify leading-5">
          You are about to make contribution for Olakunle’s{" "}
          <span className="text-[#3684F7] leading-5">{selectedWishlist?.name}</span>
        </p> */}
      {/* <Formik
          initialValues={{ name: "", email: "", amount: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ values, handleSubmit, handleChange }) => (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-[20px] md:p-[30px] md:text-[24px]"
            >
              <CustomInput
                label="Name"
                type="text"
                name="name"
                value={values.name}
                required
                onChange={handleChange}
              />
              <CustomInput
                label="Email"
                type="email"
                name="email"
                value={values.email}
                required
                onChange={handleChange}
              />
              <CustomInput
                label="Amount"
                type="number"
                name="amount"
                value={values.amount}
                required
                onChange={handleChange}
              />

              <button
                type="submit"
                className={`w-full bg-[#FF433C] px-[26px] py-[18px] text-white rounded-[4px] ${!values.name || !values.email || !values.amount ? "opacity-[0.2] cursor-not-allowed" : ""}`}
                disabled={!values.name || !values.email || !values.amount}
              >
                Contribute
              </button>
            </form>
          )}
        </Formik> */}
      {/* </div> */}

      <h1 className="text-[24px] font-bold">Benson&apos;s Images</h1>

      <div className="flex flex-wrap h-[561px] gap-[30px] justify-center relative overflow-y-scroll mb-[50px]">
        {uploadedPictures.map((items) => (
          <div className="w-[180px] h-[150px] object-cover">
            <img src={items.image} alt="item" className="w-full h-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageModal;
