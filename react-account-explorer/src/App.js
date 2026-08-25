import { useState } from 'react';
import Account from './Account';
import accounts from './Account_Sample_Data.json';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const normalizedSearchTerm = searchTerm.trim().toLowerCase();
  const filteredAccounts = accounts.filter((account) =>
    account.Name.toLowerCase().includes(normalizedSearchTerm)
  );

  return (
    <main className="App">
      <section className="app-shell">
        <header className="app-header">
          <div>
            <p className="eyebrow">LOCAL DIRECTORY</p>
            <h1>React Account Explorer</h1>
            <p className="subtitle">Browse and search your account sample data.</p>
          </div>
          <div className="account-count" aria-label={`${filteredAccounts.length} accounts shown`}>
            <strong>{filteredAccounts.length}</strong>
            <span>accounts shown</span>
          </div>
        </header>

        <div className="search-panel">
          <label htmlFor="account-search">Search accounts</label>
          <div className="search-input-wrapper">
            <span className="search-icon" aria-hidden="true">⌕</span>
            <input
              id="account-search"
              type="search"
              placeholder="Search by account name"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>
        </div>

        {filteredAccounts.length > 0 ? (
          <section className="account-grid" aria-label="Account results">
            {filteredAccounts.map((account) => (
              <Account key={account.Id} account={account} />
            ))}
          </section>
        ) : (
          <section className="empty-state" role="status">
            <span className="empty-icon" aria-hidden="true">⌕</span>
            <h2>No accounts found</h2>
            <p>Try searching with a different account name.</p>
          </section>
        )}
      </section>
    </main>
  );
}

export default App;
