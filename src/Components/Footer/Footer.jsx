
const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-8 ">
      <div className="container mx-auto text-center mb-8 pb-8 border-b-2 border-dashed">
        <h2 className="text-2xl font-bold">Gadget Heaven</h2>
        <p className="text-gray-500 mt-2">Leading the way in cutting-edge technology and innovation.</p>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
        {/* Services Section */}
        <div>
          <h3 className="font-semibold text-gray-800">Services</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-blue-600">Product Support</a></li>
            <li><a href="#" className="hover:text-blue-600">Order Tracking</a></li>
            <li><a href="#" className="hover:text-blue-600">Shipping & Delivery</a></li>
            <li><a href="#" className="hover:text-blue-600">Returns</a></li>
          </ul>
        </div>
        
        {/* Company Section */}
        <div>
          <h3 className="font-semibold text-gray-800">Company</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-blue-600">About Us</a></li>
            <li><a href="#" className="hover:text-blue-600">Careers</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
        
        {/* Legal Section */}
        <div>
          <h3 className="font-semibold text-gray-800">Legal</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-blue-600">Terms of Service</a></li>
            <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-600">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto text-center mt-8 pt-8 border-t-2 text-gray-400 text-sm">
        &copy; 2024 Gadget Heaven. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
