import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#7d6c54] pt-3 border-t">
      <hr className="border" />
      <section className="bg-[#7d6c54] flex flex-col lg:flex-row justify-between px-6 lg:px-32 text-white py-10 lg:py-16">
        <div className="lg:w-1/3 mb-6 lg:mb-0">
          <h3 className="font-light font-lustria mb-5 text-xl">VGUARD</h3>
          <p className="text-sm text-justify">
            Lorem ipsum dolor, sit facilis accusamus sed ipsam, placeat aspernatur beatae odio rem quod, est vero asperiores, quidem porro error itaque! Vitae.
          </p>
          <hr className="my-2" />
          <h5 className="text-sm">sense, navigate and protect</h5>
        </div>
        <div className="flex flex-wrap gap-7 lg:gap-12">
          <ul className="text-sm">
            <li className="font-semibold mb-2">Company</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Careers</li>
            <li className="cursor-pointer">Brand Center</li>
            <li className="cursor-pointer">Blog</li>
          </ul>

          <ul className="text-sm">
            <li className="font-semibold mb-2">Help Center</li>
            <li className="cursor-pointer">Discord Server</li>
            <li className="cursor-pointer">Twitter</li>
            <li className="cursor-pointer">Facebook</li>
            <li className="cursor-pointer">Contact Us</li>
          </ul>

          <ul className="text-sm">
            <li className="font-semibold mb-2">Legal</li>
            <li className="cursor-pointer">Privacy Policy</li>
            <li className="cursor-pointer">Licensing</li>
            <li className="cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>
      </section>
      <div className="bg-white flex flex-col md:flex-row justify-between items-center px-6 lg:px-20 py-4 text-[#737373]">
        <div className="mb-4 md:mb-0">Copyright @ Vguard 2024</div>
        <div className="flex items-center gap-4">
          <i className="fa-brands fa-facebook cursor-pointer text-lg" />
          <i className="fa-brands fa-instagram cursor-pointer text-lg" />
          <i className="fa-brands fa-twitter cursor-pointer text-lg" />
          <i className="fa-brands fa-tiktok cursor-pointer text-lg" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
