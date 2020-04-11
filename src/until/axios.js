import axios from 'axios'

export const axios_in = axios.create({
    baseURL : 'http://portcars.tpddns.cn:8103/bookingx2',
    // baseURL : 'http://tech.portcars.cn:81/bookingx2back',
 
})