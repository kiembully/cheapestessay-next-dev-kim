import { ukApiHelper } from "./apiHelper";

export const socialLoginFunc = (data, type) =>{
    return new Promise((resolve, reject)=>{
        const email = data._profile.email;
        const ID = data._profile.id;

        let formData = new FormData();
        formData.append('email', email)
        formData.append('sn_id', ID)
        formData.append('sn_type', type)

        ukApiHelper('socialLogin','POST', formData, null).then(res=>{
            resolve(res);
        }).catch(err=>{
            // console.log('err');
            reject(err)
        })
    })
}