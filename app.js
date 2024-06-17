import React from 'react';
import ReactDOM from 'react-dom/client';

const imgLink=[
    'https://i.postimg.cc/zvpxn60K/DALL-E-2024-06-17-15-45-49-A-high-quality-real-life-image-of-a-friendly-dog-The-dog-should-be-in.webp',
    'https://i.postimg.cc/2S10ZHvL/DALL-E-2024-06-17-15-45-55-A-high-quality-real-life-image-of-a-friendly-dog-playing-with-a-ball.webp',
    'https://i.postimg.cc/HL53SV6p/DALL-E-2024-06-17-15-46-01-A-high-quality-real-life-image-of-a-cat-and-a-dog-playing-together-Bo.webp',
    'https://i.postimg.cc/0j5f2ZPQ/DALL-E-2024-06-17-15-46-12-A-modern-eye-catching-logo-for-a-pet-care-business-The-logo-should-fe.webp',
    'https://i.postimg.cc/0j5f2ZPQ/DALL-E-2024-06-17-15-46-12-A-modern-eye-catching-logo-for-a-pet-care-business-The-logo-should-fe.webp',
    'https://i.postimg.cc/wjRtCrnV/DALL-E-2024-06-17-18-14-18-An-image-showcasing-pet-services-such-as-pet-walking-and-pet-grooming.webp',
    'https://i.postimg.cc/hjBpzTVk/DALL-E-2024-06-17-18-21-29-An-image-showcasing-pet-services-such-as-pet-walking-and-pet-grooming.webp'
]
function NavBar(){

    return (
        
        // <h1>Hello </h1>

        <div className='NavBar d-flex flex-row justify-content-between'>
            <img className="Logo"src= {`https://i.postimg.cc/qM0w1JKr/DALL-E-2024-06-17-15-27-43-A-modern-eye-catching-logo-for-a-pet-care-business-The-logo-should-fe.webp`}></img>
            <div className="d-flex flex-row align-items-center">
  <button type="button" class=" NavList p-2 btn btn-secondary">Home</button>
  <button type="button" class=" NavList p-2 btn btn-secondary">Gallary</button>
  <button type="button" class=" NavList p-2 btn btn-secondary">Contact</button>
</div>
 </div>
         
    )
}
function CarousolImg(props){
    const {img}= props;
    return (
        <div className="carousel-item active divImg">
        <img  src={img} className="d-block  carousolImg" alt="..."></img>
        </div>
    )
}
function Carousol(){

      return (
        <div id="carouselExample" className="carousel slide mycontainer">
        <div className="carousel-inner">
               {
                  imgLink.map((link)=>{
                     return  <CarousolImg img={link} ></CarousolImg>
                  })
               } 
              
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      )
}
const Header = () => {
    
    return (
        <div>
             <NavBar></NavBar>
              <Carousol></Carousol>
              <ServiceInfo1></ServiceInfo1>
              <ServiceInfo2></ServiceInfo2>
              <ServiceInfo3></ServiceInfo3>
              <ServiceInfo4></ServiceInfo4>
              <ServiceInfo5></ServiceInfo5>
        </div>
    )
}
function ServiceInfo1(){

    return (
        <div className=" mt-5 mb-3 container myContainer"  >
  <div className="row g-0 ">
    <div className="col-md-6">
      <img src="https://i.postimg.cc/zvDx2bSH/DALL-E-2024-06-17-20-33-09-A-friendly-pet-walker-walking-multiple-dogs-in-a-park-The-scene-is-vib.webp" className="img-fluid rounded-start ServiceImg" alt="..."></img>
    </div>
    <div className="col-md-6 ServiceCardDiv">
      <div className="card-body ServiceCard">
        <h5 className="card-title">Pet Walking</h5>
        <p className="card-text">Regular pet walking is essential for the physical and mental well-being of dogs. Our professional pet walkers ensure your dog gets the exercise it needs in a safe and enjoyable environment. We offer individualized walking plans tailored to your pet's energy levels and physical requirements. Walks can be scheduled daily, weekly, or as needed, and we provide updates and photos to keep you informed about your pet’s adventures.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    )
}

function ServiceInfo5(){

    return (
        <div className=" mt-5 mb-3 container myContainer"  >
  <div className="row g-0">
    <div className="col-md-6">
      <img src="https://i.postimg.cc/0jpJScJp/DALL-E-2024-06-17-20-33-17-A-veterinarian-examining-a-dog-in-a-modern-veterinary-clinic-The-vet-i.webp" className="img-fluid rounded-start ServiceImg" alt="..."></img>
    </div>
    <div className="col-md-6 ServiceCardDiv">
      <div className="card-body ServiceCard">
        <h5 className="card-title">Veterinary Services</h5>
        <p className="card-text">Keep your pet healthy with our comprehensive veterinary services. We offer routine check-ups, vaccinations, dental care, and emergency treatments. Our experienced veterinarians and state-of-the-art facilities ensure your pet receives the best possible care. We also provide advice on nutrition, preventative care, and managing chronic conditions.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    )
}
function ServiceInfo3(){

    return (
        <div className=" mt-5 mb-3 container myContainer"  >
  <div className="row g-0 ">
    <div className="col-md-6">
      <img src="https://i.postimg.cc/XYn9fSLX/DALL-E-2024-06-17-20-33-13-A-pet-sitter-caring-for-a-dog-and-a-cat-in-a-cozy-home-setting-The-pet.webp" className="img-fluid rounded-start ServiceImg" alt="..."></img>
    </div>
    <div className="col-md-6 ServiceCardDiv">
      <div className="card-body ServiceCard">
        <h5 className="card-title">Pet Sitting</h5>
        <p className="card-text">When you’re away, you can trust our reliable pet sitting services to care for your furry friends. We provide in-home pet sitting, ensuring your pet stays in a familiar and comfortable environment. Our sitters follow your pet’s routine, including feeding, walking, playtime, and administering any necessary medications. We also offer overnight stays for added peace of mind.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    )
}
function ServiceInfo2(){

    return (
        <div className=" mt-5 mb-3 container myContainer"  >
  <div className="row g-0 ">
  <div className="col-md-6 ServiceCardDiv">
      <div className="card-body ServiceCard">
        <h5 className="card-title">Pet Grooming</h5>
        <p className="card-text">Our comprehensive pet grooming services keep your pet looking and feeling their best. We offer a range of grooming options, including baths, haircuts, nail trims, ear cleaning, and teeth brushing. Our experienced groomers use gentle techniques and high-quality products to ensure a stress-free experience. We cater to all breeds and sizes, with specialized grooming packages for puppies and senior pets.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div className="col-md-6">
      <img src="https://i.postimg.cc/fLVcVcKK/DALL-E-2024-06-17-20-33-11-A-professional-pet-groomer-grooming-a-dog-in-a-cozy-grooming-salon-The.webp" className="img-fluid rounded-start ServiceImg" alt="..."></img>
    </div>
    
  </div>
</div>
    )
}

function ServiceInfo4(){

    return (
        <div className=" mt-5 mb-3 container myContainer"  >
  <div className="row g-0 ">
  <div className="col-md-6 ServiceCardDiv">
      <div className="card-body ServiceCard">
        <h5 className="card-title">Pet Training</h5>
        <p className="card-text">Our professional pet training services help your dog or cat learn good manners and obedience. We offer group classes and private sessions covering basic commands, advanced tricks, and behavior modification. Our positive reinforcement techniques ensure a fun and effective learning experience. We also provide puppy socialization classes and specialized training for rescue pets.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div className="col-md-6">
      <img src="https://i.postimg.cc/VNVMPS8b/DALL-E-2024-06-17-20-33-15-A-professional-pet-trainer-working-with-a-dog-in-a-park-The-trainer-is.webp" className="img-fluid rounded-start ServiceImg" alt="..."></img>
    </div>
    
  </div>
</div>
    )
}
const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header/>);



