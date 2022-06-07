import './App.css';

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function reformatDate(dateStr) {
    let dArr = []
    dArr = dateStr.split("-");
    return dArr[2] + "-" + dArr[1] + "-" + dArr[0];
}

function GetInfoWeather(props) {
    return (
        <div className='flex-container'>
            {props?.item?.days.slice(0, 5).map((item, index) =>
                <div key={index} className='flex-container-child'>
                    <div className='day'>{weekday[new Date(item.datetime).getDay()]}</div>
                    <img src={`/images/${item.icon}.png`} alt="" className='icon' />
                    <div className='temp'>
                        <div className='tempmax'>Max: {item.tempmax}</div>
                        <div className='tempmin'>Min: {item.tempmin}</div>
                    </div>

                </div>)}
        </div>
    )
}

export default GetInfoWeather;