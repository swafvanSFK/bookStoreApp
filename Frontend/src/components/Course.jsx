import { Link } from 'react-router-dom';
import freebook from '../../public/freebook.json';
import Cards from './Cards'

const Course = () => {
  return (
    <>
      <div className="max-w-screen-2xl  container mx-auto md:px-20 px-4">
        <div className="mt-28 item-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We&#39;re delighted to have you{" "}
            <span className="text-pink-500">Here! : &#41;</span>{" "}
          </h1>
          <p className="mt-12 ">Books are gateways to infinite worlds, inviting readers to embark on journeys of imagination, knowledge, and discovery. Within their pages lie tales of triumph, heartbreak, and adventure, waiting to be explored. With each turn of the page, readers are transported to distant lands, introduced to fascinating characters, and inspired to dream beyond the boundaries of reality.</p>
        <Link to={'/'}>
        <button className="  mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
        </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {
                freebook.map((item)=>(
                    <Cards key={item.id} item={item}/>
                ))
            }
        </div>
      </div>
    </>
  );
};

export default Course;
