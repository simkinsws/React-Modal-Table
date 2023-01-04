import Modal from './Modal';
import React ,{useState} from 'react'
import './ContainerFlights.css';

const statuses = ['flight', 'flight_takeoff', 'flight_landing'];
const index = [0, 1, 2];
const flights = [{
    id: 0,
    boarding: 'LHR',
    status: statuses[index[Math.floor(Math.random() * 3)]],
    flightNumber: 'EK727',
    arrival: 'DXB',
    departureTime: '07:05',
    arrivalTime: '21:15',
    duration: '14hr 10min',
    airportCode: 1
  }, {
    id: 1,
    boarding: 'LAX',
    status: statuses[index[Math.floor(Math.random() * 3)]],
    flightNumber: 'BA797',
    arrival: 'LHR',
    departureTime: '14:05',
    arrivalTime: '07:10',
    duration: '17hr 5min',
    airportCode: 0
  }, {
    id: 2,
    boarding: 'BKK',
    status: statuses[index[Math.floor(Math.random() * 3)]],
    flightNumber: 'EK992',
    arrival: 'DXB',
    departureTime: '18:00',
    arrivalTime: '00:25',
    duration: '6hr 25min',
    airportCode: 1
  },{
    id: 3,
    boarding: 'DXB',
    status: statuses[index[Math.floor(Math.random() * 3)]],
    flightNumber: 'EZY722',
    arrival: 'LAX',
    departureTime: '21:22',
    arrivalTime: '11:32',
    duration: '14hr 10min',
    airportCode: 2
  }, {
    id: 4,
    boarding: 'LAX',
    status: statuses[index[Math.floor(Math.random() * 3)]],
    flightNumber: 'BA452',
    arrival: 'BKK',
    departureTime: '12:05',
    arrivalTime: '22:22',
    duration: '10hr 17min',
    airportCode: 3
  }, {
    id: 5,
    boarding: 'BKK',
    status: statuses[index[Math.floor(Math.random() * 3)]],
    flightNumber: 'TOM774',
    arrival: 'LHR',
    departureTime: '22:35',
    arrivalTime: '12:55',
    duration: '14hr 20min',
    airportCode: 0
  }, {
    id: 6,
    boarding: 'LAX',
    status: statuses[index[Math.floor(Math.random() * 3)]],
    flightNumber: 'TOM879',
    arrival: 'LHR',
    departureTime: '14:05',
    arrivalTime: '07:10',
    duration: '17hr 5min',
    airportCode: 0
  }, {
    id: 7,
    boarding: 'BKK',
    status: statuses[index[Math.floor(Math.random() * 3)]],
    flightNumber: 'EK822',
    arrival: 'DXB',
    departureTime: '18:00',
    arrivalTime: '00:25',
    duration: '6hr 25min',
    airportCode: 1
  },{
    id: 8,
    boarding: 'DXB',
    status: statuses[index[Math.floor(Math.random() * 3)]],
    flightNumber: 'EZY900',
    arrival: 'LAX',
    departureTime: '21:22',
    arrivalTime: '11:32',
    duration: '14hr 10min',
    airportCode: 2
  }, {
    id: 9,
    boarding: 'LAX',
    status: statuses[index[Math.floor(Math.random() * 3)]],
    flightNumber: 'BA907',
    arrival: 'BKK',
    departureTime: '12:05',
    arrivalTime: '22:22',
    duration: '10hr 17min',
    airportCode: 3
  }, {
    id: 10,
    boarding: 'BKK',
    status: statuses[index[Math.floor(Math.random() * 3)]],
    flightNumber: 'TOM147',
    arrival: 'LHR',
    departureTime: '22:35',
    arrivalTime: '12:55',
    duration: '14hr 20min',
    airportCode: 0
  }, {
    id: 11,
    boarding: 'LAX',
    status: statuses[index[Math.floor(Math.random() * 3)]],
    flightNumber: 'BA107',
    arrival: 'BKK',
    departureTime: '12:05',
    arrivalTime: '22:22',
    duration: '10hr 17min',
    airportCode: 3
  }, {
    id: 12,
    boarding: 'BKK',
    status: statuses[index[Math.floor(Math.random() * 3)]],
    flightNumber: 'EZY998',
    arrival: 'LHR',
    departureTime: '22:35',
    arrivalTime: '12:55',
    duration: '14hr 20min',
    airportCode: 0
  }, {
    id: 13,
    boarding: 'DXB',
    status: statuses[index[Math.floor(Math.random() * 3)]],
    flightNumber: 'TOM772',
    arrival: 'LAX',
    departureTime: '21:22',
    arrivalTime: '11:32',
    duration: '14hr 10min',
    airportCode: 2
  }, {
    id: 14,
    boarding: 'LAX',
    status: statuses[index[Math.floor(Math.random() * 3)]],
    flightNumber: 'BA424',
    arrival: 'BKK',
    departureTime: '12:05',
    arrivalTime: '22:22',
    duration: '10hr 17min',
    airportCode: 3
  }]

  
  const ContainerFlights = () => {
    const [openModal, setOpenModal] = useState(false);
    const [activeFlight, setActiveFlight] = useState({});
    const handleCloseModal = () => {
        setOpenModal(false);
    }
    const handleOnFlightClick = (flight) => {
        console.log(flight);
        setActiveFlight(flight);
        setOpenModal(true);
    }
    return (
      <>
      {openModal && <Modal 
      boarding={activeFlight.boarding} 
      duration={activeFlight.duration} 
      arrivalTime={activeFlight.arrivalTime}
      openModal={openModal}
      handleCloseModal={handleCloseModal}></Modal>}
        <table style={{width:'100%', display: openModal ? '' : ''}} className="app_content">
          <thead>
            <tr>
                <th>Boarding</th>
                <th>Flight Status</th>
                <th>Flight Number</th>
                <th>Arrival</th>
            </tr>
          </thead>
          <tbody>
                {flights.map((flight, index) => (   
                 <tr className='tr-border' key={flight.index} onClick={() => handleOnFlightClick(flight)}>
                    <td>{flight.boarding}</td>
                    <td>{flight.status}</td>
                    <td>{flight.flightNumber}</td>
                    <td>{flight.arrival}</td>
                </tr>                
                ))}
            </tbody>
        </table>
      </>
    );
  }
  
  export default ContainerFlights;