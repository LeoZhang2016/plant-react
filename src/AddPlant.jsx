import React from 'react';
import { useState} from 'react';
import axios from 'axios';
function AddPlant(props) {


    const [plantInput, setPlantInput] = useState({
        name:'',
        species: '',
        watering: '',
    });

    const [image,setImage] = useState("");
    const [errors,setErrors] = useState([]);

   const onBack = ()=>{
       props.history.push('/list');
   }

   const handleInput = (e) =>{
        e.persist();
       setPlantInput({...plantInput, [e.target.name]:e.target.value });

   }

    const handleImage = (e) =>{
         e.persist();
        setImage(e.target.files[0]);
    }

    const submitPlant = (e)=> {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image',image);
        formData.append('name',plantInput.name);
        formData.append('species',plantInput.species);
        formData.append('watering',plantInput.watering);

        axios.post('http://localhost/api/store-plant',formData)
            .then(res => {
                if(res.data.status === 200) {
                    alert("plant successfully addded",res.data.message);
                    setPlantInput({
                        ...plantInput,
                        name:'',
                        species: '',
                        watering: '',
                    });
                    setErrors([]);
                    props.history.push('/list');
                }else if (res.data.status === 422) {
                    alert("All Fields are mandetory");
                    setErrors(res.data.errors);
                }
        });
    }

    return (
        <div className={'min-h-screen flex items-center justify-center bg-blue-200 rounder'}>
            <div className={'bg-white p-16 rounded shadow-2xl w-2/3'}>


            <h2 className={'text-3xl font-bold mb-8 text-purple-700'} >Add Plant You Prefer</h2>
                <form
                    className={'space-y-8'}
                    action=""
                    onSubmit={(e)=>submitPlant(e)}
                    encType={"multipart/form-data"}
                >
                    <div >
                        <label className={"table-cell mb-2 font-bold text-gray-600"}>Plant Name</label>
                        <input
                            className={'w-full border-2 border-gray-200 p-2 rounded outline-none ' +
                            'focus:border-purple-400'}
                            type="text" name={"name"}
                            id={"name"} placeholder={'plant name'}
                            onChange={handleInput}
                            value={ plantInput.name }
                        />
                        <small className={'table-cell  font-bold text-red-400'}>
                            {errors.name}</small><small
                    >
                        {errors.name}</small>
                    </div>
                    <div className={'m-px'}>
                        <label className={"table-cell mb-2 font-bold text-gray-600"}>Plant Species</label>
                        <input
                            className={'w-full border-2 border-gray-200 p-2 rounded outline-none ' +
                            'focus:border-purple-400'}
                            type="text" name={"species"} id={"species"} placeholder={'plant species'}
                               onChange={handleInput}
                               value={ plantInput.species }
                        />
                        <small className={'table-cell  font-bold text-red-400'}
                        >{errors.species}</small>
                    </div>
                    <div>
                        <label  className={"table-cell mb-2 font-bold text-gray-600"}>Watering instruction </label>
                        <textarea
                            className={'w-full border-2 border-gray-200 p-2 rounded outline-none ' +
                            'focus:border-purple-400'}
                            name="watering" id="" cols="10" rows="5" placeholder={"watering instruction"}
                                  id={'watering'}
                                  onChange={handleInput}
                                  value={ plantInput.watering }
                        ></textarea>
                        <small className={'table-cell  font-bold text-red-400'}
                        >{errors.watering}</small>
                    </div>
                    <div className={'mt'}>
                        <label  className={"table-cell mb-2 font-bold text-gray-600"}>Image</label>
                        <input
                            className={'w-64 flex flex-col items-center bg-white rounded-md shadow-md ' +
                            'cursor-pointer  hover:bg-purple-600 hover:text-white text-purple-600 duration-150'
                              }
                            type="file" name="" id="" onChange={handleImage}/>
                        <small className={'table-cell  font-bold text-red-400'}
                        >{errors.image}</small>
                    </div>
                    <button
                        className={'block w-full bg-green-500  p-2 rounded text-gray-100'}
                        type={'submit'}>Add Plant</button>
                </form>
                <button
                    className={'block w-full bg-purple-500 p-2 rounded mt-4 text-gray-100'}
                    onClick={()=> onBack()}
                >View Plants</button>

            </div>
        </div>
     );
}

export default  AddPlant;