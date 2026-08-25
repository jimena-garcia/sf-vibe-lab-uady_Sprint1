import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

const columns = [
    { label: 'Account Name', fieldName: 'Name' },
    { label: 'Industry', fieldName: 'Industry' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' }
];

export default class AccountExplorer extends LightningElement {
    columns = columns;
    accounts = [];
    searchTerm = '';
    error;
    isLoading = true;

    @wire(getAccounts)
    wiredAccounts({ data, error }) {
        this.isLoading = false;

        if (data) {
            this.accounts = data;
            this.error = undefined;
        } else if (error) {
            this.accounts = [];
            this.error = error;
        }
    }

    handleSearch(event) {
        this.searchTerm = event.target.value;
    }

    get filteredAccounts() {
        const searchTerm = this.searchTerm.trim().toLowerCase();

        if (!searchTerm) {
            return this.accounts;
        }

        return this.accounts.filter((account) =>
            account.Name?.toLowerCase().includes(searchTerm)
        );
    }

    get hasAccounts() {
        return this.filteredAccounts.length > 0;
    }

    get hasError() {
        return Boolean(this.error);
    }
}