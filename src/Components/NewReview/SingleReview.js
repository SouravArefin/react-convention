import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const SingleReview = ({ singleReview }) => {
    // console.log(singleReview)
    const { name,img, customRating, review } = singleReview;
    
    let myIcon;
if(customRating==4){
    myIcon = <div> <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
    <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
    <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
    <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
     </div>
}


else if (customRating == 3) {
  myIcon =  <>
            <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
    <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
    <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>

    </>
   
}
else if (customRating == 3.5) {
  myIcon=  <>
    <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
<FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
<FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
<FontAwesomeIcon className='icon-color'icon={faStarHalfStroke}></FontAwesomeIcon>  

</>
}
    
else if (customRating == 2) {
 myIcon =   <>
    <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
<FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>

</>
}
else if (customRating == 2.5) {
    myIcon =   <>
    <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
<FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
<FontAwesomeIcon className='icon-color'icon={faStarHalfStroke}></FontAwesomeIcon>
</>
    }

else if (customRating == 1) {
    myIcon =   <>
    <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
 
</>
    }
    else  {
        myIcon = <div> <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
    <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
    <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
    <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
    <FontAwesomeIcon className='icon-color'icon={faStar}></FontAwesomeIcon>
   </div>
    }
  
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
           
             
                    <img className="w-1/2 rounded-xl mx-auto" src={img} alt="Shoes"  />
                       
            </figure>
            <div className="card-body items-center text-center pb-10">
                <h2 className="card-title pt-10 font-bold sp-style"><i>{name}</i></h2>
                <h1 className = "opacity-10">Posted On 11th January,2022</h1>
                <p className='text-center'>{myIcon}</p>
                <blockquote title={review} className='p-4 mt-3  bg-gray-200 italic border-l-4 rounded-lg text-neutral-600 border-neutral-500 quote w-4/6 mx-auto mb-7'>`{review.slice(0, 50)}`</blockquote>

            </div>
        </div>
    );
};

export default SingleReview;