
import './App.css';
import {useState} from 'react';

function App() {

  const [formData,setFormData]=useState({firstName:"",LastName:"",Email:"",country:"India",
streetAddress:"",city:"",state:"",code:"",comments:false,candidates:false,offers:false,
pushNotifications:""})
  function changeHandler(event) {
    const {name,value,checked,type}=event.target;
    setFormData( (prev) => ({...prev, [name]: type=== "checked"? checked:value}) )

  }
  function submitHandler(event){
    event.preventDefault();
    console.log("Finally printing the details of the form");
    console.log(formData)
  }

   return (
    <div className='flex flex-col  mt-2 w-[100vw] h-[100vh]'>
      <form onSubmit={submitHandler}>
        <label htmlFor='firstName' className=' font-bold mx-5 '>First name</label>
        <br></br>
        <input type="text" placeholder='Mounisha' name='firstName' id='firstName'
        onChange={changeHandler} value={formData.firstName}
        className=' outline outline-blue-400  w-[80vw] rounded mx-5'/>
        <br></br>
        <label htmlFor='LastName' className=' font-bold mx-5 '>Last name</label>
        <br></br>
        <input type="text" placeholder='Majji' name='LastName' id='LastName'
        onChange={changeHandler} value={formData.LastName}
        className=' outline  outline-blue-400  w-[80vw] rounded mx-5'/>
        <br></br>
        <label htmlFor='Email' className=' font-bold mx-5 '>Email address</label>
        <br></br>
        <input type="text" placeholder='Mounishamajji333@gmail.com' name='Email' id='Email'
        onChange={changeHandler} value={formData.Email}
        className=' outline  outline-blue-400  w-[80vw] rounded mx-5'/>
        <br></br>
        
        <label htmlFor='country' className=' font-bold mx-5 '>Country</label>
        <br></br>
        <select type="text" placeholder='country' name="country" id="country"
        className='outline  outline-blue-400  w-[80vw] rounded mx-5'
         onChange={changeHandler} value={formData.country}>
          <br></br>
               <option>India</option>
                 <option>USA</option>
                   <option>UK</option>
                   <option>Russia</option>
                   <option>Aisa</option>
        </select>
        <br></br>

        <label htmlFor='Street address' className=' font-bold mx-5 '>Street address</label>
        <br></br>
        <input type="text" placeholder='1234 Main St' name='address' id='address'
        onChange={changeHandler} value={formData.streetAddress}
        className=' outline  outline-blue-400  w-[80vw] rounded mx-5'/>
        <br></br>

        <label htmlFor='City' className=' font-bold mx-5 '>City</label>
        <br></br>
        <input type="text" placeholder='Eluru' name='city' id='city'
        onChange={changeHandler} value={formData.city}
        className=' outline  outline-blue-400  w-[80vw] rounded mx-5'/>
        <br></br>

        <label htmlFor='State/Province' className=' font-bold mx-5 '>State/Province</label>
        <br></br>
        <input type="text" placeholder='A.P' name='state' id='state'
        onChange={changeHandler} value={formData.state}
        className=' outline  outline-blue-400  w-[80vw] rounded mx-5'/>
        <br></br>

        <label htmlFor='ZIP/Postal code' className=' font-bold mx-5 '>ZIP/Postal code</label>
        <br></br>
        <input type="text" placeholder='521110' name='code' id='code'
        onChange={changeHandler} checked={formData.code}
        className=' outline  outline-blue-400  w-[80vw] rounded mx-5'/>
        <br></br>

        <label htmlFor='By Email' className=' font-bold mx-5 '>By Email</label>
        <br></br>
        <div className='flex flex-row items-baseline mx-5'> 
          <input type="checkbox" id="comments" name="comments" 
        checked={formData.comments} onChange={changeHandler}
         />
            <div>
              <label htmlFor='Comments' className=' font-semibold'>Comments</label>
              <p className=' opacity-70'>Get notified when someone posts a comment on a positing</p>
             </div>
         </div>

         <div className='flex flex-row items-baseline mx-5'>
         <input type="checkbox" id="candidates"
        checked={formData.candidates} onChange={changeHandler}/>
          <div>
             <label htmlFor='Candidates' className=' font-semibold'>Candidates</label>
            <p className=' opacity-70'>Get notified when a candidate applies for a job</p>
           </div>
       </div>

       <div className=' flex flex-row items-baseline mx-5'>
       <input type="checkbox" id="offers"
        value={formData.offers} onChange={changeHandler}/>
          <div>
          <label htmlFor='Offers' className=' font-semibold'>Offers</label>
          <p className=' opacity-70'>Get notified when a candidate accepts or rejects an offer</p>
         </div>
      </div>
        
       <label htmlFor='Push Notifications' className=' font-bold mx-5'>Push Notification</label>
        <p className=' opacity-70 mx-5 gap-2'>These are delivered via SMS to your mobile phone</p>
       

          <div className=' flex flex-col items-baseline'>
            <div className=' flex flex-row mx-5 gap-2'>
            <input type="radio" name="pushNotification"
        id="pushEverything" onChange={changeHandler}
        value="Everything"/>
        <label htmlFor='pushEverything' className=''>Everything</label>
        <br></br>
            </div>
         
        <div className=' flex flex-row items-baseline'>
        <input type="radio" name="pushNotification"
        id="pushEmail" onChange={changeHandler}
        value="same as Email"/>
        <label htmlFor='pushEmail'>Same as email</label>
        <br></br>
        </div>
        <div className=' flex flex-row mx-5'>
        <input type="radio" name="pushNotification"
        id='pushNothing' value='No Push Notification'
        onChange={changeHandler}/>
        <label htmlFor='No Push Notifications'>No push notifications</label>
        <br></br>
        </div>
        
         </div>
        

        <button className='outline bg-blue-500 text-white font-bold
         rounded py-2 px-4 mt-3 mx-5'>Save
        </button>
        </form>
    
    </div>
  );
}

export default App;
