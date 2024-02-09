

const HeroSection = () =>{
    return(
        <main className="hero container">
        <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className="hero-btn">
            <button>Shop Now</button>
            <button className="categ-btn">Category</button>
        </div>

        <div className="shop-options">
            <p className="para">Also Available On</p>
            <div className="ecom-img">
                <img className="ecom" src="/src/amazon.png" alt="amazon" />
                <img className="ecom" src="/src/flipkart.png" alt="flipkart" />
            </div>
        </div>
        </div>

        
        <div className="hero-image">
        <img className="hero-img" src="/src/shoe.png" alt="shoe" />
        </div>

        </main>
    );
}


export default HeroSection;