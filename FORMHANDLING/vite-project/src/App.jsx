
import { useForm } from "react-hook-form"

import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

 async function onSubmit(data){
   await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Submitting the form ", data);

    
  }
  return (
    <>
     <form onSubmit={handleSubmit(onSubmit)}>
     <div>
     <label>First Name</label>
     <input
      className= {
        errors.firstName ? 'input-error': ""
      }
      {...register("firstName" , 
       { required: true,
        minLength:{value: 3, message: 'Min Len atleast 3' },
        maxLength: {value: 5, message: 'Max Len at least 5'} },
      
        )} />
        {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
     </div>
      <br />
     <div>
     <label>Middle Name</label>
     
     <input className= {errors.MiddleName ? 'input-error': ""}
      {...register("middleName", { required: true,
        minLength:{value: 3, message: 'Min Len atleast 3' },
      }
      )} />
        {errors.middleName && <p className='error-msg'>{errors.middleName.message}</p>}
     </div>
     <br />

     <div>
     <label>Last Name</label>
     <input className= {errors.lastName ? 'input-error': ""}
     type="text" {...register("lastName" ,
       { 
         pattern: {
         value: /^[A-Za-z]+$/i ,
         message: "Last Name is not as per Regular Expression"
       }
})}/>

       {errors.lastName && <p className='error-msg'>{errors.lastName.message}</p>}
     <br />
    
     </div>
  
  <br />
      {/* <div>
        
     <label >Age :</label>
     <input type="number" />
     <br />
     
      </div> */}


      <div>
          <label>Age</label>
          <input
            className={errors.age ? 'input-error' : ''}
            type="number"
            {...register('age', {
              required: true,
              min: { value: 18, message: 'Age must be at least 18' },
              max: { value: 23, message: 'Age must be at most 23' },
            })}
          />
          {errors.age && <p className="error-msg">{errors.age.message}</p>}
          <br />
          <input type="Submit" disabled={isSubmitting}
          value={isSubmitting ? "Submiting.." : "Submit"} 
          />
        </div>
     
     </form>
    </>
  )
}

export default App

