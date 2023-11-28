import { BACKEND_HOST, BACKEND_PORT } from "@/constants"
const login_url = new URL(`http://${BACKEND_HOST}:${BACKEND_PORT}/token`);

interface SessionObject {
  access_token: string
  token_type: string
}




const login = (email: string, password: string) => {
  
  const formData = new URLSearchParams();
  formData.append('grant_type', 'password');
  formData.append('username', email);
  formData.append('password', password);
  

  
  
  const request = new Request(login_url, {

    method: 'POST',
    body: formData.toString(),
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
    },
  })


  console.log(request)

  const prom = fetch(request)
                .then((response) => {
                  if (response.ok){
                    return response.json()
                  }
                  else {
                    return false
                  }
                })
                .then((jsonObject) => {
                  if ('access_token' in jsonObject && 'token_type' in jsonObject)
                    return jsonObject as SessionObject
                  else {
                    throw new Error(`Object no parseable ${jsonObject}`)
                  }
                  
                })

  console.log(prom)
  
  return prom

}


export {
  login
}