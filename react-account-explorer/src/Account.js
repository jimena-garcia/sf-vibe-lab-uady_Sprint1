function Account({ account }) {
  return (
    <article className="account-card">
      <div className="account-card-heading">
        <span className="account-mark" aria-hidden="true">{account.Name.charAt(0)}</span>
        <h2>{account.Name}</h2>
      </div>
      <dl className="account-details">
        <div>
          <dt>Industry</dt>
          <dd>{account.Industry}</dd>
        </div>
        <div>
          <dt>Phone</dt>
          <dd>{account.Phone}</dd>
        </div>
      </dl>
    </article>
  );
}

export default Account;