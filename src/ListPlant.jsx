
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

 function ListPlant() {

     const [loading, setLoading] = useState(true);
     const [viewPlant, setViewPlant ]= useState([]);

     useEffect(()=>{
         axios.get('http://localhost/api/view-plant').then(res => {
                if(res.data.status === 200) {
                    console.log(res.data.plants);
                    setViewPlant(res.data.plants);
                    setLoading(false);
                }
         });
     },[]);

     var dispaly_Plantdata = "";

     if(loading){
         return <h4 className={'text-gray-400 text-2xl'}>
             View Plant loading . . .
         </h4>
     }else {
         dispaly_Plantdata = viewPlant.map((item) => {
             return (
                 <tr key={item.image} className={''}>
                     <td className={"border px-2  py-2"}>{item.name}</td>
                     <td className={"border px-2  py-2"}>{item.species}</td>
                     <td className={"border px-2  py-2"}>
                         <img src={`http://localhost/${item.image}`}  width="100%" height="80px" alt="Image"/>
                     </td>
                     <td className={"border px-2  py-2"}>{item.watering}</td>
                 </tr>
             );
         })
     }

    return (
       <div>
         <h2 className={"my-2 text-2xl text-gray-400 py-2 bold"}>Plant List</h2>
           <div className={'object-right-top  block h-10 flex items-center hover:bg-red-700  text-base justify-center  w-32 rounded bg-red-400 my-8 text-gray-100'}>
               <Link to='/add'>
                   ADD Plant
               </Link>
           </div>

           <div className={'border border-purple-800 '}>
               <table className={''}>
                   <thead>
                      <tr className={'border'}>
                          <th className={"border px-2  py-2 w-1/6"}>Name</th>
                          <th className={"border px-2  py-2 w-1/6"}>species</th>
                          <th className={"border px-2  py-2 w-1/3"}>picture</th>
                          <th className={"border px-2  py-2 "}>watering Instruction</th>
                      </tr>
                   </thead>
                   <tbody>
                     { dispaly_Plantdata }
                   </tbody>
               </table>
           </div>


       </div>
    );
}

export default ListPlant;