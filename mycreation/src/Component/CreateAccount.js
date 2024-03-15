import React from 'react'

export default function CreateAccount() {
  return (
    
        <div >
            <fieldset style={{height:'1000', width:'1000'}}>
            <h1>Create New Customer Account</h1>
            <h3>Personal Information</h3>
    <hr></hr>
    <div class="field field-name-firstname required">
<label class="label" for="firstname"><span>First Name</span></label>
<div class="control">
<input type="text" id="firstname" name="firstname" value="" title="First Name" class="input-text required-entry" data-validate="{required:true}" autocomplete="off" aria-required="true"/>
</div>
</div>
<div class="field field-name-lastname required">
<label class="label" for="lastname"><span>Last Name</span></label>
<div class="control">
<input type="text" id="lastname" name="lastname" value="" title="Last Name" class="input-text required-entry" data-validate="{required:true}" autocomplete="off" aria-required="true"/>
</div>

<br></br>
<br></br>
<hr></hr>
<h3>Sign in Information</h3>
<div class="field required">
<label for="email_address" class="label"><span>Email</span></label>
<div class="control">
<input type="email" name="email" autocomplete="email" id="email_address" value="" title="Email" class="input-text" data-validate="{required:true, 'validate-email':true}" aria-required="true"/>
</div>
</div>
<div class="field password required">
<label for="password" class="label"><span>Password</span></label>
<div class="control">
<input type="password" name="password" id="password" title="Password" class="input-text" data-password-min-length="8" data-password-min-character-sets="3" data-validate="{required:true, 'validate-customer-password':true}" autocomplete="off" aria-required="true"/>
<div id="password-strength-meter-container" data-role="password-strength-meter" aria-live="polite">
<div id="password-strength-meter" class="password-strength-meter">
Password Strength:
<span id="password-strength-meter-label" data-role="password-strength-meter-label">
No Password </span>
</div>
</div>
</div>
</div>
<br></br>
<div class="field confirmation required">
<label for="password-confirmation" class="label"><span>Confirm Password</span></label>
<div class="control">
<input type="password" name="password_confirmation" title="Confirm Password" id="password-confirmation" class="input-text" data-validate="{required:true, equalTo:'#password'}" autocomplete="off" aria-required="true"/>
</div>
</div>
<br></br>
<div class="actions-toolbar">
<div class="primary">
<button type="submit" class="btn btn-primary" title="Create an Account"><span>Create an Account</span></button>
</div>
<div class="secondary">
<a class="action back" href="mycreation\src\Component\Login.js"></a>
</div>
</div>



</div>
   

    </fieldset>
    
    </div>
  )
}
