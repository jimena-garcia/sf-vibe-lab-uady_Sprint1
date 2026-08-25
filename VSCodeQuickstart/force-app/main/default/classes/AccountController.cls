public with sharing class AccountController {
  @AuraEnabled(cacheable=true)
  public static List<Account> getAccounts() {
    return [SELECT Id, Name, Industry, Phone FROM Account WITH USER_MODE ORDER BY Name];
  }
}