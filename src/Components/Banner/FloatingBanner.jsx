import banner from '../../assets/banner.jpg'

const FloatingBanner = () => {
    return (
        <div className='p-4 border-2 max-w-5xl rounded-xl backdrop-blur-xl absolute -bottom-20 md:-bottom-48  lg:top-80'>
            <img className='w-full' src={banner} alt="" />
        </div>
    );
};

export default FloatingBanner;