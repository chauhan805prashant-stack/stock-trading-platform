import React from "react";

function footer() {
  return (
    <footer style={{backgroundColor:"rgb(250,250,250)"}}>
    <div className="container border-top mt-5">
      <div className="row mt-5">
        <div className="col">
          <img src="images/logo.svg" style={{ width: "50%" }} />
          <p>&copy;2010-2026,Not Zerodha Broking Ltd.All Rights Reserved.</p>
        </div>
        <div className="col footer-links">
          <p>Company</p>
          <a>About</a>
          <br />
          <a >Product</a>
          <br />
          <a>Pricing</a>
          <br />
          <a>Referal programme</a>
          <br />
          <a>Carrer</a>
          <br />
          <a>Zerodha.tech</a>
          <br />
          <a>Press and media</a>
          <br />
          <a>zerod care(csr)</a>
        </div>
        <div className="col footer-links">
          <p>Support</p>
          <a>Contact</a>
          <br />
          <a>Support portal</a>
          <br />
          <a>Z connect blog</a>
          <br />
          <a>List of charges</a>
          <br />
          <a>Download & resources</a>
        </div>
        <div className="col footer-links">
          <p>Account</p>
          <a>open an account</a>
          <br />
          <a>fund transfer</a>
          <br />
          <a>60 days challenge </a>
        </div>
      </div>
      <div className="mt-5 text muted" style={{fontsize: "14px"}}>
        <p>
          Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
          INZ000031633 CDSL: Depository services through Zerodha Securities Pvt.
          Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through
          Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.:
          INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th
          Cross, Dollars Colony, J.P Nagar 4th Phase, Bengaluru – 560078,
          Karnataka, India. For any complaints pertaining to securities broking
          please write to complaints@zerodha.com
        </p>
        .
        <p>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances.
        </p>
        <p>
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>
        <p>
          “Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors.”
        </p>
      </div>
    </div>
    </footer>
  );
}

export default footer;
