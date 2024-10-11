"use server"

import { data } from "../app/api/test/route"
 
export async  function server_action(){
await new Promise((resolve) => setTimeout(resolve, 3000));
   return JSON.stringify(data); 
}