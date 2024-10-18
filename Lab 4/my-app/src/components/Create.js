import axios from 'axios';
import { useEffect, useState } from 'react';


const Create = () =>
{
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        console.log(title);
    }

    const [title, setTitle] = useState('');

    return (
        <div>
            <h3>Hello from create</h3>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Add movie title: </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={title}
                    onChange={(e) => { setTitle(e.target.value)}} 
                />
            </div>
            <input type='submit' value='Add Movie'  className='btn btn-primary' /> 
            </form> 
        </div>
        
    );
};

export default Create