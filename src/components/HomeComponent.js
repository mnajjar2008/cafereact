import React from 'react';
import cafehomeimage from '../assets/cafe-home.jpg';

function Home() {
    return (
        <div className="container">
            <div className="row mt-5 justify-content-between">
                <div className="col-md-6">
                    <h2 className="pl-3">Welcome to San Jose Cafe</h2>
                    <p className="p-3">
                        We are number one serving cafe in the bay area. our coffee is the best in town. our priority is customers satisfaction. We use the best fresh ingredients to serve our customers. We work hard to focus and improve service that
                        we provide to make sure our customers are happy.
                    </p>

                    <img className="img-thumbnail" src={cafehomeimage} alt="cafehomeimage" />

                    <p className="p-3">
                        Although we offer a wide variety of hot and iced drinks, we also provide savory and sweet food options. So whether you're stopping for your morning coffee, lunch, or an afternoon snack, we've got you covered!
                    </p>
                </div>
                <div className="col-md-6">
                    <img className="img-thumbnail" src={process.env.PUBLIC_URL + '/assets/menu-items/waffles/waffle.jpeg'} alt="Coffee Collection" />
                    <p className="p-3">We pride ourselves on providing organic, fair trade tea and coffee. We work with local dairy suppliers and bakeries to source the freshest, highest quality offerings.</p>
                    <p className="p-3">Our classic menu will be sure to please guests of all ages. We offer special quarterly waffles and pastries to please many of our guest who always look forward to visit our cafe and enjoy a great meal.</p>
                </div>
            </div>
        </div>
    );
}
export default Home;
