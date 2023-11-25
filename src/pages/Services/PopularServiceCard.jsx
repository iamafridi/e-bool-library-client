
const PopularServiceCard = ({ service }) => {

    const { title, short_description, date, image_url, time, price } = service
    return (
        <div>


            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg w-full h-64" src={image_url} alt="" />
                </a>

                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{short_description}</p>
                    <div className="items-center">
                        <div className="justify-end text-end">
                            <button href="#" className="inline-flex  btn-sm  items-end px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Book Now
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </button>
                        </div>
                        <div className="items-center text-xs block space-y-5">
                            <span>Date:  {date}</span>
                            <br />
                            <span>Time :{time}</span>
                        </div>
                        <p>Price : $ {price}</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default PopularServiceCard;