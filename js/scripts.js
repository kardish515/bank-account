function BankAccount(name, initialDeposit){
  this.name = name;
  this.balance = initialDeposit;
}

BankAccount.prototype.processDeposit = function(number){
  this.balance += number;
}

BankAccount.prototype.processWithdrawal = function(number){
  this.balance -= number;
}


$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var name = $("#user-name").val();
    var initialDeposit = parseInt($("#initial-deposit").val());
    var newBankAccount = new BankAccount(name, initialDeposit);
    $(".output").append("$" + newBankAccount.balance);
    $(".output").show();
    $(".output-header").show();

    $("#form-deposit").submit(function(event){
      event.preventDefault();
      var depositAmount = parseInt($("#deposit-amount").val());
      newBankAccount.processDeposit(depositAmount);
      $(".output").empty().append("$" + newBankAccount.balance);
    });
    $("#form-withdrawal").submit(function(event){
      event.preventDefault();
      var withdrawalAmount = parseInt($("#withdrawal-amount").val());
      newBankAccount.processWithdrawal(withdrawalAmount);
      $(".output").empty().append("$" + newBankAccount.balance);
    });
  });
});
