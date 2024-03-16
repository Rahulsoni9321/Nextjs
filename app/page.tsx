import axios from "axios"

async function getuserdetail() {
  const res= await axios.get("http://localhost:3001/api/user")
   return res.data
}

export default async function Home() {

 const data=await getuserdetail();
  
 

  return (
    <>
          <div className="grid grid-cols-4 place-content-center place-items-center w-screen h-screen background-clip bg-gradient-to-tr from-gray-500 via-gray-600 to-black  ">
          <div className="col-span-4 text-white">{data.email} {data.password}</div>
          </div>
    </>
  )
}