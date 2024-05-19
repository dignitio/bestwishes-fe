import { Link } from "react-router-dom";
import wishCardLibrary from "layout/Lists/wishCardLibrary";
import { ReactComponent as LeftArrowIcon } from "../../../assets/icons/left.svg"


function WishcardLibrary() {
    return ( 
        <div className="pt-8 mb-8 ml-8">
            <div className="flex items-center text-indigo-700 font-medium max-md:mb-4 mt-6">
                <LeftArrowIcon className="mr-1 w-5 h-5 max-sm:w-3.5 max-lg:w-5 max-lg:h-5" />
                <Link to="/dashboard/wishcard" className="text-lg">Back to Card</Link>
            </div>
            <div className="w-11/12 rounded-xl bg-white text-lg mt-8 px-8 py-4 md:px-12 lg:px-24 lg:py-12 xl:grid-cols-3 lg:grid-cols-2 md:grid grid-cols-2 gap-x-28 lg:gap-y-24 max-md:block">
                {wishCardLibrary.map(wishcard => (
                    <div className="my-2 rounded-md h-84 max-md:my-8 max-md:mb-16 md:h-96">
                        <Link
                            to={`/dashboard/wishcardLibrary/${wishcard.id}/edit`}
                            key={wishcard.id}
                        >
                            <div className="h-64 2xl:h-[350px] min-w-64 relative mt-2 mb-4">
                                <div className="absolute w-3/5 h-4/5 bg-green-500">
                                    <img src={wishcard.backPhotoSRC} alt={wishcard.backPhotoAlt} className="w-full h-full object-cover"/>
                                </div>
                                <div className="absolute w-3/5 h-4/5 bottom-0 right-0 bg-purple-400">
                                    <img src={wishcard.frontPhotoSRC} alt={wishcard.frontPhotoAlt} className="w-full h-full object-cover"/>
                                </div>
                            </div>
                            <p className="text-center lg:-mt-3">{wishcard.title}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
     );
}

export default WishcardLibrary;


