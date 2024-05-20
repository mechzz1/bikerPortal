import React from 'react'
import IMAGES from '../../assets/images/images'
import Slider from '../../assets/components/slider/slider'
import NavBar from '../../assets/components/navBar/navBar'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaQuoteRight } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

function landing() {
    return (
        <>
            <div className="header_section header_bg">

                <div className="banner_section layout_padding">
                    <NavBar />
                    <div id="main_slider" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="best_text">Best</div>
                                            <div className="image_1"><img src={IMAGES.header3} /></div>
                                        </div>
                                        <div className="col-md-5">
                                            <h1 className="banner_taital">New Model Bike</h1>
                                            <p className="banner_text">It is a long established fact that a reader will be
                                                distracted by the readable content </p>
                                            <div className="contact_bt">
                                                <a href="#shop">Shop Now</a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="best_text">Best</div>
                                            <div className="image_1"><img src={IMAGES.header2} /></div>
                                        </div>
                                        <div className="col-md-5">
                                            <h1 className="banner_taital">New Model Bike</h1>
                                            <p className="banner_text">It is a long established fact that a reader will be
                                                distracted by the readable content </p>
                                            <div className="contact_bt"><a href="#shop">Shop Now</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="best_text">Best</div>
                                            <div className="image_1"><img src={IMAGES.header1} /></div>
                                        </div>
                                        <div className="col-md-5">
                                            <h1 className="banner_taital">New Model Bikes</h1>
                                            <p className="banner_text">It is a long established fact that a reader will be
                                                distracted by the readable content </p>
                                            <div className="contact_bt"><a href="#shop">Shop Now</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
                            <IoIosArrowBack />
                        </a>
                        <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
                            <IoIosArrowForward />
                        </a>
                    </div>
                </div>
            </div>
            <div className="">
                {/*
        <Slider /> */}
            </div>
            <div className="cycle_section layout_padding" id="shop">
                <div className="container">
                    <h1 className="cycle_taital">Our Bikes</h1>
                    <p className="cycle_text">It is a long established fact that a reader will be distracted by the </p>
                    <div className="cycle_section_2 layout_padding">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="box_main">
                                    <h6 className="number_text">01</h6>
                                    <div className="image_2"><img src={IMAGES.sale1} /></div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h1 className="cycles_text">Cruiser Bikes</h1>
                                <p className="lorem_text">It is a long established fact that a reader will be distracted by the
                                    readable content of a page when looking at its layout. The point of using Lorem Ipsum is
                                    that it has a more-or-less normal distribution of letters</p>
                                <div className="btn_main">
                                    <div className="buy_bt">
                                        <Link to="/login">
                                            Buy Now
                                        </Link>
                                    </div>
                                    <h4 className="price_text">Price <span style={{ color: "#f7c17b" }}>$</span> <span
                                        style={{ color: "#325662" }}>200</span></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cycle_section_3 layout_padding">
                        <div className="row">
                            <div className="col-md-6">
                                <h1 className="cycles_text">Trail Bikes</h1>
                                <p className="lorem_text">It is a long established fact that a reader will be distracted by the
                                    readable content of a page when looking at its layout. The point of using Lorem Ipsum is
                                    that it has a more-or-less normal distribution of letters</p>
                                <div className="btn_main">
                                    <div className="buy_bt">
                                        <Link to="/login">
                                            Buy Now
                                        </Link>
                                    </div>
                                    <h4 className="price_text">Price <span style={{ color: "#f7c17b" }}>$</span> <span
                                        style={{ color: "#325662" }}>200</span></h4>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="box_main_3">
                                    <h6 className="number_text_2">02</h6>
                                    <div className="image_2"><img src={IMAGES.sale3} /></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="read_btn_main">
                        <div className="read_bt"><a href="#">Read More</a></div>
                    </div>
                </div>
            </div>

            <div className="about_section layout_padding" id="about">
                <div className="container">
                    <h1 className="about_taital">About Our Bike Store</h1>
                    <p className="about_text">It is a long established fact that a reader will be distracted by the readable
                        content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                        more-or-less normal distribution of letters
                    </p>
                    <div className="about_main">
                        <img src={IMAGES.aboutBike} className="image_5" />
                    </div>
                    <div className="read_bt_1"><a href="#">Read More</a></div>
                </div>
            </div>

            <div className="client_section layout_padding">
                <div id="my_slider" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container">
                                <div className="client_main">
                                    <h1 className="client_taital">Community Founder</h1>
                                    <div className="client_section_2">
                                        <div className="client_left">
                                            <div><img src={IMAGES.founder1} className="client_img" /></div>
                                        </div>
                                        <div className="client_right">
                                            <div className="quote_icon"><FaQuoteRight /></div>
                                            <p className="client_text">
                                                Alice Johnson, known as "RoadRider," is a seasoned biker with a love for long
                                                rides on the open road. Her passion for exploring new destinations and
                                                connecting with fellow riders led her to start the community.</p>
                                            <h3 className="client_name">Alice "RoadRider" Johnson</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container">
                                <div className="client_main">
                                    <h1 className="client_taital">Community Founder</h1>
                                    <div className="client_section_2">
                                        <div className="client_left">
                                            <div><img src={IMAGES.founder2} className="client_img" /></div>
                                        </div>
                                        <div className="client_right">
                                            <div className="quote_icon"><FaQuoteRight /></div>
                                            <p className="client_text">Max Rodriguez, also known as "TrailBlazer," is an avid off-road enthusiast who thrives on conquering challenging trails and experiencing the raw beauty of nature. His expertise in trail riding and passion for outdoor adventures drive the community's focus on off-road biking.</p>
                                            <h3 className="client_name">Max "TrailBlazer" Rodriguez</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container">
                                <div className="client_main">
                                    <h1 className="client_taital">Community Founder</h1>
                                    <div className="client_section_2">
                                        <div className="client_left">
                                            <div><img src={IMAGES.founder3} className="client_img" /></div>
                                        </div>
                                        <div className="client_right">
                                            <div className="quote_icon"><FaQuoteRight /></div>
                                            <p className="client_text">Sophia Patel, nicknamed "GearMaster," is a gear aficionado with a deep understanding of biking equipment and technology. Her goal is to create a community that not only shares biking experiences but also provides valuable insights into gear selection and maintenance.</p>
                                            <h3 className="client_name">Sophia "GearMaster" Patel</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
                        <IoIosArrowBack />

                    </a>
                    <a className="carousel-control-next" href="#my_slider" role="button" data-slide="next">
                        <IoIosArrowForward />

                    </a>
                </div>
            </div>

            <div className="news_section layout_padding" id='events'>
                <div className="container">
                    <h1 className="news_taital">Events</h1>
                    <p className="news_text">It is a long established fact that a reader will be distracted by the readable
                        content of a page when looking at its layout. The point of using </p>
                    <div className="news_section_2 layout_padding">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="box_main_1">
                                    <div className="zoomout frame"><img src={IMAGES.event1} /></div>
                                    <div className="padding_15">
                                        <h2 className="speed_text">Ride to the Peaks</h2>
                                        <div className="post_text">Post by : Den <span
                                            style={{ float: "right" }}>20-12-2019</span></div>
                                        <p className="long_text">Join us for an exhilarating adventure as we ride through scenic mountain trails, conquering peaks and valleys. This event is perfect for adrenaline junkies seeking a thrilling biking experience amidst breathtaking natural landscapes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="box_main_1">
                                    <div className="zoomout frame"><img src={IMAGES.event2} /></div>
                                    <div className="padding_15">
                                        <h2 className="speed_text">City Touring Cruise</h2>
                                        <div className="post_text">Post by : Max <span
                                            style={{ float: "right" }}>20-12-2019</span></div>
                                        <p className="long_text"> Explore the vibrant streets of our city in style during our City Touring Cruise event. Discover hidden gems, iconic landmarks, and cultural hotspots as we navigate through urban roads, enjoying the sights and sounds of city life on two wheels.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="box_main_1">
                                    <div className="zoomout frame"><img src={IMAGES.event3} /></div>
                                    <div className="padding_15">
                                        <h2 className="speed_text">Trailblazing Challenge</h2>
                                        <div className="post_text">Post by : Cavin <span
                                            style={{ float: "right" }}>20-12-2019</span></div>
                                        <p className="long_text">Test your skills and endurance in our Trailblazing Challenge, where riders tackle rugged terrains, steep inclines, and technical trails. This event is designed for avid off-road enthusiasts looking for an adrenaline-pumping off-grid biking experience.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="footer_section layout_padding">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8 col-sm-12 padding_0">
                            <div className="map_main">
                                <div className="map-responsive">
                                    <iframe
                                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France"
                                        width="600" height="400" style={{ border: '0', width: '100%' }}></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="call_text"><a href="#"><CiLocationOn /><span
                                className="padding_left_0">123 Biker's Lane
                                City, State
                                Country</span></a></div>
                            <div className="call_text"><a href="#"><CiPhone /><span
                                className="padding_left_0">Call Now +01 123467890</span></a></div>
                            <div className="call_text"><a href="#"><MdOutlineAlternateEmail /><span
                                className="padding_left_0">demo@gmail.com</span></a></div>
                            <div className="social_icon">
                                <ul>
                                    {/* <li><a href="#"><img src="images/fb-icon1.png"></a></li>
                            <li><a href="#"><img src="images/twitter-icon.png"></a></li>
                            <li><a href="#"><img src="images/linkedin-icon.png"></a></li>
                            <li><a href="#"><img src="images/instagram-icon.png"></a></li> */}
                                </ul>
                            </div>
                            <input type="text" className="email_text" placeholder="Enter Your Email" name="Enter Your Email" />
                            <div className="subscribe_bt"><a href="#">Subscribe</a></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright_section">
                <div className="container">
                    {/* <p className="copyright_text">Copyright 2019 All Right Reserved By.<a href="https://html.design"> Free
                    html Templates</p> */}
                </div>
            </div>
        </>
    )
}

export default landing