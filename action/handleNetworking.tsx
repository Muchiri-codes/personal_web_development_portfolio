import { headers } from "next/headers"

export const handleSubmit = async (name:string, email:string) =>{
  if(!email.trim() || !name.trim()){
    alert("Invalid name or password, kindly retry");
    return;
  }
  const res = await fetch("api/contact", {
    method:"POST",
    headers: { "Content-Type": "application/json" },
    body:JSON.stringify({name, email})
  });

  if(res.ok){
    alert(`Thank you ${name}. Your email has been received, check your inbox.`)
  }
}