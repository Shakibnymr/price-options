import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar  } from 'recharts';

const Phones = () => {
    const [phones,setPhones] = useState({})
    useEffect(()=>{
      axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const realData = data.data.data
            const fakeData = realData.map(phone => {
                const obj = {
                    name: phone.phone_name,
    price: parseInt(phone.slug.split('-')[1])
                }
              return obj;

              
            }) 
            setPhones(fakeData)
    },[])
    return (
        <div>
              <BarChart width={650} height={400} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
        </BarChart>
        </div>
    );
})
}
export default Phones