import React from 'react';

const Card = ({ item }) => {
  const {
    violation,
    plate,
    issue_date,
    violation_time,
    state,
    fine_amount,
    interest_amount,
    issuing_agency,
    license_type,
    amount_due,
    payment_amount,
    penalty_amount,
    summons_number,
    county,
    precint,
    reduction_amount,
  } = item;
  return (
    <div
      className={`cursor-pointer mt-10 ${
        amount_due === '0' ? 'bg-green' : 'bg-brown'
      } rounded-lg p-10 text-black w-96 h-[300]`}>
      {violation && <h1>Violation: {violation}</h1>}
      {plate && <h5>Plate: {plate}</h5>}
      {issue_date && <h5>Issue Date: {issue_date}</h5>}
      {violation_time && <h5>Violation Time: {violation_time}</h5>}
      {state && <h5>State: {state}</h5>}
      {fine_amount && <h5>Fine Amount: {fine_amount}</h5>}
      {interest_amount && <h5>Interest Amount: {interest_amount}</h5>}
      {issuing_agency && <h5>Issuing Agency: {issuing_agency}</h5>}
      {license_type && <h5>License Type: {license_type}</h5>}
      {amount_due && <h5>Amount Due: {amount_due}</h5>}
      {payment_amount && <h5>Payment Amount: {payment_amount}</h5>}
      {penalty_amount && <h5>Penalty Amount: {penalty_amount}</h5>}
      {summons_number && <h5>Summons Number: {summons_number}</h5>}
      {county && <h5>County: {county}</h5>}
      {precint && <h5>Precint: {precint}</h5>}
      {reduction_amount && <h5>Reduction Amount: {reduction_amount}</h5>}
      {/* {summons_image && (
        <Image
          src={summons_image?.url}
          alt='summons image'
          width={150}
          height={150}
        />
      )} */}
    </div>
  );
};

export default Card;
