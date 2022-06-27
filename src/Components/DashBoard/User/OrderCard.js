import { faBan, faCheck, faMoneyCheckAlt, faStar, faTrashRestoreAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const OrderCard = ({ o, index, refetch,sendEvent,setModal }) => {
    const {_id,Address,name,email,phone,sendPackage,sendPrice,adults,child,checkin,startTime,description,image}=o
    return (
        <tr className='text-center'>
        <th>{index + 1}</th>
        <td><div class="avatar">
  <div class="w-20 rounded">
    <img src={image} alt="Tailwind-CSS-Avatar-component" />
  </div>
</div></td>
       
            <td><span className="font-bold">{email}</span></td>
            <td><span className="font-bold">{name}</span></td>
            <td><span className="font-bold">{phone}</span></td>
            <td><span className="font-bold">{Address}</span></td>
            <td><span className="font-bold">{sendPackage}</span></td>
            <td><span className="font-bold">{sendPrice}</span></td>
            <td><span className="font-bold">{adults}</span></td>
            <td><span className="font-bold">{child}</span></td>
            <td><span className="font-bold">{checkin}</span></td>
            <td><span className="font-bold">{startTime}</span></td>
            <td> <p title={description} className="text-sm font-bold">{description.slice(0, 30)}...</p></td>
            <td>
            <label onClick={() => setModal(o)} htmlFor="deleteModal" className="bg-red-700 btn modal-button">Cancel
            <FontAwesomeIcon className='pl-2'icon={faTrashRestoreAlt}></FontAwesomeIcon>
              
              </label>
            </td>
        
       
        
  
       
       
    </tr>
    );
};

export default OrderCard;