const
  newForm = document.querySelector('#form')
, errMsg = { email_confirm : `The email addresses do not match!` }
, setError = elm =>
    {
    elm.setCustomValidity( errMsg[elm.name]);
    elm.oninput =_=>
      {
      elm.setCustomValidity(''); // clear error message
      elm.oninput = null;        // self remove setError assignation
      }
    };

newForm.onsubmit = e =>
  {
  if ( newForm.email_confirm.value !== newForm.email_address.value )
    {
    setError( newForm.email_confirm );
    newForm.reportValidity();
    return false
    }
  }
