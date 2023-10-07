const Payment = ({ fname, lname, email, amount, text_ref, public_key }) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
  
      fetch("https://api.chapa.co/v1/hosted/pay", {
        method: "POST",
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result); // Check the response from Chapa API
          // Perform any necessary actions based on the response
        })
        .catch((error) => {
          console.error(error);
          // Handle any error that occurred during the payment process
        });
    };
  
    return (
      <div>
        <h1>Payment</h1>
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="public_key" value={public_key} />
          <input type="hidden" name="tx_ref" value={text_ref} />
          <input type="hidden" name="amount" value={amount * 100} />
          <input type="hidden" name="currency" value="ETB" />
          <input type="hidden" name="email" value={email} />
          <input type="hidden" name="first_name" value={fname} />
          <input type="hidden" name="last_name" value={lname} />
          <input type="hidden" name="title" value="Let us do this" />
          <input
            type="hidden"
            name="description"
            value="Paying with Confidence with Chapa"
          />
          <input
            type="hidden"
            name="logo"
            value="https://chapa.link/asset/images/chapa_swirl.svg"
          />
          <input
            type="hidden"
            name="callback_url"
            value="https://example.com/callbackurl"
          />
          <input
            type="hidden"
            name="return_url"
            value="https://example.com/returnurl"
          />
          <input type="hidden" name="meta[title]" value="test" />
          <button type="submit">Pay Now</button>
        </form>
      </div>
    );
  };
  
  export default Payment;