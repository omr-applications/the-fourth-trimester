# The Fourth Trimester Website

Simple static website for The Fourth Trimester mum and baby group.

## Pages

- `index.html` - homepage
- `about.html` - story and positioning
- `programme.html` - 10-session programme
- `sessions.html` - programme modules and services
- `booking.html` - booking and payment page
- `faqs.html` - frequently asked questions
- `contact.html` - contact and group enquiries

## Booking Link

The booking page is prepared for an external booking/payment provider.

Update `script.js`:

```js
const bookingConfig = {
  providerName: "Bookwhen",
  providerUrl: "https://bookwhen.com/",
  paymentNote: "Bookings for the 5 October to 14 December programme will appear here as soon as the payment link is connected.",
};
```

Recommended owner-friendly setup:

1. Create a Bookwhen event for the 10-session programme.
2. Connect PayPal or Stripe inside Bookwhen.
3. Replace `providerUrl` with the live Bookwhen booking page.
4. Replace placeholder price, date, venue, email, and Instagram details across the HTML files.

## Local Preview

Run:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```
