import { useState } from 'react';
import Row from './Row';


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dbceddaa36msh651f6d57ec7aec6p147925jsn2ca00d8dc9e5',
		'X-RapidAPI-Host': 'muslimsalat.p.rapidapi.com'
	}
};


const Prayer = () => {
    
    const [prayer, setPrayer] = useState("")
    const [query, setQuery] = useState("")
    const search = e => {
        if(e.key == 'Enter'){
            fetch(`https://muslimsalat.p.rapidapi.com/${query}.json`, options)
                .then(response => response.json())
                .then(response => {setPrayer(response); console.log(response)})
                .catch(err => console.error(err));
        }
    }
    console.log(query)
  return (
    <>
        <div className="prayer-container">
            <main className="p-1 text-uppercase p-sm-5 pt-5">
                <input type="text" className='form-control' onChange={e => setQuery(e.target.value)} onKeyPress={search}/>
                {(typeof prayer.items != 'undefined') ? (
                    <>
                    <h5 className='my-3 text-center'>prayer times searched for <span className='fw-bold'>{prayer.items[0].date_for}</span></h5>
                        <div className="title d-flex align-items-center justify-content-between flex-sm-row flex-column mb-2">
                            <span className="fw-bold fs-1">Prayer times</span><span className='bg-dark px-2 rounded'>{prayer.title ? prayer.title : prayer.query}</span>
                        </div>
                        <div className='container'>
                            <Row imgSrc="https://cdn4.iconfinder.com/data/icons/tukicon-ramadan-filled-outline/64/Tukicon_Ramadan_color_Outline_15-512.png" prayerText="Fajr" prayerTime={prayer.items[0].fajr}/>

                            <Row imgSrc="https://cdn-icons-png.flaticon.com/512/1163/1163765.png" prayerText="Shurooq" prayerTime={prayer.items[0].shurooq}/>

                            <Row imgSrc="https://i.pinimg.com/originals/21/78/07/2178072a4d6129110bcce04ac7c21c37.png" prayerText="Dhuhr" prayerTime={prayer.items[0].dhuhr}/>

                            <Row imgSrc="https://cdn-icons-png.flaticon.com/512/2320/2320074.png" prayerText="Asr" prayerTime={prayer.items[0].asr}/>

                            <Row imgSrc="https://cdn1.iconfinder.com/data/icons/ramadan-eid-al-fitr-1/256/iftar-maghrib-sunset-sun-ramadan-512.png" prayerText="Maghrib" prayerTime={prayer.items[0].maghrib}/>

                            <Row imgSrc="https://cdn-icons-png.flaticon.com/512/7187/7187336.png" prayerText="Isha" prayerTime={prayer.items[0].isha}/>
                        </div>
                    </>
                ) : (
                    <div className='d-flex justify-content-center h-100'>
                        <h1 className='fw-bold fs-2 mt-5'>No information found</h1>
                    </div>
                )}
               
            </main>
        </div>
    </>
  )
}

export default Prayer