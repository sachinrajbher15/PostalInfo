import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import '../App.css'

function PostalDataDisplay() {
  const { data, error, loading } = useSelector((state) => state.postal);
  const [filter, setFilter] = useState('');

  const filteredData = data.filter((postOffice) =>
    postOffice.Name.toLowerCase().includes(filter.toLowerCase()));

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  // console.log(data[0].Pincode)

  return (
    <>
      <div className="header">
        <h3>Pincode: {data[0].Pincode}</h3>
        <p><strong>Message: </strong>Number of pincode(s) found:</p>
        <input className='filter-input' type="text" placeholder='Filter' value={filter} onChange={(e) => setFilter(e.target.value)} />
      </div>
      <div className="cards-container">
        {data.length > 0
          ?
          (filteredData.map((postOffice, index) => (
            <div key={index} className='postal-card'>
              <p><strong>Post Office:</strong> {postOffice.Name}</p>
              <p><strong>Branch Type:</strong> {postOffice.BranchType}</p>
              <p><strong>Delivery Status:</strong> {postOffice.DeliveryStatus}</p>
              <p><strong>District:</strong> {postOffice.District}</p>
              <p><strong>Division:</strong> {postOffice.Division}</p>

            </div>
          )))
          :
          (<p>No data found</p>)}
        {filteredData.length === 0 && data.length > 0 && (
          <p>Couldn’t find the postal data you’re looking for...</p>
        )}
      </div>
    </>
  )
}

export default PostalDataDisplay
