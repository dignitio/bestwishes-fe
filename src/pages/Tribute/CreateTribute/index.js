import { useState } from "react";
import Button from "components/Button";
import uploadPix from "../../../assets/images/gallery.png";
import { ReactComponent as UploadIcon } from "../../../assets/icons/upload-image.svg";
import { ReactComponent as SwitchIcon } from "../../../assets/icons/switch.svg";
import { ReactComponent as MusicIcon } from "../../../assets/icons/music.svg";

function CreateTribute() {
  const [formData, setFormData] = useState({
    headerImage: "",
    tributeType: "",
    tributeTitle: "",
    fullName: "",
    dateOfBirth: "",
    dateOfDeath: "",
    tributeBio: "",
    receiveCash: true,
    addWishList: "No",
    relationship: "",
    musicLink: "",
    publicType: "public",
    tributeKey: "",
    otherImages: [],
  });
  const [formError, setFormError] = useState(false);

  const openSecondPage = () => {
    if (formData.tributeTitle && formData.fullName && formData.tributeType) {
      document.getElementById("first-page").classList.add("hidden");
      document.getElementById("second-page").classList.remove("hidden");
      document.getElementById("third-page").classList.add("hidden");
      setFormError(false);
    } else if (!formData.tributeType) {
      document.getElementById("first-form-error").innerText = "Choose the tribute type";
      setFormError(true);
    } else if (!formData.tributeTitle) {
      document.getElementById("first-form-error").innerText = "Enter the title of the tribute";
      setFormError(true);
    } else if (!formData.fullName) {
      document.getElementById("first-form-error").innerText = "Enter your name";
      setFormError(true);
    }
  };

  const openThirdPage = () => {
    if (formData.tributeBio) {
      document.getElementById("first-page").classList.add("hidden");
      document.getElementById("second-page").classList.add("hidden");
      document.getElementById("third-page").classList.remove("hidden");
    } else if (!formData.tributeBio) {
      document.getElementById("second-form-error").innerText = "Please enter a short bio";
      setFormError(true);
    }
  };

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  return (
    <div className="max-sm:w-80 max-sm:mx-auto">
      {/* // First Page********* */}
      <div className="text-xs max-sm:text-sm max-lg:text-base tracking-tight" id="first-page">
        <div className="bg-gray-200 rounded-full -mt-4 mb-8 w-16 h-16 flex items-center justify-center mx-auto">
          <img src={uploadPix} alt="upload-pix" className="w-9" />
          <UploadIcon className="absolute w-3.5" />
        </div>
        <p
          id="first-form-error"
          className={
            formError
              ? "text-red-500 text-center text-sm font-semibold absolute top-5 left-0 right-0"
              : "hidden"
          }
        >
          .
        </p>
        <div className="flex justify-between my-8 max-sm:my-6 placeholder:italic max-sm:block">
          <div className="max-sm:mb-5">
            <p>Type of Tribute</p>
            <select
              name="tributeType"
              value={formData.tributeType}
              onChange={handleChange}
              className="border rounded-md w-64 py-2 max-sm:py-2.5 px-2 mt-0.5 outline-0 placeholder:tracking-tighter text-xs max-sm:text-sm max-lg:text-base text-gray-600 max-sm:w-full"
            >
              <option value="" className="text-gray-400">
                Click here to select tribute type
              </option>
              <option value="anniversary">Anniversary</option>
              <option value="birthday">Birthday</option>
              <option value="convocation">Convocation</option>
              <option value="funeral">Funeral</option>
              <option value="naming">Naming</option>
              <option value="wedding">Wedding</option>
            </select>
          </div>
          <div>
            <p>Title of Tribute</p>
            <input
              type="text"
              value={formData.tributeTitle}
              onChange={(e) => handleChange(e)}
              name="tributeTitle"
              placeholder="Click to enter title of tribute"
              className="border text-gray-600 rounded-md w-64 py-1.5 max-sm:py-2.5 px-2 mt-0.5 outline-0 placeholder:tracking-tighter placeholder:text-sm placeholder:text-gray-400  max-sm:w-full"
            />
          </div>
        </div>
        <div className="my-8 max-sm:my-5">
          <p>Full Name</p>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => handleChange(e)}
            name="fullName"
            placeholder="Click to enter to enter full name"
            className="border text-gray-600 rounded-md w-full py-2 max-sm:py-2.5 px-2 mt-0.5 outline-0 placeholder:tracking-tighter placeholder:text-sm placeholder:text-gray-400 text-sm"
          />
        </div>
        <div className="flex justify-between my-8 max-sm:my-6 max-sm:block">
          <div>
            <p>Date of Birth</p>
            <input
              type="date"
              value={formData.dateOfBirth}
              onChange={(e) => handleChange(e)}
              name="dateOfBirth"
              className="border text-gray-600 rounded-md w-60 py-2 max-sm:py-2.5 px-2 mt-0.5 outline-0 max-sm:w-full"
            />
          </div>
          <div className="max-sm:mt-6">
            <p>
              Date of Death <span className="text-xs text-primary">(funeral only)</span>
            </p>
            <input
              type="date"
              value={formData.dateOfDeath}
              onChange={(e) => handleChange(e)}
              name="dateOfDeath"
              className="border text-gray-600 rounded-md w-60 py-2 max-sm:py-2.5 px-2 mt-0.5 outline-0 max-sm:w-full"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            type="button"
            className="h-6 w-24 rounded-[2px] text-white text-sm max-sm:w-full"
            onClick={openSecondPage}
          >
            Next
          </Button>
        </div>
      </div>

      {/* // ************Second Page*** */}
      <div className="text-xs max-sm:text-sm tracking-tight hidden -mt-6" id="second-page">
        <div>
          <p
            id="second-form-error"
            className={formError ? "text-red-500 text-center text-xs font-semibold" : "hidden"}
          >
            .
          </p>
          <p>Bio</p>
          <textarea
            value={formData.tributeBio}
            onChange={(e) => handleChange(e)}
            name="tributeBio"
            className="border text-gray-600 rounded-md w-full h-48 p-3 mt-0.5 outline-0 placeholder:tracking-tighter placeholder:text-sm placeholder:text-slate-400 resize-none text-sm"
            placeholder="write a bio about yourself"
          />
        </div>
        <div className="flex my-4 items-center">
          <p className="mr-3">Want to receive cash gift?</p>
          <SwitchIcon className="w-5" />
        </div>
        <div className="flex items-center">
          <p>Want to add wishlist to your tribute?</p>
          <div className="mx-4 flex items-center">
            <input
              type="radio"
              checked={formData.addWishList === "No"}
              value="No"
              onChange={(e) => handleChange(e)}
              name="addWishList"
              className="w-2.5 mb-0.5 mr-0.5"
            />
            <span>No</span>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              value="Yes"
              name="addWishList"
              checked={formData.addWishList === "Yes"}
              onChange={(e) => handleChange(e)}
              className="w-2.5 mb-0.5 mr-0.5"
            />
            <span>Yes</span>
          </div>
        </div>
        {formData.addWishList === "Yes" ? (
          <div className="my-4">
            <p>Select from wishlist you have created</p>
            <Button
              type="button"
              className="border rounded-md px-0 w-64 h-8 bg-white mt-1 text-left tracking-tighter text-gray-400 text-xs max-sm:text-sm"
            >
              Click here to select
            </Button>
          </div>
        ) : (
          <div className="text-white my-5">-</div>
        )}
        <div className="flex justify-between mt-5">
          <Button
            type="button"
            className="h-6 max-sm:h-7 bg-sky-700 tracking-tighter px-0 rounded-[2px] text-white text-xs max-sm:text-sm"
          >
            save & continue later
          </Button>
          <Button
            type="button"
            className="h-6 max-sm:h-7 w-24 rounded-[2px] text-white text-xs max-sm:text-sm"
            onClick={openThirdPage}
          >
            Next
          </Button>
        </div>
      </div>

      {/* ********Third Page */}
      <div className="text-xs max-sm:text-sm tracking-tight hidden -mt-6" id="third-page">
        <div className="flex justify-between max-sm:block">
          <div className="max-sm:mb-5">
            <p>Please descibe your relationship</p>
            <select
              name="relationship"
              value={formData.relationship}
              onChange={handleChange}
              className="border text-gray-600 rounded-md w-60 py-2 max-sm:py-2.5 px-2 mt-0.5 outline-0 placeholder:tracking-tighter text-xs max-sm:text-sm max-sm:w-full"
            >
              <option value="">please select</option>
              <option value="father">Father</option>
              <option value="mother">Mother</option>
              <option value="brother">Brother</option>
              <option value="sister">Sister</option>
              <option value="cousin">Cousin</option>
            </select>
          </div>
          <div>
            <p>Add music to your tribute</p>
            <div className="flex items-center text-gray-200 w-60 pr-2 max-sm:w-full">
              <input
                type="text"
                value={formData.musicLink}
                onChange={(e) => handleChange(e)}
                name="musicLink"
                placeholder="Add music link"
                className="border text-gray-600 rounded-md w-60 py-1.5 max-sm:py-2.5 px-2 mt-0.5 outline-0 placeholder:tracking-tighter placeholder:text-sm placeholder:text-gray-400 text-xs max-sm:text-sm max-sm:w-full"
              />
              <MusicIcon className="w-3 -ml-6" />
            </div>
          </div>
        </div>
        <div className="my-7 flex justify-between max-sm:block">
          <div>
            <p className="mr-3">Would you prefer this Tribute to be</p>
            <div className="flex items-center mt-3 tracking-tighter">
              <div className="mr-4 flex items-center">
                <input
                  type="radio"
                  value="public"
                  name="publicType"
                  checked={formData.publicType === "public"}
                  onChange={(e) => handleChange(e)}
                  className="w-2.5 mb-0.5 mr-0.5"
                />
                <span>a public tribute</span>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  value="private"
                  name="publicType"
                  checked={formData.publicType === "private"}
                  onChange={(e) => handleChange(e)}
                  className="w-2.5 mb-0.5 mr-0.5"
                />
                <span>a private tribute</span>
              </div>
            </div>
          </div>
          {formData.publicType === "private" ? (
            <div className="max-sm:mt-3">
              <p>Tribute key</p>
              <input
                type="text"
                value={formData.tributeKey}
                onChange={(e) => handleChange(e)}
                name="tributeKey"
                placeholder="Create a tribute key"
                className="border text-gray-600 rounded-md w-60 py-2 max-sm:py-2.5 px-2 mt-0.5 outline-0 placeholder:tracking-tighter placeholder:text-xs placeholder:text-gray-400 max-sm:w-full"
              />
            </div>
          ) : (
            <div className="text-white"> - </div>
          )}
        </div>
        <div>
          <p className="mr-3">Add More pictures</p>
          <div>
            <div className="flex">
              {Array(6).fill(
                <div className="w-11 h-11 flex wrap items-center justify-center bg-slate-100 rounded-sm mr-3 my-2">
                  +
                </div>,
              )}
            </div>
            <p className="mr-3 text-xs text-sky-500">
              First image will be set as header and Image size should be more than 2MB
            </p>
          </div>
        </div>
        <div className="flex justify-end mt-16">
          <Button
            type="button"
            className="h-6 w-24 rounded-[2px] text-white text-xs max-sm:text-sm max-sm:w-full max-sm:h-7"
          >
            Publish
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CreateTribute;
