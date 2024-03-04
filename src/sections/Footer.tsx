import { SlArrowRight } from "react-icons/sl";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa"; // Corrected import statement
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto flex flex-col gap-4">
                <div className="mx-auto md:grid md:grid-cols-3 md:gap-10">
                    <div className="p-4">
                        <h5 className="text-xl md:text-3xl font-bold mb-2">JISTECH</h5>
                        <br />
                        <p>Block A, Phase III, Kalyani</p>
                        <p>Nadia - 741235 West Bengal</p>
                        <br />
                        <p>Phone: <a href="tel:033 2582 2138">033 2582 2138</a></p>
                        <p>Email: <a href="mailto:info.jiscollege@jisgroup.org">info.jiscollege@jisgroup.org</a></p>
                        <p>Website: <a href="https://www.jiscollege.ac.in">www.jiscollege.ac.in</a></p>
                        <div className="flex space-x-4 mt-5">
                            <a href="#" className="text-xl md:text-2xl hover:text-gray-500 transition duration-300">
                                <FaFacebook />
                            </a>
                            <a href="#" className="text-xl md:text-2xl hover:text-gray-500 transition duration-300">
                                <FaTwitter />
                            </a>
                            <a href="#" className="text-xl md:text-2xl hover:text-gray-500 transition duration-300">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4 p-4">
                        <div className="flex flex-col space-x-4 space-y-2">
                            <h5 className="text-xl md:text-3xl mb-2 underline">Useful Links</h5>
                            <a href="#" className="hover:text-gray-500 transition duration-300">
                                <SlArrowRight className="inline md:mr-2" />
                                Home
                            </a>
                            <a href="#" className="hover:text-gray-500 transition duration-300">
                                <SlArrowRight className="inline md:mr-2" />
                                Gallery
                            </a>
                            <a href="#" className="hover:text-gray-500 transition duration-300">
                                <SlArrowRight className="inline md:mr-2" />
                                Events
                            </a>
                            <a href="#" className="hover:text-gray-500 transition duration-300">
                                <SlArrowRight className="inline md:mr-2" />
                                Members
                            </a>
                            <a href="#" className="hover:text-gray-500 transition duration-300">
                                <SlArrowRight className="inline md:mr-2" />
                                Contact Us
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4 p-4">
                        <h5 className="text-xl md:text-3xl mb-2 underline">Previous Year Reports</h5>
                        <a href="#" className="hover:text-gray-500 transition duration-300">
                            <SlArrowRight className="inline md:mr-2" />
                            JISTech 2k23
                        </a>
                        <a href="#" className="hover:text-gray-500 transition duration-300">
                            <SlArrowRight className="inline md:mr-2" />
                            JISTech 2k22
                        </a>
                        <a href="#" className="hover:text-gray-500 transition duration-300">
                            <SlArrowRight className="inline md:mr-2" />
                            JISTech 2k21
                        </a>
                        <a href="#" className="hover:text-gray-500 transition duration-300">
                            <SlArrowRight className="inline md:mr-2" />
                            JISTech 2k20
                        </a>
                    </div>
                </div>
                <div className="md:col-span-2 flex justify-center items-center pt-4">
                    <p className="text-sm text-center md:text-right">Copyright JISCE. JIS GROUP</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
