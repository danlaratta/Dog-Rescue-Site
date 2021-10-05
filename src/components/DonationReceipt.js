import React from "react";

const DonationReceipt = ({firstName, lastName, email, phone, donation, comment}) => {

  return (
    <div className="donation-receipt">
        <div className="receipt-heading">
            <i className="fas fa-check" id="check"></i>
            <h1> {`Thank You ${firstName} ${lastName}`} </h1>

            <h2>
                {`Your $${donation} donation was successful and greatly appreciated!`}{" "}
            </h2>

            <h3>
                {`A receipt has been emailed to ${email} and should arrive shortly`}{" "}
            </h3>
        </div>

        <table className="receipt">
            <tr>
                <th> <strong> Receipt </strong> </th>
            </tr>

            <tr>
                <th> <strong> First Name </strong> </th>
                <th> {firstName}  </th>
            </tr>

            <tr>
            <th> <strong> Last Name </strong> </th>
                <th> {lastName}  </th>
            </tr>

            <tr>
                <th> <strong> Email </strong> </th>
                <th> {email}  </th>
            </tr>

            <tr>
                <th> <strong> Phone Number </strong> </th>
                <th> {phone}  </th>
            </tr>

            <tr>
                <th> <strong> First Name </strong> </th>
                <th> {firstName}  </th>
            </tr>

            <tr>
                <th> <strong> Donation </strong> </th>
                <th> {donation}  </th>
            </tr>

            <tr>
                <th> <strong> Comment </strong> </th>
                <th> {comment}  </th>
            </tr>
        </table>
    </div>
  );
};

export default DonationReceipt;
