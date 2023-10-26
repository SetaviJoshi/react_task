import { useState } from "react";
import { Link } from "react-router-dom";

const Add2 = () => {
  const [message, setMessage] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }
  return (
    <div className="contact-container">
      
      <div className="contact-right border border-red-500 p-5 m-5 ">
      <h1 className="p-2 m-2">Create Text & media</h1>
              <form onSubmit={handleSubmit} >
                
                <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="text-gray-700 text-xs font-bold mb-2">
      Heading 01
      </label>
      <input class="bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"type="text" placeholder="heading 1"/>
      
    </div>
    <div class="md:w-1/2 px-3">
      <label class=" text-gray-700 text-xs font-bold mb-2">
      Description1
      </label>
      <input class="bg-gray-200 text-gray-700 border border-gray-200 rounded box-content h-30  w-50 p-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="write your thoughts here.."/>
    </div>

    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="text-gray-700 text-xs font-bold mb-2">
      Heading 02
      </label>
      <input class="bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"type="text" placeholder="heading 2" required/>
    </div>
 
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="text-gray-700 text-xs font-bold mb-2" for="grid-city">
       Landscape marketing image
      </label>
      <input class=" bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="url" type="url" placeholder="https://example.com" pattern="https://.*" size="30" required />
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
       Potrait Marketing image
      </label>
      <input class=" bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="url" type="url" placeholder="https://example.com" pattern="https://.*" size="30" required />
    </div>

    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="text-gray-700 text-xs font-bold mb-2" for="grid-city">
    Square Marketing Image
      </label>
      <input class=" block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="url" type="url" placeholder="https://example.com" pattern="https://.*" size="30" required />
    </div>
  </div>  
  <div class="w-full 3 px-3 mb-6 md:mb-0">
      <label class=" text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        video Url
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="url" type="url" placeholder="https://example.com" pattern="https://.*" size="30" required />
    </div>
    <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="text-gray-700 text-xs font-bold mb-2" for="grid-city">
        Business Name
      </label>
      <input class=" w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque"/>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="e text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Business Label
      </label>
      <div class="relative">
        <select class="w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
        <option>IT company</option>
          <option>Digital Marketing Agency</option>
          <option>Finance</option>
        </select>
       
      </div>
    </div>
  </div>
  <div class="w-fullpx-3 mb-6 md:mb-0">
      <label class="text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        Website Url
      </label>
      <input class="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="url" type="url" placeholder="https://example.com" pattern="https://.*" size="30" required />
    </div>
    <div className="options">
                <ul className="flex p-4 m-4">
                <div class="flex justify-between ">
                    <li className="p-4 bg-gray-200 hover:bg-green-400">
                  <Link to ="/create"> CANCEL</Link>
                     </li>
                    <li className="p-4 bg-white hover:bg-orange-400">
                     <Link to = "/submitted">SUBMIT</Link>
                        </li>
                       </div>
                </ul>
            </div>
    
        </form>
      </div></div>             
    
  );
};

export default Add2;
