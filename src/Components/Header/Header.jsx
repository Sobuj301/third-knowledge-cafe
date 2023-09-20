
import green from '../../assets/images/lubna-2.jpg'
const Header = () => {
    return (
        <div className='flex justify-between m-4 p-4 border-b-4 items-center max-w-7xl m-auto'>
            <h1 className='text-3xl font-bold'>Lubna Anzum</h1>
            <img className='w-28 rounded-full' src={green} alt="" />
        </div>
    );
};

export default Header;