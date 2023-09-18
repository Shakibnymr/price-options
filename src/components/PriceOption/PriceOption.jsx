import PropTypes from 'prop-types'
import {AiFillCheckCircle} from "react-icons/ai";


const PriceOption = ({priceOption}) => {
    const {name,price,features} = priceOption
    return (
        <div className='bg-blue-700 rounded-md p-5 text-white flex flex-col'>
          <h2>
            <span className="text-7xl">{price}</span><span className="text-2xl">/mon</span>
          </h2>
          <h2 className='text-3xl'>{name}</h2>
        <div className='flex-grow'>
        {
            features.map((feature,idx) => <p key={idx}>
                <div className='flex items-center '>
                <span><AiFillCheckCircle className='text-sky-950 h-5 w-5'></AiFillCheckCircle></span>
                <span className='py-2'>{feature}</span>
                </div>
            </p>)
          }
        </div>
        <button className='bg-sky-500 font-medium p-3 mt-5 rounded-lg'>Buy now</button>
        </div>
    );
};

PriceOption.propTypes = {
    priceOption: PropTypes.object
}
export default PriceOption;