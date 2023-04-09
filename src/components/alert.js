import Alert from 'react-bootstrap/Alert';

function Announcement() {
  return (
    <>
      {[
        'secondary',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
         4K Resolution is now available on Premium+ Go Subs Now
        </Alert>
      ))}
    </>
  );
}

export default Announcement;