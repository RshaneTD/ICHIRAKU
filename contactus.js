const contactBtnEl = document.getElementById("contactUs")
const bodyEl = document.querySelector('body')

 
contactBtn()
function contactBtn (){
    let repetition=false

    contactBtnEl.addEventListener("click", ()=>{
        if(repetition==true){

                bodyEl.removeChild(summit)
        }

        let contact= document.createElement('section')
        contact.innerHTML=`
            <div class="form-container">
                <div class="form-element">
                    <p class="email-address">ICHIRAKU@ramengmail.com</p>
                    <p class="tel">+250 55555555</p>
                    <div class="email-info">
                        <label for="email">email</label>
                        <input type="email" >
                    </div>
                        <textarea class="text-area" name="" id="" cols="30" rows="10" placeholder="Click on summit to send or to cancelrepetitionnd go back"> 
                        </textarea>
                    <button class="summit" id="summit" type="submit">submit/cancel</button>
                </div>
       
            </div>
        `
        bodyEl.appendChild(contact)
       repetition=true
        const summit = document.getElementById("summit")
        
        summit.addEventListener("click", ()=>{
            bodyEl.removeChild(contact)
            
               repetition=false
        })
    
    })

}