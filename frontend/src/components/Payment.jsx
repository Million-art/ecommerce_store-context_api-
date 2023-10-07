 
const Payment = () => {
  return (
    <div>
        <h1>Payment</h1>
        <form method="POST" action="https://api.chapa.co/v1/hosted/pay" >
            <input type="hidden" name="public_key" value="YOUR_PUBLIC_API_KEY" />
            <input type="hidden" name="tx_ref" value="negade-tx-12345678sss9" />
            <input type="hidden" name="amount" value="100" />
            <input type="hidden" name="currency" value="ETB" />
            <input type="hidden" name="email" value="israel@negade.et" />
            <input type="hidden" name="first_name" value="Israel" />
            <input type="hidden" name="last_name" value="Goytom" />
            <input type="hidden" name="title" value="Let us do this" />
            <input type="hidden" name="description" value="Paying with Confidence with cha" />
            <input type="hidden" name="logo" value="https://chapa.link/asset/images/chapa_swirl.svg" />
            <input type="hidden" name="callback_url" value="https://example.com/callbackurl" />
            <input type="hidden" name="return_url" value="https://example.com/returnurl" />
            <input type="hidden" name="meta[title]" value="test" />
            <button type="submit">Pay Now</button>
        </form>
    </div>
  )
}

export default Payment