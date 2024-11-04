import banner from '../../assets/banner.jpg'

const FloatingBanner = () => {
    return (
        <div className='p-4 border-2 w-4/5 lg:h-3/4 rounded-xl backdrop-blur-xl absolute -bottom-36 lg:-bottom-48'>
            <img className='h-full w-full' src={banner} alt="" />
        </div>
    );
};

export default FloatingBanner;