
function sendMoney(){
   var enterSenderName = document.getElementById("enterSenderName").value;
   var enterName = document.getElementById("enterName").value;
   var enterAmount = parseInt(document.getElementById("enterAmount").value);


      
      var findSenderAccount = enterSenderName + "BankBalance";
      var findUserBankAccount = enterName + "BankBalance";
      var senderAccountBalance = parseInt(document.getElementById(findSenderAccount).innerHTML);
      if (enterAmount > senderAccountBalance) {
         alert("Sender's Account has Insufficient Balance.")
      } else {
      var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
      senderAccountBalance -= enterAmount
      document.getElementById(findSenderAccount).innerText = senderAccountBalance
      document.getElementById(findUserBankAccount).innerHTML = finalAmount;

      alert(`Successful Transaction !!  
      Rs ${enterAmount} has been transfered to ${enterName}@gmail.com.`)

      // transaction history 
      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`Rs ${enterAmount} were transfered to recepient with Email-id ${enterName}@gmail.com
      from ${enterSenderName}@gmail.com on ${Date()}.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
   }
}

