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
    $(".output-header").show();
    $(".output").show();
    $(".output").addClass("positive-balance");
    $(".output").text("$" + newBankAccount.balance);

    $("#form-deposit").submit(function(event){
      event.preventDefault();
      var depositAmount = parseInt($("#deposit-amount").val());
      newBankAccount.processDeposit(depositAmount);
      if (newBankAccount.balance >= 0) {
        $(".output").removeClass("negative-balance");
        $(".output").addClass("positive-balance");
      } else if (newBankAccount.balance < 0) {
        $(".output").removeClass("positive-balance");
        $(".output").addClass("negative-balance");
      }
      $(".output").text("$" + newBankAccount.balance);
    });

    $("#form-withdrawal").submit(function(event){
      event.preventDefault();
      var withdrawalAmount = parseInt($("#withdrawal-amount").val());
      newBankAccount.processWithdrawal(withdrawalAmount);
      if (newBankAccount.balance >= 0) {
        $(".output").removeClass("negative-balance");
        $(".output").addClass("positive-balance");
      } else if (newBankAccount.balance < 0) {
        $(".output").removeClass("positive-balance");
        $(".output").addClass("negative-balance");
      }
      $(".output").text("$" + newBankAccount.balance);
    });
  });
});
