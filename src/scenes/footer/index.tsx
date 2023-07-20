import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Thanks for visiting EvoGym! Join our fitness community for
            unwavering support on your journey to personal transformation and
            empowerment. Embrace a healthier, stronger you with us!
          </p>
          <p>© EvoGym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Instagram</p>
          <p className="my-5">Facebook</p>
          <p>TikTok</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="mt-5">EvoGym Toms River</p>
          <p>456 Fitness Boulevard</p>
          <p className="mb-5">Toms River, NJ 08775</p>
          <p>(732)-425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
