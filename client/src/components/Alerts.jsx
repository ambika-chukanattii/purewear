import {React,useEffect,useState} from 'react'
import { check1, error2} from '../assets'

const Alerts = ({i,alertOn, type, message, handleAlertCancel}) => {

  return (
    <div className='my-1'>
        {alertOn && type=='success' && 
            <div class="w-full flex flex-row items-center justify-center bg-green-100 border border-green-400 text-green-700 p-3 rounded">
                <div className=''>
                  <img src={check1} className='w-4 h-4 mr-3'/>
                </div>
                <span class="font-medium">{message}</span>
                <span class="ml-3" onClick={()=>handleAlertCancel(i)}>
                  <svg class="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                </span>
            </div>       
        }
        {alertOn && type=='error' && 
            <div class="w-full flex flex-row items-center justify-center bg-red-100 border border-red-400 text-red-700 p-3 rounded">
                <img src={error2} className='w-4 h-4 mr-2'/>
                <span class="font-medium">{message}</span>
                <span class="ml-4" onClick={()=>handleAlertCancel(i)}>
                  <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                </span>
            </div>       
        }
    </div>
  )
}

export default Alerts